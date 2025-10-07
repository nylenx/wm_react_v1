import React from 'react';
import { Link } from 'react-router-dom';
import { testimonials } from '../data/testimonials';

const differentiators = [
    {
        title: 'Our Story & Values',
        description: 'Discover the mission, vision, and values that drive our commitment to excellence and partnership.',
        icon: 'foundation',
        link: '/why-us/about-us'
    },
    {
        title: 'Client Success Stories',
        description: 'Read firsthand accounts from our valued partners about how we\'ve transformed their financial operations.',
        icon: 'record_voice_over',
        link: '/why-us/client-testimonials'
    },
    {
        title: 'Data-Driven Performance',
        description: 'We measure our success by yours. Explore the tangible results and key performance indicators we deliver.',
        icon: 'monitoring',
        link: '/why-us/performance-metrics'
    },
    {
        title: 'Certified Expertise & Security',
        description: 'Trust in our certified professionals and robust compliance framework to protect your practice and patient data.',
        icon: 'verified_user',
        link: '/why-us/certifications'
    }
];

const WhyChooseUsPage: React.FC = () => {
  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <div className="py-20 sm:py-28 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              The Partner You Need for the Results You Deserve
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Choosing an RCM partner is a critical decision. At WaveMicron, we combine advanced technology, deep industry expertise, and an unwavering commitment to our clients' success to deliver a partnership that transforms your practice's financial health.
            </p>
          </div>
        </div>
      </div>

      {/* Differentiators Grid Section */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">The WaveMicron Difference</h2>
                <p className="mt-4 text-lg text-gray-600">
                    Our value is built on a foundation of trust, transparency, and tangible results.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {differentiators.map((item) => (
                    <div key={item.title} className="bg-white p-8 rounded-xl shadow-xl border border-gray-200 flex flex-col">
                        <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-secondary/30 text-primary">
                            <span className="material-symbols-outlined text-4xl">{item.icon}</span>
                        </div>
                        <h3 className="mt-6 text-xl font-semibold text-gray-900">{item.title}</h3>
                        <p className="mt-2 text-base text-gray-600 flex-grow">{item.description}</p>
                        <div className="mt-6">
                            <Link to={item.link} className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                                Learn More
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
      
      {/* Featured Testimonial Section */}
      <div className="py-16 sm:py-24 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <svg className="h-12 w-12 text-secondary mx-auto mb-4" viewBox="0 0 32 32" fill="currentColor">
                <path d="M4 8a2 2 0 00-2 2v10a2 2 0 002 2h6l4 4v-4h2a2 2 0 002-2V10a2 2 0 00-2-2H4zm14 0a2 2 0 00-2 2v10a2 2 0 002 2h6l4 4v-4h2a2 2 0 002-2V10a2 2 0 00-2-2h-12z"></path>
            </svg>
            <blockquote className="text-2xl font-semibold text-gray-800 leading-snug">
              "{testimonials[0].quote}"
            </blockquote>
            <footer className="mt-6">
              <p className="text-lg font-bold text-gray-900">{testimonials[0].author}</p>
              <p className="text-base text-primary">{testimonials[0].company}</p>
            </footer>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900 max-w-2xl mx-auto">Experience the Difference for Yourself</h2>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">Let us show you how a true partnership can make a tangible impact on your practice. Contact us today for a free, no-obligation RCM analysis.</p>
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

export default WhyChooseUsPage;