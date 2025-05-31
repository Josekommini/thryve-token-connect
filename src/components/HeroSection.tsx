
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const handleExploreServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    const tokenSection = document.getElementById('token-system');
    if (tokenSection) {
      tokenSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="hero" className="relative overflow-hidden bg-gradient-to-br from-thryve-darkblue to-thryve-blue">
      {/* Abstract geometric shapes for background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-thryve-purple opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-thryve-teal opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-[30%] right-[20%] w-80 h-80 bg-thryve-gold opacity-5 rounded-full blur-2xl"></div>
      </div>

      <div className="container-custom relative min-h-[90vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Text content */}
          <div className="flex flex-col justify-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Empowering Your Business To <span className="text-thryve-teal">Thryve</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-xl">
              A cutting-edge professional service platform bridging traditional business solutions with innovative digital rewards.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-thryve-teal hover:bg-thryve-teal/90 text-white"
                onClick={handleExploreServices}
              >
                Explore Services
              </Button>
              <Button 
                size="lg" 
                className="bg-thryve-purple hover:bg-thryve-purple/90 text-white"
                onClick={handleLearnMore}
              >
                Learn More <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
            <div className="mt-12">
              <p className="text-gray-300 text-sm mb-3">Trusted by innovative companies</p>
              <div className="flex flex-wrap items-center gap-8">
                <div className="text-white/60 font-semibold">DENTSU</div>
                <div className="text-white/60 font-semibold">QZILLA</div>
                <div className="text-white/60 font-semibold">INFOS</div>
                <div className="text-white/60 font-semibold">MAGICA</div>
              </div>
            </div>
          </div>

          {/* Abstract Hero Graphic */}
          <div className="hidden lg:flex items-center justify-center relative animate-fade-in">
            <div className="w-full h-96 relative">
              {/* Abstract circles and shapes to create a professional modern graphic */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-4 border-thryve-teal/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-thryve-gold/30 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-4 border-thryve-purple/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-thryve-teal to-thryve-purple rounded-full opacity-80"></div>
              <div className="absolute top-[20%] right-[20%] w-16 h-16 bg-thryve-gold rounded-lg opacity-80"></div>
              <div className="absolute bottom-[20%] left-[25%] w-12 h-12 bg-thryve-teal rounded-full opacity-70"></div>
              <div className="absolute top-[30%] left-[15%] w-20 h-20 bg-thryve-purple rounded-lg opacity-60 rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 transform">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] text-background">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.16,98.92,112.24,85.92,175.37,81.3,250.64,75.57,287.09,83.94,321.39,56.44Z" className="fill-current"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
