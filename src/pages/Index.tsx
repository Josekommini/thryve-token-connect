
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import TokenSystem from '../components/TokenSystem';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Handle URL hash navigation on page load
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <div id="token-system">
          <TokenSystem />
        </div>
        <div id="contact">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
