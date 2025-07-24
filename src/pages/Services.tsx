import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { HeroSection } from "@/components/HeroSection";
import { useTranslation } from 'react-i18next';
import { services } from "@/data/services";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

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
  const containerRef = useRef<HTMLDivElement>(null);

  // GSAP Animations with ScrollTrigger
  useGSAP(() => {
    // Section reveal animation with ScrollTrigger
    if (sectionRef.current) {
      gsap.fromTo(sectionRef.current,
        { 
          y: 100,
          opacity: 0,
          clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'
        },
        { 
          y: 0,
          opacity: 1,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          onComplete: () => {
            // Enable hover effects after initial animation
            cardsRef.current.forEach(card => {
              if (card) {
                card.style.pointerEvents = 'auto';
              }
            });
          }
        }
      );
    }

    // Heading animation with typewriter effect
    if (headingRef.current) {
      const headingText = headingRef.current.textContent || '';
      headingRef.current.textContent = '';
      
      // Create character spans for the heading
      const chars = headingText.split('');
      let charIndex = 0;
      let isTyping = false;
      
      // Function to start typing effect when heading is in view
      const startTyping = () => {
        if (isTyping) return;
        isTyping = true;
        
        const typeNextChar = () => {
          if (charIndex < chars.length) {
            const charSpan = document.createElement('span');
            charSpan.textContent = chars[charIndex];
            charSpan.style.display = 'inline-block';
            charSpan.style.opacity = '0';
            charSpan.style.transform = 'translateY(20px)';
            headingRef.current?.appendChild(charSpan);
            
            // Animate each character with a slight delay
            gsap.to(charSpan, {
              opacity: 1,
              y: 0,
              duration: 0.3,
              ease: 'power2.out',
              delay: charIndex * 0.03,
              onComplete: () => {
                // Add a subtle color animation on completion
                if (charIndex % 3 === 0) {
                  gsap.to(charSpan, {
                    color: '#3b82f6',
                    duration: 0.2,
                    yoyo: true,
                    repeat: 1,
                    ease: 'power1.inOut'
                  });
                }
              }
            });
            
            charIndex++;
            requestAnimationFrame(typeNextChar);
          } else {
            // Add a subtle pulse effect when typing is complete
            gsap.to(headingRef.current, {
              scale: 1.02,
              duration: 0.3,
              yoyo: true,
              repeat: 1,
              ease: 'power1.inOut'
            });
          }
        };
        
        typeNextChar();
      };
      
      // Set up scroll trigger for heading
      gsap.to(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          onEnter: startTyping,
          once: true
        }
      });
    }
    
    // Animate service cards with staggered effect and 3D tilt
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      
      // Disable hover effects during initial animation
      card.style.pointerEvents = 'none';
      
      // Initial state
      gsap.set(card, {
        opacity: 0,
        y: 80,
        rotationX: 10,
        transformPerspective: 1000,
        transformOrigin: 'center center',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
      });
      
      // Animate in with 3D effect
      gsap.to(card, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        delay: i * 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
          onEnter: () => {
            // Enable hover effects when card enters viewport
            card.style.pointerEvents = 'auto';
          }
        },
        onComplete: () => {
          // Add 3D tilt effect on hover
          const handleMouseMove = (e: MouseEvent) => {
            if (!card) return;
            
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * 5;
            const rotateY = ((centerX - x) / centerX) * 5;
            
            gsap.to(card, {
              rotationX: rotateX,
              rotationY: rotateY,
              scale: 1.02,
              duration: 0.5,
              ease: 'power1.out',
              transformPerspective: 1000,
              transformOrigin: 'center center',
              boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.2)'
            });
          };
          
          const handleMouseLeave = () => {
            gsap.to(card, {
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              duration: 0.5,
              ease: 'elastic.out(1, 0.5)',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
            });
          };
          
          card.addEventListener('mousemove', handleMouseMove as any);
          card.addEventListener('mouseleave', handleMouseLeave);
          
          // Cleanup function
          return () => {
            card.removeEventListener('mousemove', handleMouseMove as any);
            card.removeEventListener('mouseleave', handleMouseLeave);
          };
        }
      });
    });
    
    // Animate icons with bounce and pulse effect
    iconsRef.current.forEach((icon, i) => {
      if (!icon) return;
      
      // Initial state
      gsap.set(icon, {
        scale: 0,
        rotation: -180,
        opacity: 0,
        transformOrigin: 'center center',
        filter: 'drop-shadow(0 0 0px rgba(255,255,255,0))'
      });
      
      // Animate in with bounce and glow
      gsap.to(icon, {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.2 + (i * 0.1),
        ease: 'elastic.out(1, 0.7)',
        scrollTrigger: {
          trigger: icon,
          start: 'top 90%',
          toggleActions: 'play none none none'
        },
        onComplete: () => {
          // Add continuous subtle pulse
          gsap.to(icon, {
            scale: 1.05,
            duration: 1.5,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut',
            repeatDelay: 0.5
          });
          
          // Add hover effect
          icon.addEventListener('mouseenter', () => {
            // Kill any existing animations
            gsap.killTweensOf(icon);
            
            // Bounce effect
            gsap.to(icon, {
              scale: 1.3,
              rotation: 360,
              duration: 0.5,
              ease: 'elastic.out(1, 0.5)',
              onComplete: () => {
                // Restore pulse animation after hover
                gsap.to(icon, {
                  scale: 1.05,
                  duration: 1.5,
                  yoyo: true,
                  repeat: -1,
                  ease: 'sine.inOut',
                  repeatDelay: 0.5
                });
              }
            });
            
            // Glow effect
            gsap.to(icon, {
              filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.8))',
              duration: 0.3,
              ease: 'power2.out'
            });
          });
          
          icon.addEventListener('mouseleave', () => {
            gsap.to(icon, {
              filter: 'drop-shadow(0 0 0px rgba(255,255,255,0))',
              duration: 0.5,
              ease: 'power2.inOut'
            });
          });
        }
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
