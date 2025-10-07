import React from 'react';

const BlogPostSkeleton: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl animate-pulse">
          <div className="text-center">
            <div className="h-4 bg-gray-200 rounded-md w-24 mx-auto"></div>
            <div className="mt-4 h-10 bg-gray-300 rounded-md w-3/4 mx-auto"></div>
            <div className="mt-8 h-4 bg-gray-200 rounded-md w-48 mx-auto"></div>
          </div>
          <div className="mt-12 aspect-video w-full rounded-xl bg-gray-300"></div>
          <div className="mx-auto mt-12 space-y-6">
            <div className="h-5 bg-gray-200 rounded-md w-full"></div>
            <div className="h-5 bg-gray-200 rounded-md w-11/12"></div>
            <div className="h-5 bg-gray-200 rounded-md w-full"></div>
            <div className="h-5 bg-gray-200 rounded-md w-5/6"></div>
            <div className="h-5 bg-gray-200 rounded-md w-full"></div>
          </div>

          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="h-10 bg-gray-200 rounded-md w-36"></div>
            <div className="h-10 bg-gray-200 rounded-md w-36"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostSkeleton;
