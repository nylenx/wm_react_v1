import React from 'react';
import { Link } from 'react-router-dom';

const metrics = [
    {
        value: '98.5%',
        label: 'First Pass Clean Claim Rate',
        description: 'Our meticulous process ensures claims are correct before submission, maximizing initial acceptance.',
        icon: 'task_alt',
    },
    {
        value: '< 5%',
        label: 'Average Denial Rate',
        description: 'We proactively manage denials, keeping them significantly below the industry average of 10-12%.',
        icon: 'gpp_bad',
    },
    {
        value: '15-25%',
        label: 'Increase in Net Collections',
        description: 'Clients typically see a significant boost in their net revenue within the first year of partnership.',
        icon: 'trending_up',
    },
    {
        value: '< 30 Days',
        label: 'Average Days in A/R',
        description: 'We accelerate the payment cycle, ensuring you get paid faster for your services.',
        icon: 'speed',
    },
];

const methodology = [
    {
        icon: 'biotech',
        title: 'Advanced Technology',
        description: 'We leverage AI-powered claim scrubbing and predictive analytics to identify and fix errors before they become problems.',
    },
    {
        icon: 'groups',
        title: 'Specialized Teams',
        description: 'Our billers and coders are experts in their specific fields, ensuring nuanced and accurate claim handling.',
    },
    {
        icon: 'query_stats',
        title: 'Proactive Follow-up',
        description: 'We don\'t just submit claims; we aggressively follow up on unpaid and underpaid claims to ensure full reimbursement.',
    },
];


const PerformanceMetricsPage: React.FC = () => {
  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <div className="py-20 sm:py-28 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Data-Driven Results You Can Count On
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              At WaveMicron, we measure our success by the success of our clients. Our performance metrics reflect our commitment to excellence and our ability to deliver tangible improvements to your practice's bottom line.
            </p>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {metrics.map((metric) => (
              <div key={metric.label} className="bg-white p-8 rounded-xl shadow-xl border border-gray-200">
                <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary text-4xl">{metric.icon}</span>
                    <div>
                        <p className="text-4xl font-extrabold text-gray-900">{metric.value}</p>
                        <p className="text-lg font-semibold text-primary">{metric.label}</p>
                    </div>
                </div>
                <p className="mt-4 text-base text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How We Achieve This Section */}
      <div className="py-16 sm:py-24 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Methodology for Success</h2>
            <p className="mt-4 text-lg text-gray-600">
              Exceptional results are born from a refined process. Here’s how we consistently deliver for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            {methodology.map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-secondary/30 text-primary">
                  <span className="material-symbols-outlined text-4xl">{item.icon}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-base text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900 max-w-2xl mx-auto">See What We Can Do For You</h2>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">Ready to see how our data-driven approach can improve your practice's metrics? Contact us for a free, no-obligation analysis of your revenue cycle.</p>
              <div className="mt-8">
                  <Link to="/contact" className="bg-primary text-white font-bold text-base px-8 py-3 rounded-lg hover:bg-primary/90 transition-transform transform hover:scale-105">
                      Get Your Free Analysis
                  </Link>
              </div>
          </div>
      </div>
    </div>
  );
};

export default PerformanceMetricsPage;