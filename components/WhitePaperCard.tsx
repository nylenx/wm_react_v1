import React from 'react';
import type { WhitePaper } from '../types';

interface WhitePaperCardProps {
  paper: WhitePaper;
}

const WhitePaperCard: React.FC<WhitePaperCardProps> = ({ paper }) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-200">
      <div className="overflow-hidden">
        <img 
          src={paper.imageUrl} 
          alt={paper.title} 
          className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          width="1600"
          height="900"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex-1">
          <p className="text-sm font-semibold text-primary">{paper.category}</p>
          <h3 className="mt-2 text-xl font-bold text-gray-900">{paper.title}</h3>
          <p className="mt-3 text-base text-gray-600 line-clamp-4">{paper.excerpt}</p>
        </div>
        <div className="mt-6">
          <a
            href={paper.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-secondary/80"
            onClick={(e) => { if(paper.downloadUrl === '#') e.preventDefault(); alert('Download link not available yet.'); }} // Placeholder action
          >
            <span className="material-symbols-outlined text-base">download</span>
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhitePaperCard;