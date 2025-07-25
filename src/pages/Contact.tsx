import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  MessageCircle, 
  Navigation,
  Car,
  Bus,
  AlertCircle,
  CheckCircle
} from "lucide-react";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 100
    });
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        { label: "Main Office", value: "+91 99661 51626" },
        { label: "Emergency Line", value: "+91 84999 95552" }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Office Location",
      details: [
        { label: "Clinic", value: "Sri Ananth Dental Hospital" },
        { label: "Address", value: "Indira bai colony road, Alampally" },
        { label: "City", value: "Vikarabad, Telangana 501101" },
        { label: "Landmark", value: "Near RTC Complex" }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        { label: "Monday - Sunday", value: "8:00 AM - 9:00 PM" },
        { label: "Emergency", value: "Available 24/7" }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        { label: "General Inquiries", value: "ananthdentalhospital@gmail.com" },
        { label: "Appointments", value: "ananthdentalhospital@gmail.com" },
        { label: "Billing", value: "ananthdentalhospital@gmail.com" }
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  const directions = [
    {
      icon: Car,
      title: "By Car",
      description: "Ample parking space available near the clinic. Located in Indira Bai Colony.",
      details: ["Parking available nearby", "Wheelchair accessible", "Easy access from main road"]
    },
    {
      icon: Bus,
      title: "Public Transit",
      description: "Well connected by city buses. Bus stand is just a 2-minute walk from the clinic.",
      details: ["Near Vikarabad Bus Stand", "Auto rickshaws available", "Well-connected by public transport"]
    },
    {
      icon: Navigation,
      title: "Navigation",
      description: "Use GPS coordinates: 17.3380° N, 78.4820° E for precise location.",
      details: ["Indira Bai Colony Road", "Alampally, Vikarabad", "Near government offices"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div 
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                We're here to help and answer any questions you might have. We look forward to hearing from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={info.title}
                  data-aos="fade-up"
                  data-aos-delay={150 * (index % 3) + 100}
                >
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${info.color} flex items-center justify-center mx-auto mb-4`}>
                          <info.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-4">{info.title}</h3>
                        <div className="space-y-2">
                          {info.details.map((detail, idx) => (
                            <div key={idx} className="text-sm">
                              <p className="text-gray-500">{detail.label}</p>
                              <p className="font-medium text-gray-900">{detail.value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-96 bg-gray-100">
          <div 
            className="h-full w-full"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.765432109375!2d77.9125!3d17.3364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8d4f1a1a1a1b%3A0x1a1a1a1a1a1a1a1a!2sIndira%20Bai%20Colony%20Road%2C%20Alampally%2C%20Vikarabad%2C%20Telangana%20501101!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Sri Ananth Dental Hospital Location"
            ></iframe>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Location</h2>
            <div className="bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl overflow-hidden">
              <div className="h-96 w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.765432109375!2d77.9125!3d17.3364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8d4f1a1a1a1b%3A0x1a1a1a1a1a1a1a1a!2sIndira%20Bai%20Colony%20Road%2C%20Alampally%2C%20Vikarabad%2C%20Telangana%20501101!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sri Ananth Dental Hospital Location"
                ></iframe>
              </div>
              <div className="p-6 bg-white">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-gray-900">Sri Ananth Dental Hospital</h3>
                    <p className="text-gray-600">Indira bai colony road, Alampally</p>
                    <p className="text-gray-600">Vikarabad, Telangana 501101</p>
                    <p className="text-gray-600">Landmark: Near RTC Complex</p>
                  </div>
                  <a 
                    href="https://maps.google.com?q=Sri+Ananth+Dental+Hospital,Vikarabad" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Contact Options */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              className="text-center mb-12"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Contact Options</h2>
              <p className="text-xl text-gray-600">Choose the most convenient way to reach us</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card 
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white cursor-pointer hover:scale-105 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <CardContent className="p-6 text-center">
                  <Phone className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-green-100 mb-4">Speak directly with our team</p>
                  <p className="font-semibold">+91 94944 44027</p>
                </CardContent>
              </Card>
              
              <Card 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white cursor-pointer hover:scale-105 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <CardContent className="p-6 text-center">
                  <Mail className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="text-blue-100 mb-4">Send us a detailed message</p>
                  <p className="font-semibold">ananthdentalhospital@gmail.com</p>
                </CardContent>
              </Card>
              
              <Card 
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white cursor-pointer hover:scale-105 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <CardContent className="p-6 text-center">
                  <MessageCircle className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                  <p className="text-purple-100 mb-4">Chat with us instantly</p>
                  <p className="font-semibold">Message Us Now</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card 
              className="bg-gradient-to-r from-red-500 to-rose-500 text-white"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <CardContent className="p-8">
                <div className="text-center">
                  <AlertCircle className="h-16 w-16 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold mb-4">Dental Emergency?</h2>
                  <p className="text-xl mb-6">
                    Don't wait! Call our emergency line immediately for urgent dental care.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                      onClick={() => window.open('tel:+15559876543')}
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Call Emergency: +91 94944 44027
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Contact;
