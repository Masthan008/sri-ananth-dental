
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube, Github } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Footer = () => {
  const { t } = useTranslation('common');
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/people/Sri-Ananth-Dental-Hospital/61559775233916/", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/sriananthdentalhospital", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@sriananthdentalhospital", label: "YouTube" },
    { icon: Github, href: "https://github.com/Masthan008/dental-hospital", label: "GitHub" }
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Team", href: "/team" },
    { name: "Patient Info", href: "/patient-info" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Appointments", href: "/appointments" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Gallery", href: "/gallery" },
    { name: "FAQs", href: "/faq" },
    { name: "Insurance", href: "/insurance" },
    { name: "Careers", href: "/careers" }
  ];

  const stepByStep = [
    { step: "01", title: "Book Appointment", description: "Schedule your visit online or by phone" },
    { step: "02", title: "Initial Consultation", description: "Meet our specialists for assessment" },
    { step: "03", title: "Treatment Plan", description: "Personalized care plan discussion" },
    { step: "04", title: "Procedure", description: "Expert care from our dental team" },
    { step: "05", title: "Follow-up", description: "Continued care and support" }
  ];

  const services = [
    { name: "General Dentistry", href: "/services/general-dentistry" },
    { name: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
    { name: "Orthodontics", href: "/services/orthodontics" },
    { name: "Emergency Care", href: "/services/emergency-care" },
    { name: "Pediatric Care", href: "/services/pediatric-dentistry" },
    { name: "Restorative Dentistry", href: "/services/restorative-dentistry" }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t('siteName', 'Sri Ananth Dental Hospital')}
            </div>
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for comprehensive dental care. We're committed to helping you achieve optimal oral health and a beautiful smile.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = service.href;
                    }}
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Step-by-Step Integration */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Process</h3>
            <div className="space-y-4">
              {stepByStep.map((step, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors duration-200">
                      {step.title}
                    </h4>
                    <p className="text-xs text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Sri Ananth Dental Hospital</p>
                  <p>Indira bai colony road, Alampally</p>
                  <p>Vikarabad, Telangana 501101</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>+91 94944 44027</p>
                  <p>+91 8499995554</p>
                  <p className="text-blue-300">Available 24/7</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="text-sm text-gray-300">dental@sriananthhospital.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Monday - Sunday: 8:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            © 2024 Sri Ananth Dental Hospital. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200">
              Terms of Service
            </a>
            <a href="/sitemap" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
