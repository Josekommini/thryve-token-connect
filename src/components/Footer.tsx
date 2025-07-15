
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-background via-azuki-dark to-azuki-darker border-t border-white/5">
      <div className="container-custom pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company info */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-foreground">Thryve</span><span className="gradient-text">.</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Empowering businesses with professional services and Web3 innovation to help them thrive in today's competitive landscape.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 rounded-xl bg-card/50 backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-primary/10 transition-all">
                <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a href="#" className="p-3 rounded-xl bg-card/50 backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-primary/10 transition-all">
                <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a href="#" className="p-3 rounded-xl bg-card/50 backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-primary/10 transition-all">
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a href="#" className="p-3 rounded-xl bg-card/50 backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-primary/10 transition-all">
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-foreground">Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-all hover:translate-x-1 block">Brand Kit Development</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-all hover:translate-x-1 block">Digital Marketing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-all hover:translate-x-1 block">App & Website Development</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-all hover:translate-x-1 block">Sales Strategy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-all hover:translate-x-1 block font-semibold">View All Services</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-foreground">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-all hover:translate-x-1 block">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-all hover:translate-x-1 block">Portfolio</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-all hover:translate-x-1 block">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-all hover:translate-x-1 block">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-all hover:translate-x-1 block">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-foreground">Stay Updated</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">Subscribe to our newsletter for the latest updates and exclusive insights</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 bg-card/50 backdrop-blur-md border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder:text-muted-foreground"
              />
              <button 
                type="submit" 
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <span>Subscribe</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Thryve. All rights reserved. Built with passion for innovation.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-all hover:scale-110">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-all hover:scale-110">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-all hover:scale-110">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
