import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star, Briefcase, Phone } from 'lucide-react';
import { FloatingCTA } from '@/components/FloatingCTA';
import { HeroSection } from '@/components/HeroSection';
import { useTranslation } from 'react-i18next';
import { doctors } from '@/data/doctors';
import { motion } from 'framer-motion';

// Framer Motion animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: "easeOut"
    }
  })
};

const Team = () => {
  const { t } = useTranslation('common');
  const navigate = useNavigate();

  // Function to handle doctor card click
  const handleDoctorClick = (doctorId: number) => {
    navigate(`/team/doctor/${doctorId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection
        title="Meet Our Dental Team"
        subtitle="Experienced professionals dedicated to your smile"
        backgroundImage="/images/hero/team-bg.jpg"
        minHeight="50vh"
        className="bg-blue-900/90"
      />
      <main className="py-12">
        {/* Our Dentists */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Expert Dentists
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Board-certified dentists with extensive experience in general and cosmetic dentistry
              </p>
            </div>
            <div className="space-y-12">
              {doctors.map((doctor, index) => (
                <motion.div 
                  key={doctor.id}
                  className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden h-auto md:h-[400px] w-full"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={cardVariants}
                  custom={index}
                  onClick={() => handleDoctorClick(doctor.id)}
                >
                  <div className="md:w-1/2 h-64 md:h-full bg-gray-100 flex items-center justify-center p-8">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name} 
                      className="h-full w-auto object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                      {doctor.name}
                    </h3>
                    <p className="text-xl font-semibold text-blue-600 mb-4">
                      {doctor.title}
                    </p>
                    <div className="text-lg text-gray-700 mb-6">
                      {doctor.specialties.join(", ")}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <div className="flex items-center mr-6">
                        <Star className="w-5 h-5 text-amber-400 fill-current mr-1" />
                        <span className="font-medium">{doctor.rating}</span>
                        <span className="mx-1">•</span>
                        <span>{doctor.reviews} reviews</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1 text-blue-600" />
                        <span>{doctor.experience}</span>
                      </div>
                    </div>
                    <Button 
                      className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 self-start"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDoctorClick(doctor.id);
                      }}
                    >
                      View Profile
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Meet Our Team?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Schedule an appointment with one of our expert dentists today and take the first step towards a healthier smile.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
              onClick={() => navigate('/booking')}
            >
              Book an Appointment
            </Button>
            <Button 
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Team;
