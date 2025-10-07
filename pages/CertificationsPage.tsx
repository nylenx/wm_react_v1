import React from 'react';
import { Link } from 'react-router-dom';

const certifications = [
    {
        title: 'HIPAA Compliant',
        icon: 'health_and_safety',
        description: 'We adhere to the strictest standards of the Health Insurance Portability and Accountability Act. Your patient\'s Protected Health Information (PHI) is secured through rigorous administrative, physical, and technical safeguards.',
        logo: null
    },
    {
        title: 'Certified Professional Coders (CPC)',
        icon: 'school',
        description: 'Our teams include coders certified by the American Academy of Professional Coders (AAPC). This ensures the highest level of accuracy and up-to-date knowledge of coding standards for your specialty.',
        logo: 'https://www.aapc.com/images/aapc-logo-blue.svg'
    },
    {
        title: 'Certified Professional Biller (CPB)',
        icon: 'receipt_long',
        description: 'Our billing specialists hold CPB certification, demonstrating expertise in all aspects of the revenue cycle, from claim submission and payer follow-up to payment posting and denial resolution.',
        logo: 'https://www.aapc.com/images/aapc-logo-blue.svg'
    },
    {
        title: 'SOC 2 Type II Audited',
        icon: 'security',
        description: 'Our platforms and processes undergo rigorous, independent SOC 2 audits to verify our enterprise-level security, availability, processing integrity, confidentiality, and privacy controls.',
        logo: null
    }
];

const CertificationsPage: React.FC = () => {
  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <div className="py-20 sm:py-28 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Our Commitment to Excellence and Security
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              We build trust through a foundation of certified expertise, unwavering compliance, and a culture of continuous improvement. Your practice and patient data are in safe, qualified hands.
            </p>
          </div>
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert) => (
              <div key={cert.title} className="bg-white p-8 rounded-xl shadow-xl border border-gray-200 flex flex-col">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-secondary/30 text-primary">
                    <span className="material-symbols-outlined text-3xl">{cert.icon}</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{cert.title}</h2>
                  </div>
                </div>
                <p className="mt-4 text-base text-gray-600 flex-grow">{cert.description}</p>
                 {cert.logo && (
                    <div className="mt-6 pt-4 border-t border-gray-100">
                        <img src={cert.logo} alt={`${cert.title} logo`} className="h-8" />
                    </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Continuous Education Section */}
      <div className="py-16 sm:py-24 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center">
                <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-secondary/30 text-primary">
                  <span className="material-symbols-outlined text-4xl">model_training</span>
                </div>
            </div>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900">Beyond the Badge: A Culture of Learning</h2>
            <p className="mt-4 text-lg text-gray-600">
              Certifications are just the beginning. We invest heavily in ongoing training and professional development for our entire team. This ensures we stay ahead of changing payer policies, new coding regulations, and emerging technologies, providing you with a partner that is always at the forefront of the industry.
            </p>
          </div>
        </div>
      </div>


      {/* CTA Section */}
      <div className="bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900 max-w-2xl mx-auto">Have Questions About Our Compliance?</h2>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">We believe in full transparency. If you have questions about our security protocols, certifications, or compliance framework, please don't hesitate to reach out.</p>
              <div className="mt-8">
                  <Link to="/contact" className="bg-primary text-white font-bold text-base px-8 py-3 rounded-lg hover:bg-primary/90 transition-transform transform hover:scale-105">
                      Contact Our Team
                  </Link>
              </div>
          </div>
      </div>
    </div>
  );
};

export default CertificationsPage;