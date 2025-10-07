// Fix: Import React to provide types like React.ReactNode
import React from 'react';

export interface NavItem {
  name: string;
  href: string;
  children?: NavItem[];
}

export interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

export interface Partner {
  name: string;
  logo: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: string;
  category: string;
  content: string[]; // Array of paragraphs
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

export interface Specialization {
  name: string;
  description: string;
  icon: string; // Material Symbols Outlined name
}

export interface CaseStudyResult {
    value: string;
    label: string;
    icon: string; // Material Symbols Outlined name
}

export interface CaseStudy {
    slug: string;
    clientName: string;
    industry: string;
    imageUrl: string;
    challenge: string;
    solution: string;
    results: CaseStudyResult[];
}

export interface WhitePaper {
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  date: string;
  downloadUrl: string;
}