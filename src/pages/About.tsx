
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Heart, Shield, Play, Star, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { HeroSection } from "@/components/HeroSection";
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
  useEffect(() => { AOS.init({ once: true }); }, []);
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
                className="rounded-2xl shadow-xl w-full max-w-md object-cover border-4 border-blue-200"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Category 2: Key Features Section (from screenshot) */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-12">
              <div>
                <img src="/images/services/DENTAL CHECKUP - SADH.png" alt="Dental Checkup" className="mx-auto mb-4 w-20 h-20 object-contain" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Dental Checkup</h3>
                <p className="text-gray-600">We proudly conduct free dental checkup camps every year for children and adults to serve the people who cannot afford regular checkups.</p>
              </div>
              <div>
                <img src="/images/services/DOCTORS - SADH.png" alt="Qualified Doctors" className="mx-auto mb-4 w-20 h-20 object-contain" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Qualified Doctors</h3>
                <p className="text-gray-600">We have a team of experienced and best dentist in Hyderabad who works with full dedication to serve our patients better.</p>
              </div>
              <div>
                <img src="/images/services/EMERGENCY - SADH.png" alt="Emergency Services" className="mx-auto mb-4 w-20 h-20 object-contain" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Emergency Services</h3>
                <p className="text-gray-600">Fort Dental Clinic in Tolichowki, Hyderabad provides emergency services to patients at any time required.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
              <div>
                <img src="/images/services/FINANCE - SADH.png" alt="0% Finance" className="mx-auto mb-4 w-20 h-20 object-contain" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">0% Finance</h3>
                <p className="text-gray-600">Fort Dental Clinic offers 0% finance in collaboration with Bajaj Finserv on all the treatments so that the patients can pay in installments.</p>
              </div>
              <div>
                <img src="/images/services/SUITCASE - SADH.png" alt="24x7 Services" className="mx-auto mb-4 w-20 h-20 object-contain" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">24×7 Services</h3>
                <p className="text-gray-600">Fort Dental Clinic in Tolichowki, Hyderabad provides emergency services to patients at any time required.</p>
              </div>
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
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <li className="flex items-start gap-4">
                  <img src="/images/services/DENTAL RESTORATION - SADH.png" alt="Sterile Environment" className="w-12 h-12 object-contain" />
                  <div>
                    <strong className="block text-blue-700">Sterile Environment</strong>
                    <span className="text-gray-700">Our operating theatres are maintained with the highest standards of sterility to ensure patient safety and infection control.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <img src="/images/services/DENTAL IMPLANTS  - SADH.png" alt="Anesthesia Options" className="w-12 h-12 object-contain" />
                  <div>
                    <strong className="block text-blue-700">Anesthesia Options</strong>
                    <span className="text-gray-700">We offer a range of anesthesia options for patient comfort during complex dental procedures.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <img src="/images/services/BRIDGES - SADH.png" alt="Ease of Adjustment" className="w-12 h-12 object-contain" />
                  <div>
                    <strong className="block text-blue-700">Ease of Adjustment</strong>
                    <span className="text-gray-700">Our equipment and lighting are fully adjustable for optimal access and visibility during every procedure.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <img src="/images/services/DENTAL CHECKUP - SADH.png" alt="Infection Control" className="w-12 h-12 object-contain" />
                  <div>
                    <strong className="block text-blue-700">Infection Control</strong>
                    <span className="text-gray-700">Strict infection control protocols are followed to protect both patients and staff at every step.</span>
                  </div>
                </li>
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
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                  <p className="text-lg text-blue-100 leading-relaxed">
                    To provide exceptional dental care through innovative treatments, compassionate service, and a commitment to helping every patient achieve optimal oral health and a confident smile.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-cyan-600 to-blue-600 text-white">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                  <p className="text-lg text-cyan-100 leading-relaxed">
                    To be the leading dental practice in our community, known for excellence in patient care, advanced technology, and creating lasting relationships built on trust and outstanding results.
                  </p>
                </CardContent>
              </Card>
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
                <p className="text-lg text-gray-600 mb-8">
                  Experience the difference with our patient-centered approach and commitment to excellence in dental care.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => navigate('/contact')}
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
