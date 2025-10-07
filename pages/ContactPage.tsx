

import React, { useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Define the validation schema using Yup
const schema = yup.object().shape({
  name: yup.string().required('Full name is required'),
  email: yup.string().email('Please enter a valid email address').required('Email is required'),
  phone: yup.string().matches(/^[0-9-()+ ]{7,20}$/, { message: 'Please enter a valid phone number', excludeEmptyString: true }),
  subject: yup.string(),
  message: yup.string().min(10, 'Message must be at least 10 characters long').required('Message is required'),
}).required();

const ContactPage: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FieldValues) => {
    setFormStatus('submitting');
    try {
      // Simulate a successful form submission without Firebase
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form data submitted:', data);
      
      setFormStatus('submitted');
      reset(); // Reset form fields
    } catch(error) {
        console.error("Error submitting form: ", error);
        setFormStatus('error');
    }
  };

  return (
    <>
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">Contact Us</h2>
              <p className="mt-4 text-lg text-gray-600">We're here to help. Reach out to us with any questions or inquiries, and our team will get back to you promptly.</p>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-3xl mt-1">location_on</span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Our Location</h3>
                  <p className="text-gray-600">2795 E Cottonwood Pkwy, Ste 300<br/>Salt Lake City, UT 84121</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-3xl mt-1">call</span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Contact Information</h3>
                  <p className="text-gray-600">Phone: <a href="tel:+13854212421" className="hover:text-primary transition-colors">+1 (385) 421-2421</a></p>
                  <p className="text-gray-600">Email: <a href="mailto:info@wavemicron.com" className="hover:text-primary transition-colors">info@wavemicron.com</a></p>
                </div>
              </div>
            </div>
            <div className="bg-background-light p-8 rounded-xl border border-secondary shadow-xl">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">analytics</span>
              <h3 className="text-2xl font-bold text-gray-900">Free Practice Analysis</h3>
              <p className="mt-2 text-gray-600">Interested in a free analysis of your practice's revenue cycle? Contact us today to schedule a consultation and discover optimization opportunities.</p>
              <button className="mt-6 flex items-center justify-center rounded-lg h-12 px-8 bg-secondary/50 text-primary text-sm font-bold hover:bg-secondary/70 transition-colors">
                  Schedule Consultation
              </button>
            </div>
          </div>
          <div className="bg-white p-8 lg:p-12 rounded-xl shadow-xl border border-gray-200">
             {formStatus === 'submitted' ? (
                <div className="text-center p-8 bg-secondary/50 rounded-md text-dark">
                    <h3 className="text-xl font-semibold">Thank You!</h3>
                    <p>Your message has been received. We'll be in touch shortly.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" id="name" {...register('name')} placeholder="Enter your full name" className={`form-input mt-1 block w-full rounded-lg bg-transparent transition duration-150 ease-in-out sm:text-sm ${errors.name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-primary focus:border-primary'}`} aria-invalid={errors.name ? "true" : "false"}/>
                    {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" id="email" {...register('email')} placeholder="Enter your email address" className={`form-input mt-1 block w-full rounded-lg bg-transparent transition duration-150 ease-in-out sm:text-sm ${errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-primary focus:border-primary'}`} aria-invalid={errors.email ? "true" : "false"}/>
                    {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (Optional)</label>
                    <input type="tel" id="phone" {...register('phone')} placeholder="Enter your phone number" className={`form-input mt-1 block w-full rounded-lg bg-transparent transition duration-150 ease-in-out sm:text-sm ${errors.phone ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-primary focus:border-primary'}`} aria-invalid={errors.phone ? "true" : "false"}/>
                    {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>}
                  </div>
                   <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject (Optional)</label>
                    <input type="text" id="subject" {...register('subject')} placeholder="e.g., Billing Inquiry" className="form-input mt-1 block w-full rounded-lg border-gray-300 bg-transparent focus:ring-primary focus:border-primary transition duration-150 ease-in-out sm:text-sm"/>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" rows={5} {...register('message')} placeholder="Enter your message" className={`form-textarea mt-1 block w-full rounded-lg bg-transparent transition duration-150 ease-in-out sm:text-sm ${errors.message ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-primary focus:border-primary'}`} aria-invalid={errors.message ? "true" : "false"}></textarea>
                    {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>}
                  </div>
                   {formStatus === 'error' && (
                        <div className="rounded-md bg-red-50 p-4">
                            <p className="text-sm text-red-700">
                                There was an error submitting your message. Please try again later.
                            </p>
                        </div>
                    )}
                  <div>
                    <button type="submit" disabled={formStatus === 'submitting'} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-opacity disabled:bg-primary/70">
                      {formStatus === 'submitting' ? 'Submitting...' : 'Submit'}
                    </button>
                  </div>
                </form>
             )}
          </div>
        </div>
      </div>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-center text-gray-900 mb-12">We Serve Clients Nationwide</h2>
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl border border-gray-200">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12959821.57724181!2d-95.665!3d37.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sus!4v1678886272841!5m2!1sen!2sus" 
                    className="absolute top-0 left-0 w-full h-full"
                    style={{border:0}} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute inset-0 bg-primary/20 pointer-events-none"></div>
            </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;