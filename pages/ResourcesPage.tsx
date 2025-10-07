import React from 'react';
import { Link } from 'react-router-dom';

const resourceLinks = [
    {
        title: 'Latest Insights & Articles',
        description: 'Stay informed with our blog, featuring expert analysis on the latest trends in medical billing, technology, and RCM strategies.',
        icon: 'article',
        link: '/resources/blog',
        linkLabel: 'Read The Blog'
    },
    {
        title: 'In-Depth Guides & White Papers',
        description: 'Download our comprehensive guides for a deep dive into critical topics like AI in billing, telehealth, and denial management.',
        icon: 'description',
        link: '/resources/white-papers',
        linkLabel: 'View White Papers'
    },
    {
        title: 'RCM KPI Calculator',
        description: 'Benchmark your practice\'s performance with our interactive tool. Analyze key metrics and identify opportunities for growth.',
        icon: 'calculate',
        link: '/resources/kpi-calculator',
        linkLabel: 'Launch Calculator'
    }
];

const ResourcesPage: React.FC = () => {
  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <div className="py-20 sm:py-28 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Explore Our RCM Knowledge Hub
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              From in-depth articles and expert guides to practical tools, our resources are designed to help you navigate the complexities of healthcare finance and optimize your practice.
            </p>
          </div>
        </div>
      </div>

      {/* Resources Grid Section */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Your RCM Toolkit</h2>
                <p className="mt-4 text-lg text-gray-600">
                    Find the information and tools you need to build a healthier financial future for your practice.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {resourceLinks.map((item) => (
                    <div key={item.title} className="bg-white p-8 rounded-xl shadow-xl border border-gray-200 flex flex-col">
                        <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-secondary/30 text-primary">
                            <span className="material-symbols-outlined text-4xl">{item.icon}</span>
                        </div>
                        <h3 className="mt-6 text-xl font-semibold text-gray-900">{item.title}</h3>
                        <p className="mt-2 text-base text-gray-600 flex-grow">{item.description}</p>
                        <div className="mt-6">
                            <Link to={item.link} className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                                {item.linkLabel}
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900 max-w-2xl mx-auto">Have a Specific Question?</h2>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">Our team of RCM experts is here to help. If you can't find the answer you're looking for, don't hesitate to reach out for a personalized consultation.</p>
              <div className="mt-8">
                  <Link to="/contact" className="bg-primary text-white font-bold text-base px-8 py-3 rounded-lg hover:bg-primary/90 transition-transform transform hover:scale-105">
                      Contact Our Experts
                  </Link>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ResourcesPage;