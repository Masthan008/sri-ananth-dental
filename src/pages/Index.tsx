
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { AboutPreview } from "@/components/AboutPreview";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { doctors } from "@/data/doctors";
import { FloatingChatBot } from "@/components/FloatingChatBot";
import WelcomePopup from "@/components/WelcomePopup";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Framer Motion animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};


// Removed unused custom hook code

const Index = () => {
  const navigate = useNavigate();
  const [currentDoctor, setCurrentDoctor] = useState(0);
  const CARD_WIDTH = 270;
  const maxIndex = Math.max(0, doctors.length - 1);

  const handleNextDoctor = () => {
    setCurrentDoctor((prev) => (prev < maxIndex ? prev + 1 : prev));
  };
  const handlePrevDoctor = () => {
    setCurrentDoctor((prev) => (prev > 0 ? prev - 1 : prev));
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Header />
      <Hero />
      
      {/* Our Doctors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Meet Our Expert Dentists</h2>
          
          <div className="slider-container relative">
            <button 
              className="slide-btn prev absolute left-0 top-1/2 -translate-y-1/2 -left-6 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
              onClick={handlePrevDoctor}
            >
              <span className="text-2xl">&#x2039;</span>
            </button>
            
            <div className="slider-track flex flex-col gap-8 transition-transform duration-500 ease-out" style={{ transform: `translateY(-${currentDoctor * 340}px)` }}>
              {doctors.map((doctor, idx) => (
                <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden" key={doctor.id}>
                  <div className="md:w-1/3 h-64 md:h-auto">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{doctor.title}</p>
                    <p className="text-gray-600 mb-4">{doctor.specialties.join(", ")}</p>
                    <button 
                      onClick={() => navigate(`/team#${doctor.id}`)}
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                    >
                      View Profile
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              className="slide-btn next absolute right-0 top-1/2 -translate-y-1/2 -right-6 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
              onClick={handleNextDoctor}
            >
              <span className="text-2xl">&#x203A;</span>
            </button>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {doctors.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentDoctor(index)}
                className={`w-3 h-3 rounded-full transition-colors ${currentDoctor === index ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
      {/* Floating ChatBot at bottom center with navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <FloatingChatBot showServicesNav />
      </div>
      {/* Welcome Popup */}
      <WelcomePopup />
    </div>
  );
};

export default Index;
