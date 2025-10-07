import React from 'react';

interface GenericPageProps {
  title: string;
  content: string;
}

const GenericPage: React.FC<GenericPageProps> = ({ title, content }) => {
  return (
    <div className="bg-background-light py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center bg-white p-8 md:p-12 rounded-xl shadow-xl border border-gray-200">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-lg text-gray-700">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default GenericPage;