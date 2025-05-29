
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { MoreHorizontal, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RecentProjects = () => {
  const projects = [
    {
      id: 1,
      name: "E-commerce Website Redesign",
      client: "TechCorp Inc.",
      status: "In Progress",
      progress: 75,
      dueDate: "2024-06-15",
      tokens: 2500
    },
    {
      id: 2,
      name: "Mobile App Development",
      client: "StartupXYZ",
      status: "Review",
      progress: 90,
      dueDate: "2024-06-20",
      tokens: 3200
    },
    {
      id: 3,
      name: "Brand Identity Package",
      client: "Creative Agency",
      status: "Planning",
      progress: 25,
      dueDate: "2024-07-01",
      tokens: 1800
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress': return 'bg-thryve-teal text-white';
      case 'Review': return 'bg-thryve-gold text-white';
      case 'Planning': return 'bg-gray-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Recent Projects</CardTitle>
            <CardDescription>Your active and recent project work</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            View All <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-thryve-blue">{project.name}</h4>
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-2">{project.client}</p>
                <div className="flex items-center justify-between">
                  <div className="flex-1 mr-4">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-thryve-teal">{project.tokens} tokens</p>
                    <p className="text-xs text-gray-500">Due {project.dueDate}</p>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="ml-2">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentProjects;
