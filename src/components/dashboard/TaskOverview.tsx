
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, AlertCircle, Calendar } from 'lucide-react';

const TaskOverview = () => {
  const tasks = [
    {
      id: 1,
      title: "Complete homepage mockups",
      project: "E-commerce Website",
      priority: "High",
      dueDate: "Today",
      status: "pending",
      tokens: 150
    },
    {
      id: 2,
      title: "Client feedback review",
      project: "Mobile App Development",
      priority: "Medium",
      dueDate: "Tomorrow",
      status: "in-progress",
      tokens: 100
    },
    {
      id: 3,
      title: "Logo concept presentation",
      project: "Brand Identity Package",
      priority: "Low",
      dueDate: "Jun 20",
      status: "completed",
      tokens: 200
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'in-progress': return <Clock className="h-4 w-4 text-thryve-teal" />;
      case 'pending': return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      default: return <Calendar className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Task Overview</CardTitle>
        <CardDescription>Your upcoming and recent tasks</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3">
                {getStatusIcon(task.status)}
                <div>
                  <h4 className="font-medium text-thryve-blue">{task.title}</h4>
                  <p className="text-sm text-gray-600">{task.project}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className={getPriorityColor(task.priority)}>
                  {task.priority}
                </Badge>
                <div className="text-right">
                  <p className="text-sm font-medium text-thryve-teal">{task.tokens} tokens</p>
                  <p className="text-xs text-gray-500">{task.dueDate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskOverview;
