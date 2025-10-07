import React, { useState } from 'react';
import { addBlogPost } from '../data/blogService';
import type { BlogPost } from '../types';

const AdminPage: React.FC = () => {
    const [formData, setFormData] = useState({
        title: '',
        excerpt: '',
        imageUrl: '',
        author: '',
        category: '',
        content: '',
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        // Basic validation
        if (Object.values(formData).some(val => val.trim() === '')) {
            setStatus('error');
            return;
        }

        // Create slug from title
        const slug = formData.title
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(/[^\w-]+/g, '') // Remove all non-word chars
            .replace(/--+/g, '-'); // Replace multiple - with single -

        const newPost: BlogPost = {
            ...formData,
            slug,
            date: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }),
            content: formData.content.split('\n').filter(p => p.trim() !== ''), // Split content by newlines for paragraphs
        };

        addBlogPost(newPost);

        setStatus('submitted');
        setFormData({
            title: '',
            excerpt: '',
            imageUrl: '',
            author: '',
            category: '',
            content: '',
        });
        
        // Reset status message after a few seconds
        setTimeout(() => setStatus('idle'), 3000);
    };


    return (
        <div className="bg-background-light py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900">Create New Blog Post</h1>
                        <p className="mt-4 text-lg text-gray-600">Fill out the form below to publish a new article to the blog.</p>
                    </div>

                    <div className="mt-12 bg-white p-8 rounded-xl shadow-xl border border-gray-200">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Post Title</label>
                                <input type="text" name="title" id="title" required value={formData.title} onChange={handleChange} placeholder="Enter a catchy title" className="form-input mt-1 block w-full rounded-lg border-gray-300 focus:ring-primary focus:border-primary" />
                            </div>
                             <div>
                                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                                <input type="text" name="category" id="category" required value={formData.category} onChange={handleChange} placeholder="e.g., Denial Management" className="form-input mt-1 block w-full rounded-lg border-gray-300 focus:ring-primary focus:border-primary" />
                            </div>
                            <div>
                                <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700">Excerpt</label>
                                <textarea name="excerpt" id="excerpt" rows={3} required value={formData.excerpt} onChange={handleChange} placeholder="A short summary of the post..." className="form-textarea mt-1 block w-full rounded-lg border-gray-300 focus:ring-primary focus:border-primary"></textarea>
                            </div>
                            <div>
                                <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL</label>
                                <input type="url" name="imageUrl" id="imageUrl" required value={formData.imageUrl} onChange={handleChange} placeholder="https://example.com/image.jpg" className="form-input mt-1 block w-full rounded-lg border-gray-300 focus:ring-primary focus:border-primary" />
                            </div>
                             <div>
                                <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
                                <input type="text" name="author" id="author" required value={formData.author} onChange={handleChange} placeholder="Author's name" className="form-input mt-1 block w-full rounded-lg border-gray-300 focus:ring-primary focus:border-primary" />
                            </div>
                            <div>
                                <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
                                <textarea name="content" id="content" rows={10} required value={formData.content} onChange={handleChange} placeholder="Write the full blog post here. Separate paragraphs with a new line." className="form-textarea mt-1 block w-full rounded-lg border-gray-300 focus:ring-primary focus:border-primary"></textarea>
                            </div>
                            
                            {status === 'error' && (
                                <div className="rounded-md bg-red-50 p-4">
                                    <p className="text-sm text-red-700">Please fill out all fields before submitting.</p>
                                </div>
                            )}

                             {status === 'submitted' && (
                                <div className="rounded-md bg-secondary/50 p-4">
                                    <p className="text-sm text-primary font-semibold">Blog post submitted successfully!</p>
                                </div>
                            )}

                            <div>
                                <button type="submit" disabled={status === 'submitting'} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-primary/70">
                                    {status === 'submitting' ? 'Publishing...' : 'Publish Post'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;