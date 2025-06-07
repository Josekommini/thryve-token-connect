
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { DollarSign, Clock, User } from 'lucide-react';
import { toast } from 'sonner';

interface ProposalsListProps {
  projectId: string;
}

const ProposalsList = ({ projectId }: ProposalsListProps) => {
  const { data: proposals, isLoading, refetch } = useQuery({
    queryKey: ['proposals', projectId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('proposals')
        .select(`
          *,
          profiles:freelancer_id (
            first_name,
            last_name,
            email,
            bio,
            hourly_rate
          )
        `)
        .eq('project_id', projectId)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching proposals:', error);
        throw error;
      }
      return data;
    },
  });

  const handleAcceptProposal = async (proposalId: string) => {
    try {
      const { error } = await supabase
        .from('proposals')
        .update({ status: 'accepted' })
        .eq('id', proposalId);

      if (error) {
        console.error('Error accepting proposal:', error);
        toast.error('Failed to accept proposal');
        return;
      }

      toast.success('Proposal accepted successfully!');
      refetch();
    } catch (error) {
      console.error('Error accepting proposal:', error);
      toast.error('An unexpected error occurred');
    }
  };

  const handleRejectProposal = async (proposalId: string) => {
    try {
      const { error } = await supabase
        .from('proposals')
        .update({ status: 'rejected' })
        .eq('id', proposalId);

      if (error) {
        console.error('Error rejecting proposal:', error);
        toast.error('Failed to reject proposal');
        return;
      }

      toast.success('Proposal rejected');
      refetch();
    } catch (error) {
      console.error('Error rejecting proposal:', error);
      toast.error('An unexpected error occurred');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'accepted': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'withdrawn': return 'bg-gray-100 text-gray-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Proposals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-32">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-thryve-teal"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Proposals ({proposals?.length || 0})</CardTitle>
        <CardDescription>
          Review and manage proposals submitted for this project
        </CardDescription>
      </CardHeader>
      <CardContent>
        {proposals?.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600">No proposals submitted yet.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {proposals?.map((proposal) => (
              <div key={proposal.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-thryve-teal/10 rounded-full">
                      <User className="h-5 w-5 text-thryve-teal" />
                    </div>
                    <div>
                      <h4 className="font-medium">
                        {proposal.profiles?.first_name} {proposal.profiles?.last_name}
                      </h4>
                      <p className="text-sm text-gray-600">{proposal.profiles?.email}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(proposal.status)}>
                    {proposal.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">
                      ${(proposal.proposed_rate / 100).toLocaleString()}
                    </span>
                  </div>
                  {proposal.estimated_duration && (
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{proposal.estimated_duration}</span>
                    </div>
                  )}
                  <div className="text-sm text-gray-600">
                    Submitted {new Date(proposal.created_at).toLocaleDateString()}
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="space-y-3">
                  <h5 className="font-medium">Cover Letter</h5>
                  <p className="text-sm text-gray-700 whitespace-pre-wrap">
                    {proposal.cover_letter}
                  </p>
                </div>

                {proposal.profiles?.bio && (
                  <div className="mt-4 space-y-2">
                    <h5 className="font-medium">About the Freelancer</h5>
                    <p className="text-sm text-gray-700">{proposal.profiles.bio}</p>
                  </div>
                )}

                {proposal.status === 'pending' && (
                  <div className="flex gap-2 mt-4 pt-4 border-t">
                    <Button
                      onClick={() => handleAcceptProposal(proposal.id)}
                      className="bg-green-600 hover:bg-green-700"
                      size="sm"
                    >
                      Accept
                    </Button>
                    <Button
                      onClick={() => handleRejectProposal(proposal.id)}
                      variant="outline"
                      size="sm"
                    >
                      Reject
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProposalsList;
