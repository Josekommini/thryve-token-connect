
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-thryve-darkblue text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Thryve<span className="text-thryve-teal">.</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Empowering businesses with professional services and Web3 innovation to help them thrive in today's competitive landscape.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-thryve-blue hover:bg-thryve-teal transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-thryve-blue hover:bg-thryve-teal transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-thryve-blue hover:bg-thryve-teal transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-thryve-blue hover:bg-thryve-teal transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-thryve-teal transition-colors">Brand Kit Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-thryve-teal transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-thryve-teal transition-colors">App & Website Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-thryve-teal transition-colors">Sales Strategy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-thryve-teal transition-colors">View All Services</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-thryve-teal transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-thryve-teal transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-thryve-teal transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-thryve-teal transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-thryve-teal transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-thryve-blue border border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-thryve-teal flex-grow text-white"
              />
              <button 
                type="submit" 
                className="bg-thryve-teal px-4 py-2 rounded-r-md hover:bg-thryve-teal/90 transition-colors"
              >
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Thryve. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-thryve-teal text-sm transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-thryve-teal text-sm transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-thryve-teal text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
