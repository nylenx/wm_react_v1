import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

const HomePage = lazy(() => import('./pages/HomePage'));
const GenericPage = lazy(() => import('./pages/GenericPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const KpiCalculatorPage = lazy(() => import('./pages/KpiCalculatorPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const SubmitTestimonialPage = lazy(() => import('./pages/SubmitTestimonialPage'));
const AdminPage = lazy(() => import('./pages/AdminPage'));
const TechnologyIntegrationPage = lazy(() => import('./pages/TechnologyIntegrationPage'));
const IndustrySpecializationPage = lazy(() => import('./pages/IndustrySpecializationPage'));
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage'));
const CaseStudyDetailPage = lazy(() => import('./pages/CaseStudyDetailPage'));
const ClientTestimonialsPage = lazy(() => import('./pages/ClientTestimonialsPage'));
const PerformanceMetricsPage = lazy(() => import('./pages/PerformanceMetricsPage'));
const CertificationsPage = lazy(() => import('./pages/CertificationsPage'));
const WhitePapersPage = lazy(() => import('./pages/WhitePapersPage'));
const FrontEndRcmPage = lazy(() => import('./pages/FrontEndRcmPage'));
const MidCycleRcmPage = lazy(() => import('./pages/MidCycleRcmPage'));
const BackEndRcmPage = lazy(() => import('./pages/BackEndRcmPage'));
const PatientEngagementPage = lazy(() => import('./pages/PatientEngagementPage'));
const DenialManagementPage = lazy(() => import('./pages/DenialManagementPage'));
const EndToEndRcmPage = lazy(() => import('./pages/EndToEndRcmPage'));
const OurServicesPage = lazy(() => import('./pages/OurServicesPage'));
const OurExpertisePage = lazy(() => import('./pages/OurExpertisePage'));
const WhyChooseUsPage = lazy(() => import('./pages/WhyChooseUsPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));


const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              
              {/* Services */}
              <Route path="/services" element={<OurServicesPage />} />
              <Route path="/services/front-end-rcm" element={<FrontEndRcmPage />} />
              <Route path="/services/mid-cycle-rcm" element={<MidCycleRcmPage />} />
              <Route path="/services/back-end-rcm" element={<BackEndRcmPage />} />
              <Route path="/services/patient-engagement" element={<PatientEngagementPage />} />
              <Route path="/services/denial-management" element={<DenialManagementPage />} />
              <Route path="/services/end-to-end-rcm" element={<EndToEndRcmPage />} />

              {/* Our Expertise */}
              <Route path="/expertise" element={<OurExpertisePage />} />
              <Route path="/expertise/technology-integration" element={<TechnologyIntegrationPage />} />
              <Route path="/expertise/industry-specialization" element={<IndustrySpecializationPage />} />
              <Route path="/expertise/case-studies" element={<CaseStudiesPage />} />
              <Route path="/expertise/case-studies/:slug" element={<CaseStudyDetailPage />} />
              
              {/* Resources */}
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/resources/blog" element={<BlogPage />} />
              <Route path="/resources/blog/:slug" element={<BlogPostPage />} />
              <Route path="/resources/white-papers" element={<WhitePapersPage />} />
              <Route path="/resources/kpi-calculator" element={<KpiCalculatorPage />} />

              {/* Why Choose Us */}
              <Route path="/why-us" element={<WhyChooseUsPage />} />
              <Route path="/why-us/about-us" element={<AboutUsPage />} />
              <Route path="/why-us/client-testimonials" element={<ClientTestimonialsPage />} />
              <Route path="/why-us/performance-metrics" element={<PerformanceMetricsPage />} />
              <Route path="/why-us/certifications" element={<CertificationsPage />} />
              
              {/* Other Pages */}
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/submit-testimonial" element={<SubmitTestimonialPage />} />
              <Route path="/admin/create-post" element={<AdminPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </HashRouter>
  );
};

export default App;