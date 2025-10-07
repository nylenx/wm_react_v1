import React from 'react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../types';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <Link 
      to={`/resources/blog/${post.slug}`} 
      className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 border border-gray-200"
    >
      <div className="overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105" 
          loading="lazy"
          decoding="async"
          width="1600"
          height="900"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex-1">
          <p className="text-sm font-semibold text-primary">{post.category}</p>
          <h3 className="mt-2 text-xl font-bold text-gray-900">{post.title}</h3>
          <p className="mt-3 text-base text-gray-600 line-clamp-3">{post.excerpt}</p>
        </div>
        <div className="mt-6 flex items-center">
          <div>
            <p className="text-sm font-medium text-gray-900">{post.author}</p>
            <p className="text-sm text-gray-500">{post.date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostCard;