import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Phone, Calendar, Award, GraduationCap, Briefcase, Calendar as CalendarIcon, CheckCircle } from 'lucide-react';
import { FloatingCTA } from '@/components/FloatingCTA';
import { HeroSection } from '@/components/HeroSection';
import { useTranslation } from 'react-i18next';
import { doctors } from '@/data/doctors';
import { Badge } from '@/components/ui/badge';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const teamSectionRef = useRef<HTMLDivElement>(null);
  const doctorCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize animations
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 100
    });

    // Initialize GSAP animations
    const ctx = gsap.context(() => {
      // Animate doctor cards with staggered entrance
      doctorCardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        // Set initial state
        gsap.set(card, {
          y: 50,
          opacity: 0,
          scale: 0.95
        });

        // Create animation
        gsap.to(card, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true
          },
          onComplete: () => {
            // Add hover effect after initial animation
            card.addEventListener('mouseenter', () => {
              gsap.to(card, { 
                y: -5,
                duration: 0.3,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              });
            });
            
            card.addEventListener('mouseleave', () => {
              gsap.to(card, { 
                y: 0,
                duration: 0.3,
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              });
            });
          }
        });
      });

      // Animate section title
      const title = teamSectionRef.current?.querySelector('h2');
      const subtitle = teamSectionRef.current?.querySelector('p');

      if (title) {
        gsap.fromTo(title,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: title,
              start: 'top 90%',
              toggleActions: 'play none none none',
              once: true
            }
          }
        );
      }

      if (subtitle) {
        gsap.fromTo(subtitle,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2,
            scrollTrigger: {
              trigger: subtitle,
              start: 'top 90%',
              toggleActions: 'play none none none',
              once: true
            }
          }
        );
      }
    }, teamSectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);
  
  // Function to handle doctor card click
  const handleDoctorClick = (doctorId: number) => {
    navigate(`/team/doctor/${doctorId}`);
  };

  // ...existing code...

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection
        title={t('team.heroTitle', 'Meet Our Dental Team')}
        subtitle={t('team.heroSubtitle', 'Experienced professionals dedicated to your smile')}
        backgroundImage="/images/hero/team-bg.jpg"
        minHeight="50vh"
        className="bg-blue-900/90"
      />
      <main className="pt-12">
        {/* Our Dentists */}
        <section className="py-20" ref={teamSectionRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t('team.ourDentists', 'Our Expert Dentists')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('team.dentistsDescription', 'Board-certified dentists with extensive experience in general and cosmetic dentistry')}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {doctors.map((doctor, index) => (
                <div 
                  key={doctor.id}
                  ref={el => doctorCardsRef.current[index] = el}
                  className="opacity-0" // Will be animated by GSAP
                >
                  <Card 
                    className="group hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:scale-[1.02] cursor-pointer overflow-hidden h-full flex flex-col"
                    onClick={() => handleDoctorClick(doctor.id)}
                  >
                  <div className="relative overflow-hidden h-80 bg-gray-100">
                    <div className="relative w-full h-full">
                      <img 
                        src={doctor.image} 
                        alt={doctor.name} 
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        style={{ objectPosition: 'center 30%' }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white">{doctor.name}</h3>
                        <p className="text-blue-300 text-lg">{doctor.title}</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="space-y-4 flex-1">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <div className="flex items-center mr-4">
                          <Star className="w-4 h-4 text-amber-400 fill-current mr-1" />
                          <span className="font-medium text-gray-900">{doctor.rating}</span>
                          <span className="mx-1 text-gray-300">•</span>
                          <span>{doctor.reviews} reviews</span>
                        </div>
                        <div className="w-1 h-1 bg-gray-300 rounded-full mx-2"></div>
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1 text-blue-600" />
                          <span>{doctor.experience}</span>
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
