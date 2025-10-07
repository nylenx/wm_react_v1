import React from 'react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import CaseStudyCard from '../components/CaseStudyCard';

const CaseStudiesPage: React.FC = () => {
  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <div className="py-20 sm:py-28 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Real Results for Real Practices
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Discover how we've partnered with healthcare providers across various specialties to overcome their biggest RCM challenges and achieve significant financial and operational improvements.
            </p>
          </div>
        </div>
      </div>

      {/* Aggregate Results Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200">
              <p className="text-5xl font-extrabold text-primary">Up to 25%</p>
              <p className="mt-2 text-lg font-semibold text-gray-900">Increase in Net Revenue</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200">
              <p className="text-5xl font-extrabold text-primary">Over 50%</p>
              <p className="mt-2 text-lg font-semibold text-gray-900">Reduction in Claim Denials</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200">
              <p className="text-5xl font-extrabold text-primary">10+ Days</p>
              <p className="mt-2 text-lg font-semibold text-gray-900">Reduced A/R Cycle</p>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="py-16 sm:py-24 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </div>

       {/* CTA Section */}
      <div className="bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900 max-w-2xl mx-auto">Become Our Next Success Story</h2>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">Ready to see results like these for your practice? Contact our team for a free analysis and discover how we can help you achieve your financial goals.</p>
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

export default CaseStudiesPage;
