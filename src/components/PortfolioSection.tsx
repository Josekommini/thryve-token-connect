
import React from 'react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'AlleyWay Brand Transformation',
    category: 'Brand Design',
    description: 'Complete rebranding for a Web3 gaming startup, including logo design, brand guidelines, and marketing materials.',
    image: 'https://placehold.co/600x400/1A2B4C/FFFFFF/png?text=AlleyWay',
  },
  {
    title: 'Red Torii Digital Experience',
    category: 'Web Development',
    description: 'Immersive web experience showcasing Japanese culture with interactive elements and stunning animations.',
    image: 'https://placehold.co/600x400/0CABA8/FFFFFF/png?text=Red+Torii',
  },
  {
    title: 'Garden Collection NFT Launch',
    category: 'Digital Marketing',
    description: 'Comprehensive marketing campaign for an NFT collection launch, resulting in a sold-out mint within 24 hours.',
    image: 'https://placehold.co/600x400/7B61FF/FFFFFF/png?text=Garden+NFTs',
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-thryve-teal font-semibold mb-3">Our Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-thryve-blue mb-6">
            Case Studies & Success Stories
          </h3>
          <p className="text-lg text-gray-600">
            Explore how we've helped businesses and entrepreneurs achieve remarkable results.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="portfolio-card group hover:-translate-y-1 transition-all duration-300" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-thryve-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-thryve-teal/80 text-white text-sm rounded-full mb-3">
                      {project.category}
                    </span>
                    <h4 className="text-white text-xl font-bold">{project.title}</h4>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-thryve-blue mb-2">{project.title}</h4>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Button 
                  variant="ghost" 
                  className="text-thryve-teal hover:text-thryve-teal/80 p-0 h-auto flex items-center"
                >
                  View Case Study
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="flex justify-center mt-12">
          <Button 
            variant="outline" 
            className="border-thryve-blue text-thryve-blue hover:bg-thryve-blue hover:text-white"
          >
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
