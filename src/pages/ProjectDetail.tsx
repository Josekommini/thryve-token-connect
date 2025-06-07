
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import ProtectedRoute from '@/components/ProtectedRoute';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CalendarDays, DollarSign, Clock, Users, ArrowLeft } from 'lucide-react';
import CreateProposalDialog from '@/components/proposals/CreateProposalDialog';
import ProposalsList from '@/components/proposals/ProposalsList';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const [isProposalDialogOpen, setIsProposalDialogOpen] = useState(false);

  const { data: project, isLoading, refetch } = useQuery({
    queryKey: ['project', id],
    queryFn: async () => {
      if (!id) throw new Error('No project ID provided');
      
      const { data, error } = await supabase
        .from('projects')
        .select(`
          *,
          profiles:client_id (
            first_name,
            last_name,
            email,
            bio,
            avatar_url
          )
        `)
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching project:', error);
        throw error;
      }
      return data;
    },
    enabled: !!id,
  });

  const { data: userProfile } = useQuery({
    queryKey: ['userProfile', user?.id],
    queryFn: async () => {
      if (!user?.id) return null;
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!user?.id,
  });

  const { data: existingProposal } = useQuery({
    queryKey: ['existing-proposal', id, user?.id],
    queryFn: async () => {
      if (!id || !user?.id) return null;
      
      const { data, error } = await supabase
        .from('proposals')
        .select('*')
        .eq('project_id', id)
        .eq('freelancer_id', user.id)
        .maybeSingle();

      if (error) throw error;
      return data;
    },
    enabled: !!id && !!user?.id,
  });

  const formatBudget = (min: number | null, max: number | null) => {
    if (!min && !max) return 'Budget not specified';
    if (min && max) return `$${(min / 100).toLocaleString()} - $${(max / 100).toLocaleString()}`;
    if (min) return `From $${(min / 100).toLocaleString()}`;
    if (max) return `Up to $${(max / 100).toLocaleString()}`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-green-100 text-green-800';
      case 'in_progress': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const canSubmitProposal = () => {
    return userProfile?.user_type === 'freelancer' && 
           project?.status === 'open' && 
           project?.client_id !== user?.id &&
           !existingProposal;
  };

  const handleProposalSubmitted = () => {
    refetch();
    setIsProposalDialogOpen(false);
  };

  if (isLoading) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-background">
          <Navbar />
          <div className="container-custom py-8">
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-thryve-teal"></div>
            </div>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  if (!project) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-background">
          <Navbar />
          <div className="container-custom py-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Project not found</h1>
              <Button asChild>
                <Link to="/projects">Back to Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container-custom py-8">
          <div className="mb-6">
            <Button variant="outline" asChild className="mb-4">
              <Link to="/projects">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Projects
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-thryve-blue mb-2">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-4 mb-4">
                        <Badge className={getStatusColor(project.status)}>
                          {project.status.replace('_', ' ')}
                        </Badge>
                        <span className="text-sm text-gray-600">
                          Posted {new Date(project.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{formatBudget(project.budget_min, project.budget_max)}</span>
                    </div>
                    {project.deadline && (
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">
                          Due: {new Date(project.deadline).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">
                        {project.experience_level} level
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">
                        {new Date(project.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Project Description</h3>
                    <p className="text-gray-700 whitespace-pre-wrap">{project.description}</p>
                  </div>

                  {project.required_skills && project.required_skills.length > 0 && (
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold mb-3">Required Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.required_skills.map((skill, index) => (
                          <Badge key={index} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {canSubmitProposal() && (
                    <div className="mt-6 pt-6 border-t">
                      <Button 
                        onClick={() => setIsProposalDialogOpen(true)}
                        className="bg-thryve-teal hover:bg-thryve-teal/90"
                      >
                        Submit Proposal
                      </Button>
                    </div>
                  )}

                  {existingProposal && (
                    <div className="mt-6 pt-6 border-t">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-blue-800 font-medium">
                          You have already submitted a proposal for this project.
                        </p>
                        <p className="text-blue-600 text-sm mt-1">
                          Status: {existingProposal.status}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Proposals Section - Only visible to project owner */}
              {project.client_id === user?.id && (
                <ProposalsList projectId={project.id} />
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Client Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium">
                        {project.profiles?.first_name} {project.profiles?.last_name}
                      </h4>
                      <p className="text-sm text-gray-600">{project.profiles?.email}</p>
                    </div>
                    {project.profiles?.bio && (
                      <div>
                        <h5 className="font-medium text-sm mb-1">About</h5>
                        <p className="text-sm text-gray-600">{project.profiles.bio}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        <CreateProposalDialog 
          open={isProposalDialogOpen}
          onOpenChange={setIsProposalDialogOpen}
          projectId={project.id}
          onProposalSubmitted={handleProposalSubmitted}
        />
      </div>
    </ProtectedRoute>
  );
};

export default ProjectDetail;
