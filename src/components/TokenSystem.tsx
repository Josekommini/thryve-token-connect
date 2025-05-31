
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Wallet, 
  Shield, 
  Award, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const TokenSystem = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-thryve-teal font-semibold mb-3">Digital Rewards</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-thryve-blue mb-6">
            Token-Powered Ecosystem
          </h3>
          <p className="text-lg text-gray-600">
            Earn and redeem digital tokens for quality work, client satisfaction, and platform contributions in our rewarding ecosystem.
          </p>
        </div>

        {/* Token system benefits - Card layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-teal-50 to-cyan-50 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="bg-teal-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <Wallet className="w-8 h-8 text-teal-600" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-center text-gray-800">Secure Payments</h4>
              <p className="text-gray-600 mb-6 text-center">
                Digital token system ensures secure and transparent payment processing for all parties with instant transfers.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Instant payment releases</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">No transaction fees</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-center text-gray-800">Verified Reputation</h4>
              <p className="text-gray-600 mb-6 text-center">
                Digital reputation system provides verifiable proof of skill, experience, and reliability through token rewards.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Skill-based token rewards</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Client feedback tokens</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="bg-amber-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-center text-gray-800">Reward Incentives</h4>
              <p className="text-gray-600 mb-6 text-center">
                Token rewards for quality work, client satisfaction, and platform contributions create a vibrant ecosystem.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Performance-based bonuses</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Milestone achievements</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Token economy explanation */}
        <Card className="bg-gradient-to-br from-thryve-darkblue to-thryve-blue text-white border-0 shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-2xl md:text-3xl font-bold mb-6">The Thryve Token Economy</h4>
                <p className="text-gray-200 mb-6">
                  Our platform utilizes the THRYVE token to create a circular economy that rewards participation and excellence while providing utility across our ecosystem.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-12 h-1 bg-thryve-teal rounded-full mr-4"></div>
                    <span>Payments & Rewards</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-1 bg-thryve-purple rounded-full mr-4"></div>
                    <span>Reputation & Skills</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-1 bg-thryve-gold rounded-full mr-4"></div>
                    <span>Achievements & Bonuses</span>
                  </div>
                </div>
                <Button className="bg-thryve-teal hover:bg-thryve-teal/90 text-white">
                  Start Earning <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
              
              <div className="flex justify-center">
                <div className="relative">
                  {/* Token visualization */}
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
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TokenSystem;
