import React from 'react';
import { Link } from 'react-router-dom';

const expertisePillars = [
    {
        title: 'Advanced Technology Integration',
        description: 'Our platform is built to connect. We seamlessly integrate with your existing EMR, EHR, and PM systems to create a unified, efficient workflow that eliminates manual work and accelerates your revenue cycle.',
        icon: 'hub',
        link: '/expertise/technology-integration'
    },
    {
        title: 'Deep Industry Specialization',
        description: 'Medical billing isn\'t one-size-fits-all. Our teams are comprised of certified experts who specialize in your specific field, understanding the unique coding and billing challenges you face.',
        icon: 'medical_services',
        link: '/expertise/industry-specialization'
    },
    {
        title: 'Proven Client Success',
        description: 'Our expertise is best demonstrated through the success of our clients. Explore our case studies to see real-world examples of how we\'ve increased revenue and improved efficiency for practices like yours.',
        icon: 'leaderboard',
        link: '/expertise/case-studies'
    }
];

const benefits = [
    {
        icon: 'trending_up',
        title: 'Superior Financial Outcomes',
        description: 'Our expert approach leads to higher collection rates, lower denial rates, and a healthier bottom line for your practice.'
    },
    {
        icon: 'verified_user',
        title: 'Reduced Compliance Risk',
        description: 'Deep specialization and technological safeguards protect you from the financial and legal risks of non-compliance.'
    },
    {
        icon: 'lightbulb',
        title: 'Strategic, Actionable Insights',
        description: 'We go beyond billing to provide you with data-driven insights that help you make smarter business decisions.'
    }
];


const OurExpertisePage: React.FC = () => {
  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <div className="py-20 sm:py-28 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Expertise That Drives Exceptional Results
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              We combine deep industry knowledge with advanced technology and a track record of proven success to deliver RCM solutions that are not just effective, but transformative. Explore the pillars of our expertise.
            </p>
          </div>
        </div>
      </div>

      {/* Expertise Pillars Section */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">The Three Pillars of Our Expertise</h2>
                <p className="mt-4 text-lg text-gray-600">
                   Our unique value is built on the powerful combination of these three core strengths.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {expertisePillars.map((pillar) => (
                    <div key={pillar.title} className="bg-white p-8 rounded-xl shadow-xl border border-gray-200 flex flex-col">
                        <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-secondary/30 text-primary">
                            <span className="material-symbols-outlined text-4xl">{pillar.icon}</span>
                        </div>
                        <h3 className="mt-6 text-xl font-semibold text-gray-900">{pillar.title}</h3>
                        <p className="mt-2 text-base text-gray-600 flex-grow">{pillar.description}</p>
                        <div className="mt-6">
                            <Link to={pillar.link} className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                                Learn More
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
      
      {/* Why Expertise Matters Section */}
      <div className="py-16 sm:py-24 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Why Our Expertise Matters for Your Practice</h2>
                <p className="mt-4 text-lg text-gray-600">
                    Choosing a true expert partner has a direct and profound impact on your practice's success.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit) => (
                    <div key={benefit.title} className="text-center">
                        <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white mx-auto">
                            <span className="material-symbols-outlined text-4xl">{benefit.icon}</span>
                        </div>
                        <h3 className="mt-5 text-lg font-semibold text-gray-900">{benefit.title}</h3>
                        <p className="mt-2 text-base text-gray-600">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900 max-w-2xl mx-auto">Ready to Partner with an Expert?</h2>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">Discover how our unique blend of technology, specialization, and proven success can transform your practice's financial health. Schedule a free consultation with our expert team today.</p>
              <div className="mt-8">
                  <Link to="/contact" className="bg-primary text-white font-bold text-base px-8 py-3 rounded-lg hover:bg-primary/90 transition-transform transform hover:scale-105">
                      Schedule Your Free Consultation
                  </Link>
              </div>
          </div>
      </div>
    </div>
  );
};

export default OurExpertisePage;
