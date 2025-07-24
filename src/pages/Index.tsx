
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { AboutPreview } from "@/components/AboutPreview";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { doctors } from "@/data/doctors";
import { FloatingChatBot } from "@/components/FloatingChatBot";
import WelcomePopup from "@/components/WelcomePopup";
import { useNavigate } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

// Framer Motion animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};


// Removed unused custom hook code

const Index = () => {
  const navigate = useNavigate();
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
      {/* Our Doctors Section with vertical scroll animation */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10 text-blue-900">Our Doctors</h2>
          <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-blue-50 scroll-smooth" style={{ WebkitOverflowScrolling: 'touch' }}>
            {doctors.map((doctor, idx) => (
              <motion.div
                key={doctor.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-6 min-w-[320px]"
                variants={{
                  hidden: { opacity: 0, x: 80 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <img src={doctor.image} alt={doctor.name} className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-blue-200" />
                <h3 className="text-2xl font-bold text-blue-800 mb-2">{doctor.name}</h3>
                <p className="text-blue-600 mb-2">{doctor.title}</p>
                <p className="text-gray-600 text-center mb-2">{doctor.specialties.join(', ')}</p>
                <p className="text-gray-500 text-sm mb-2">Experience: {doctor.experience}</p>
              </motion.div>
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
