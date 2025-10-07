import React from 'react';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: 'person_add',
        title: 'Patient Registration & Scheduling',
        description: 'We ensure 100% accuracy in capturing patient demographic, insurance, and contact information from the very first interaction, creating a clean claim from the start and eliminating common data-related errors.'
    },
    {
        icon: 'verified_user',
        title: 'Insurance Eligibility & Benefits Verification',
        description: 'Our team performs real-time, automated verification of insurance eligibility, co-pays, deductibles, and co-insurance. This proactive step prevents surprises for both your practice and your patients.'
    },
    {
        icon: 'approval',
        title: 'Prior Authorization & Pre-certification',
        description: 'We manage the complex and time-consuming prior authorization process from initiation to approval. Our dedicated team tracks requirements for different payers and services, preventing costly administrative denials.'
    },
    {
        icon: 'request_quote',
        title: 'Patient Financial Counseling & Price Estimation',
        description: 'In compliance with the No Surprises Act, we provide patients with clear, accurate estimates of their financial responsibility upfront. This transparency builds trust and significantly improves point-of-service collections.'
    },
    {
        icon: 'payments',
        title: 'Point-of-Service (POS) Collections',
        description: 'By providing clear estimates and verifying benefits, we empower your front-desk staff to confidently and effectively collect co-pays, deductibles, and outstanding balances at the time of service.'
    },
    {
        icon: 'badge',
        title: 'Medical Necessity & Compliance Checking',
        description: 'Before services are rendered, our systems can check for medical necessity against payer policies, flagging potential issues that could lead to denials and ensuring documentation requirements are met.'
    }
];

const benefits = [
    {
        icon: 'thumb_down_off_alt',
        title: 'Drastically Reduce Denials',
        description: 'By catching and correcting errors before a claim is ever created, we help you lower your denial rate by up to 40%.'
    },
    {
        icon: 'attach_money',
        title: 'Increase Upfront Cash Flow',
        description: 'Effective POS collection strategies can boost your upfront revenue and reduce the burden on back-end collections.'
    },
    {
        icon: 'sentiment_satisfied',
        title: 'Improve Patient Satisfaction',
        description: 'A transparent and smooth financial experience reduces patient anxiety and builds lasting trust in your practice.'
    },
    {
        icon: 'bolt',
        title: 'Accelerate the Revenue Cycle',
        description: 'Clean claims get paid faster. A perfected front-end process reduces the overall time from service to payment.'
    }
];

const FrontEndRcmPage: React.FC = () => {
  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <div className="py-20 sm:py-28 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Building a Foundation for Financial Success
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Expert Front-End RCM Services Designed to Prevent Denials Before They Happen. A profitable revenue cycle begins the moment a patient schedules their appointment.
            </p>
          </div>
        </div>
      </div>

      {/* Why It Matters Section */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="pr-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">Your First Line of Defense Against Lost Revenue</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Did you know that up to 80% of claim denials are caused by errors in the front-end process? Issues like incorrect patient information, inactive insurance, or a lack of prior authorization are entirely preventable.
                    </p>
                    <p className="mt-4 text-lg text-gray-600">
                        A weak front-end leads to a cascade of problems: delayed payments, wasted staff time on rework, and patient frustration. At WaveMicron, we fortify your front-end processes to ensure every claim is clean, compliant, and ready for first-pass payment.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200 text-center">
                    <p className="text-7xl font-extrabold text-primary">80%</p>
                    <p className="mt-2 text-xl font-semibold text-gray-900">of Claim Denials are Preventable</p>
                    <p className="mt-4 text-gray-600">By perfecting the initial stages of the revenue cycle, you protect your bottom line and create a more efficient workflow for your entire team.</p>
                </div>
            </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="py-16 sm:py-24 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Comprehensive Front-End Services</h2>
                <p className="mt-4 text-lg text-gray-600">
                    We manage every critical step of the pre-service process with precision and care.
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">The WaveMicron Advantage</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our blend of advanced technology and expert teams delivers unparalleled results.
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
              <h2 className="text-3xl font-bold text-gray-900 max-w-2xl mx-auto">Strengthen Your Revenue Cycle from the Start</h2>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">Stop losing money to preventable errors. Let our experts build a resilient front-end process for your practice that boosts revenue and enhances patient trust.</p>
              <div className="mt-8">
                  <Link to="/contact" className="bg-primary text-white font-bold text-base px-8 py-3 rounded-lg hover:bg-primary/90 transition-transform transform hover:scale-105">
                      Optimize Your Front-End
                  </Link>
              </div>
          </div>
      </div>
    </div>
  );
};

export default FrontEndRcmPage;
