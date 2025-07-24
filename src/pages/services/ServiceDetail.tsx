import { useParams, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronRight, Star, ChevronDown, ChevronUp, ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import { getServiceBySlug, getSubService, Service, SubService } from '@/data/services';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const ServiceDetail = () => {
  const { serviceId, subServiceId } = useParams<{ serviceId: string; subServiceId?: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation(['services', 'common']);
  const [activeTab, setActiveTab] = useState('overview');
  const [activeSubService, setActiveSubService] = useState<SubService | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Find the service by slug
  const service = getServiceBySlug(serviceId || '');

  // Set active sub-service if subServiceId is provided
  useEffect(() => {
    if (subServiceId && service) {
      const subService = getSubService(service.id, subServiceId);
      if (subService) {
        setActiveSubService(subService);
        setActiveTab('sub-services');
      }
    } else if (service?.subServices?.length) {
      setActiveSubService(service.subServices[0]);
    }
  }, [service, subServiceId]);

  const handleFaqToggle = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const nextGalleryImage = () => {
    if (!service?.beforeAfterGallery?.length) return;
    setCurrentGalleryIndex((prev) => (prev + 1) % service.beforeAfterGallery!.length);
  };

  const prevGalleryImage = () => {
    if (!service?.beforeAfterGallery?.length) return;
    setCurrentGalleryIndex((prev) => (prev - 1 + service.beforeAfterGallery!.length) % service.beforeAfterGallery!.length);
  };

  const nextTestimonial = () => {
    if (!service?.testimonials?.length) return;
    setCurrentTestimonial((prev) => (prev + 1) % service.testimonials!.length);
  };

  const prevTestimonial = () => {
    if (!service?.testimonials?.length) return;
    setCurrentTestimonial((prev) => (prev - 1 + service.testimonials!.length) % service.testimonials!.length);
  };

  if (!service) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('serviceNotFound.title', 'Service Not Found')}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {t('serviceNotFound.message', 'The requested service could not be found.')}
          </p>
          <Button onClick={() => navigate('/services')}>
            {t('backToServices', 'Back to Services')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 py-4 text-sm">
            <Link to="/" className="text-gray-500 hover:text-blue-600">
              {t('common:home', 'Home')}
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link to="/services" className="text-gray-500 hover:text-blue-600">
              {t('common:services', 'Services')}
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-blue-600 font-medium">{service.title}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16 md:py-24">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Button 
            variant="ghost" 
            className="mb-8 px-0 text-white hover:bg-white/10"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('back', 'Back to Services')}
          </Button>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              {service.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <div className="sticky top-24 space-y-1">
              <button
                onClick={() => setActiveTab('overview')}
                className={cn(
                  'w-full text-left px-4 py-3 rounded-lg transition-colors',
                  activeTab === 'overview' 
                    ? 'bg-blue-50 text-blue-700 font-medium' 
                    : 'text-gray-600 hover:bg-gray-100'
                )}
              >
                {t('overview', 'Overview')}
              </button>
              
              {service.subServices && service.subServices.length > 0 && (
                <button
                  onClick={() => setActiveTab('sub-services')}
                  className={cn(
                    'w-full text-left px-4 py-3 rounded-lg transition-colors flex justify-between items-center',
                    activeTab === 'sub-services' 
                      ? 'bg-blue-50 text-blue-700 font-medium' 
                      : 'text-gray-600 hover:bg-gray-100'
                  )}
                >
                  <span>{t('subServices', 'Sub-Services')}</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}

              {service.faqs && service.faqs.length > 0 && (
                <button
                  onClick={() => setActiveTab('faqs')}
                  className={cn(
                    'w-full text-left px-4 py-3 rounded-lg transition-colors flex justify-between items-center',
                    activeTab === 'faqs' 
                      ? 'bg-blue-50 text-blue-700 font-medium' 
                      : 'text-gray-600 hover:bg-gray-100'
                  )}
                >
                  <span>{t('faqs', 'FAQs')}</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}

              {service.beforeAfterGallery && service.beforeAfterGallery.length > 0 && (
                <button
                  onClick={() => setActiveTab('gallery')}
                  className={cn(
                    'w-full text-left px-4 py-3 rounded-lg transition-colors flex justify-between items-center',
                    activeTab === 'gallery' 
                      ? 'bg-blue-50 text-blue-700 font-medium' 
                      : 'text-gray-600 hover:bg-gray-100'
                  )}
                >
                  <span>{t('beforeAfter', 'Before & After')}</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}

              {service.testimonials && service.testimonials.length > 0 && (
                <button
                  onClick={() => setActiveTab('testimonials')}
                  className={cn(
                    'w-full text-left px-4 py-3 rounded-lg transition-colors flex justify-between items-center',
                    activeTab === 'testimonials' 
                      ? 'bg-blue-50 text-blue-700 font-medium' 
                      : 'text-gray-600 hover:bg-gray-100'
                  )}
                >
                  <span>{t('testimonials', 'Testimonials')}</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* CTA Card */}
            <div className="mt-8 bg-blue-50 p-6 rounded-xl">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                {t('readyToStart', 'Ready to get started?')}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {t('scheduleConsultation', 'Schedule a consultation with our dental experts today.')}
              </p>
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                onClick={() => navigate('/booking')}
              >
                {t('bookAppointment', 'Book Appointment')}
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {t('aboutService', 'About This Service')}
                  </h2>
                  <div className="prose max-w-none">
                    {service.details?.map((detail, index) => (
                      <p key={index} className="mb-4 text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>

                {service.features && service.features.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                      {t('serviceFeatures', 'Service Features')}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                          <div className="flex-shrink-0 h-6 w-6 text-blue-600 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="ml-3 text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Sub-Services Tab */}
            {activeTab === 'sub-services' && service.subServices && service.subServices.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {t('availableTreatments', 'Available Treatments')}
                </h2>
                <div className="space-y-6">
                  {service.subServices.map((subService, index) => (
                    <div 
                      key={subService.id}
                      className={cn(
                        'border rounded-xl overflow-hidden transition-all duration-200',
                        activeSubService?.id === subService.id 
                          ? 'border-blue-300 ring-2 ring-blue-100' 
                          : 'border-gray-200 hover:border-blue-200'
                      )}
                      onClick={() => setActiveSubService(subService)}
                    >
                      <div className="p-6 cursor-pointer">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">
                              {subService.title}
                            </h3>
                            <p className="mt-1 text-gray-600">
                              {subService.description}
                            </p>
                          </div>
                          <ChevronRight 
                            className={cn(
                              'h-5 w-5 text-gray-400 transform transition-transform',
                              activeSubService?.id === subService.id ? 'rotate-90' : ''
                            )} 
                          />
                        </div>
                      </div>
                      
                      {activeSubService?.id === subService.id && (
                        <div className="px-6 pb-6 pt-0 border-t border-gray-100">
                          <div className="grid md:grid-cols-2 gap-8">
                            <div>
                              <h4 className="font-medium text-gray-900 mb-3">
                                {t('treatmentDetails', 'Treatment Details')}
                              </h4>
                              <ul className="space-y-2">
                                {subService.duration && (
                                  <li className="flex justify-between">
                                    <span className="text-gray-500">{t('duration', 'Duration')}:</span>
                                    <span className="text-gray-900 font-medium">{subService.duration}</span>
                                  </li>
                                )}
                                {/* Price removed as per request */}
                              </ul>
                              
                              {subService.features && subService.features.length > 0 && (
                                <div className="mt-6">
                                  <h4 className="font-medium text-gray-900 mb-3">
                                    {t('keyBenefits', 'Key Benefits')}
                                  </h4>
                                  <ul className="space-y-2">
                                    {subService.features.map((feature, idx) => (
                                      <li key={idx} className="flex items-start">
                                        <div className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                          </svg>
                                        </div>
                                        <span className="ml-2 text-gray-700">{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                            
                            <div className="bg-blue-50 p-6 rounded-lg">
                              <h4 className="font-medium text-gray-900 mb-4">
                                {t('scheduleConsultation', 'Schedule a Consultation')}
                              </h4>
                              <p className="text-gray-600 text-sm mb-6">
                                {t('consultationDescription', 'Book an appointment to discuss this treatment with our dental experts.')}
                              </p>
                              <Button 
                                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                                onClick={() => navigate(`/booking?service=${service.id}&treatment=${subService.id}`)}
                              >
                                {t('bookNow', 'Book Now')}
                              </Button>
                              <p className="mt-3 text-center text-sm text-gray-500">
                                {t('orCall', 'or call')} 
                                <a href="tel:+1234567890" className="text-blue-600 hover:underline ml-1">
                                  (123) 456-7890
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs Tab */}
            {activeTab === 'faqs' && service.faqs && service.faqs.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {t('frequentlyAskedQuestions', 'Frequently Asked Questions')}
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
                        onClick={() => handleFaqToggle(index)}
                      >
                        <h3 className="font-medium text-gray-900">{faq.question}</h3>
                        {expandedFaq === index ? (
                          <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </button>
                      {expandedFaq === index && (
                        <div className="p-4 pt-0 text-gray-600">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Before & After Gallery Tab */}
            {activeTab === 'gallery' && service.beforeAfterGallery && service.beforeAfterGallery.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {t('beforeAfterGallery', 'Before & After Gallery')}
                </h2>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="relative">
                    <div className="relative h-96 bg-gray-100 overflow-hidden">
                      <div className="absolute inset-0 flex">
                        <div className="w-1/2 h-full overflow-hidden">
                          <img
                            src={service.beforeAfterGallery[currentGalleryIndex].before}
                            alt={`Before: ${service.beforeAfterGallery[currentGalleryIndex].title}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-center">
                            <span className="font-medium">{t('before', 'Before')}</span>
                          </div>
                        </div>
                        <div className="w-1/2 h-full overflow-hidden">
                          <img
                            src={service.beforeAfterGallery[currentGalleryIndex].after}
                            alt={`After: ${service.beforeAfterGallery[currentGalleryIndex].title}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-0 left-1/2 right-0 bg-black/50 text-white p-4 text-center">
                            <span className="font-medium">{t('after', 'After')}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {service.beforeAfterGallery[currentGalleryIndex].title}
                      </h3>
                      {service.beforeAfterGallery[currentGalleryIndex].description && (
                        <p className="text-gray-600">
                          {service.beforeAfterGallery[currentGalleryIndex].description}
                        </p>
                      )}
                      
                      <div className="mt-6 flex items-center justify-between">
                        <div className="flex space-x-2">
                          {service.beforeAfterGallery.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentGalleryIndex(index)}
                              className={cn(
                                'h-2 w-2 rounded-full',
                                currentGalleryIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                              )}
                              aria-label={`View image ${index + 1}`}
                            />
                          ))}
                        </div>
                        
                        <div className="flex space-x-3">
                          <button
                            onClick={prevGalleryImage}
                            className="p-2 text-gray-700 hover:text-blue-600 rounded-full hover:bg-gray-100"
                            aria-label="Previous image"
                          >
                            <ArrowLeftCircle className="h-6 w-6" />
                          </button>
                          <button
                            onClick={nextGalleryImage}
                            className="p-2 text-gray-700 hover:text-blue-600 rounded-full hover:bg-gray-100"
                            aria-label="Next image"
                          >
                            <ArrowRightCircle className="h-6 w-6" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t('scheduleYourTreatment', 'Schedule Your Treatment')}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {t('galleryCta', 'Ready to transform your smile? Book a consultation with our dental experts today.')}
                  </p>
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                    onClick={() => navigate('/booking')}
                  >
                    {t('bookConsultation', 'Book a Consultation')}
                  </Button>
                </div>
              </div>
            )}

            {/* Testimonials Tab */}
            {activeTab === 'testimonials' && service.testimonials && service.testimonials.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {t('patientTestimonials', 'Patient Testimonials')}
                </h2>
                
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                  <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                        {service.testimonials[currentTestimonial].image ? (
                          <img 
                            src={service.testimonials[currentTestimonial].image} 
                            alt={service.testimonials[currentTestimonial].name}
                            className="w-full h-full rounded-full object-cover"
                          />
                        ) : (
                          <span className="text-2xl font-medium">
                            {service.testimonials[currentTestimonial].name.charAt(0)}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              'h-5 w-5',
                              i < service.testimonials[currentTestimonial].rating 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-300'
                            )}
                          />
                        ))}
                      </div>
                      
                      <blockquote className="text-lg text-gray-700 italic mb-4">
                        "{service.testimonials[currentTestimonial].comment}"
                      </blockquote>
                      
                      <div className="font-medium text-gray-900">
                        {service.testimonials[currentTestimonial].name}
                      </div>
                      {service.testimonials[currentTestimonial].date && (
                        <div className="text-sm text-gray-500">
                          {service.testimonials[currentTestimonial].date}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex justify-center mt-8">
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={prevTestimonial}
                          className="p-2 text-gray-700 hover:text-blue-600 rounded-full hover:bg-gray-100"
                          aria-label="Previous testimonial"
                        >
                          <ArrowLeftCircle className="h-6 w-6" />
                        </button>
                        
                        <div className="flex space-x-2">
                          {service.testimonials.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentTestimonial(index)}
                              className={cn(
                                'h-2 w-2 rounded-full',
                                currentTestimonial === index ? 'bg-blue-600' : 'bg-gray-300'
                              )}
                              aria-label={`View testimonial ${index + 1}`}
                            />
                          ))}
                        </div>
                        
                        <button
                          onClick={nextTestimonial}
                          className="p-2 text-gray-700 hover:text-blue-600 rounded-full hover:bg-gray-100"
                          aria-label="Next testimonial"
                        >
                          <ArrowRightCircle className="h-6 w-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Button 
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                    onClick={() => navigate('/testimonials')}
                  >
                    {t('viewAllTestimonials', 'View All Testimonials')}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
