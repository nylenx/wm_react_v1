import React from 'react';
import { Link } from 'react-router-dom';
import { specializations } from '../data/specializations';

const benefits = [
    {
        icon: 'verified',
        title: 'Certified Coder Expertise',
        description: 'Our coders hold specialty-specific certifications, ensuring your claims are coded with the highest degree of accuracy and compliance.',
    },
    {
        icon: 'rule_settings',
        title: 'Payer Nuance Navigation',
        description: 'We understand the unique rules and documentation requirements of different payers for your specialty, reducing denials and delays.',
    },
    {
        icon: 'assured_workload',
        title: 'Regulatory Compliance',
        description: 'We stay ahead of changing regulations and coding guidelines specific to your field, protecting your practice from compliance risks.',
    },
];


const IndustrySpecializationPage: React.FC = () => {
  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <div className="py-20 sm:py-28 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Specialized Expertise for Your Unique Practice
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Medical billing isn't one-size-fits-all. We provide tailored Revenue Cycle Management solutions built on deep industry knowledge to meet the specific challenges of your specialty.
            </p>
          </div>
        </div>
      </div>

      {/* Specializations Grid */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Industries We Serve</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our teams are structured by specialty, providing you with dedicated experts who speak your language.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializations.map((spec) => (
              <div key={spec.name} className="bg-white p-8 rounded-xl shadow-xl border border-gray-200 text-center flex flex-col items-center">
                <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-secondary/30 text-primary">
                    <span className="material-symbols-outlined text-4xl">{spec.icon}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{spec.name}</h3>
                <p className="mt-2 text-base text-gray-600 flex-grow">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why it Matters Section */}
      <div className="py-16 sm:py-24 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">The Power of a Specialized Partner</h2>
            <p className="mt-4 text-lg text-gray-600">
              Choosing an RCM partner with expertise in your field directly impacts your bottom line.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-secondary/30 text-primary">
                  <span className="material-symbols-outlined text-3xl">{benefit.icon}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{benefit.title}</h3>
                <p className="mt-1 text-base text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900 max-w-2xl mx-auto">Don't See Your Specialty?</h2>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">Our expertise is always growing. Contact us to discuss the unique needs of your practice and learn how our tailored RCM solutions can help you thrive.</p>
              <div className="mt-8">
                  <Link to="/contact" className="bg-primary text-white font-bold text-base px-8 py-3 rounded-lg hover:bg-primary/90 transition-transform transform hover:scale-105">
                      Discuss Your Needs
                  </Link>
              </div>
          </div>
      </div>
    </div>
  );
};

export default IndustrySpecializationPage;