import React from 'react';
import { Link } from 'react-router-dom';
import { testimonials } from '../data/testimonials';
import TestimonialCard from '../components/TestimonialCard';

const ClientTestimonialsPage: React.FC = () => {
  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <div className="py-20 sm:py-28 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              What Our Valued Clients Say
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              We're proud to be a trusted partner for healthcare providers. Read firsthand accounts of how our dedicated services have made a tangible impact on their practices and financial health.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900 max-w-2xl mx-auto">Have a Success Story to Share?</h2>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">Your feedback helps us grow and inspires others. If you've had a positive experience with WaveMicron, we would be grateful if you took a moment to share your story.</p>
              <div className="mt-8">
                  <Link to="/submit-testimonial" className="bg-primary text-white font-bold text-base px-8 py-3 rounded-lg hover:bg-primary/90 transition-transform transform hover:scale-105">
                      Leave a Review
                  </Link>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ClientTestimonialsPage;