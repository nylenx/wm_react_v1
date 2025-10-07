import { blogPosts as initialBlogPosts } from './blogPosts';
import type { BlogPost } from '../types';

const STORAGE_KEY = 'wavemicron_blog_posts';

// Function to get all blog posts, combining initial data with posts from localStorage
export const getBlogPosts = (): BlogPost[] => {
  try {
    const storedPosts = localStorage.getItem(STORAGE_KEY);
    const userPosts: BlogPost[] = storedPosts ? JSON.parse(storedPosts) : [];
    
    // Combine and remove duplicates that might arise, preferring user posts
    const combinedPosts = [...userPosts, ...initialBlogPosts];
    const uniquePosts = Array.from(new Map(combinedPosts.map(post => [post.slug, post])).values());

    return uniquePosts;
  } catch (error) {
    console.error("Error retrieving blog posts from localStorage", error);
    return initialBlogPosts;
  }
};

// Function to add a new blog post and save it to localStorage
export const addBlogPost = (post: BlogPost): void => {
  try {
    const allPosts = getBlogPosts();
    // Filter out initial posts to only store user-created ones
    const initialSlugs = new Set(initialBlogPosts.map(p => p.slug));
    const userPosts = allPosts.filter(p => !initialSlugs.has(p.slug));

    // Add the new post to the beginning of the user-created posts
    const newPosts = [post, ...userPosts.filter(p => p.slug !== post.slug)];
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newPosts));
  } catch (error) {
    console.error("Error saving blog post to localStorage", error);
  }
};