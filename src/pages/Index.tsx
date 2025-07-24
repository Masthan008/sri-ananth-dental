
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
      {/* Navigation to Services page */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate('/services')}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Explore Our Services
        </button>
      </div>
      {/* Our Doctors Section with Pure HTML/CSS/JS Slider */}
      <section className="doctor-slider-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">Our Doctors</h2>
          <div className="slider-container relative">
            <button className="slide-btn prev" onClick={handlePrevDoctor}>&#x2039;</button>
            <div className="slider-track flex gap-8 transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentDoctor * 340}px)` }}>
              {doctors.map((doctor, idx) => (
                <div className="doctor-card min-w-[320px] bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden h-full flex flex-col" key={doctor.id}>
                  <div className="relative overflow-hidden h-80 bg-gray-100">
                    <img src={doctor.image} alt={doctor.name} className="w-full h-full object-contain transition-transform duration-500" style={{ objectPosition: 'center 30%' }} />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-blue-800 mb-1">{doctor.name}</h3>
                    <p className="text-blue-600 text-lg mb-1">{doctor.title}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {doctor.specialties.map((specialty, idx) => (
                        <span key={idx} className="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded">{specialty}</span>
                      ))}
                    </div>
                    <p className="text-gray-500 text-sm mb-1">Experience: {doctor.experience}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="slide-btn next" onClick={handleNextDoctor}>&#x203A;</button>
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
