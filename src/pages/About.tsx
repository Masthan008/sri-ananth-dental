
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Heart, Shield, Play, Star, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { HeroSection } from "@/components/HeroSection";
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    icon: Award,
    title: 'Best Dental Clinic 2022',
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
  const navigate = useNavigate();
  const { t } = useTranslation();
  const imageRefs = useRef<Array<HTMLImageElement | null>>([]);
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => { 
    AOS.init({ once: true });
    
    // Initialize GSAP animations
    gsap.utils.toArray('.animate-img').forEach((img: any, i) => {
      gsap.fromTo(img,
        { 
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        { 
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: img,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true
          },
          onComplete: () => {
            // Add hover effect after initial animation
            img.addEventListener('mouseenter', () => {
              gsap.to(img, { 
                scale: 1.03, 
                duration: 0.3,
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
              });
            });
            img.addEventListener('mouseleave', () => {
              gsap.to(img, { 
                scale: 1, 
                duration: 0.3,
                boxShadow: 'none'
              });
            });
          }
        }
      );
    });

    // Animate feature sections
    gsap.utils.toArray('.feature-section').forEach((section: any, i) => {
      gsap.fromTo(section,
        { 
          opacity: 0,
          y: 30,
        },
        { 
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.2,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true
          }
        }
      );
    });

    return () => {
      // Cleanup
      imageRefs.current = [];
      sectionRefs.current = [];
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection
        title={t('about.heroTitle', 'About Our Practice')}
        subtitle={t('about.heroSubtitle', 'Compassionate care for your entire family')}
        backgroundImage="/images/hero/dentist-2589771.jpg"
        minHeight="50vh"
        className="bg-blue-900/90"
      />
      <main className="pt-12">
        {/* Quick Links Section */}
        <section className="bg-blue-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-blue-900">Popular Services</h2>
              <p className="text-gray-600 mt-2">Quick access to our most sought-after dental services</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
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
                  className="px-4 py-2 bg-white text-blue-700 rounded-full border border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 text-sm font-medium shadow-sm"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Category 1: Why Choose Us */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-bold text-blue-600 mb-1">State-of-the-Art Equipment</h4>
                  <p className="text-gray-700">We use state-of-the-art equipment and modern techniques to offer painless, precise, and effective treatments.</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-600 mb-1">Personalized Treatment Plans</h4>
                  <p className="text-gray-700">Every smile is unique, and so is our approach. We customize treatments to meet your individual dental needs.</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-600 mb-1">Comfort & Care</h4>
                  <p className="text-gray-700">Your comfort is our priority. Our clinic is designed to create a soothing, stress-free dental experience.</p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="/images/hero/dental-chair-and-equipment-patie.jpg"
                alt="Dental Clinic Modern Equipment"
                className="animate-img rounded-2xl shadow-xl w-full max-w-md object-cover border-4 border-blue-200 transform transition-transform duration-300 will-change-transform"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Category 2: Key Features Section (from screenshot) */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-12">
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
                  className="relative rounded-2xl shadow-lg p-6 h-[340px] flex flex-col justify-end items-center overflow-hidden transition-all duration-700 grayscale hover:grayscale-0"
                  data-aos={idx === 0 ? "zoom-in-up" : idx === 1 ? "flip-left" : "zoom-in-down"}
                  data-aos-delay={idx * 100}
                >
                  <img src={item.img} alt={item.title} className="animate-img absolute inset-0 w-full h-full object-cover opacity-40 transition-all duration-700" />
                  <div className="relative z-10 flex flex-col items-center">
                    <h3 className="text-xl font-extrabold text-gray-900 mb-2 bg-white/80 px-3 py-1 rounded">{item.title}</h3>
                    <p className="text-base text-gray-800 font-medium mt-2 bg-white/70 px-3 py-2 rounded">{item.desc}</p>
                  </div>
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
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Mission Card with background image and reduced transparency */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[400px] flex flex-col justify-end bg-blue-700" data-aos="fade-up" data-aos-delay="0">
                <img src="/images/about-features/mission.png" alt="Our Mission" className="animate-img absolute inset-0 w-full h-full object-cover opacity-50" />
                <div className="relative z-10 p-10 flex flex-col items-center">
                  <h3 className="text-3xl font-extrabold mb-4 text-white drop-shadow-lg">Our Mission</h3>
                  <p className="text-lg text-blue-100 leading-relaxed text-center font-medium drop-shadow-md feature-section">
                    To provide exceptional dental care through innovative treatments, compassionate service, and a commitment to helping every patient achieve optimal oral health and a confident smile.
                  </p>
                </div>
              </div>
              {/* Vision Card with background image and reduced transparency */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[400px] flex flex-col justify-end bg-cyan-700" data-aos="fade-up" data-aos-delay="100">
                <img src="/images/about-features/vision.png" alt="Our Vision" className="absolute inset-0 w-full h-full object-cover opacity-50" />
                <div className="relative z-10 p-10 flex flex-col items-center">
                  <h3 className="text-3xl font-extrabold mb-4 text-white drop-shadow-lg">Our Vision</h3>
                  <p className="text-lg text-cyan-100 leading-relaxed text-center font-medium drop-shadow-md feature-section">
                    To be the leading dental practice in our community, known for excellence in patient care, advanced technology, and creating lasting relationships built on trust and outstanding results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div 
              className="bg-blue-50 rounded-2xl p-8 md:p-12"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
                <p className="text-lg text-gray-600 mb-8 feature-section">
                  Experience the difference with our patient-centered approach and commitment to excellence in dental care.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => navigate('/contact-us')}
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Schedule Your Visit
                  </Button>
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
