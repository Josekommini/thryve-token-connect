
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavLinkClick = (sectionId: string) => {
    setIsOpen(false); // Close mobile menu when clicking a link
    
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container-custom flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a 
            href="#hero" 
            className="flex items-center"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick('hero');
            }}
          >
            <h1 className="text-2xl font-bold text-thryve-blue">
              Thryve<span className="text-thryve-teal">.</span>
            </h1>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="ml-10 flex items-center space-x-8">
            <a 
              href="#services" 
              className="text-thryve-blue hover:text-thryve-teal font-medium transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick('services');
              }}
            >
              Services
            </a>
            <a 
              href="#portfolio" 
              className="text-thryve-blue hover:text-thryve-teal font-medium transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick('portfolio');
              }}
            >
              Portfolio
            </a>
            <a 
              href="#token-system" 
              className="text-thryve-blue hover:text-thryve-teal font-medium transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick('token-system');
              }}
            >
              Token System
            </a>
            <a 
              href="#contact" 
              className="text-thryve-blue hover:text-thryve-teal font-medium transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick('contact');
              }}
            >
              Contact
            </a>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-thryve-blue text-thryve-blue hover:bg-thryve-blue hover:text-white">
            Login
          </Button>
          <Button className="bg-thryve-teal hover:bg-thryve-teal/90 text-white">
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-thryve-blue focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
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
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <Button className="w-full bg-thryve-teal hover:bg-thryve-teal/90 text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
