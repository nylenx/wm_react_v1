import React from 'react';
import { teamMembers } from '../data/teamMembers';

const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <div className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              About WaveMicron
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              We are a team of dedicated experts committed to revolutionizing Revenue Cycle Management for healthcare providers. Our goal is to empower your practice to achieve financial clarity and operational excellence, so you can focus on what matters most: patient care.
            </p>
          </div>
        </div>
      </div>

      {/* Mission, Vision, Values Section */}
      <div className="py-16 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary/30 text-primary">
                    <span className="material-symbols-outlined text-4xl">rocket_launch</span>
                </div>
              <h2 className="mt-5 text-2xl font-bold text-gray-900">Our Mission</h2>
              <p className="mt-2 text-base text-gray-600">
                To simplify the complexities of medical billing and RCM through innovative technology and expert support, maximizing the financial health of our healthcare partners.
              </p>
            </div>
            <div className="flex flex-col items-center">
                 <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary/30 text-primary">
                    <span className="material-symbols-outlined text-4xl">visibility</span>
                </div>
              <h2 className="mt-5 text-2xl font-bold text-gray-900">Our Vision</h2>
              <p className="mt-2 text-base text-gray-600">
                To be the most trusted RCM partner in the industry, recognized for our unwavering commitment to client success, transparency, and technological advancement.
              </p>
            </div>
            <div className="flex flex-col items-center">
                 <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary/30 text-primary">
                    <span className="material-symbols-outlined text-4xl">handshake</span>
                </div>
              <h2 className="mt-5 text-2xl font-bold text-gray-900">Our Values</h2>
              <p className="mt-2 text-base text-gray-600">
                Integrity, Partnership, and Excellence. We operate with transparency, treat our clients as partners, and relentlessly pursue excellence in everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Leadership Team
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The driving force behind our success is a group of passionate leaders with deep industry experience.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
            {teamMembers.map((person) => (
              <div key={person.name}>
                <img className="mx-auto h-40 w-40 rounded-full object-cover shadow-lg" src={person.imageUrl} alt={person.name} loading="lazy" width="160" height="160" />
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-base text-primary">{person.role}</p>
                <p className="mt-2 text-sm text-gray-600">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;