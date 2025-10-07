import React from 'react';
import { Link } from 'react-router-dom';
import type { CaseStudy } from '../types';

interface CaseStudyCardProps {
  study: CaseStudy;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study }) => {
  return (
    <Link 
      to={`/expertise/case-studies/${study.slug}`} 
      className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-200"
    >
      <div className="overflow-hidden">
        <img 
          src={study.imageUrl} 
          alt={`Case study for ${study.clientName}`} 
          className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105" 
          loading="lazy"
          width="1600"
          height="900"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-semibold text-primary">{study.industry}</p>
        <h3 className="mt-2 text-xl font-bold text-gray-900">{study.clientName}</h3>
        <p className="mt-3 text-base text-gray-600 line-clamp-3">{study.challenge}</p>
        <div className="mt-6 pt-4 border-t border-gray-100">
            <p className="text-sm font-bold text-gray-800 mb-2">Key Results:</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
                 {study.results.slice(0, 2).map(result => (
                    <div key={result.label} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="material-symbols-outlined text-primary text-base">{result.icon}</span>
                        <span><strong>{result.value}</strong> {result.label}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyCard;