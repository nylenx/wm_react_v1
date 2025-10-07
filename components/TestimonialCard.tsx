import React from 'react';
import type { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="flex h-full flex-col justify-between rounded-xl bg-white p-8 shadow-xl border border-gray-200">
      <blockquote className="text-gray-700">
        <svg className="h-8 w-8 text-secondary mb-4" viewBox="0 0 32 32" fill="currentColor">
            <path d="M4 8a2 2 0 00-2 2v10a2 2 0 002 2h6l4 4v-4h2a2 2 0 002-2V10a2 2 0 00-2-2H4zm14 0a2 2 0 00-2 2v10a2 2 0 002 2h6l4 4v-4h2a2 2 0 002-2V10a2 2 0 00-2-2h-12z"></path>
        </svg>
        <p>"{testimonial.quote}"</p>
      </blockquote>
      <footer className="mt-6">
        <p className="font-bold text-gray-900">{testimonial.author}</p>
        <p className="text-sm text-primary">{testimonial.company}</p>
      </footer>
    </div>
  );
};

export default TestimonialCard;
