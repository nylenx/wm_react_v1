import React from 'react';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: 'capture',
        title: 'Charge Capture & Reconciliation',
        description: 'Our diligent process ensures that every billable service, procedure, and supply is accurately captured from clinical documentation. We eliminate revenue leakage by reconciling charges against clinical records, ensuring you get paid for all the work you do.'
    },
    {
        icon: 'plagiarism',
        title: 'Clinical Documentation Improvement (CDI)',
        description: 'We bridge the gap between clinical care and billing. Our CDI specialists work with your providers to ensure medical records are complete, specific, and accurately reflect the patient\'s condition, supporting medical necessity and correct coding.'
    },
    {
        icon: 'medical_services',
        title: 'Specialty Medical Coding',
        description: 'Our AAPC-certified coders are experts in their specialties. They meticulously assign the correct ICD-10, CPT, and HCPCS codes, ensuring compliance with all regulations and maximizing reimbursement while minimizing audit risk.'
    },
    {
        icon: 'rule',
        title: 'Claim Scrubbing & Validation',
        description: 'Before any claim leaves our system, it undergoes a multi-point automated and manual review. We scrub for errors in coding, formatting, and payer-specific rules, dramatically increasing your first-pass clean claim rate.'
    },
];

const benefits = [
    {
        icon: 'payments',
        title: 'Maximize Reimbursement',
        description: 'Accurate coding and complete charge capture mean you receive the full, appropriate payment for the services you provide.'
    },
    {
        icon: 'verified_user',
        title: 'Reduce Compliance Risk',
        description: 'Our certified experts and rigorous processes ensure your claims adhere to all federal and payer-specific guidelines, protecting you from audits.'
    },
    {
        icon: 'speed',
        title: 'Accelerate Payments',
        description: 'Clean, accurate claims get processed faster. Our focus on quality at this stage shortens the entire revenue cycle.'
    },
    {
        icon: 'analytics',
        title: 'Enhance Data Integrity',
        description: 'Pristine clinical and financial data at the mid-cycle stage provides you with reliable insights for better business decisions.'
    }
];

const MidCycleRcmPage: React.FC = () => {
  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <div className="py-20 sm:py-28 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              The Heart of Your Revenue Cycle
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Expert Mid-Cycle RCM Services that translate clinical care into accurate, compliant, and fully optimized claims for maximum reimbursement.
            </p>
          </div>
        </div>
      </div>

      {/* Why It Matters Section */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="pr-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">Where Care Becomes Cash Flow</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        The mid-cycle is the critical engine room of your RCM process. It's where clinical documentation is transformed into the structured data that payers require for reimbursement.
                    </p>
                    <p className="mt-4 text-lg text-gray-600">
                        Errors at this stage—from missed charges to incorrect codes—are a primary source of lost revenue, compliance risks, and payment delays. Precision here is not optional; it's essential for the financial health of your practice.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200 text-center">
                    <p className="text-7xl font-extrabold text-primary">95%</p>
                    <p className="mt-2 text-xl font-semibold text-gray-900">Clean Claim Rate Target</p>
                    <p className="mt-4 text-gray-600">Our goal is to ensure that virtually every claim submitted is perfect on the first attempt, which is achieved through a mastery of mid-cycle processes.</p>
                </div>
            </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="py-16 sm:py-24 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Core Mid-Cycle Services</h2>
                <p className="mt-4 text-lg text-gray-600">
                    We provide a comprehensive suite of services to ensure the integrity of every claim.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service) => (
                    <div key={service.title} className="bg-background-light p-6 rounded-xl shadow-lg border border-gray-200 flex items-start gap-4">
                        <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-secondary/30 text-primary mt-1">
                            <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                            <p className="mt-2 text-base text-gray-600">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* The WaveMicron Advantage Section */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">The Advantage of Precision</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our expert handling of the mid-cycle delivers clear, measurable benefits to your practice.
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
              <h2 className="text-3xl font-bold text-gray-900 max-w-2xl mx-auto">Fortify the Core of Your Revenue Cycle</h2>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">Don't let errors in the mid-cycle undermine your financial performance. Partner with WaveMicron to ensure accuracy, compliance, and optimization at every step.</p>
              <div className="mt-8">
                  <Link to="/contact" className="bg-primary text-white font-bold text-base px-8 py-3 rounded-lg hover:bg-primary/90 transition-transform transform hover:scale-105">
                      Get a Mid-Cycle Analysis
                  </Link>
              </div>
          </div>
      </div>
    </div>
  );
};

export default MidCycleRcmPage;