import React from 'react';
import { Link } from 'react-router-dom';

const cycleStages = [
    {
        icon: 'login',
        title: 'Front-End Foundation',
        description: 'We build a solid foundation by perfecting patient registration, scheduling, eligibility verification, and prior authorizations. This proactive approach prevents the vast majority of denials before they can even occur.',
        link: '/services/front-end-rcm',
    },
    {
        icon: 'rule',
        title: 'Mid-Cycle Precision',
        description: 'Our certified coders and documentation specialists translate clinical services into accurate, compliant claims. Meticulous charge capture and claim scrubbing ensure maximum reimbursement and minimal risk.',
        link: '/services/mid-cycle-rcm',
    },
    {
        icon: 'price_check',
        title: 'Back-End Recovery',
        description: 'Our relentless back-end team manages the entire post-submission process. This includes swift payment posting, aggressive denial management, and systematic A/R follow-up to ensure every dollar is collected.',
        link: '/services/back-end-rcm',
    },
    {
        icon: 'support_agent',
        title: 'Patient Engagement',
        description: 'Woven throughout the entire process is a patient-centric approach. From digital intake to clear e-statements and dedicated support, we create a positive financial experience that boosts satisfaction and accelerates payments.',
        link: '/services/patient-engagement'
    }
];

const benefits = [
    {
        icon: 'hub',
        title: 'Unified Data & Analytics',
        description: 'With one partner managing the entire cycle, you get a single, holistic view of your financial performance. Eliminate data silos and gain unparalleled, actionable insights from a single source of truth.'
    },
    {
        icon: 'handshake',
        title: 'Total Accountability',
        description: 'No more finger-pointing between different vendors or departments. We take full ownership of your RCM performance from start to finish. Your success is our sole metric.'
    },
    {
        icon: 'groups',
        title: 'Seamless Workflow & Efficiency',
        description: 'Our integrated approach eliminates the friction and redundancies of a fragmented system. This reduces your administrative burden, lowers operational costs, and frees up your staff to focus on patient care.'
    },
    {
        icon: 'trending_up',
        title: 'Strategic Growth Partnership',
        description: 'We act as an extension of your practice. As you grow, our scalable solution adapts to your needs, providing strategic insights and support to help you navigate future challenges and opportunities.'
    }
];

const EndToEndRcmPage: React.FC = () => {
  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <div className="py-20 sm:py-28 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              One Partner. Complete Financial Clarity.
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Our End-to-End RCM solution is a comprehensive, fully outsourced partnership that manages every aspect of your revenue cycle. From the first patient contact to the final payment, we provide a seamless, integrated strategy for financial excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Why It Matters Section */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="pr-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">The Problem with a Fragmented Approach</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Many practices struggle with a disjointed revenue cycle, using separate vendors or internal teams for different tasks. This creates communication gaps, data silos, and a lack of accountability, leading to inefficiency and lost revenue.
                    </p>
                    <p className="mt-4 text-lg text-gray-600">
                       An End-to-End approach eliminates these issues. By entrusting your entire revenue cycle to a single expert partner, you create a powerful, unified system where every stage is perfectly aligned to optimize the next, ensuring maximum efficiency and profitability.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200">
                     <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQeLzF_V00u6_kUqG02DEXHPfC90e546iR7vQo2kY_x17g4bJpT0d8-0CjR2R41H6s38y8b9O3wQv-3oI7B4tVd70Dk99n_s8G5rUaT6g1jVn2D6jW3eF0sQW5cQ1-Qn8wI7y8l_qP-r1Q8P_h-z7" alt="Integrated Workflow Diagram" className="rounded-lg"/>
                     <p className="mt-4 text-center font-semibold text-gray-700">A holistic view of the entire revenue cycle.</p>
                </div>
            </div>
        </div>
      </div>

      {/* Our Integrated Process Section */}
      <div className="py-16 sm:py-24 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Integrated End-to-End Process</h2>
                <p className="mt-4 text-lg text-gray-600">
                    We manage every critical component of the revenue cycle as one cohesive unit.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {cycleStages.map((stage) => (
                    <div key={stage.title} className="bg-background-light p-6 rounded-xl shadow-lg border border-gray-200 flex items-start gap-4">
                        <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-secondary/30 text-primary mt-1">
                            <span className="material-symbols-outlined text-3xl">{stage.icon}</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">{stage.title}</h3>
                            <p className="mt-2 text-base text-gray-600">{stage.description} <Link to={stage.link} className="text-primary font-semibold hover:underline">Learn more.</Link></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* The Power of a Single Partner Section */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">The Power of a Single, Expert Partner</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our end-to-end solution delivers benefits that a fragmented approach simply cannot match.
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
              <h2 className="text-3xl font-bold text-gray-900 max-w-2xl mx-auto">Ready for a Truly Integrated Revenue Cycle?</h2>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">Experience the peace of mind and financial uplift that comes from a fully managed, end-to-end RCM solution. Contact us for a comprehensive analysis and see the difference a single partner can make.</p>
              <div className="mt-8">
                  <Link to="/contact" className="bg-primary text-white font-bold text-base px-8 py-3 rounded-lg hover:bg-primary/90 transition-transform transform hover:scale-105">
                      Request an End-to-End Consultation
                  </Link>
              </div>
          </div>
      </div>
    </div>
  );
};

export default EndToEndRcmPage;