import React from 'react';
import { Link } from 'react-router-dom';
import { whitePapers } from '../data/whitePapers';
import WhitePaperCard from '../components/WhitePaperCard';

const WhitePapersPage: React.FC = () => {
  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <div className="py-20 sm:py-28 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Expert Insights & White Papers
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Dive deep into the most complex topics in Revenue Cycle Management. Our white papers provide data-driven analysis and actionable strategies to help your practice thrive.
            </p>
          </div>
        </div>
      </div>

      {/* White Papers Grid */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {whitePapers.map((paper) => (
              <WhitePaperCard key={paper.slug} paper={paper} />
            ))}
          </div>
        </div>
      </div>

       {/* CTA Section */}
      <div className="bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900 max-w-2xl mx-auto">Looking for More?</h2>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">Our team is constantly researching the latest trends and challenges in healthcare finance. If you have a specific question or topic you'd like to see covered, let us know!</p>
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

export default WhitePapersPage;
