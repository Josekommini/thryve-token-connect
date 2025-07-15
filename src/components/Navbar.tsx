
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, signOut, loading } = useAuth();
  const isDashboard = location.pathname === '/dashboard';
  const isProjectsPage = location.pathname.startsWith('/projects');

  const handleNavLinkClick = (sectionId: string) => {
    setIsOpen(false);
    
    if (isDashboard || isProjectsPage) {
      // If on dashboard or projects, navigate to home first then scroll
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLoginClick = () => {
    navigate('/auth');
  };

  const handleLogoutClick = async () => {
    const { error } = await signOut();
    if (error) {
      toast.error('Logout failed');
    } else {
      toast.success('Logged out successfully');
      navigate('/');
    }
  };

  const handleDashboardClick = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/auth');
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-2xl">
      <div className="container-custom flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link 
            to="/"
            className="flex items-center group"
          >
            <h1 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
              Thryve<span className="gradient-text">.</span>
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="ml-10 flex items-center space-x-10">
            {isDashboard || isProjectsPage ? (
              <>
                <Link 
                  to="/" 
                  className="text-muted-foreground hover:text-primary font-medium transition-all hover:scale-110"
                >
                  Home
                </Link>
                {user && (
                  <>
                    <Link 
                      to="/dashboard" 
                      className="text-muted-foreground hover:text-primary font-medium transition-all hover:scale-110"
                    >
                      Dashboard
                    </Link>
                    <Link 
                      to="/projects" 
                      className="text-muted-foreground hover:text-primary font-medium transition-all hover:scale-110"
                    >
                      Projects
                    </Link>
                  </>
                )}
              </>
            ) : (
              <>
                <a 
                  href="#services" 
                  className="text-muted-foreground hover:text-primary font-medium transition-all hover:scale-110 relative group"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick('services');
                  }}
                >
                  Services
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
                <a 
                  href="#portfolio" 
                  className="text-muted-foreground hover:text-primary font-medium transition-all hover:scale-110 relative group"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick('portfolio');
                  }}
                >
                  Portfolio
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
                <a 
                  href="#token-system" 
                  className="text-muted-foreground hover:text-primary font-medium transition-all hover:scale-110 relative group"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick('token-system');
                  }}
                >
                  Token System
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
                <a 
                  href="#contact" 
                  className="text-muted-foreground hover:text-primary font-medium transition-all hover:scale-110 relative group"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick('contact');
                  }}
                >
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
                {user && (
                  <>
                    <Link 
                      to="/dashboard" 
                      className="text-muted-foreground hover:text-primary font-medium transition-all hover:scale-110"
                    >
                      Dashboard
                    </Link>
                    <Link 
                      to="/projects" 
                      className="text-muted-foreground hover:text-primary font-medium transition-all hover:scale-110"
                    >
                      Projects
                    </Link>
                  </>
                )}
              </>
            )}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              {!isDashboard && !isProjectsPage && (
                <>
                  <Button 
                    variant="outline" 
                    className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary bg-transparent rounded-xl"
                    onClick={handleDashboardClick}
                  >
                    Dashboard
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary bg-transparent rounded-xl"
                    asChild
                  >
                    <Link to="/projects">Projects</Link>
                  </Button>
                </>
              )}
              <Button 
                variant="outline" 
                className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary bg-transparent rounded-xl"
                onClick={handleLogoutClick}
                disabled={loading}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button 
                variant="outline" 
                className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary bg-transparent rounded-xl"
                onClick={handleLoginClick}
              >
                Login
              </Button>
              <Button 
                className="btn-primary"
                onClick={handleDashboardClick}
              >
                Get Started
              </Button>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-3 rounded-xl text-primary hover:bg-primary/10 focus:outline-none transition-colors"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-xl border-b border-white/10">
          <div className="px-4 pt-4 pb-4 space-y-2 sm:px-6">
            {isDashboard || isProjectsPage ? (
              <>
                <Link
                  to="/"
                  className="block px-3 py-2 text-base font-medium text-thryve-blue hover:bg-gray-50 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                {user && (
                  <>
                    <Link
                      to="/dashboard"
                      className="block px-3 py-2 text-base font-medium text-thryve-blue hover:bg-gray-50 rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/projects"
                      className="block px-3 py-2 text-base font-medium text-thryve-blue hover:bg-gray-50 rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      Projects
                    </Link>
                  </>
                )}
              </>
            ) : (
              <>
                <a
                  href="#services"
                  className="block px-3 py-2 text-base font-medium text-thryve-blue hover:bg-gray-50 rounded-md"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick('services');
                  }}
                >
                  Services
                </a>
                <a
                  href="#portfolio"
                  className="block px-3 py-2 text-base font-medium text-thryve-blue hover:bg-gray-50 rounded-md"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick('portfolio');
                  }}
                >
                  Portfolio
                </a>
                <a
                  href="#token-system"
                  className="block px-3 py-2 text-base font-medium text-thryve-blue hover:bg-gray-50 rounded-md"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick('token-system');
                  }}
                >
                  Token System
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-base font-medium text-thryve-blue hover:bg-gray-50 rounded-md"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick('contact');
                  }}
                >
                  Contact
                </a>
                {user && (
                  <>
                    <Link
                      to="/dashboard"
                      className="block px-3 py-2 text-base font-medium text-thryve-blue hover:bg-gray-50 rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/projects"
                      className="block px-3 py-2 text-base font-medium text-thryve-blue hover:bg-gray-50 rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      Projects
                    </Link>
                  </>
                )}
              </>
            )}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                {user ? (
                  <div className="space-y-2 w-full">
                    {!isDashboard && !isProjectsPage && (
                      <>
                        <Button 
                          className="w-full bg-thryve-teal hover:bg-thryve-teal/90 text-white"
                          onClick={handleDashboardClick}
                        >
                          Dashboard
                        </Button>
                        <Button 
                          variant="outline"
                          className="w-full border-thryve-blue text-thryve-blue hover:bg-thryve-blue hover:text-white"
                          asChild
                        >
                          <Link to="/projects">Projects</Link>
                        </Button>
                      </>
                    )}
                    <Button 
                      variant="outline"
                      className="w-full border-thryve-blue text-thryve-blue hover:bg-thryve-blue hover:text-white"
                      onClick={handleLogoutClick}
                      disabled={loading}
                    >
                      Logout
                    </Button>
                  </div>
                ) : (
                  <Button 
                    className="w-full bg-thryve-teal hover:bg-thryve-teal/90 text-white"
                    onClick={handleDashboardClick}
                  >
                    Get Started
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
