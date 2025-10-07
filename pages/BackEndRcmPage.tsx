import React from 'react';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: 'price_check',
        title: 'Payment Posting & Reconciliation',
        description: 'We meticulously post payments from Explanation of Benefits (EOBs) and Electronic Remittance Advice (ERAs), ensuring every dollar is accounted for. Our reconciliation process identifies underpayments and routing errors, preventing revenue leakage.'
    },
    {
        icon: 'policy',
        title: 'Denial Management & Appeals',
        description: 'Our expert team analyzes the root cause of every denial, from simple coding errors to complex medical necessity issues. We then launch a systematic and aggressive appeals process with compelling documentation to overturn denials and recover revenue.'
    },
    {
        icon: 'schedule',
        title: 'Accounts Receivable (A/R) Follow-up',
        description: 'We don’t let claims age. Our dedicated A/R team proactively follows up with payers on all outstanding and unpaid claims, working tirelessly to resolve issues, reduce your A/R days, and accelerate your cash flow.'
    },
    {
        icon: 'support_agent',
        title: 'Patient Collections & Support',
        description: 'We manage patient balances with a professional and empathetic approach. Our team handles patient inquiries, sets up payment plans, and sends clear statements, improving collections while preserving your patient relationships.'
    },
    {
        icon: 'bar_chart',
        title: 'Reporting & Analytics',
        description: 'Gain clarity into your financial performance. We provide comprehensive monthly reports that break down key metrics like denial trends, A/R aging, and collection rates, providing you with actionable insights to make informed business decisions.'
    },
];

const benefits = [
    {
        icon: 'account_balance_wallet',
        title: 'Maximize Cash Flow',
        description: 'Our persistent A/R follow-up and denial management directly translate to faster, more consistent revenue for your practice.'
    },
    {
        icon: 'reclaim',
        title: 'Recover Lost Revenue',
        description: 'We turn denials into dollars. Our expertise in appeals recovers money that would otherwise be lost.'
    },
    {
        icon: 'reduce_capacity',
        title: 'Reduce Administrative Burden',
        description: 'Offload the time-consuming tasks of chasing payers and managing patient balances to our dedicated team of experts.'
    },
    {
        icon: 'insights',
        title: 'Gain Actionable Insights',
        description: 'Our detailed reports give you a clear view of your financial health and highlight opportunities for improvement.'
    }
];

const BackEndRcmPage: React.FC = () => {
  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <div className="py-20 sm:py-28 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Securing Your Revenue: The Final Step
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Expert Back-End RCM Services focused on recovering every dollar you've earned. This is where diligent follow-up turns claims into cash.
            </p>
          </div>
        </div>
      </div>

      {/* Why It Matters Section */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="pr-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">Your Last Line of Revenue Defense</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        The back-end of the revenue cycle is your final and most critical opportunity to capture payment. After a claim is submitted, the work is far from over. Unpaid claims, denials, and aging accounts receivable can quietly erode your profitability.
                    </p>
                    <p className="mt-4 text-lg text-gray-600">
                        An effective back-end strategy requires persistence, expertise, and a systematic approach. At WaveMicron, our dedicated teams are relentless in pursuing what you are rightfully owed, transforming aged A/R and denied claims into realized revenue.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200 text-center">
                    <p className="text-7xl font-extrabold text-primary">60%</p>
                    <p className="mt-2 text-xl font-semibold text-gray-900">of Denied Claims are Never Reworked</p>
                    <p className="mt-4 text-gray-600">Without a dedicated back-end team, practices often leave significant revenue on the table simply due to a lack of time and resources to follow up effectively.</p>
                </div>
            </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="py-16 sm:py-24 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Back-End RCM Services</h2>
                <p className="mt-4 text-lg text-gray-600">
                    We provide a full suite of services to manage the entire post-submission lifecycle of a claim.
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">The Advantage of a Strong Back-End</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our expert management of your back-end processes delivers a powerful financial impact.
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
              <h2 className="text-3xl font-bold text-gray-900 max-w-2xl mx-auto">Stop Leaving Money on the Table</h2>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">Let our team of back-end specialists take control of your A/R and denial management. Contact us for a free analysis of your outstanding claims and discover how much revenue we can recover for you.</p>
              <div className="mt-8">
                  <Link to="/contact" className="bg-primary text-white font-bold text-base px-8 py-3 rounded-lg hover:bg-primary/90 transition-transform transform hover:scale-105">
                      Request a Free A/R Analysis
                  </Link>
              </div>
          </div>
      </div>
    </div>
  );
};

export default BackEndRcmPage;