
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
    <div id="hero" className="relative overflow-hidden min-h-screen bg-gradient-to-br from-background via-azuki-dark to-azuki-darker">
      {/* Azuki-inspired abstract elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[15%] left-[10%] w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-accent opacity-15 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-[40%] right-[30%] w-64 h-64 bg-primary opacity-8 blur-3xl animate-glow"></div>
        
        {/* Abstract geometric shapes */}
        <div className="absolute top-[25%] left-[20%] w-4 h-4 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-[60%] left-[15%] w-3 h-3 bg-accent rounded-full animate-bounce"></div>
        <div className="absolute top-[35%] right-[25%] w-2 h-2 bg-primary/60 rounded-full animate-ping"></div>
        <div className="absolute bottom-[40%] right-[40%] w-6 h-6 bg-accent/40 rotate-45 animate-spin" style={{animationDuration: '8s'}}></div>
      </div>

      <div className="container-custom relative min-h-screen flex items-center py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div className="flex flex-col justify-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="text-foreground">Empowering Your</span>
              <br />
              <span className="text-foreground">Business To</span>
              <br />
              <span className="gradient-text neon-text animate-pulse-neon">Thryve</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              A cutting-edge professional service platform bridging traditional business solutions with innovative digital rewards. Experience the future of freelance collaboration.
            </p>
            <div className="flex flex-wrap gap-6">
              <Button 
                size="lg" 
                className="btn-primary text-lg px-10 py-4"
                onClick={handleExploreServices}
              >
                Explore Services
              </Button>
              <Button 
                size="lg" 
                className="btn-secondary text-lg px-10 py-4"
                onClick={handleLearnMore}
              >
                Learn More <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
            <div className="mt-16">
              <p className="text-muted-foreground text-sm mb-4 uppercase tracking-wide">Trusted by innovative companies</p>
              <div className="flex flex-wrap items-center gap-12">
                <div className="text-foreground/40 font-bold text-lg tracking-wide hover:text-primary transition-colors cursor-pointer">DENTSU</div>
                <div className="text-foreground/40 font-bold text-lg tracking-wide hover:text-primary transition-colors cursor-pointer">QZILLA</div>
                <div className="text-foreground/40 font-bold text-lg tracking-wide hover:text-primary transition-colors cursor-pointer">INFOS</div>
                <div className="text-foreground/40 font-bold text-lg tracking-wide hover:text-primary transition-colors cursor-pointer">MAGICA</div>
              </div>
            </div>
          </div>

          {/* Azuki-inspired Hero Visual */}
          <div className="hidden lg:flex items-center justify-center relative animate-fade-in">
            <div className="w-full h-[600px] relative">
              {/* Central orb with neon effect */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-primary to-accent rounded-full animate-glow opacity-80"></div>
              
              {/* Orbital rings */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-primary/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-accent/30 rounded-full animate-spin" style={{animationDuration: '-15s'}}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-primary/10 rounded-full animate-spin" style={{animationDuration: '25s'}}></div>
              
              {/* Floating elements */}
              <div className="absolute top-[15%] right-[20%] w-8 h-8 bg-primary rounded-lg animate-float opacity-70 rotate-45"></div>
              <div className="absolute bottom-[25%] left-[15%] w-6 h-6 bg-accent rounded-full animate-bounce opacity-80"></div>
              <div className="absolute top-[35%] left-[10%] w-4 h-12 bg-primary/60 rounded-full animate-pulse"></div>
              <div className="absolute bottom-[15%] right-[25%] w-10 h-4 bg-accent/40 rounded-full animate-ping"></div>
              <div className="absolute top-[60%] right-[15%] w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              
              {/* Abstract geometric shapes */}
              <div className="absolute top-[25%] right-[35%] w-16 h-16 border-2 border-primary/30 rotate-45 animate-spin" style={{animationDuration: '8s'}}></div>
              <div className="absolute bottom-[35%] left-[30%] w-12 h-12 border border-accent/40 rounded-lg animate-float"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract bottom divider */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-card/20 to-transparent"></div>
    </div>
  );
};

export default HeroSection;
