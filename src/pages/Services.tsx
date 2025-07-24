import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { HeroSection } from "@/components/HeroSection";
import { useTranslation } from 'react-i18next';
import { services } from "@/data/services";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

const Services = () => {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const featuredServices = services.filter(service => service.popular);
  
  // Refs for GSAP animations
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const iconsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 100
    });
  }, []);

  // GSAP Animations
  useGSAP(() => {
    // Typewriter effect for heading
    if (headingRef.current) {
      const text = headingRef.current.textContent || '';
      headingRef.current.textContent = '';
      
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
      
      // Animate text reveal
      const chars = text.split('');
      headingRef.current.textContent = ''; // Clear the text
      
      chars.forEach((char, i) => {
        const charSpan = document.createElement('span');
        charSpan.textContent = char;
        charSpan.style.opacity = '0';
        charSpan.style.display = 'inline-block';
        headingRef.current?.appendChild(charSpan);
        
        gsap.to(charSpan, {
          opacity: 1,
          y: 0,
          duration: 0.1,
          delay: i * 0.03,
          ease: 'power2.out'
        });
      });
    }
    
    // Animate service cards with staggered effect
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      
      gsap.fromTo(card,
        { 
          opacity: 0,
          y: 50,
          scale: 0.95
        },
        { 
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: i * 0.1,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          onComplete: () => {
            // Add hover effect after initial animation
            card.addEventListener('mouseenter', () => {
              gsap.to(card, {
                y: -10,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                duration: 0.3,
                ease: 'power2.out'
              });
            });
            
            card.addEventListener('mouseleave', () => {
              gsap.to(card, {
                y: 0,
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                duration: 0.3,
                ease: 'power2.out'
              });
            });
          }
        }
      );
    });
    
    // Animate icons with bounce effect
    iconsRef.current.forEach((icon, i) => {
      if (!icon) return;
      
      gsap.fromTo(icon,
        { 
          scale: 0,
          rotation: -180,
          opacity: 0
        },
        { 
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2 + (i * 0.1),
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: icon,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        }
      );
      
      // Add hover effect for icons
      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
          scale: 1.2,
          rotation: 10,
          duration: 0.3,
          yoyo: true,
          repeat: 1,
          ease: 'power2.inOut'
        });
      });
    });
    
    // Section reveal animation
    if (sectionRef.current) {
      gsap.fromTo(sectionRef.current,
        { 
          opacity: 0,
          y: 50
        },
        { 
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection
        title={t('services.heroTitle', 'Our Dental Services')}
        subtitle={t('services.heroSubtitle', 'Comprehensive care for your entire family')}
        backgroundImage="/images/hero/services-bg.jpg"
      />

      {/* All Services Section */}
      <section ref={sectionRef} className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            ref={headingRef}
            className="text-4xl font-bold text-center mb-12 text-blue-900"
          >
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                ref={el => cardsRef.current[index] = el}
                className="group hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:scale-105 cursor-pointer transform-gpu will-change-transform"
                onClick={() => navigate(`/services/${service.id}`)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div 
                    ref={el => iconsRef.current[index] = el}
                    className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl ${service.color || 'bg-blue-600'} flex items-center justify-center transform-gpu will-change-transform`}
                  >
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{service.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.duration}
                    </div>
                    <div className="text-green-600 font-semibold">
                      {service.price}
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="w-full mt-4 group-hover:bg-blue-50 transition-colors duration-200 p-0 h-auto font-medium text-blue-600 hover:text-blue-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/services/${service.id}`);
                    }}
                  >
                    {t('learnMore', 'Learn More')} <span>→</span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FloatingCTA />
      <Footer />
    </div>
  );
};

export default Services;
