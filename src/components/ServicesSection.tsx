
import React from 'react';
import { 
  Palette, 
  LineChart, 
  Code, 
  Briefcase, 
  ArrowUpRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: 'Brand Kit Development',
    description: 'Craft a cohesive and compelling brand identity that resonates with your target audience.',
    icon: <Palette className="w-10 h-10 text-thryve-teal" />,
    features: ['Logo & Identity Design', 'Typography & Color System', 'Brand Guidelines'],
  },
  {
    title: 'Digital Marketing',
    description: 'Increase your online presence and drive meaningful engagement with targeted campaigns.',
    icon: <LineChart className="w-10 h-10 text-thryve-purple" />,
    features: ['Social Media Strategy', 'Content Marketing', 'Analytics & Optimization'],
  },
  {
    title: 'App & Website Development',
    description: 'Build scalable, user-friendly digital platforms that deliver exceptional experiences.',
    icon: <Code className="w-10 h-10 text-thryve-gold" />,
    features: ['UI/UX Design', 'Frontend & Backend Development', 'Mobile Applications'],
  },
  {
    title: 'Sales Strategy',
    description: 'Develop effective sales frameworks and processes to drive revenue and business growth.',
    icon: <Briefcase className="w-10 h-10 text-thryve-blue" />,
    features: ['Sales Process Optimization', 'Team Training', 'CRM Implementation'],
  },
];

const ServicesSection = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-thryve-teal font-semibold mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-thryve-blue mb-6">
            Professional Services for Modern Businesses
          </h3>
          <p className="text-lg text-gray-600">
            We provide comprehensive solutions to help your business thrive in today's competitive landscape.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card group hover:border-thryve-teal hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">{service.icon}</div>
              <h4 className="text-xl font-bold text-thryve-blue mb-3">{service.title}</h4>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-thryve-teal mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                variant="ghost" 
                className="text-thryve-teal group-hover:underline p-0 h-auto flex items-center"
              >
                Learn more <ArrowUpRight size={16} className="ml-2" />
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 bg-gradient-to-r from-thryve-blue to-thryve-darkblue rounded-lg p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Ready to elevate your business?</h3>
              <p className="text-gray-200">Let's discuss how our services can help you achieve your goals.</p>
            </div>
            <Button 
              size="lg" 
              className="bg-thryve-teal hover:bg-thryve-teal/90 text-white whitespace-nowrap"
              onClick={handleContactClick}
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
