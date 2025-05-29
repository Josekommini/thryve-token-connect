
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Star, Edit, Award } from 'lucide-react';

const ProfileCard = () => {
  return (
    <div className="space-y-6">
      {/* Profile Info */}
      <Card>
        <CardHeader className="text-center">
          <Avatar className="w-20 h-20 mx-auto mb-4">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <CardTitle className="text-lg">John Doe</CardTitle>
          <CardDescription>Senior Designer</CardDescription>
          <Badge className="bg-thryve-teal text-white">Freelancer</Badge>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Rating</span>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-thryve-gold fill-current" />
              <span className="ml-1 text-sm font-medium">4.9</span>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-600">Profile Completion</span>
              <span className="font-medium">85%</span>
            </div>
            <Progress value={85} className="h-2" />
          </div>
          <Button variant="outline" className="w-full" size="sm">
            <Edit className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
        </CardContent>
      </Card>

      {/* Token Balance */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Award className="h-5 w-5 text-thryve-gold mr-2" />
            Token Balance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className="text-3xl font-bold text-thryve-teal mb-2">12,450</div>
            <p className="text-sm text-gray-600 mb-4">Available Tokens</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Earned this month</span>
                <span className="font-medium text-green-600">+2,340</span>
              </div>
              <div className="flex justify-between">
                <span>Spent this month</span>
                <span className="font-medium text-red-600">-890</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button variant="outline" className="w-full justify-start" size="sm">
            Create New Project
          </Button>
          <Button variant="outline" className="w-full justify-start" size="sm">
            Find Freelancers
          </Button>
          <Button variant="outline" className="w-full justify-start" size="sm">
            View Messages
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileCard;
