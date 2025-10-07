import type { NavItem } from './types';

export const NAV_LINKS: NavItem[] = [
  { name: 'Home', href: '/' },
  { 
    name: 'Services', 
    href: '/services',
    children: [
      { name: 'Front-End RCM', href: '/services/front-end-rcm' },
      { name: 'Mid-Cycle RCM', href: '/services/mid-cycle-rcm' },
      { name: 'Back-End RCM', href: '/services/back-end-rcm' },
      { name: 'Patient Engagement', href: '/services/patient-engagement' },
      { name: 'Denial Management', href: '/services/denial-management' },
      { name: 'End-to-End RCM', href: '/services/end-to-end-rcm' },
    ]
  },
  {
    name: 'Our Expertise',
    href: '/expertise',
    children: [
      { name: 'Technology Integration', href: '/expertise/technology-integration'},
      { name: 'Industry Specialization', href: '/expertise/industry-specialization'},
      { name: 'Case Studies', href: '/expertise/case-studies'},
    ]
  },
  {
    name: 'Why Choose Us',
    href: '/why-us',
    children: [
        { name: 'About Us', href: '/why-us/about-us'},
        { name: 'Client Testimonials', href: '/why-us/client-testimonials'},
        { name: 'Performance Metrics', href: '/why-us/performance-metrics'},
        { name: 'Certifications', href: '/why-us/certifications'},
    ]
  },
  { 
    name: 'Resources', 
    href: '/resources',
    children: [
      { name: 'Blog', href: '/resources/blog' },
      { name: 'White Papers', href: '/resources/white-papers' },
      { name: 'KPI Calculator', href: '/resources/kpi-calculator' },
    ]
  },
];