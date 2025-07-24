
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
      
      {/* Services Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive Dental Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of dental services to keep your smile healthy and beautiful.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'General Dentistry',
                description: 'Routine checkups, cleanings, and preventive care to maintain optimal oral health.',
                icon: '🦷',
                href: '/services/general-dentistry'
              },
              {
                title: 'Cosmetic Dentistry',
                description: 'Enhance your smile with our cosmetic treatments including teeth whitening and veneers.',
                icon: '✨',
                href: '/services/cosmetic-dentistry'
              },
              {
                title: 'Orthodontics',
                description: 'Straighten your teeth and correct your bite with our orthodontic solutions.',
                icon: '🦴',
                href: '/services/orthodontics'
              },
              {
                title: 'Emergency Care',
                description: 'Immediate attention for dental emergencies to relieve pain and prevent complications.',
                icon: '🚑',
                href: '/services/emergency-care'
              },
              {
                title: 'Pediatric Dentistry',
                description: 'Gentle dental care designed specifically for children and young adults.',
                icon: '👶',
                href: '/services/pediatric-dentistry'
              },
              {
                title: 'Restorative Dentistry',
                description: 'Repair and restore damaged teeth with our advanced restorative treatments.',
                icon: '🛠️',
                href: '/services/restorative-dentistry'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => navigate(service.href)}
              >
                <div className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button 
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(service.href);
                    }}
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/services')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>
      {/* Our Doctors Section with Pure HTML/CSS/JS Slider */}
      <section className="doctor-slider-section py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">Our Doctors</h2>
          <div className="slider-container relative">
            <button className="slide-btn prev" onClick={handlePrevDoctor}>&#x2039;</button>
            <div className="slider-track flex flex-col gap-8 transition-transform duration-500 ease-out" style={{ transform: `translateY(-${currentDoctor * 340}px)` }}>
              {doctors.map((doctor, idx) => (
                <div className="flex items-center bg-white min-h-[400px]" key={doctor.id}>
                  <div className="flex-1 flex flex-col justify-center pl-16 pr-8">
                    <h3 className="text-5xl font-extrabold text-gray-900 mb-4">{doctor.name}</h3>
                    <p className="text-2xl font-semibold text-gray-700 mb-4">{doctor.title}</p>
                    <div className="text-2xl text-gray-700 mb-4 whitespace-pre-line">
                      {doctor.specialties.join(", ")}
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex items-center justify-center w-[420px] h-[420px]">
                    <img src={doctor.image} alt={doctor.name} className="w-full h-full object-contain" />
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
