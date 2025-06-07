
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import ProtectedRoute from '@/components/ProtectedRoute';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, DollarSign, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import CreateProjectDialog from '@/components/projects/CreateProjectDialog';
import { toast } from 'sonner';

const Projects = () => {
  const { user } = useAuth();
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const { data: projects, isLoading, refetch } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('projects')
        .select(`
          *,
          profiles:client_id (
            first_name,
            last_name,
            email
          ),
          proposals (
            id,
            freelancer_id,
            status
          )
        `)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching projects:', error);
        throw error;
      }
      return data;
    },
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

  const handleProjectCreated = () => {
    refetch();
    toast.success('Project created successfully!');
    setIsCreateDialogOpen(false);
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

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container-custom py-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-thryve-blue mb-2">Projects</h1>
              <p className="text-gray-600">
                {userProfile?.user_type === 'client' 
                  ? 'Manage your projects and review proposals' 
                  : 'Browse available projects and submit proposals'
                }
              </p>
            </div>
            {userProfile?.user_type === 'client' && (
              <Button 
                onClick={() => setIsCreateDialogOpen(true)}
                className="bg-thryve-teal hover:bg-thryve-teal/90"
              >
                Create Project
              </Button>
            )}
          </div>

          <div className="grid gap-6">
            {projects?.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-thryve-blue">
                        <Link 
                          to={`/projects/${project.id}`}
                          className="hover:text-thryve-teal transition-colors"
                        >
                          {project.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {project.description.length > 200 
                          ? `${project.description.substring(0, 200)}...` 
                          : project.description
                        }
                      </CardDescription>
                    </div>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status.replace('_', ' ')}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
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
                      <span className="text-sm">{project.proposals?.length || 0} proposals</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">
                        {new Date(project.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  
                  {project.required_skills && project.required_skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.required_skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      By: {project.profiles?.first_name} {project.profiles?.last_name}
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/projects/${project.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {projects?.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600 mb-4">
                {userProfile?.user_type === 'client'
                  ? "You haven't created any projects yet. Create your first project to get started!"
                  : "No projects are currently available. Check back later for new opportunities."
                }
              </p>
              {userProfile?.user_type === 'client' && (
                <Button 
                  onClick={() => setIsCreateDialogOpen(true)}
                  className="bg-thryve-teal hover:bg-thryve-teal/90"
                >
                  Create Your First Project
                </Button>
              )}
            </div>
          )}
        </main>

        <CreateProjectDialog 
          open={isCreateDialogOpen}
          onOpenChange={setIsCreateDialogOpen}
          onProjectCreated={handleProjectCreated}
        />
      </div>
    </ProtectedRoute>
  );
};

export default Projects;
