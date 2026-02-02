import React from 'react';
import { Feature } from '../types';

const features: Feature[] = [
  { id: '1', title: 'Property Sales', description: 'Expert guidance in buying and selling luxury properties with market insights.', icon: 'real_estate_agent' },
  { id: '2', title: 'Buyer Representation', description: 'Dedicated agents to help you find and negotiate your dream home.', icon: 'person_search' },
  { id: '3', title: 'Rental Management', description: 'Comprehensive management services for your investment properties.', icon: 'manage_accounts' },
  { id: '4', title: 'Investment Consulting', description: 'Strategic advice to maximize returns on real estate portfolios.', icon: 'trending_up' },
  { id: '5', title: 'Property Valuation', description: 'Accurate and detailed property appraisals based on current market data.', icon: 'assessment' },
  { id: '6', title: 'Tailored Solutions', description: 'Customized services designed to meet specific client requirements.', icon: 'handshake' },
];

const Features: React.FC = () => {
  return (
    <section className="bg-surface-light dark:bg-surface-dark rounded-3xl p-8 md:p-16">
      <div className="text-center mb-16">
        <span className="bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide border border-gray-200 dark:border-gray-600">Why Choose Us</span>
        <h2 className="font-serif text-3xl md:text-4xl mt-4 dark:text-white">
          EXPLORE OUR RANGE OF <br /> EXPERT REAL ESTATE SERVICES
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div key={feature.id} className="bg-background-light dark:bg-background-dark p-8 rounded-2xl hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-800">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <span className="material-icons-outlined text-primary text-2xl">{feature.icon}</span>
            </div>
            <h3 className="text-xl font-bold mb-3 dark:text-white">{feature.title}</h3>
            <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;