import { Suspense, useEffect, useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/services/ServiceDetail";
import Team from "./pages/Team";
import PatientInfo from "./pages/PatientInfo";
import PatientInfoDetail from "./pages/patient-info/PatientInfoDetail";
import VideoTestimonials from "./pages/VideoTestimonials";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Emergency from "./pages/Emergency";
import NotFound from "./pages/NotFound";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import DoctorProfile from "./pages/DoctorProfile";
import Insurance from "./pages/info-pages/Insurance";
import FAQ from "./pages/info-pages/FAQ";
import Careers from "./pages/info-pages/Careers";
import Testimonials from "./pages/info-pages/Testimonials";
import './styles/global.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

// Add Suspense fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  // Initialize AOS (Animate On Scroll)
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 100
    });
    
    // Refresh AOS when language changes
    AOS.refresh();
  }, []);

  // Set document language and direction on initial load and language change
  useEffect(() => {
    const handleLanguageChange = () => {
      document.documentElement.lang = i18n.language;
      // Refresh AOS when language changes to ensure animations work with RTL/LTR changes
      AOS.refresh();
      document.documentElement.dir = i18n.dir(i18n.language);
      
      // Ensure all required namespaces are loaded
      i18n.loadNamespaces(['common', 'patient-info'], () => {
        // Namespaces loaded
      });
    };
    
    // Set initial language and load namespaces
    handleLanguageChange();
    
    // Listen for language changes
    i18n.on('languageChanged', handleLanguageChange);
    
    // Cleanup
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };

    // Handle scroll for sticky header
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <Suspense fallback={<LoadingFallback />}>
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <div className={`sticky-header fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'scrolled bg-white/90 shadow-md' : 'bg-white/80'}`}>
                {/* Removed duplicate language switcher - now in footer */}
              </div>
              
              <div className="pt-4"> {/* Reduced padding to minimize top gap */}
                <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:serviceId" element={<ServiceDetail />} />
                <Route path="/team" element={<Team />} />
                <Route path="/patient-info" element={<PatientInfo />} />
                <Route path="/patient-info/:sectionId" element={<PatientInfoDetail />} />
                <Route path="/video-testimonials" element={<VideoTestimonials />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/emergency" element={<Emergency />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/doctors/:id" element={<DoctorProfile />} />
                {/* Info Pages */}
                <Route path="/insurance" element={<Insurance />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/testimonials" element={<Testimonials />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </I18nextProvider>
    </Suspense>
  );
};

export default App;
