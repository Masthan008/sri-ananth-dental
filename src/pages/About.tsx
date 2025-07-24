
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

const About = () => {
  return (
    <div className="min-h-screen bg-white">
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
          {/* ...existing code for Why Choose Us... */}
        </section>
        {/* Category 2: Our Story (with uploaded image) */}
        <section className="py-20">
          {/* ...existing code for Our Story... */}
        </section>
        {/* ...other sections remain unchanged... */}
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
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
              <div className="flex-1 flex justify-center">
                <img
                  src="/images/hero/dental-chair-and-equipment-patie.jpg"
                  alt="Dental Clinic Modern Equipment"
                  className="rounded-2xl shadow-xl w-full max-w-md object-cover border-4 border-blue-200"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Category 2: Our Story (with uploaded image) */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600">
                In 2015, a vision for exceptional dental care took root in the heart of Vikarabad. What began as a modest clinic with a single chair has blossomed into <span className="font-semibold text-blue-600">Sri Ananth Dental Hospital</span>, a beacon of oral healthcare excellence in the region. Our journey is one of passion, perseverance, and an unwavering commitment to transforming smiles.
              </p>
              <p className="text-lg text-gray-600">
                From our humble beginnings, we've grown into a state-of-the-art facility, but our core values remain unchanged. Every day, we're driven by the smiles of our patients and the trust they place in our hands. Our team of dedicated professionals brings together decades of combined experience, ensuring that each patient receives personalized, compassionate care.
              </p>
              <p className="text-lg text-gray-600">
                At Sri Ananth Dental Hospital, we believe in more than just treating teeth—we're committed to enhancing lives through comprehensive dental care. Our patient-centered approach, combined with cutting-edge technology and evidence-based practices, has made us a trusted name in dental healthcare.
              </p>
              <p className="text-lg text-gray-600">
                As we continue to grow, our mission remains clear: to provide accessible, high-quality dental care that transforms lives, one smile at a time. Join us on this journey to better oral health and discover the difference that genuine care and expertise can make.
              </p>
              <Button 
                onClick={() => navigate('/team')} 
                className="bg-blue-600 hover:bg-blue-700"
              >
                Meet Our Team <Users className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="/images/gallery/IMG-20250723-WA0022.jpg"
                alt="Our Clinic Story"
                className="rounded-2xl shadow-xl w-full max-w-md object-cover border-4 border-blue-200"
                loading="lazy"
              />
            </div>
          </div>
        </section>
        {/* ...other sections remain unchanged... */}
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Illumination Quality:</strong> Dental operating theatres require bright, shadow-free illumination to enable dentists and oral surgeons to work with precision. High-quality lighting systems are essential for clear visualization of the surgical site.</li>
              <li><strong>Color Rendering:</strong> Proper color rendering is important in dental lighting to ensure that the surgeon can accurately perceive the colors of tissues and structures in the oral cavity. Accurate color rendering aids in diagnosing and performing procedures effectively.</li>
              <li><strong>Adjustable Intensity:</strong> Dental lighting systems often feature adjustable intensity controls, allowing the surgeon to customize the level of illumination according to the specific procedure and their preferences.</li>
              <li><strong>Uniform Distribution:</strong> Uniform distribution of light across the surgical field is essential to eliminate shadows and ensure that every detail is visible. Some lights have multiple adjustable panels or angles to achieve this.</li>
              <li><strong>Cool Temperatures:</strong> Dental lights are designed to emit cool, white light to prevent overheating of the surgical area and discomfort for the patient and surgical team.</li>
              <li><strong>Ease of Adjustment:</strong> The positioning and angle of dental lights should be easily adjustable to provide optimal illumination regardless of the patient’s position or the surgeon’s requirements.</li>
            </ul>
          </div>
        </section>
              </p>
              <p className="text-lg text-gray-600">
                As we continue to grow, our mission remains clear: to provide accessible, high-quality dental care that transforms lives, one smile at a time. Join us on this journey to better oral health and discover the difference that genuine care and expertise can make.
              </p>
              <Button 
                onClick={() => navigate('/team')} 
                className="bg-blue-600 hover:bg-blue-700"
              >
                Meet Our Team <Users className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="/images/gallery/IMG-20250723-WA0022.jpg"
                alt="Our Clinic Story"
                className="rounded-2xl shadow-xl w-full max-w-md object-cover border-4 border-blue-200"
                loading="lazy"
              />
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
