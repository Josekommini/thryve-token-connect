
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';

const formSchema = z.object({
  cover_letter: z.string().min(50, 'Cover letter must be at least 50 characters'),
  proposed_rate: z.number().min(1, 'Proposed rate must be greater than 0'),
  estimated_duration: z.string().optional(),
});

interface CreateProposalDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  projectId: string;
  onProposalSubmitted: () => void;
}

const CreateProposalDialog = ({ open, onOpenChange, projectId, onProposalSubmitted }: CreateProposalDialogProps) => {
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cover_letter: '',
      estimated_duration: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!user?.id) return;

    setIsSubmitting(true);
    console.log('Creating proposal with values:', values);

    try {
      const proposalData = {
        project_id: projectId,
        freelancer_id: user.id,
        cover_letter: values.cover_letter,
        proposed_rate: Math.round(values.proposed_rate * 100), // Convert to cents
        estimated_duration: values.estimated_duration || null,
        status: 'pending',
      };

      const { error } = await supabase
        .from('proposals')
        .insert([proposalData]);

      if (error) {
        console.error('Error creating proposal:', error);
        toast.error('Failed to submit proposal');
        return;
      }

      form.reset();
      toast.success('Proposal submitted successfully!');
      onProposalSubmitted();
    } catch (error) {
      console.error('Error creating proposal:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Submit Proposal</DialogTitle>
          <DialogDescription>
            Submit your proposal for this project. Make sure to highlight your relevant experience and skills.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="cover_letter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cover Letter</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Explain why you're the best fit for this project. Include your relevant experience, approach to the project, and what makes you unique..."
                      className="min-h-[120px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="proposed_rate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Proposed Rate ($)</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        placeholder="50"
                        {...field}
                        onChange={(e) => field.onChange(e.target.value ? parseFloat(e.target.value) : undefined)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="estimated_duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Estimated Duration</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="e.g., 2 weeks, 1 month"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => onOpenChange(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="bg-thryve-teal hover:bg-thryve-teal/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Proposal'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProposalDialog;
