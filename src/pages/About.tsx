
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Heart, Shield, Play, Star, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { HeroSection } from "@/components/HeroSection";
import { useTranslation } from 'react-i18next';
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FaTooth, FaUserMd, FaCalendarCheck, FaAward, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { FaHandHoldingHeart, FaTeeth, FaTeethOpen, FaToothbrush } from 'react-icons/fa6';
import { GiTooth } from 'react-icons/gi';
import { initAnimations } from '../utils/animations';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

// Type definitions
interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

interface StatItemProps {
  number: string;
  label: string;
  suffix?: string;
}

interface ServiceCardProps {
  img: string;
  title: string;
  desc: string;
}

const achievements = [
  {
    icon: Award,
    title: 'best dental hospital in vikarabad',
    description: 'Recognized for outstanding patient care and advanced dental technology.'
  },
  {
    icon: Star,
    title: '5-Star Patient Reviews',
    description: 'Consistently rated highly by our patients for service and results.'
  },
  {
    icon: Heart,
    title: 'Community Service',
    description: 'Active in local outreach and free dental camps for the underprivileged.'
  },
  {
    icon: CheckCircle,
    title: 'Certified Professionals',
    description: 'Our team is certified and regularly trained in the latest dental practices.'
  }
];

const About = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const aboutRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  // Initialize and clean up animations
  useEffect(() => {
    // Force ScrollTrigger to refresh to pick up new elements
    ScrollTrigger.refresh();
    
    return () => {
      // Clean up all GSAP animations and ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf('*');
    };
  }, []);

  useGSAP(() => {
    // Make sure aboutRef.current exists before initializing animations
    if (!aboutRef.current) return;
    
    const animations = initAnimations(aboutRef.current);
    
    // Hero section
    animations.fadeInUp('.hero-content', 0.2);
    animations.fadeInUp('.hero-image', 0.4);
    
    // Quick links
    animations.staggerChildren('.quick-links', '.quick-link', 0.1);
    
    // About section
    animations.fadeInLeft('.about-image', 0.2);
    animations.fadeInRight('.about-content', 0.4);
    
    // Features
    animations.staggerChildren('.features-grid', '.feature-card', 0.1);
    
    // Stats
    animations.fadeInUp('.stats-container', 0.2);
    
    // Team animations
    animations.fadeInUp('.team-section', 0.2);
    animations.staggerChildren('.team-grid', '.team-member', 0.1);
    
    // Testimonials animations
    animations.fadeInUp('.testimonials-section', 0.2);
    animations.staggerChildren('.testimonials-grid', '.testimonial', 0.1);

    // Animate counter elements
    document.querySelectorAll('.stat-number').forEach((stat) => {
      const value = parseInt(stat.textContent || '0');
      const suffix = stat.getAttribute('data-suffix') || '';
      if (value > 0) {
        animations.animateCounter(stat, value, suffix);
      }
    });

    // Animate hero section elements
    gsap.from('.hero-content > *', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.hero-content',
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    });

    // Animate quick links
    gsap.utils.toArray('.quick-link').forEach((link: any, i) => {
      gsap.from(link, {
        x: i % 2 === 0 ? -30 : 30,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: link,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        onComplete: () => {
          link.addEventListener('mouseenter', () => {
            gsap.to(link, {
              y: -3,
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              duration: 0.3,
              ease: 'power2.out'
            });
          });
          link.addEventListener('mouseleave', () => {
            gsap.to(link, {
              y: 0,
              boxShadow: 'none',
              duration: 0.3,
              ease: 'power2.in'
            });
          });
        }
      });
    });

    // Animate feature cards with 3D tilt effect
    gsap.utils.toArray('.feature-card').forEach((card: any, i) => {
      // Initial animation
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.15,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });

      // Add 3D tilt effect on mouse move
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateY = ((x - centerX) / centerX) * 10;
        const rotateX = ((centerY - y) / centerY) * 10;
        
        gsap.to(card, {
          rotateX: rotateX,
          rotateY: rotateY,
          transformPerspective: 800,
          transformOrigin: 'center center',
          ease: 'power1.out',
          duration: 0.5
        });
      });

      // Reset on mouse leave
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.5)'
        });
      });
    });

    // Animate stats with counting effect
    document.querySelectorAll('.stat-item').forEach((stat: Element) => {
      const numberElement = stat.querySelector('.stat-number');
      if (!numberElement) return;
      
      const suffix = numberElement.getAttribute('data-suffix') || '';
      const target = parseFloat(numberElement.textContent || '0');
      let current = 0;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const duration = 2;
            const increment = target / (duration * 60); // 60fps
            
            const updateCounter = () => {
              current += increment;
              if (current < target) {
                numberElement.textContent = Math.round(current) + suffix;
                requestAnimationFrame(updateCounter);
              } else {
                numberElement.textContent = target + suffix;
              }
            };
            
            updateCounter();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });

      observer.observe(stat);
    });

    // Animate image reveals with clip-path
    gsap.utils.toArray('.img-reveal').forEach((img: any) => {
      gsap.from(img, {
        clipPath: 'inset(0 100% 0 0)',
        duration: 1.5,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: img,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    });

    // Animate section headings with character reveal
    document.querySelectorAll('.section-heading').forEach((heading: Element) => {
      const text = heading.textContent || '';
      heading.textContent = '';
      
      text.split('').forEach((char: string, i: number) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px)';
        heading.appendChild(span);
        
        gsap.to(span, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: i * 0.03,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        });
      });
    });
  }, { scope: aboutRef });

  return (
    <div className="min-h-screen bg-white" ref={pageRef}>
      <Header />
      <HeroSection
        title={'About Our Practice'}
        subtitle={'Compassionate care for your entire family'}
        backgroundImage="/images/about-hero.jpg"
        showButton={true}
        buttonText={'Book an Appointment'}
        buttonLink="/booking"
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-blue-900/50" />
      </HeroSection>
      <main className="relative z-10 pt-12" ref={aboutRef}>
        {/* Quick Links Section */}
        <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-blue-100/40 [mask-image:linear-gradient(0deg,#fff,transparent)]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-10">
              <h2 className="section-heading text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Popular Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Quick access to our most sought-after dental services
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: 'Dental Implants', path: '/services/dental-implants' },
                { name: 'Teeth Whitening', path: '/services/cosmetic-dentistry' },
                { name: 'Root Canal Treatment', path: '/services/root-canal-treatment' },
                { name: 'Dental Crowns', path: '/services/dental-restoration' },
                { name: 'Orthodontics', path: '/services/orthodontics' },
                { name: 'Cosmetic Dentistry', path: '/services/cosmetic-dentistry' },
              ].map((service, index) => (
                <button
                  key={service.name}
                  onClick={() => navigate(service.path)}
                  className="quick-link px-5 py-2.5 bg-white/90 backdrop-blur-sm text-blue-700 rounded-full border border-blue-200 hover:border-blue-300 transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-white"
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Image above Why Choose Us */}
            <div className="mb-20 rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:shadow-2xl img-reveal">
              <img 
                src="/images/about-features/Why Choose Us.jpg" 
                alt="Why Choose Our Dental Clinic" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 text-sm font-medium bg-blue-100 text-blue-700 rounded-full mb-4">
                Our Commitment
              </span>
              <h2 className="section-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose Us?
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 features-grid">
              {[
                {
                  title: 'State-of-the-Art Equipment',
                  description: 'We use state-of-the-art equipment and modern techniques to offer painless, precise, and effective treatments.',
                  icon: '⚙️'
                },
                {
                  title: 'Personalized Treatment Plans',
                  description: 'Every smile is unique, and so is our approach. We customize treatments to meet your individual dental needs.',
                  icon: '🎯'
                },
                {
                  title: 'Comfort & Care',
                  description: 'Your comfort is our priority. Our clinic is designed to create a soothing, stress-free dental experience.',
                  icon: '💆'
                }
              ].map((feature: FeatureCardProps) => (
                <div 
                  key={feature.title}
                  className="feature-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden group"
                >
                  <div className="relative z-10">
                    <div className="text-5xl mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:text-blue-600">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
            
            {/* Stats Section */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 stats-grid">
              {[
                { number: '5000', label: 'Happy Patients' },
                { number: '15', label: 'Years Experience' },
                { number: '98', label: 'Success Rate', suffix: '%' },
                { number: '24/7', label: 'Emergency Care' }
              ].map((stat: StatItemProps) => (
                <div 
                  key={stat.label}
                  className="stat-item text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden group"
                >
                  <div className="relative z-10">
                    <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-3 stat-number" data-suffix={stat.suffix || ''}>
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium text-sm uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 text-sm font-medium bg-blue-100 text-blue-700 rounded-full mb-4">
                Our Services
              </span>
              <h2 className="section-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Comprehensive Dental Care
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              {[
                {
                  img: "/images/about-features/Dental Checkup.png",
                  title: "Dental Checkup",
                  desc: "We proudly conduct free dental checkup camps every year for children and adults to serve the people who cannot afford regular checkups."
                },
                {
                  img: "/images/about-features/Qualified Doctors.png",
                  title: "Qualified Doctors",
                  desc: "We have a team of experienced and best dentist in Hyderabad who works with full dedication to serve our patients better."
                },
                {
                  img: "/images/about-features/Emergency Services.png",
                  title: "Emergency Services",
                  desc: "Fort Dental Clinic in Tolichowki, Hyderabad provides emergency services to patients at any time required."
                }
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className="feature-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden group"
                >
                  <div className="relative z-10">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-500">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-16 h-16 object-contain transition-all duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Four Features Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Sterile Environment | Anesthesia Options | Ease of Adjustment | Infection Control</h3>
              <p className="text-gray-700 mb-4">
                While most routine dental treatments can be performed in a dental office or clinic, the use of operating theaters in dentistry is essential for addressing complex oral and maxillofacial issues. These specialized facilities provide a safe and controlled environment for patients to receive advanced surgical care, often resulting in improved oral health and quality of life.
              </p>
              <p className="text-gray-700 mb-4">
                In dental and oral surgery, lighting in the operating theatre plays a crucial role in ensuring optimal visibility and precision during procedures. Here are some key considerations regarding lighting in a dental operating theatre:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                {[
                  {
                    img: "/images/about-features/Sterile Environment.png",
                    title: "Sterile Environment",
                    desc: "Our operating theatres are maintained with the highest standards of sterility to ensure patient safety and infection control."
                  },
                  {
                    img: "/images/about-features/Anesthesia Options.png",
                    title: "Anesthesia Options",
                    desc: "We offer a range of anesthesia options for patient comfort during complex dental procedures."
                  },
                  {
                    img: "/images/about-features/Ease of Adjustment.png",
                    title: "Ease of Adjustment",
                    desc: "Our equipment and lighting are fully adjustable for optimal access and visibility during every procedure."
                  },
                  {
                    img: "/images/about-features/Infection Control.png",
                    title: "Infection Control",
                    desc: "Strict infection control protocols are followed to protect both patients and staff at every step."
                  }
                ].map((item, idx) => (
                  <li
                    key={item.title}
                    className="relative rounded-2xl shadow-lg p-8 h-[340px] flex flex-col justify-end items-center overflow-hidden transition-all duration-700 grayscale hover:grayscale-0"
                    data-aos={idx === 0 ? "zoom-in-up" : idx === 1 ? "flip-left" : idx === 2 ? "zoom-in-down" : "flip-right"}
                    data-aos-delay={idx * 100}
                  >
                    <img src={item.img} alt={item.title} className="animate-img absolute inset-0 w-full h-full object-cover opacity-40 transition-all duration-700" />
                    <div className="relative z-10 flex flex-col items-center">
                      <strong className="block text-xl text-blue-900 mb-2 bg-white/80 px-3 py-1 rounded">{item.title}</strong>
                      <span className="text-base text-gray-800 font-medium mt-2 bg-white/70 px-3 py-2 rounded">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're proud of the recognition we've received and the trust our patients place in us.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Mission Card with background image */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[350px] flex flex-col justify-end" data-aos="fade-up" data-aos-delay="0">
                <div className="absolute inset-0">
                  <img 
                    src="/images/about-features/mission.png" 
                    alt="Our Mission" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to a solid color if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%231e40af%22%2F%3E%3C%2Fsvg%3E';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
                </div>
                <div className="relative z-10 p-10 flex flex-col items-center">
                  <h3 className="text-3xl font-extrabold mb-4 text-white drop-shadow-lg">Our Mission</h3>
                  <p className="text-lg text-blue-100 leading-relaxed text-center font-medium drop-shadow-md feature-section">
                    To provide exceptional dental care through innovative treatments, compassionate service, and a commitment to helping every patient achieve optimal oral health and a confident smile.
                  </p>
                </div>
              </div>
              
              {/* Vision Card with background image */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[350px] flex flex-col justify-end" data-aos="fade-up" data-aos-delay="100">
                <div className="absolute inset-0">
                  <img 
                    src="/images/about-features/vision.png" 
                    alt="Our Vision" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to a solid color if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%231e40af%22%2F%3E%3C%2Fsvg%3E';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
                </div>
                <div className="relative z-10 p-10 flex flex-col items-center">
                  <h3 className="text-3xl font-extrabold mb-4 text-white drop-shadow-lg">Our Vision</h3>
                  <p className="text-lg text-blue-100 leading-relaxed text-center font-medium drop-shadow-md feature-section">
                    To be the leading dental practice in our community, known for excellence in patient care, advanced technology, and creating lasting relationships built on trust and outstanding results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default About;
