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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';
import type { Database } from '@/integrations/supabase/types';

const formSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100, 'Title must be less than 100 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  budget_min: z.number().min(1, 'Minimum budget must be greater than 0').optional(),
  budget_max: z.number().min(1, 'Maximum budget must be greater than 0').optional(),
  deadline: z.string().optional(),
  required_skills: z.string().optional(),
  experience_level: z.enum(['beginner', 'intermediate', 'advanced', 'expert']),
});

interface CreateProjectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onProjectCreated: () => void;
}

const CreateProjectDialog = ({ open, onOpenChange, onProjectCreated }: CreateProjectDialogProps) => {
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      experience_level: 'intermediate',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!user?.id) return;

    setIsSubmitting(true);
    console.log('Creating project with values:', values);

    try {
      const projectData: Database['public']['Tables']['projects']['Insert'] = {
        client_id: user.id,
        title: values.title,
        description: values.description,
        budget_min: values.budget_min ? Math.round(values.budget_min * 100) : null,
        budget_max: values.budget_max ? Math.round(values.budget_max * 100) : null,
        deadline: values.deadline || null,
        required_skills: values.required_skills 
          ? values.required_skills.split(',').map(skill => skill.trim()).filter(Boolean)
          : [],
        experience_level: values.experience_level,
        status: 'open' as Database['public']['Enums']['project_status'],
      };

      const { error } = await supabase
        .from('projects')
        .insert(projectData);

      if (error) {
        console.error('Error creating project:', error);
        toast.error('Failed to create project');
        return;
      }

      form.reset();
      onProjectCreated();
    } catch (error) {
      console.error('Error creating project:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Create New Project</DialogTitle>
          <DialogDescription>
            Post a new project to find talented freelancers for your needs.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter project title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe your project requirements, goals, and expectations..."
                      className="min-h-[100px]"
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
                name="budget_min"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Minimum Budget ($)</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        placeholder="1000"
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
                name="budget_max"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Maximum Budget ($)</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        placeholder="5000"
                        {...field}
                        onChange={(e) => field.onChange(e.target.value ? parseFloat(e.target.value) : undefined)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="deadline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Deadline (Optional)</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="experience_level"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Experience Level</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                        <SelectItem value="expert">Expert</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="required_skills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Required Skills (Optional)</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="JavaScript, React, Node.js (comma-separated)"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
                {isSubmitting ? 'Creating...' : 'Create Project'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProjectDialog;
