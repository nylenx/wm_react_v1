import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';

const CaseStudyDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const location = useLocation();
    const study = caseStudies.find((s) => s.slug === slug);

    // Effect for Schema.org JSON-LD
    useEffect(() => {
        if (study) {
            const pageUrl = `${window.location.origin}/#${location.pathname}`;
            const homeUrl = `${window.location.origin}/#/`;
            const caseStudiesUrl = `${window.location.origin}/#/expertise/case-studies`;

            const schemaData = [
                {
                    '@context': 'https://schema.org',
                    '@type': 'Article',
                    'mainEntityOfPage': {
                        '@type': 'WebPage',
                        '@id': pageUrl,
                    },
                    'headline': `Case Study: ${study.clientName}`,
                    'image': study.imageUrl,
                    'author': {
                        '@type': 'Organization',
                        'name': 'WaveMicron',
                    },
                    'publisher': {
                        '@type': 'Organization',
                        'name': 'WaveMicron',
                         'logo': {
                           '@type': 'ImageObject',
                           'url': `${window.location.origin}/#` // Placeholder
                         }
                    },
                    'description': study.challenge,
                },
                {
                    '@context': 'https://schema.org',
                    '@type': 'BreadcrumbList',
                    'itemListElement': [
                        {
                            '@type': 'ListItem',
                            'position': 1,
                            'name': 'Home',
                            'item': homeUrl,
                        },
                        {
                            '@type': 'ListItem',
                            'position': 2,
                            'name': 'Case Studies',
                            'item': caseStudiesUrl,
                        },
                        {
                            '@type': 'ListItem',
                            'position': 3,
                            'name': study.clientName,
                        },
                    ],
                },
            ];

            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.id = 'case-study-schema';
            script.innerHTML = JSON.stringify(schemaData);
            document.head.appendChild(script);

            return () => {
                const existingScript = document.getElementById('case-study-schema');
                if (existingScript) {
                    existingScript.remove();
                }
            };
        }
    }, [study, location.pathname]);


    if (!study) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <h1 className="text-4xl font-bold text-gray-900">Case Study Not Found</h1>
                <p className="mt-4 text-lg text-gray-600">
                    Sorry, we couldn't find the success story you're looking for.
                </p>
                <Link
                    to="/expertise/case-studies"
                    className="mt-8 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary/90"
                >
                    Back to Case Studies
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                         <p className="text-base font-semibold text-primary">{study.industry}</p>
                        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                           {study.clientName}
                        </h1>
                    </div>

                    <img
                        src={study.imageUrl}
                        alt={`Success story for ${study.clientName}`}
                        className="w-full aspect-video object-cover rounded-xl shadow-lg"
                        loading="lazy"
                        width="1600"
                        height="900"
                    />

                    {/* Content Sections */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                         <div>
                            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-3xl">flag</span>
                                The Challenge
                            </h2>
                            <p className="mt-4 text-lg text-gray-700">{study.challenge}</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-3xl">lightbulb</span>
                                The Solution
                            </h2>
                            <p className="mt-4 text-lg text-gray-700">{study.solution}</p>
                        </div>
                    </div>
                    
                    {/* Results Section */}
                    <div className="mt-16 bg-background-light p-8 rounded-xl border border-secondary">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">The Results</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                            {study.results.map(result => (
                                <div key={result.label} className="flex flex-col items-center">
                                    <span className="material-symbols-outlined text-primary text-5xl">{result.icon}</span>
                                    <p className="mt-2 text-4xl font-extrabold text-gray-900">{result.value}</p>
                                    <p className="text-base text-gray-600">{result.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Back Button */}
                    <div className="mt-16 text-center">
                        <Link
                            to="/expertise/case-studies"
                            className="inline-flex items-center gap-2 rounded-md bg-secondary px-4 py-2 text-sm font-semibold text-primary hover:bg-secondary/80 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                            Back to All Case Studies
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyDetailPage;