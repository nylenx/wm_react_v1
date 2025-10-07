import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Define the validation schema using Yup
const schema = yup.object().shape({
  name: yup.string().required('Full name is required'),
  company: yup.string().required('Practice / Company name is required'),
  quote: yup.string().min(20, 'Your testimonial must be at least 20 characters long').required('Testimonial is required'),
}).required();

const SubmitTestimonialPage: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FieldValues) => {
    setFormStatus('submitting');
    try {
      // Simulate a successful form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Testimonial data submitted:', data);
      
      setFormStatus('submitted');
      reset(); // Reset form fields
    } catch(error) {
        console.error("Error submitting testimonial: ", error);
        setFormStatus('error');
    }
  };

  return (
    <div className="bg-background-light py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Share Your Experience</h1>
            <p className="text-lg text-gray-700">We value your feedback. Please share your experience with WaveMicron so we can continue to improve and help others understand the benefits of our partnership.</p>
          </div>
          
          <div className="mt-12 bg-white p-8 lg:p-12 rounded-xl shadow-xl border border-gray-200">
             {formStatus === 'submitted' ? (
                <div className="text-center p-8 bg-secondary/50 rounded-md text-dark">
                    <h3 className="text-2xl font-semibold">Thank You!</h3>
                    <p className="mt-2">Your testimonial has been received. We appreciate you taking the time to share your thoughts.</p>
                    <Link to="/" className="mt-6 inline-block bg-primary text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                        Return to Home
                    </Link>
                </div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" id="name" {...register('name')} placeholder="e.g., Dr. Jane Doe" className={`form-input mt-1 block w-full rounded-lg bg-transparent transition duration-150 ease-in-out sm:text-sm ${errors.name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-primary focus:border-primary'}`} aria-invalid={errors.name ? "true" : "false"}/>
                     {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">Practice / Company Name</label>
                    <input type="text" id="company" {...register('company')} placeholder="e.g., Sunrise Medical Clinic" className={`form-input mt-1 block w-full rounded-lg bg-transparent transition duration-150 ease-in-out sm:text-sm ${errors.company ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-primary focus:border-primary'}`} aria-invalid={errors.company ? "true" : "false"}/>
                     {errors.company && <p className="mt-2 text-sm text-red-600">{errors.company.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="quote" className="block text-sm font-medium text-gray-700">Your Testimonial</label>
                    <textarea id="quote" rows={6} {...register('quote')} placeholder="Share a few words about your experience..." className={`form-textarea mt-1 block w-full rounded-lg bg-transparent transition duration-150 ease-in-out sm:text-sm ${errors.quote ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-primary focus:border-primary'}`} aria-invalid={errors.quote ? "true" : "false"}></textarea>
                     {errors.quote && <p className="mt-2 text-sm text-red-600">{errors.quote.message}</p>}
                  </div>
                   {formStatus === 'error' && (
                        <div className="rounded-md bg-red-50 p-4">
                            <p className="text-sm text-red-700">
                                There was an error submitting your testimonial. Please try again later.
                            </p>
                        </div>
                    )}
                  <div>
                    <button type="submit" disabled={formStatus === 'submitting'} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-opacity disabled:bg-primary/70">
                      {formStatus === 'submitting' ? 'Submitting...' : 'Submit Your Review'}
                    </button>
                  </div>
                </form>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitTestimonialPage;