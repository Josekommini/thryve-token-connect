
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Users, CheckCircle, Clock } from 'lucide-react';

const DashboardStats = () => {
  const stats = [
    {
      title: "Active Projects",
      value: "12",
      description: "+2 from last month",
      icon: TrendingUp,
      trend: "up"
    },
    {
      title: "Team Members",
      value: "8",
      description: "+1 new this week",
      icon: Users,
      trend: "up"
    },
    {
      title: "Completed Tasks",
      value: "347",
      description: "+23 this week",
      icon: CheckCircle,
      trend: "up"
    },
    {
      title: "Pending Reviews",
      value: "5",
      description: "-2 from yesterday",
      icon: Clock,
      trend: "down"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-thryve-teal" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-thryve-blue">{stat.value}</div>
            <p className={`text-xs ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
