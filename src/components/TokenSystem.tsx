
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Wallet, 
  Shield, 
  Medal, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const TokenSystem = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-thryve-darkblue to-thryve-blue text-white">
      <div className="container-custom">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-thryve-teal font-semibold mb-3">Web3 Integration</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Token-Powered Ecosystem
          </h3>
          <p className="text-lg text-gray-200">
            Leveraging blockchain technology to create a transparent, efficient, and rewarding platform for clients and freelancers.
          </p>
        </div>

        {/* Token system benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="glass-effect rounded-lg p-8 backdrop-blur text-white">
            <div className="bg-thryve-teal/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Wallet className="w-8 h-8 text-thryve-teal" />
            </div>
            <h4 className="text-xl font-bold mb-4">Secure Payments</h4>
            <p className="text-gray-200 mb-6">
              Smart contract-powered escrow system ensures secure and transparent payment processing for all parties.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-thryve-teal mr-2 flex-shrink-0 mt-0.5" />
                <span>Automated escrow releases</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-thryve-teal mr-2 flex-shrink-0 mt-0.5" />
                <span>Reduced transaction fees</span>
              </li>
            </ul>
          </div>

          <div className="glass-effect rounded-lg p-8 backdrop-blur text-white">
            <div className="bg-thryve-purple/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-thryve-purple" />
            </div>
            <h4 className="text-xl font-bold mb-4">Verified Reputation</h4>
            <p className="text-gray-200 mb-6">
              On-chain reputation system provides verifiable proof of skill, experience, and reliability.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-thryve-purple mr-2 flex-shrink-0 mt-0.5" />
                <span>Tamper-proof work history</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-thryve-purple mr-2 flex-shrink-0 mt-0.5" />
                <span>Transparent client feedback</span>
              </li>
            </ul>
          </div>

          <div className="glass-effect rounded-lg p-8 backdrop-blur text-white">
            <div className="bg-thryve-gold/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Medal className="w-8 h-8 text-thryve-gold" />
            </div>
            <h4 className="text-xl font-bold mb-4">Reward Incentives</h4>
            <p className="text-gray-200 mb-6">
              Token rewards for quality work, client satisfaction, and platform contributions create a vibrant ecosystem.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-thryve-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>Performance-based bonuses</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-thryve-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>Community governance rights</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Token graphic */}
        <div className="bg-white/10 backdrop-blur rounded-lg p-8 md:p-12 border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl md:text-3xl font-bold mb-6">The Thryve Token Economy</h4>
              <p className="text-gray-200 mb-6">
                Our platform utilizes the THRYVE token to create a circular economy that rewards participation and excellence while providing utility across our ecosystem.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-1 bg-thryve-teal rounded-full mr-4"></div>
                  <span>Payments & Transactions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-1 bg-thryve-purple rounded-full mr-4"></div>
                  <span>Reputation & Credentials</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-1 bg-thryve-gold rounded-full mr-4"></div>
                  <span>Governance & Voting</span>
                </div>
              </div>
              <Button className="bg-thryve-teal hover:bg-thryve-teal/90 text-white">
                Connect Wallet <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                {/* Abstract token visualization */}
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-thryve-teal to-thryve-purple flex items-center justify-center relative">
                  <div className="absolute inset-0 border-4 border-white/20 rounded-full animate-pulse"></div>
                  <div className="w-48 h-48 rounded-full bg-thryve-darkblue/70 backdrop-blur flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl font-bold mb-2">THRYVE</div>
                      <div className="text-sm text-thryve-teal">Token</div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 -mt-6 -mr-6 w-16 h-16 bg-thryve-gold/70 rounded-full blur-sm"></div>
                <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-12 h-12 bg-thryve-purple/70 rounded-full blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenSystem;
