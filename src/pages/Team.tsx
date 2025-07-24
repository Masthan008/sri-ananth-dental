import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star, Briefcase } from 'lucide-react';
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
      <Footer />
      <FloatingCTA />
    </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-gray-900 flex items-center">
                            <GraduationCap className="w-4 h-4 mr-2 text-blue-600" />
                            Education & Qualifications
                          </h4>
                          <div className="mt-2 space-y-1.5">
                            {doctor.qualifications ? (
                              doctor.qualifications.map((qualification, idx) => (
                                <div key={idx} className="flex items-start">
                                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                  <span className="text-gray-600 text-sm">{qualification}</span>
                                </div>
                              ))
                            ) : (
                              <p className="text-gray-600 text-sm ml-6">{doctor.education}</p>
                            )}
                          </div>
                        </div>
                        
                        <div className="pt-2">
                          <h4 className="font-medium text-gray-900 mb-2">Specialties</h4>
                          <div className="flex flex-wrap gap-2">
                            {doctor.specialties.map((specialty, idx) => (
                              <Badge 
                                key={idx} 
                                variant="secondary" 
                                className="bg-blue-50 text-blue-700 hover:bg-blue-50 text-xs px-2.5 py-1"
                              >
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        {doctor.achievements && doctor.achievements.length > 0 && (
                          <div className="pt-2">
                            <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                              <Award className="w-4 h-4 mr-2 text-blue-600" />
                              Achievements
                            </h4>
                            <div className="space-y-2">
                              {doctor.achievements.map((achievement, idx) => (
                                <div key={idx} className="flex items-start">
                                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-2"></span>
                                  <span className="text-sm text-gray-600">{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <CardFooter className="border-t p-4">
                      <Button 
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/booking?doctorId=${doctor.id}`);
                        }}
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Appointment with {doctor.name.split(' ')[0]}
                      </Button>
                    </CardFooter>
                  </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        // ...existing code...

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div 
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('team.readyToMeet', 'Ready to Meet Our Team?')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('team.ctaDescription', 'Schedule your consultation today and experience the difference our caring team can make.')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => navigate('/booking')}
              >
                <Calendar className="w-5 h-5 mr-2" />
                {t('team.bookAppointment', 'Book an Appointment')}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Phone className="w-5 h-5 mr-2" />
                {t('contact.contactUs', 'Contact Us')}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Team;
