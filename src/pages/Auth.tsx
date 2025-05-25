
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignIn, SignUp, useAuth } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState("client");
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();

  // Redirect if already signed in
  React.useEffect(() => {
    if (isSignedIn) {
      toast.success("Successfully authenticated!");
      navigate('/');
    }
  }, [isSignedIn, navigate]);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleUserTypeChange = (value: string) => {
    if (value) {
      setUserType(value);
      console.log("User type changed to:", value);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-secondary/10 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            {isLogin ? "Sign in to your account" : "Create an account"}
          </CardTitle>
          <CardDescription className="text-center">
            Choose your account type and {isLogin ? "sign in" : "sign up"} with Google
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2 text-center">
            <p className="text-sm font-medium">I am a...</p>
            <ToggleGroup 
              type="single" 
              value={userType} 
              onValueChange={handleUserTypeChange}
              className="justify-center"
            >
              <ToggleGroupItem value="client" className="px-4">Client</ToggleGroupItem>
              <ToggleGroupItem value="freelancer" className="px-4">Freelancer</ToggleGroupItem>
              <ToggleGroupItem value="employee" className="px-4">Employee</ToggleGroupItem>
            </ToggleGroup>
          </div>
          
          <div className="space-y-4">
            {isLogin ? (
              <SignIn 
                appearance={{
                  elements: {
                    formButtonPrimary: "bg-thryve-teal hover:bg-thryve-teal/90",
                    card: "shadow-none border-0 p-0",
                    headerTitle: "hidden",
                    headerSubtitle: "hidden"
                  }
                }}
                redirectUrl="/"
              />
            ) : (
              <SignUp 
                appearance={{
                  elements: {
                    formButtonPrimary: "bg-thryve-teal hover:bg-thryve-teal/90",
                    card: "shadow-none border-0 p-0",
                    headerTitle: "hidden",
                    headerSubtitle: "hidden"
                  }
                }}
                redirectUrl="/"
              />
            )}
          </div>

          <div className="text-center text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={toggleAuthMode}
              className="underline text-thryve-teal hover:text-thryve-teal/90"
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
