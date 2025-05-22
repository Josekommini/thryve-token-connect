
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin,
  Send
} from 'lucide-react';

const ContactForm = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact information */}
          <div>
            <h2 className="text-sm uppercase tracking-wider text-thryve-teal font-semibold mb-3">Get In Touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-thryve-blue mb-6">
              Ready to Start Your Journey?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're looking to enhance your business with our services or join our network of talented freelancers, we'd love to hear from you.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-thryve-teal/10 p-3 rounded-full mr-4">
                  <Mail className="w-6 h-6 text-thryve-teal" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-thryve-blue mb-1">Email Us</h4>
                  <p className="text-gray-600">hello@thryve.io</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-thryve-teal/10 p-3 rounded-full mr-4">
                  <Phone className="w-6 h-6 text-thryve-teal" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-thryve-blue mb-1">Call Us</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-thryve-teal/10 p-3 rounded-full mr-4">
                  <MapPin className="w-6 h-6 text-thryve-teal" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-thryve-blue mb-1">Visit Us</h4>
                  <p className="text-gray-600">
                    123 Innovation Way<br />
                    San Francisco, CA 94103
                  </p>
                </div>
              </div>
            </div>
            
            {/* Role selection */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-thryve-blue mb-4">I am a...</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-thryve-teal bg-white rounded-md p-4 cursor-pointer hover:shadow-md transition-all">
                  <h5 className="font-semibold text-thryve-blue mb-1">Potential Client</h5>
                  <p className="text-sm text-gray-600">Looking for business services</p>
                </div>
                <div className="border border-gray-200 rounded-md p-4 cursor-pointer hover:border-thryve-teal hover:shadow-md transition-all">
                  <h5 className="font-semibold text-thryve-blue mb-1">Freelancer</h5>
                  <p className="text-sm text-gray-600">Interested in joining our network</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-thryve-blue mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium text-gray-700">First Name</label>
                  <Input 
                    id="first-name" 
                    placeholder="John" 
                    className="border-gray-300 focus:border-thryve-teal focus:ring focus:ring-thryve-teal/20 focus:ring-opacity-50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium text-gray-700">Last Name</label>
                  <Input 
                    id="last-name" 
                    placeholder="Doe" 
                    className="border-gray-300 focus:border-thryve-teal focus:ring focus:ring-thryve-teal/20 focus:ring-opacity-50"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  className="border-gray-300 focus:border-thryve-teal focus:ring focus:ring-thryve-teal/20 focus:ring-opacity-50"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-gray-700">Company (Optional)</label>
                <Input 
                  id="company" 
                  placeholder="Your Company" 
                  className="border-gray-300 focus:border-thryve-teal focus:ring focus:ring-thryve-teal/20 focus:ring-opacity-50"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                <Input 
                  id="subject" 
                  placeholder="How can we help you?" 
                  className="border-gray-300 focus:border-thryve-teal focus:ring focus:ring-thryve-teal/20 focus:ring-opacity-50"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Please describe what you're looking for..." 
                  className="min-h-[120px] border-gray-300 focus:border-thryve-teal focus:ring focus:ring-thryve-teal/20 focus:ring-opacity-50"
                />
              </div>
              
              <Button type="submit" className="w-full bg-thryve-teal hover:bg-thryve-teal/90 text-white">
                Send Message <Send size={16} className="ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
