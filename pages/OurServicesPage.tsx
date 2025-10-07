import React from 'react';
import { Link } from 'react-router-dom';

const services = [
    {
        title: 'End-to-End RCM',
        description: 'A complete, outsourced partnership managing every aspect of your revenue cycle for total financial clarity and peak performance.',
        icon: 'all_inclusive',
        link: '/services/end-to-end-rcm'
    },
    {
        title: 'Front-End RCM',
        description: 'We build a strong foundation by perfecting patient registration, eligibility, and authorizations to prevent denials before they happen.',
        icon: 'login',
        link: '/services/front-end-rcm'
    },
    {
        title: 'Mid-Cycle RCM',
        description: 'Our certified specialists translate clinical care into accurate, compliant claims through expert coding and documentation review.',
        icon: 'rule',
        link: '/services/mid-cycle-rcm'
    },
    {
        title: 'Back-End RCM',
        description: 'We relentlessly pursue what you\'re owed with aggressive denial management, A/R follow-up, and payment posting.',
        icon: 'price_check',
        link: '/services/back-end-rcm'
    },
    {
        title: 'Denial Management',
        description: 'Our systematic approach not only recovers revenue from denied claims but also fixes the root cause to prevent future losses.',
        icon: 'policy',
        link: '/services/denial-management'
    },
    {
        title: 'Patient Engagement',
        description: 'We create a seamless financial experience for your patients with modern tools that improve satisfaction and accelerate payments.',
        icon: 'support_agent',
        link: '/services/patient-engagement'
    }
];

const processSteps = [
    {
        icon: 'query_stats',
        title: 'Discovery & Analysis',
        description: 'We start with a deep dive into your current processes, technology, and performance data to identify key opportunities for improvement.'
    },
    {
        icon: 'settings_suggest',
        title: 'Customized Implementation',
        description: 'We tailor a unique RCM strategy and seamlessly integrate our technology with your existing systems for a smooth transition.'
    },
    {
        icon: 'monitoring',
        title: 'Proactive Management & Optimization',
        description: 'Our dedicated team manages your day-to-day RCM tasks, continuously monitoring performance and optimizing workflows for peak efficiency.'
    },
    {
        icon: 'summarize',
        title: 'Transparent Reporting & Partnership',
        description: 'You receive clear, comprehensive reports and regular strategic reviews. We operate as a true extension of your team, aligned with your goals.'
    }
];


const OurServicesPage: React.FC = () => {
  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <div className="py-20 sm:py-28 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Comprehensive RCM Services for a Healthier Practice
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              From the first patient interaction to the final payment, WaveMicron offers a full suite of modular and end-to-end services designed to maximize your revenue, reduce administrative burdens, and improve financial clarity.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Explore Our Core Services</h2>
                <p className="mt-4 text-lg text-gray-600">
                    Select a service to learn more about how we can tailor our expertise to your practice's specific needs.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                    <div key={service.title} className="bg-white p-8 rounded-xl shadow-xl border border-gray-200 flex flex-col">
                        <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-secondary/30 text-primary">
                            <span className="material-symbols-outlined text-4xl">{service.icon}</span>
                        </div>
                        <h3 className="mt-6 text-xl font-semibold text-gray-900">{service.title}</h3>
                        <p className="mt-2 text-base text-gray-600 flex-grow">{service.description}</p>
                        <div className="mt-6">
                            <Link to={service.link} className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                                Learn More
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
      
      {/* Our Approach Section */}
      <div className="py-16 sm:py-24 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Partnership Approach</h2>
                <p className="mt-4 text-lg text-gray-600">
                    We work as a transparent extension of your team, following a proven process for success.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step) => (
                    <div key={step.title} className="text-center">
                        <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white mx-auto">
                            <span className="material-symbols-outlined text-4xl">{step.icon}</span>
                        </div>
                        <h3 className="mt-5 text-lg font-semibold text-gray-900">{step.title}</h3>
                        <p className="mt-2 text-base text-gray-600">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900 max-w-2xl mx-auto">Ready to Elevate Your Revenue Cycle?</h2>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">Let's build a healthier financial future for your practice. Contact us today for a free, no-obligation consultation to discuss your unique challenges and goals.</p>
              <div className="mt-8">
                  <Link to="/contact" className="bg-primary text-white font-bold text-base px-8 py-3 rounded-lg hover:bg-primary/90 transition-transform transform hover:scale-105">
                      Get a Free Consultation
                  </Link>
              </div>
          </div>
      </div>
    </div>
  );
};

export default OurServicesPage;