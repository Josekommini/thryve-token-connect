
import React from 'react';
import Navbar from '../components/Navbar';
import ProtectedRoute from '../components/ProtectedRoute';
import DashboardStats from '../components/dashboard/DashboardStats';
import RecentProjects from '../components/dashboard/RecentProjects';
import TaskOverview from '../components/dashboard/TaskOverview';
import ProfileCard from '../components/dashboard/ProfileCard';
import { useAuth } from '@/contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container-custom py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-thryve-blue mb-2">Dashboard</h1>
            <p className="text-gray-600">
              Welcome back{user?.email ? `, ${user.email}` : ''}! Here's what's happening with your projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left column - Main content */}
            <div className="lg:col-span-3 space-y-6">
              <DashboardStats />
              <RecentProjects />
              <TaskOverview />
            </div>
            
            {/* Right column - Profile sidebar */}
            <div className="lg:col-span-1">
              <ProfileCard />
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
