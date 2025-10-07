import React from 'react';

const GridOverlay: React.FC = () => (
    <div className="grid-overlay">
        {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className={i === 0 ? 'highlight' : ''}></div>
        ))}
    </div>
);

export default GridOverlay;