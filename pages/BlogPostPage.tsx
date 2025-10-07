import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { getBlogPosts } from '../data/blogService';
import BlogPostSkeleton from '../components/BlogPostSkeleton';
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

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const [post, setPost] = useState<BlogPost | null | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Simulate a network request to fetch post data
    const timer = setTimeout(() => {
      const foundPost = getBlogPosts().find((p) => p.slug === slug);
      setPost(foundPost);
      setLoading(false);
    }, 500); // 500ms delay to showcase the skeleton

    return () => clearTimeout(timer);
  }, [slug]);

  useEffect(() => {
    if (post) {
      // Store original meta info
      const originalTitle = document.title;
      const descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      const originalDescription = descriptionTag ? descriptionTag.content : '';

      // Set new meta info from post data
      document.title = `${post.title} | WaveMicron`;
      if(descriptionTag) descriptionTag.content = post.excerpt;

      // Add OG and Twitter tags
      const addedTags: HTMLMetaElement[] = [];
      addedTags.push(setMetaTag('property', 'og:title', post.title));
      addedTags.push(setMetaTag('property', 'og:description', post.excerpt));
      addedTags.push(setMetaTag('property', 'og:image', post.imageUrl));
      addedTags.push(setMetaTag('property', 'og:url', window.location.href));
      addedTags.push(setMetaTag('property', 'og:type', 'article'));
      addedTags.push(setMetaTag('name', 'twitter:card', 'summary_large_image'));
      addedTags.push(setMetaTag('name', 'twitter:title', post.title));
      addedTags.push(setMetaTag('name', 'twitter:description', post.excerpt));
      addedTags.push(setMetaTag('name', 'twitter:image', post.imageUrl));

      // Cleanup on unmount or when post changes
      return () => {
          document.title = originalTitle;
          if (descriptionTag) descriptionTag.content = originalDescription;
          addedTags.forEach(tag => tag.remove());
      };
    }
  }, [post]); // Rerun when post data is loaded

  // Effect for Schema.org JSON-LD
  useEffect(() => {
    if (post) {
      const pageUrl = `${window.location.origin}/#${location.pathname}`;
      const homeUrl = `${window.location.origin}/#/`;
      const blogUrl = `${window.location.origin}/#/resources/blog`;

      const schemaData = [
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': pageUrl,
          },
          'headline': post.title,
          'image': post.imageUrl,
          'datePublished': new Date(post.date).toISOString(),
          'author': {
            '@type': 'Person',
            'name': post.author,
          },
          'publisher': {
            '@type': 'Organization',
            'name': 'WaveMicron',
            'logo': {
              '@type': 'ImageObject',
              'url': `${window.location.origin}/#` // Placeholder for a logo URL
            }
          },
          'description': post.excerpt,
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
              'name': 'Blog',
              'item': blogUrl,
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': post.title,
            },
          ],
        },
      ];

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'blog-post-schema';
      script.innerHTML = JSON.stringify(schemaData);
      document.head.appendChild(script);

      return () => {
        const existingScript = document.getElementById('blog-post-schema');
        if (existingScript) {
          existingScript.remove();
        }
      };
    }
  }, [post, location.pathname]);


  const handleShare = async () => {
    if (!post) return;

    // Reconstruct the full URL to ensure validity for the Web Share API.
    const shareUrl = `${window.location.origin}/#${location.pathname}`;

    const shareData = {
      title: post.title,
      text: post.excerpt,
      url: shareUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      try {
        await navigator.clipboard.writeText(shareUrl);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
      } catch (err) {
        console.error('Failed to copy URL:', err);
        alert('Failed to copy URL. Please copy it manually.');
      }
    }
  };

  if (loading) {
    return <BlogPostSkeleton />;
  }

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Post not found</h1>
        <p className="mt-4 text-lg text-gray-600">
          Sorry, we couldn't find the blog post you're looking for.
        </p>
        <Link
          to="/resources/blog"
          className="mt-8 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary/90"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-base font-semibold text-primary">{post.category}</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-6 text-base text-gray-600">
              By {post.author} on {post.date}
            </p>
          </div>
          <img
            src={post.imageUrl}
            alt={post.title}
            className="mt-12 aspect-video w-full rounded-xl object-cover shadow-lg"
            loading="lazy"
            decoding="async"
            width="1600"
            height="900"
          />
          <div className="prose prose-xl mx-auto mt-12 text-gray-700 space-y-6">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
             <Link
                to="/resources/blog"
                className="inline-flex items-center gap-2 rounded-md bg-secondary px-4 py-2 text-sm font-semibold text-primary hover:bg-secondary/80 transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Blog
            </Link>
             <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary/90 transition-colors disabled:bg-primary/70"
                disabled={isCopied}
            >
                 <span className="material-symbols-outlined text-base" aria-hidden="true">
                    {isCopied ? 'check' : 'share'}
                </span>
                {isCopied ? 'Link Copied!' : 'Share Post'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;