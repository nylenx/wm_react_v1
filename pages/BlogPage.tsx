import React, { useState, useEffect } from 'react';
import { getBlogPosts } from '../data/blogService';
import BlogPostCard from '../components/BlogPostCard';
import type { BlogPost } from '../types';

// Helper to set or create a meta tag
const setMetaTag = (attr: 'name' | 'property', value: string, content: string): HTMLMetaElement => {
    let element = document.querySelector<HTMLMetaElement>(`meta[${attr}='${value}']`);
    if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, value);
        document.head.appendChild(element);
    }
    element.setAttribute('content', content);
    return element;
};

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [allPosts] = useState<BlogPost[]>(() => getBlogPosts());
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(allPosts);

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase().trim();
    if (!lowercasedQuery) {
      setFilteredPosts(allPosts);
      return;
    }

    const results = allPosts.filter(post =>
      post.title.toLowerCase().includes(lowercasedQuery) ||
      post.excerpt.toLowerCase().includes(lowercasedQuery) ||
      post.content.join(' ').toLowerCase().includes(lowercasedQuery)
    );
    setFilteredPosts(results);
  }, [searchQuery, allPosts]);

  useEffect(() => {
    // Store original meta info
    const originalTitle = document.title;
    const descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const originalDescription = descriptionTag ? descriptionTag.content : '';

    // Set new meta info for the blog page
    const pageTitle = "Blog | WaveMicron RCM";
    const pageDescription = "Insights and analysis on Revenue Cycle Management, medical billing, and healthcare technology from the experts at WaveMicron.";
    const pageImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuDQeLzF_V00u6_kUqG02DEXHPfC90e546iR7vQo2kY_x17g4bJpT0d8-0CjR2R41H6s38y8b9O3wQv-3oI7B4tVd70Dk99n_s8G5rUaT6g1jVn2D6jW3eF0sQW5cQ1-Qn8wI7y8l_qP-r1Q8P_h-z7"; // Using a featured image for the whole blog

    document.title = pageTitle;
    if(descriptionTag) descriptionTag.content = pageDescription;

    // Add OG and Twitter tags
    const addedTags: HTMLMetaElement[] = [];
    addedTags.push(setMetaTag('property', 'og:title', pageTitle));
    addedTags.push(setMetaTag('property', 'og:description', pageDescription));
    addedTags.push(setMetaTag('property', 'og:image', pageImage));
    addedTags.push(setMetaTag('property', 'og:url', window.location.href));
    addedTags.push(setMetaTag('property', 'og:type', 'website'));
    addedTags.push(setMetaTag('name', 'twitter:card', 'summary_large_image'));
    addedTags.push(setMetaTag('name', 'twitter:title', pageTitle));
    addedTags.push(setMetaTag('name', 'twitter:description', pageDescription));
    addedTags.push(setMetaTag('name', 'twitter:image', pageImage));
    
    // Cleanup on unmount
    return () => {
        document.title = originalTitle;
        if (descriptionTag) descriptionTag.content = originalDescription;
        addedTags.forEach(tag => tag.remove());
    };
  }, []); // Run only on component mount

  return (
    <div className="bg-background-light py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            From the WaveMicron Blog
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Insights and analysis on Revenue Cycle Management, medical billing, and healthcare technology.
          </p>
        </div>

        {/* Search Input */}
        <div className="mx-auto mt-12 max-w-lg">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles by keyword..."
              className="block w-full rounded-lg border-gray-300 bg-white py-3 pl-10 pr-3 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-primary transition"
              aria-label="Search articles"
            />
          </div>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-16 max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-gray-900">No Results Found</h2>
            <p className="mt-4 text-gray-600">
              We couldn't find any articles matching your search for "{searchQuery}". Try using different keywords.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;