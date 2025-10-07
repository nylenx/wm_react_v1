import React from 'react';
import { Link } from 'react-router-dom';
import MiniKpiCalculator from '../components/MiniKpiCalculator';
import { testimonials } from '../data/testimonials';
import TestimonialCard from '../components/TestimonialCard';

// --- SECTIONAL COMPONENTS ---

const HeroSection: React.FC = () => (
    <div className="relative rounded-xl overflow-hidden min-h-[500px] flex items-center justify-center text-center p-8 shadow-xl bg-background-light">
        <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">Streamline Your Revenue Cycle with Expert Medical Billing</h1>
            <p className="mt-4 text-lg md:text-xl font-light text-gray-600">Maximize your practice's profitability and efficiency with our comprehensive medical billing and RCM services. We handle the complexities, so you can focus on patient care.</p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="bg-primary text-white font-bold text-base px-6 py-3 rounded-lg hover:bg-primary/90 transition-transform transform hover:scale-105">Get a Free Consultation</Link>
                <Link to="/services" className="bg-secondary text-primary font-bold text-base px-6 py-3 rounded-lg hover:bg-secondary/90 transition-transform transform hover:scale-105">Learn More</Link>
            </div>
        </div>
    </div>
);

const ImpactSection: React.FC = () => (
    <div className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Our Impact</h2>
        <p className="text-center text-lg text-gray-600 mb-12">Proven results that speak for themselves.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200">
                <p className="text-5xl font-extrabold text-primary">15%</p>
                <p className="mt-2 text-lg font-semibold text-gray-900">Average Revenue Increase</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200">
                <p className="text-5xl font-extrabold text-primary">100,000+</p>
                <p className="mt-2 text-lg font-semibold text-gray-900">Claims Processed Annually</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200">
                <p className="text-5xl font-extrabold text-primary">98%</p>
                <p className="mt-2 text-lg font-semibold text-gray-900">Client Satisfaction Rate</p>
            </div>
        </div>
    </div>
);

const SolutionsSection: React.FC = () => (
    <div className="py-16">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Comprehensive RCM Solutions</h2>
            <p className="text-lg text-gray-600 mb-12">We offer a full suite of services to optimize every stage of your revenue cycle, from patient registration to payment collection.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 p-6 rounded-xl text-center flex flex-col items-center shadow-xl">
                <div className="text-primary bg-secondary/30 rounded-full p-3 mb-4">
                    <svg fill="currentColor" height="32px" viewBox="0 0 256 256" width="32px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z"></path>
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Accurate Coding &amp; Billing</h3>
                <p className="mt-2 text-gray-600">Our certified coders ensure accurate and compliant coding, minimizing errors and maximizing reimbursement.</p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-xl text-center flex flex-col items-center shadow-xl">
                <div className="text-primary bg-secondary/30 rounded-full p-3 mb-4">
                    <svg fill="currentColor" height="32px" viewBox="0 0 256 256" width="32px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Efficient Claims Management</h3>
                <p className="mt-2 text-gray-600">We streamline the claims submission process, reducing turnaround times and improving cash flow.</p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-xl text-center flex flex-col items-center shadow-xl">
                <div className="text-primary bg-secondary/30 rounded-full p-3 mb-4">
                    <svg fill="currentColor" height="32px" viewBox="0 0 256 256" width="32px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path>
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Proactive Denial Management</h3>
                <p className="mt-2 text-gray-600">We identify and resolve denials quickly, recovering lost revenue and preventing future issues.</p>
            </div>
        </div>
    </div>
);

const IndustriesSection: React.FC = () => (
    <div className="py-16">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Industries We Serve</h2>
            <p className="text-lg text-gray-600 mb-12">We have extensive experience working with a wide range of healthcare providers, tailoring our services to meet their specific needs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-200">
                <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb2ujxRefwxlJBZ8v7POgJSYfShDnSUww3pbDhDDuwpinQ0NXzQzuoEo_xUEcRHTYVW0yLyxe4XPRIIICxIVvMjcdMzARRBsYREKVaF6EFcwfDyLQ_vdv0V0-xklYdfHsDCEyjUBD17ZFRAPCRvcOSf8fajgjhuWsGK7yl5IzGovilHvwXqYJHRBxXK4WxlqkRP90skUTIdPXRHQio8n6Tp9mZIFr6vctg_kiLLoe_7pnG4PLaC9oqI8_ZirMgbuKr4sh8I3oA7oSc" 
                    alt="Physician Practices" 
                    className="w-full h-48 object-cover" 
                    loading="lazy"
                    width="400"
                    height="192"
                />
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">Physician Practices</h3>
                    <p className="mt-2 text-gray-600">We support practices of all sizes, from solo practitioners to large multi-specialty groups.</p>
                </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-200">
                <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh7Izyz8df14bQfSocarwqmUfDw-zaV96kMTfaaFOQuxw4ruoV9fcyeMKSsOk1Embga0JP0uW0wz-MKsDKdyprmFC8a1A3Y7K-zYRDHhRtr57VeRMUgp0JKSGzzKQ4eQcRdoHu6UkQKxBxhl8N5TiUVzVPNy6ygbqc8rK5OHkoPNbeuH0HFA1ubJ6YZ2c5FSbJDy7q_5B9aPIioOVjmdcEOfAbea7nvQoT_eweuX_n4o_VUsqhnjtY9pg_LE5DLmF56RbwCKF_areP" 
                    alt="Specialty Clinics"
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    width="400"
                    height="192"
                />
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">Specialty Clinics</h3>
                    <p className="mt-2 text-gray-600">We understand the unique billing challenges of specialties like cardiology, orthopedics, and dermatology.</p>
                </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-200">
                 <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlNGDbIAbAjDchYrMjNVWpUtCqy6B83aCL7WPVy1HxJjPJtOumMN_AJ_AbgD1hTyGI0amdNGZXmyl04JRxTO0hY0x1XtzaRPzXy0Pfk7Q0zxE1wG9SNhyoviAQNLdRIeTEbqdema6nVWmdSjbnVyJo-cItxhJXhVtn5WLTIp4kxTUpIIimmseEnBoIiq7ekJWEs9FP1EZY0vz_IyJTWzpX95KrNSOQ90n2o59JTg0WYKHBU6AGXwTc2qU_TionYnCis05bO8PItmmJ"
                    alt="Hospitals &amp; Health Systems"
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    width="400"
                    height="192"
                />
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">Hospitals &amp; Health Systems</h3>
                    <p className="mt-2 text-gray-600">We provide scalable solutions for hospitals and integrated delivery networks.</p>
                </div>
            </div>
        </div>
    </div>
);

const TestimonialsSection: React.FC = () => (
    <div className="py-16">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 mb-12">We are proud to partner with leading healthcare providers to achieve exceptional results.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
            ))}
        </div>
    </div>
);

const MiniCalculatorSection: React.FC = () => (
    <div className="py-16">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Quick Savings Estimator</h2>
            <p className="text-lg text-gray-600 mb-12">Get a glimpse of your potential annual savings. For a full analysis, use our detailed KPI calculator.</p>
        </div>
        <div className="max-w-2xl mx-auto">
            <MiniKpiCalculator />
        </div>
    </div>
);


const CtaSection: React.FC = () => (
    <div className="bg-secondary/30 text-center py-20 px-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-gray-900 max-w-2xl mx-auto">Ready to Optimize Your Revenue Cycle?</h2>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">Contact us today for a free consultation and discover how WaveMicron can help your practice thrive.</p>
        <div className="mt-8">
            <Link to="/contact" className="bg-primary text-white font-bold text-base px-8 py-3 rounded-lg hover:bg-primary/90 transition-transform transform hover:scale-105">Get Started Today</Link>
        </div>
    </div>
);


const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <HeroSection />
      <ImpactSection />
      <SolutionsSection />
      <IndustriesSection />
      <TestimonialsSection />
      <MiniCalculatorSection />
      <CtaSection />
    </div>
  );
};

export default HomePage;