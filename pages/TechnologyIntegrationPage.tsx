import React from 'react';
import { Link } from 'react-router-dom';

const integrationPartners = [
    { name: 'athenahealth' },
    { name: 'eClinicalWorks' },
    { name: 'Epic' },
    { name: 'Cerner' },
    { name: 'NextGen Healthcare' },
    { name: 'Allscripts' },
    { name: 'Kareo' },
    { name: 'AdvancedMD' },
];

const benefits = [
    {
        icon: 'sync_saved',
        title: 'Eliminate Double Entry',
        description: 'Our system automatically syncs patient demographics, appointments, and insurance data, saving your staff hours of manual work.',
    },
    {
        icon: 'fact_check',
        title: 'Increase Charge Accuracy',
        description: 'Seamlessly capture charges from your EMR/EHR, ensuring all rendered services are billed correctly and reducing compliance risk.',
    },
    {
        icon: 'rocket_launch',
        title: 'Accelerate Reimbursements',
        description: 'By automating data transfer, we reduce the time from service to claim submission, leading to faster payments and improved cash flow.',
    },
    {
        icon: 'analytics',
        title: 'Enhance Data Insights',
        description: 'A unified data stream allows for powerful analytics, giving you a clearer picture of your practice’s financial performance.',
    },
];

const TechnologyIntegrationPage: React.FC = () => {
  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <div className="py-20 sm:py-28 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Seamless Integration with Your Existing Systems
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              WaveMicron is built to connect. We integrate directly with your EMR, EHR, and Practice Management software to create a unified, efficient, and powerful revenue cycle workflow.
            </p>
            <div className="mt-8">
              <Link to="/contact" className="bg-primary text-white font-bold text-base px-6 py-3 rounded-lg hover:bg-primary/90 transition-transform transform hover:scale-105">
                Request a Compatibility Check
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Unlock a More Efficient Workflow</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our integration capabilities are designed to break down data silos and automate key processes, delivering tangible benefits to your practice.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-secondary/30 text-primary">
                  <span className="material-symbols-outlined text-3xl">{benefit.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="mt-1 text-base text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

       {/* How It Works Section */}
       <div className="py-16 sm:py-24 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Integration Process</h2>
                <p className="mt-4 text-lg text-gray-600">
                We make connecting your systems simple, secure, and straightforward.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                 <div className="flex flex-col items-center">
                    <div className="text-5xl font-extrabold text-secondary mb-4">1</div>
                    <h3 className="text-xl font-semibold text-gray-900">Discovery &amp; Mapping</h3>
                    <p className="mt-2 text-gray-600">We analyze your current tech stack and map out the data flows between your systems and ours.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-5xl font-extrabold text-secondary mb-4">2</div>
                    <h3 className="text-xl font-semibold text-gray-900">Secure Connection</h3>
                    <p className="mt-2 text-gray-600">Using industry-standard, HIPAA-compliant methods, we establish a secure connection to your platform.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-5xl font-extrabold text-secondary mb-4">3</div>
                    <h3 className="text-xl font-semibold text-gray-900">Validation &amp; Go-Live</h3>
                    <p className="mt-2 text-gray-600">We rigorously test the integration to ensure data integrity before going live, ensuring a smooth transition.</p>
                </div>
            </div>
        </div>
      </div>

      {/* Partner Logos Section */}
      <div className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            We Work With the Systems You Already Use
          </h2>
          <div className="mt-12 flow-root">
            <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {integrationPartners.map((partner) => (
                <div key={partner.name} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md border border-gray-200">
                  <p className="text-lg font-semibold text-gray-600 capitalize">{partner.name}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-8 text-center text-gray-600">...and many more. Don't see your system? Contact us to confirm compatibility.</p>
        </div>
      </div>

      {/* CTA Section */}
        <div className="bg-secondary/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                <h2 className="text-3xl font-bold text-gray-900 max-w-2xl mx-auto">Ready to Connect Your Systems?</h2>
                <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">Let's discuss your specific integration needs and show you how a unified workflow can transform your practice's financial health.</p>
                <div className="mt-8">
                    <Link to="/contact" className="bg-primary text-white font-bold text-base px-8 py-3 rounded-lg hover:bg-primary/90 transition-transform transform hover:scale-105">
                        Schedule a Demo
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
};

export default TechnologyIntegrationPage;
