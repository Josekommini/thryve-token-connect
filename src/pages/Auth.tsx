
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/AuthContext';

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState("client");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user, signUp, signIn } = useAuth();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    console.log("Form submitted:", values, "User type:", userType, "Is login:", isLogin);
    
    try {
      if (isLogin) {
        const { error } = await signIn(values.email, values.password);
        
        if (error) {
          console.error('Login error:', error);
          toast.error(error.message || 'Login failed');
        } else {
          toast.success('Login successful!');
          navigate('/dashboard');
        }
      } else {
        const { error } = await signUp(values.email, values.password, {
          user_type: userType
        });
        
        if (error) {
          console.error('Signup error:', error);
          toast.error(error.message || 'Registration failed');
        } else {
          toast.success('Registration successful! Please check your email to verify your account.');
        }
      }
    } catch (error: any) {
      console.error('Auth error:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    form.reset();
  };

  if (user) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-secondary/10 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            {isLogin ? "Login to your account" : "Create an account"}
          </CardTitle>
          <CardDescription className="text-center">
            Enter your email and password to {isLogin ? "login to" : "create"} your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {!isLogin && (
            <div className="space-y-2 text-center">
              <p className="text-sm font-medium">I am a...</p>
              <ToggleGroup 
                type="single" 
                value={userType} 
                onValueChange={(value) => {
                  if (value) setUserType(value);
                }}
                className="justify-center"
              >
                <ToggleGroupItem value="client" className="px-4">Client</ToggleGroupItem>
                <ToggleGroupItem value="freelancer" className="px-4">Freelancer</ToggleGroupItem>
                <ToggleGroupItem value="employee" className="px-4">Employee</ToggleGroupItem>
              </ToggleGroup>
            </div>
          )}
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="hello@thryve.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                className="w-full bg-thryve-teal hover:bg-thryve-teal/90"
                disabled={loading}
              >
                {loading ? "Loading..." : (isLogin ? "Login" : "Register")}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={toggleAuthMode}
              className="underline text-thryve-teal hover:text-thryve-teal/90"
              disabled={loading}
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Auth;
