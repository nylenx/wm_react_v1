import type { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
    {
        slug: 'aspen-orthopedics-revenue-increase',
        clientName: 'Aspen Orthopedics',
        industry: 'Orthopedic Surgery',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQeLzF_V00u6_kUqG02DEXHPfC90e546iR7vQo2kY_x17g4bJpT0d8-0CjR2R41H6s38y8b9O3wQv-3oI7B4tVd70Dk99n_s8G5rUaT6g1jVn2D6jW3eF0sQW5cQ1-Qn8wI7y8l_qP-r1Q8P_h-z7',
        challenge: 'Aspen Orthopedics was struggling with a high rate of claim denials for complex surgical procedures and a collections process that was lagging, impacting their overall cash flow and profitability.',
        solution: 'WaveMicron implemented a multi-faceted strategy that included a comprehensive audit of their coding practices, specialized training for their staff on orthopedic modifiers, and the deployment of our proactive denial management system to identify and resolve issues before they impacted revenue.',
        results: [
            { value: '22%', label: 'Increase in Net Collections', icon: 'payments' },
            { value: '45%', label: 'Reduction in Claim Denials', icon: 'thumb_down_off_alt' },
            { value: '15 Days', label: 'Decrease in Average A/R Days', icon: 'speed' },
        ],
    },
    {
        slug: 'pinnacle-cardiology-workflow-efficiency',
        clientName: 'Pinnacle Cardiology',
        industry: 'Cardiology Practice',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB21J432pG7kK4f_4c2b9a7fA85F2C54D48e9d564177c86a2fA26A18d94c9E83b067f9D060b299a9a38C3B878028D470e86b24d74775d713c23d47E032997C0b11A4F46985C2d',
        challenge: 'Pinnacle Cardiology faced significant administrative burdens due to inefficient workflows and a lack of integration between their EMR and billing systems, leading to charge capture leakage and delayed claim submissions.',
        solution: 'We established a seamless integration between their existing EMR and our RCM platform. This automated the flow of patient and charge data, eliminating manual entry and providing real-time visibility into their revenue cycle. We also optimized their patient statement and collections process.',
        results: [
            { value: '98%', label: 'Charge Capture Rate', icon: 'capture' },
            { value: '80%', label: 'Reduction in Manual Data Entry', icon: 'edit_off' },
            { value: '30%', label: 'Faster Claim Submission', icon: 'bolt' },
        ],
    },
     {
        slug: 'sunstone-mental-health-billing-compliance',
        clientName: 'Sunstone Mental Health',
        industry: 'Behavioral Health',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXvYp8Z5F8E1d4F5c68B92e0B7A4E8f3F0e5b7c2F1f8F4F038F3c6b2A3F9C5E4E3e1D0C9c8B7A6E5F4D3C2B1A0987654321fedcba9876543210',
        challenge: 'Navigating the complex and ever-changing rules for behavioral health billing was proving difficult for Sunstone. They faced issues with pre-authorizations, timed service coding, and compliance, which led to payment delays and audit risks.',
        solution: 'Our team of certified behavioral health coders took over their billing operations. We implemented a rigorous pre-authorization verification process and provided their clinicians with clear documentation guidelines, ensuring every claim was accurate and compliant from the start.',
        results: [
            { value: '100%', label: 'Billing Compliance Adherence', icon: 'verified' },
            { value: '50%', label: 'Reduction in Authorization Denials', icon: 'gpp_bad' },
            { value: '18%', label: 'Increase in Overall Revenue', icon: 'trending_up' },
        ],
    },
];
