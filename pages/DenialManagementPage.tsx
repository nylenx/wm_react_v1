import React from 'react';
import { Link } from 'react-router-dom';

const processSteps = [
    {
        icon: 'analytics',
        title: 'Root Cause Analysis',
        description: 'We don’t just resubmit claims. Our first step is to perform a deep-dive analysis to understand exactly why a claim was denied—be it a front-end registration error, a coding mistake, or a lack of medical necessity documentation.'
    },
    {
        icon: 'gavel',
        title: 'Systematic & Aggressive Appeals',
        description: 'Our certified specialists craft compelling, evidence-based appeals tailored to each specific denial reason and payer. We manage all deadlines and levels of appeal to maximize your chances of a successful overturn.'
    },
    {
        icon: 'trending_up',
        title: 'Payer Trend & Behavior Tracking',
        description: 'We continuously monitor denial patterns from specific payers. This allows us to anticipate issues, challenge unfair denials, and adapt our strategies in real-time to stay ahead of changing payer tactics.'
    },
    {
        icon: 'sync_problem',
        title: 'Preventative Strategy & Feedback Loop',
        description: 'The most crucial step. We provide your team with actionable feedback and training based on our findings. By fixing the root cause, we help you prevent the same denials from happening again, improving your entire RCM process.'
    },
];

const benefits = [
    {
        icon: 'account_balance_wallet',
        title: 'Recover Lost Revenue',
        description: 'We turn denied claims into collected revenue, directly boosting your bottom line with money that would otherwise be lost.'
    },
    {
        icon: 'bolt',
        title: 'Improve Cash Flow',
        description: 'By resolving denials faster and preventing future ones, we shorten your revenue cycle and ensure more consistent, predictable cash flow.'
    },
    {
        icon: 'stacks',
        title: 'Reduce Administrative Costs',
        description: 'Our expert team frees your staff from the time-consuming, frustrating work of chasing denials, allowing them to focus on patient care.'
    },
    {
        icon: 'lightbulb',
        title: 'Gain Actionable Insights',
        description: 'Our analysis provides a clear roadmap for process improvement, strengthening your front-end and mid-cycle operations.'
    }
];

const DenialManagementPage: React.FC = () => {
  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <div className="py-20 sm:py-28 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Turn Denials into Dollars
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Proactive Denial Management that not only recovers revenue but prevents future losses. Stop writing off denied claims and start fixing the problem at its source.
            </p>
          </div>
        </div>
      </div>

      {/* Why It Matters Section */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="pr-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">The Hidden Drain on Your Practice's Profitability</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Claim denials are more than just an inconvenience; they are a significant source of revenue leakage. The cost to rework a single denied claim can be as high as $25, and with industry denial rates ranging from 5-11%, the financial impact can be staggering.
                    </p>
                    <p className="mt-4 text-lg text-gray-600">
                        Without a strategic approach, denied claims lead to delayed payments, increased administrative overhead, and frustrated staff. At WaveMicron, we transform denial management from a reactive chore into a proactive strategy for financial improvement.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200 text-center">
                    <p className="text-7xl font-extrabold text-primary">Up to 11%</p>
                    <p className="mt-2 text-xl font-semibold text-gray-900">of Claims are Initially Denied</p>
                    <p className="mt-4 text-gray-600">A proactive strategy is essential to protect your revenue stream and ensure you are paid for every service rendered. (Source: MGMA)</p>
                </div>
            </div>
        </div>
      </div>

      {/* Our Process Section */}
      <div className="py-16 sm:py-24 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Systematic Approach to Denial Management</h2>
                <p className="mt-4 text-lg text-gray-600">
                    We follow a proven, four-step process to maximize recovery and drive long-term improvement.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {processSteps.map((step) => (
                    <div key={step.title} className="bg-background-light p-6 rounded-xl shadow-lg border border-gray-200 flex items-start gap-4">
                        <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-secondary/30 text-primary mt-1">
                            <span className="material-symbols-outlined text-3xl">{step.icon}</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                            <p className="mt-2 text-base text-gray-600">{step.description}</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">The Advantage of Expert Denial Management</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our comprehensive approach delivers significant, measurable results for your practice.
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
              <h2 className="text-3xl font-bold text-gray-900 max-w-2xl mx-auto">Stop Writing Off Denied Claims</h2>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">Let our experts conduct a no-obligation analysis of your recent denials and show you how much revenue you could be recovering. It's time to get paid what you're owed.</p>
              <div className="mt-8">
                  <Link to="/contact" className="bg-primary text-white font-bold text-base px-8 py-3 rounded-lg hover:bg-primary/90 transition-transform transform hover:scale-105">
                      Get a Free Denial Analysis
                  </Link>
              </div>
          </div>
      </div>
    </div>
  );
};

export default DenialManagementPage;
