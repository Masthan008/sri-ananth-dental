import { Button } from "@/components/ui/button";
import { Calendar, Stethoscope, Sparkles, Shield, Smile, Zap, Baby, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { HeroSection } from './HeroSection';
import { services } from "@/data/services";

export const Hero = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('common');

  return (
    <HeroSection
      title={t('hero.title')}
      subtitle={t('hero.subtitle')}
      videoSource="/lovable-uploads/21936-322869299.mp4"
      minHeight="100vh"
      className="bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-cyan-800/90"
      overlayOpacity={0.6}
    >
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            onClick={() => navigate("/booking")}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg font-medium rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <Calendar className="h-6 w-6" />
            {t('hero.ctaPrimary')}
          </Button>
          <Button 
            onClick={() => {
              const servicesSection = document.getElementById('services');
              if (servicesSection) {
                window.scrollTo({
                  top: servicesSection.offsetTop - 100,
                  behavior: 'smooth'
                });
              } else {
                navigate('/services');
              }
            }}
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105"
          >
            {t('hero.ctaSecondary')}
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
          {services.slice(0, 6).map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id}
                onClick={() => navigate(`/services/${service.id}`)}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center cursor-pointer transition-all duration-300 hover:bg-white/20 hover:shadow-lg transform hover:-translate-y-1"
              >
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-white text-sm font-medium">{service.title}</h3>
                <div className="flex justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="h-4 w-4 text-white" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </HeroSection>
  );
};
