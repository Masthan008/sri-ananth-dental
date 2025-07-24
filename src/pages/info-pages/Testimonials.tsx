import { PageLayout } from '@/components/PageLayout';
import { Star, StarHalf, Quote } from 'lucide-react';
import { useState } from 'react';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  content: string;
  date: string;
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(testimonial.rating);
    const hasHalfStar = testimonial.rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<StarHalf key={i} className="h-5 w-5 text-yellow-400 fill-current" />);
      } else {
        stars.push(<Star key={i} className="h-5 w-5 text-gray-300 fill-current" />);
      }
    }

    return stars;
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src={testimonial.image}
            alt={`${testimonial.name}'s profile`}
          />
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
          <div className="flex items-center mt-1">
            <div className="flex">
              {renderStars()}
            </div>
            <span className="ml-2 text-sm text-gray-500">{testimonial.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
      <div className="relative flex-grow">
        <Quote className="absolute -top-2 left-0 h-6 w-6 text-gray-200" />
        <p className="text-gray-700 pl-6 italic">"{testimonial.content}"</p>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-sm text-gray-500">{testimonial.date}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState('all');

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Patient',
      image: '/images/testimonials/person1.jpg',
      rating: 5,
      content: 'The best dental care I\'ve ever received. The staff is incredibly friendly and professional. My root canal was completely painless!',
      date: 'July 15, 2024',
    },
    {
      id: 2,
      name: 'Priya Reddy',
      role: 'Patient',
      image: '/images/testimonials/person2.jpg',
      rating: 4.5,
      content: 'Dr. Ananth is very knowledgeable and takes the time to explain everything clearly. The clinic is clean and modern.',
      date: 'June 28, 2024',
    },
    {
      id: 3,
      name: 'Suresh Patel',
      role: 'Patient',
      image: '/images/testimonials/person3.jpg',
      rating: 5,
      content: 'I was very nervous about getting my wisdom teeth removed, but the team made me feel comfortable throughout the entire process. Highly recommend!',
      date: 'June 10, 2024',
    },
    {
      id: 4,
      name: 'Meena Sharma',
      role: 'Patient',
      image: '/images/testimonials/person4.jpg',
      rating: 5,
      content: 'Excellent service and care. The dentist was very gentle with my cleaning and gave me great advice for oral hygiene.',
      date: 'May 22, 2024',
    },
    {
      id: 5,
      name: 'Vikram Singh',
      role: 'Patient',
      image: '/images/testimonials/person5.jpg',
      rating: 4,
      content: 'Good experience overall. The wait time was a bit long, but the quality of care made up for it.',
      date: 'May 15, 2024',
    },
    {
      id: 6,
      name: 'Ananya Gupta',
      role: 'Patient',
      image: '/images/testimonials/person6.jpg',
      rating: 5,
      content: 'I got my dental implants done here and I\'m extremely happy with the results. The entire process was smooth and professional.',
      date: 'April 30, 2024',
    },
  ];

  const filteredTestimonials = activeTab === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.rating >= 4.5);

  return (
    <PageLayout
      title="Patient Testimonials"
      subtitle="Hear what our patients have to say about us"
      heroImage="/images/hero/testimonials-bg.jpg"
    >
      <div className="max-w-7xl mx-auto">
        {/* Testimonial Filters */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-6 py-2 text-sm font-medium rounded-l-lg ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab('all')}
            >
              All Testimonials
            </button>
            <button
              type="button"
              className={`px-6 py-2 text-sm font-medium rounded-r-lg ${
                activeTab === 'top'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setActiveTab('top')}
            >
              Top Rated
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Rating Summary */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Patients Love Us</h2>
            <div className="flex items-center justify-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-lg font-medium text-gray-900">4.9 out of 5</span>
              <span className="mx-2">•</span>
              <span className="text-gray-600">Based on 247 reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[5, 4, 3, 2, 1].map((rating) => {
              const count = testimonials.filter(t => Math.floor(t.rating) === rating).length;
              const percentage = (count / testimonials.length) * 100;
              
              return (
                <div key={rating} className="flex items-center">
                  <div className="w-8 text-right mr-2">
                    <span className="text-sm font-medium text-gray-900">{rating}</span>
                    <Star className="h-4 w-4 text-yellow-400 fill-current inline-block ml-1" />
                  </div>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-yellow-400" 
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <span className="ml-2 w-8 text-sm text-gray-600">{count}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leave a Review CTA */}
        <div className="bg-blue-50 rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Share Your Experience</h3>
            <p className="text-lg text-gray-600 mb-8">
              We value your feedback. Let us know about your experience at Sri Ananth Dental Hospital.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://g.page/r/.../review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Write a Google Review
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Contact Us Directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Testimonials;
