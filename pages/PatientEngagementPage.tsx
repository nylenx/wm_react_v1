import React from 'react';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: 'notifications_active',
        title: 'Automated Appointment Reminders',
        description: 'Reduce costly no-shows and keep your schedule full with automated appointment reminders via SMS and email, customized to patient preferences.'
    },
    {
        icon: 'edit_document',
        title: 'Digital Patient Intake & Registration',
        description: 'Modernize your front desk with secure, online forms that patients can complete at their convenience, reducing wait times and ensuring data accuracy.'
    },
    {
        icon: 'receipt_long',
        title: 'Price Transparency & Good Faith Estimates',
        description: 'Build trust and comply with the No Surprises Act by providing patients with clear, easy-to-understand estimates of their financial responsibility before service.'
    },
    {
        icon: 'credit_card',
        title: 'Convenient & Modern Payment Options',
        description: 'Make it easy for patients to pay with a full suite of options, including online payments, text-to-pay, and secure card-on-file for recurring visits.'
    },
    {
        icon: 'mail',
        title: 'Clear & Concise E-Statements',
        description: 'Eliminate confusing paper bills. We deliver clear, itemized electronic statements that patients can easily understand and act upon, leading to faster payments.'
    },
    {
        icon: 'support_agent',
        title: 'Dedicated Patient Support',
        description: 'Our friendly, professional team provides a dedicated line for patients to call with billing questions, reducing the burden on your staff and improving patient satisfaction.'
    }
];

const benefits = [
    {
        icon: 'event_busy',
        title: 'Reduce No-Shows',
        description: 'Automated reminders can decrease no-show rates by over 30%, protecting your most valuable asset: your providers\' time.'
    },
    {
        icon: 'payments',
        title: 'Accelerate Patient Payments',
        description: 'By offering convenient, modern payment options and clear communication, practices can see a 20% increase in the speed of patient collections.'
    },
    {
        icon: 'sentiment_satisfied',
        title: 'Boost Patient Satisfaction',
        description: 'A positive financial experience is a critical part of the overall patient journey, leading to better reviews and higher patient retention.'
    },
    {
        icon: 'reduce_capacity',
        title: 'Decrease Administrative Costs',
        description: 'Digital intake and automated communications free up your staff from manual, repetitive tasks, allowing them to focus on high-value patient interactions.'
    }
];

const PatientEngagementPage: React.FC = () => {
  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <div className="py-20 sm:py-28 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Empowering Patients, Strengthening Your Practice
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Modern patient engagement is the key to a healthier revenue cycle. We create a seamless and transparent financial experience that improves patient satisfaction and accelerates your cash flow.
            </p>
          </div>
        </div>
      </div>

      {/* Why It Matters Section */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="pr-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">The Financial Impact of Patient Experience</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Today's patients are consumers who expect convenience, clarity, and control in their healthcare journey—including the financial aspects. A confusing or difficult billing process is one of the top reasons patients leave a practice.
                    </p>
                    <p className="mt-4 text-lg text-gray-600">
                       Investing in a positive patient financial experience isn't just about good service; it's a direct investment in your bottom line. It reduces bad debt, lowers collection costs, and builds the loyalty that drives long-term growth.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200 text-center">
                    <p className="text-7xl font-extrabold text-primary">54%</p>
                    <p className="mt-2 text-xl font-semibold text-gray-900">of Patients Would Switch Providers for a Better Healthcare Payment Experience</p>
                    <p className="mt-4 text-gray-600">(Source: PYMNTS.com)</p>
                </div>
            </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="py-16 sm:py-24 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Patient-Centric Solutions</h2>
                <p className="mt-4 text-lg text-gray-600">
                    We provide a complete toolkit to manage the patient financial journey from end to end.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                    <div key={service.title} className="bg-background-light p-6 rounded-xl shadow-lg border border-gray-200">
                        <div className="flex items-center gap-4">
                            <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-secondary/30 text-primary">
                                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                        </div>
                        <p className="mt-4 text-base text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* The WaveMicron Advantage Section */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">The Benefits of Better Engagement</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our solutions deliver clear, measurable improvements for your practice.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white p-8 rounded-xl shadow-xl border border-gray-200 text-center flex flex-col items-center">
                <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-secondary/30 text-primary">
                    <span className="material-symbols-outlined text-4xl">{benefit.icon}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{benefit.title}</h3>
                <p className="mt-2 text-base text-gray-600 flex-grow">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900 max-w-2xl mx-auto">Modernize Your Patient Financial Experience</h2>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">Ready to see how a patient-first approach to RCM can transform your collections and improve satisfaction? Contact us today for a free consultation.</p>
              <div className="mt-8">
                  <Link to="/contact" className="bg-primary text-white font-bold text-base px-8 py-3 rounded-lg hover:bg-primary/90 transition-transform transform hover:scale-105">
                      Schedule a Consultation
                  </Link>
              </div>
          </div>
      </div>
    </div>
  );
};

export default PatientEngagementPage;