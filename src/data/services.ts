import { Stethoscope, Sparkles, Shield, Smile, Zap, Baby, Crown, Heart, ChevronDown } from 'lucide-react';

export interface BeforeAfterImage {
  before: string;
  after: string;
  title: string;
  description?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SubService {
  id: string;
  title: string;
  description: string;
  price?: string;
  duration?: string;
  features?: string[];
  image?: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  duration: string;
  price?: string;
  image: string;
  details?: string[];
  popular?: boolean;
  color?: string;
  subServices?: SubService[];
  faqs?: FAQ[];
  beforeAfterGallery?: BeforeAfterImage[];
  testimonials?: Array<{
    name: string;
    rating: number;
    comment: string;
    date: string;
    image?: string;
  }>;
}

export const services: Service[] = [
  {
    id: 'orthodontics',
    slug: 'orthodontics',
    title: 'Orthodontics',
    description: 'Straighten your teeth and improve your bite with braces and aligners.',
    icon: Shield,
    features: [
      'Metal Braces',
      'Ceramic Braces',
      'Clear Aligners (Invisalign)',
      'Retainers',
      'Early Orthodontic Treatment'
    ],
    duration: 'Varies',
    // price removed
    image: '/images/services/ORTHODONTICS - SADH.png',
    details: [
      'Orthodontic treatment helps align teeth and jaws for a healthier, more attractive smile.',
      'We offer traditional braces, ceramic options, and clear aligners for all ages.'
    ],
    popular: false
  },
  {
    id: 'pediatric-dentistry',
    slug: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    description: 'Gentle dental care for children and teens.',
    icon: Baby,
    features: [
      'Preventive Care',
      'Sealants',
      'Fluoride Treatments',
      'Early Orthodontic Evaluation',
      'Child-Friendly Environment'
    ],
    duration: '30-60 minutes',
    // price removed
    image: '/images/services/PEDIATRIC DENTISTRY - SADH.png',
    details: [
      'Our pediatric dental team specializes in making visits fun and stress-free for kids.',
      'We focus on prevention and education for lifelong oral health.'
    ],
    popular: false
  },
  {
    id: 'periodontics',
    slug: 'periodontics',
    title: 'Periodontics',
    description: 'Specialized care for gums and supporting structures.',
    icon: Heart,
    features: [
      'Gum Disease Treatment',
      'Scaling & Root Planing',
      'Gum Surgery',
      'Laser Therapy',
      'Maintenance Programs'
    ],
    duration: '45-90 minutes',
    // price removed
    image: '/images/services/PERIODONTITIS - SADH.png',
    details: [
      'Healthy gums are essential for a healthy mouth. Our periodontist provides advanced care for gum disease and related conditions.'
    ],
    popular: false
  },
  {
    id: 'dental-checkup',
    slug: 'dental-checkup',
    title: 'Dental Checkup',
    description: 'Routine dental checkups for preventive care and early detection.',
    icon: Smile,
    features: [
      'Oral Examination',
      'X-rays',
      'Professional Cleaning',
      'Oral Cancer Screening'
    ],
    duration: '30-45 minutes',
    // price removed
    image: '/images/services/DENTAL CHECKUP - SADH.png',
    details: [
      'Regular dental checkups help maintain oral health and catch issues early.'
    ],
    popular: false
  },
  {
    id: 'dental-fillings',
    slug: 'dental-fillings',
    title: 'Dental Fillings',
    description: 'Restore decayed or damaged teeth with tooth-colored fillings.',
    icon: Smile,
    features: [
      'Composite Fillings',
      'Amalgam Fillings',
      'Minimally Invasive',
      'Natural Appearance'
    ],
    duration: '30-60 minutes',
    // price removed
    image: '/images/services/DENTAL FILLINGS  - SADH.png',
    details: [
      'Dental fillings restore function and aesthetics to damaged teeth.'
    ],
    popular: false
  },
  {
    id: 'dental-implants',
    slug: 'dental-implants',
    title: 'Dental Implants',
    description: 'Permanent solution for missing teeth that look and feel natural.',
    icon: Crown,
    features: [
      'Single Tooth Implants',
      'Implant-Supported Bridges',
      'All-on-4 Implants',
      'Bone Grafting',
      'Sinus Lifts',
      'Implant Crowns'
    ],
    duration: '3-6 months',
    // price removed
    image: '/images/services/DENTAL IMPLANTS  - SADH.png',
    details: [
      'Dental implants are the gold standard for replacing missing teeth, offering a permanent solution that looks, feels, and functions like natural teeth.'
    ],
    popular: true
  },
  {
    id: 'dental-restoration',
    slug: 'dental-restoration',
    title: 'Dental Restoration',
    description: 'Restore the function and appearance of damaged teeth.',
    icon: Smile,
    features: [
      'Crowns',
      'Bridges',
      'Veneers',
      'Bonding'
    ],
    duration: '60-120 minutes',
    // price removed
    image: '/images/services/DENTAL RESTORATION - SADH.png',
    details: [
      'Dental restorations improve oral health and aesthetics.'
    ],
    popular: false
  },
  {
    id: 'dental-veneers',
    slug: 'dental-veneers',
    title: 'Dental Veneers',
    description: 'Thin shells to cover the front surface of teeth for a perfect smile.',
    icon: Sparkles,
    features: [
      'Porcelain Veneers',
      'Composite Veneers',
      'Stain Resistant',
      'Natural Look'
    ],
    duration: '2-3 visits',
    // price removed
    image: '/images/services/DENTAL VENEERS - SADH.png',
    details: [
      'Veneers are a cosmetic solution for chips, gaps, and discoloration.'
    ],
    popular: false
  },
  {
    id: 'emergency-dentistry',
    slug: 'emergency-dentistry',
    title: 'Emergency Dentistry',
    description: 'Immediate care for dental emergencies when you need it most.',
    icon: Shield,
    features: [
      'Toothache Relief',
      'Chipped/Broken Teeth',
      'Knocked-Out Teeth',
      'Lost Fillings/Crowns',
      'Dental Abscess',
      'Broken Dentures'
    ],
    duration: '30-120 minutes',
    // price removed
    image: '/images/services/EMERGENCY DENTSITRY  - SADH.png',
    details: [
      'Dental emergencies can happen at any time, and we are here to help.'
    ],
    popular: false
  },
  {
    id: 'laser-dentistry',
    slug: 'laser-dentistry',
    title: 'Laser Dentistry',
    description: 'Advanced dental treatments using laser technology.',
    icon: Zap,
    features: [
      'Laser Gum Treatment',
      'Laser Whitening',
      'Minimally Invasive',
      'Faster Healing'
    ],
    duration: '30-60 minutes',
    // price removed
    image: '/images/services/LASER DENTISTRY  - SADH.png',
    details: [
      'Laser dentistry offers precise and comfortable treatments.'
    ],
    popular: false
  },
  {
    id: 'maxillofacial-surgery',
    slug: 'maxillofacial-surgery',
    title: 'Maxillofacial Surgery',
    description: 'Surgical procedures for the jaw, face, and mouth.',
    icon: Shield,
    features: [
      'Jaw Surgery',
      'Facial Trauma',
      'TMJ Treatment',
      'Cyst/Tumor Removal'
    ],
    duration: 'Varies',
    // price removed
    image: '/images/services/MAXILLOFACIAL SURGERY - SADH.png',
    details: [
      'Maxillofacial surgery treats complex conditions of the face and jaw.'
    ],
    popular: false
  },
  {
    id: 'oral-surgery',
    slug: 'oral-surgery',
    title: 'Oral Surgery',
    description: 'Surgical treatments for teeth and mouth conditions.',
    icon: Shield,
    features: [
      'Tooth Extractions',
      'Biopsies',
      'Cyst Removal',
      'Minor Surgeries'
    ],
    duration: 'Varies',
    // price removed
    image: '/images/services/ORAL SURGERY - SADH.png',
    details: [
      'Oral surgery is performed for a variety of dental conditions.'
    ],
    popular: false
  },
  {
    id: 'root-canal',
    slug: 'root-canal',
    title: 'Root Canal',
    description: 'Treatment to save and restore infected teeth.',
    icon: Smile,
    features: [
      'Pain Relief',
      'Tooth Preservation',
      'Quick Recovery',
      'High Success Rate'
    ],
    duration: '60-90 minutes',
    // price removed
    image: '/images/services/ROOT CANAL  - SADH.png',
    details: [
      'Root canal treatment saves teeth that would otherwise be lost.'
    ],
    popular: false
  },
  {
    id: 'teeth-cleaning',
    slug: 'teeth-cleaning',
    title: 'Teeth Cleaning',
    description: 'Professional cleaning for healthy teeth and gums.',
    icon: Smile,
    features: [
      'Plaque Removal',
      'Tartar Removal',
      'Polishing',
      'Oral Hygiene Advice'
    ],
    duration: '30-45 minutes',
    // price removed
    image: '/images/services/TEETH CLEANING  - SADH.png',
    details: [
      'Teeth cleaning is essential for oral health and fresh breath.'
    ],
    popular: false
  },
  {
    id: 'wisdom-teeth',
    slug: 'wisdom-teeth',
    title: 'Wisdom Teeth',
    description: 'Evaluation and removal of wisdom teeth.',
    icon: Smile,
    features: [
      'Wisdom Tooth Extraction',
      'Pain Management',
      'Post-Op Care',
      'Consultation'
    ],
    duration: 'Varies',
    // price removed
    image: '/images/services/WISDOM TEETH - SADH.png',
    details: [
      'Wisdom teeth can cause pain and crowding; removal is often recommended.'
    ],
    popular: false
  },
  {
    id: 'bridges',
    slug: 'bridges',
    title: 'Dental Bridges',
    description: 'Replace missing teeth with fixed dental bridges.',
    icon: Crown,
    features: [
      'Fixed Bridges',
      'Natural Appearance',
      'Restores Function',
      'Long-Lasting'
    ],
    duration: '2-3 visits',
    // price removed
    image: '/images/services/BRIDGES - SADH.png',
    details: [
      'Dental bridges fill gaps and restore your smile.'
    ],
    popular: false
  },
  {
    id: 'general-dentistry',
    slug: 'general-dentistry',
    title: 'General Dentistry',
    description: 'Comprehensive preventive and restorative care for the whole family.',
    icon: Stethoscope,
    features: [
      'Regular Cleanings & Check-ups',
      'Dental Exams & X-rays',
      'Fillings & Restorations',
      'Gum Disease Treatment',
      'Root Canal Therapy',
      'Tooth Extractions'
    ],
    duration: '30-90 minutes',
    // price removed
    image: '/images/services/general-dentistry.jpg',
    details: [
      'Our general dentistry services are designed to maintain optimal oral health for patients of all ages. We focus on preventive care to help you avoid dental problems before they start.',
      'Regular dental check-ups are essential for maintaining good oral health. During these visits, we perform professional cleanings, thorough examinations, and oral cancer screenings.',
      'We use the latest technology and techniques to provide comfortable and effective treatments for all your dental needs, from simple cleanings to more complex procedures.'
    ],
    popular: true,
    subServices: [
      {
        id: 'cleanings',
        title: 'Dental Cleanings',
        description: 'Professional teeth cleaning to remove plaque and tartar.',
        // price removed
        duration: '45-60 minutes',
        features: [
          'Plaque and tartar removal',
          'Teeth polishing',
          'Oral hygiene instructions',
          'Fluoride treatment available'
        ]
      },
      {
        id: 'fillings',
        title: 'Tooth Fillings',
        description: 'Restore damaged teeth with tooth-colored fillings.',
        // price removed
        duration: '30-60 minutes',
        features: [
          'Tooth-colored composite fillings',
          'Minimally invasive',
          'Natural-looking results',
          'Strengthens tooth structure'
        ]
      }
    ],
    faqs: [
      {
        question: 'How often should I visit the dentist?',
        answer: 'We recommend visiting the dentist every six months for a regular check-up and cleaning to maintain optimal oral health.'
      },
      {
        question: 'Do dental cleanings hurt?',
        answer: 'Most patients find dental cleanings comfortable, though you may experience some mild discomfort if you have sensitive teeth or gum disease.'
      }
    ]
  },
  {
    id: 'cosmetic-dentistry',
    slug: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    description: 'Enhance your smile with our cosmetic dental treatments.',
    icon: Sparkles,
    features: [
      'Teeth Whitening',
      'Porcelain Veneers',
      'Dental Bonding',
      'Invisalign Clear Aligners',
      'Gum Contouring',
      'Smile Makeovers'
    ],
    duration: '1-3 hours',
    // price removed
    image: '/images/services/cosmetic-dentistry.jpg',
    details: [
      'Transform your smile with our comprehensive cosmetic dentistry services. Whether you\'re looking for subtle changes or a complete smile makeover, we have the solutions to help you achieve the smile you\'ve always wanted.',
      'Our cosmetic treatments are customized to your unique needs and goals, using high-quality materials and advanced techniques for natural-looking, long-lasting results.',
      'We offer a range of options to address various cosmetic concerns, from teeth whitening for a brighter smile to porcelain veneers for correcting chips, gaps, or misalignments.'
    ],
    popular: true,
    subServices: [
      {
        id: 'teeth-whitening',
        title: 'Teeth Whitening',
        description: 'Professional teeth whitening for a brighter, whiter smile.',
        // price removed
        duration: '1 hour',
        features: [
          'In-office whitening treatment',
          'Custom take-home trays available',
          'Results visible after first session',
          'Safe for most patients'
        ]
      },
      {
        id: 'porcelain-veneers',
        title: 'Porcelain Veneers',
        description: 'Thin, custom-made shells to improve your smile.',
        // price removed
        duration: '2-3 visits',
        features: [
          'Custom-made for your smile',
          'Resistant to stains',
          'Natural-looking results',
          'Long-lasting solution'
        ]
      },
      {
        id: 'dental-bonding',
        title: 'Dental Bonding',
        description: 'Quick and affordable cosmetic solution for minor imperfections.',
        // price removed
        duration: '30-60 minutes',
        features: [
          'Single-visit treatment',
          'No anesthesia required',
          'Natural-looking results',
          'Minimal tooth preparation'
        ]
      }
    ],
    faqs: [
      {
        question: 'How long does teeth whitening last?',
        answer: 'Professional teeth whitening can last from 6 months to 3 years, depending on your oral hygiene and lifestyle habits like drinking coffee, tea, or smoking.'
      },
      {
        question: 'Are porcelain veneers permanent?',
        answer: 'Veneers are considered a permanent treatment as they require removing a small amount of tooth enamel. They typically last 10-15 years with proper care.'
      },
      {
        question: 'Is cosmetic dentistry covered by insurance?',
        answer: 'Most cosmetic procedures are not covered by dental insurance as they are considered elective. However, some treatments with functional benefits may have partial coverage.'
      }
    ],
    beforeAfterGallery: [
      {
        before: 'https://images.unsplash.com/photo-1537365587684-f490102e1225?w=400&h=300&fit=crop',
        after: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=400&h=300&fit=crop',
        title: 'Teeth Whitening Transformation',
        description: 'Professional teeth whitening results after one session.'
      },
      {
        before: 'https://images.unsplash.com/photo-1607990283143-e81c7b5ea372?w=400&h=300&fit=crop',
        after: 'https://images.unsplash.com/photo-1607990281519-09df3f0d9ed7?w=400&h=300&fit=crop',
        title: 'Veneers Makeover',
        description: 'Complete smile transformation with porcelain veneers.'
      }
    ],
    testimonials: [
      {
        name: 'Sarah Johnson',
        rating: 5,
        comment: 'The teeth whitening treatment was amazing! My smile has never been brighter. The staff made me feel so comfortable throughout the entire process.',
        date: '2023-05-15',
        image: 'https://randomuser.me/api/portraits/women/44.jpg'
      },
      {
        name: 'Michael Chen',
        rating: 5,
        comment: 'Got porcelain veneers and the results are incredible. The dentist took the time to understand exactly what I wanted. Highly recommend!',
        date: '2023-06-22'
      }
    ]
  },
  {
    id: 'orthodontics',
    slug: 'orthodontics',
    title: 'Orthodontics',
    description: 'Straighten your teeth and improve your bite with our orthodontic solutions.',
    icon: Zap,
    features: [
      'Traditional Braces',
      'Invisalign Clear Aligners',
      'Lingual Braces',
      'Retainers',
      'Early Treatment',
      'Adult Orthodontics'
    ],
    duration: '12-24 months',
    price: 'From $3,999',
    image: 'https://images.unsplash.com/photo-1629909613807-0f474baa822b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    details: [
      'Achieve a straighter, healthier smile with our comprehensive orthodontic treatments. We offer a variety of options to suit different needs and lifestyles, from traditional braces to virtually invisible aligners.',
      'Our orthodontic treatments are suitable for patients of all ages, with early intervention options for children and discreet solutions for adults.',
      'We use the latest technology, including digital impressions and 3D treatment planning, to ensure precise, comfortable, and efficient treatment.'
    ],
    subServices: [
      {
        id: 'invisalign',
        title: 'Invisalign Clear Aligners',
        description: 'Virtually invisible aligners to straighten your teeth.',
        price: '$3,999 - $8,000',
        duration: '12-18 months',
        features: [
          'Virtually invisible',
          'Removable for eating and cleaning',
          'Custom-made for your smile',
          'Fewer office visits than braces'
        ]
      },
      {
        id: 'braces',
        title: 'Traditional Braces',
        description: 'Metal or ceramic braces for effective teeth straightening.',
        price: '$3,000 - $7,000',
        duration: '18-36 months',
        features: [
          'Effective for complex cases',
          'Color options available',
          'Ceramic options less visible',
          'Suitable for all ages'
        ]
      }
    ]
  },
  {
    id: 'pediatric-dentistry',
    slug: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    description: 'Gentle dental care designed specifically for children.',
    icon: Baby,
    features: [
      'Child-Friendly Environment',
      'Preventive Care',
      'Dental Sealants',
      'Fluoride Treatments',
      'Habit Counseling',
      'Emergency Care'
    ],
    duration: '30-60 minutes',
    price: 'From $79',
    image: 'https://images.unsplash.com/photo-1577898226791-5c3b9a0b7c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    details: [
      'Our pediatric dental services are designed to make dental visits fun and stress-free for children. We create a welcoming environment where kids can feel comfortable and at ease.',
      'We focus on preventive care and education to help children develop good oral hygiene habits that will last a lifetime.',
      'Our team is specially trained to work with children of all ages, from toddlers to teenagers, and we offer a range of treatments to meet their unique dental needs.'
    ],
    subServices: [
      {
        id: 'sealants',
        title: 'Dental Sealants',
        description: 'Protective coating for children\'s teeth to prevent cavities.',
        price: '$45 - $65 per tooth',
        duration: '15-30 minutes',
        features: [
          'Prevents 80% of cavities in molars',
          'Quick and painless application',
          'Lasts several years',
          'Can be reapplied as needed'
        ]
      },
      {
        id: 'fluoride',
        title: 'Fluoride Treatments',
        description: 'Strengthens tooth enamel and prevents decay.',
        price: '$25 - $50',
        duration: '10-15 minutes',
        features: [
          'Strengthens tooth enamel',
          'Reduces risk of cavities',
          'Safe for children',
          'Quick and painless'
        ]
      }
    ]
  },
  {
    id: 'dental-implants',
    slug: 'dental-implants',
    title: 'Dental Implants',
    description: 'Permanent solution for missing teeth that look and feel natural.',
    icon: Crown,
    features: [
      'Single Tooth Implants',
      'Implant-Supported Bridges',
      'All-on-4 Implants',
      'Bone Grafting',
      'Sinus Lifts',
      'Implant Crowns'
    ],
    duration: '3-6 months',
    price: 'From $1,999',
    image: 'https://images.unsplash.com/photo-1589998055331-a674986e46a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    details: [
      'Dental implants are the gold standard for replacing missing teeth, offering a permanent solution that looks, feels, and functions like natural teeth.',
      'Our implant procedures are performed with precision and care, using high-quality materials and advanced techniques for optimal results.',
      'We offer comprehensive implant services, from initial consultation and treatment planning to implant placement and restoration.'
    ],
    popular: true,
    subServices: [
      {
        id: 'single-implant',
        title: 'Single Tooth Implant',
        description: 'Replace a single missing tooth with a natural-looking implant.',
        price: '$1,999 - $4,000',
        duration: '3-6 months',
        features: [
          'Replaces a single missing tooth',
          'Prevents bone loss',
          'Functions like a natural tooth',
          'Long-lasting solution'
        ]
      },
      {
        id: 'all-on-4',
        title: 'All-on-4 Implants',
        description: 'Full arch restoration with just four implants.',
        price: '$15,000 - $30,000 per arch',
        duration: '4-6 months',
        features: [
          'Full arch restoration',
          'Fixed denture option',
          'Minimal bone required',
          'Same-day teeth possible'
        ]
      }
    ]
  },
  {
    id: 'emergency-dentistry',
    slug: 'emergency-dentistry',
    title: 'Emergency Dentistry',
    description: 'Immediate care for dental emergencies when you need it most.',
    icon: Shield,
    features: [
      'Toothache Relief',
      'Chipped/Broken Teeth',
      'Knocked-Out Teeth',
      'Lost Fillings/Crowns',
      'Dental Abscess',
      'Broken Dentures'
    ],
    duration: '30-120 minutes',
    price: 'From $99',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    details: [
      'Dental emergencies can happen at any time, and we\'re here to help when they do. We offer same-day emergency appointments to provide prompt relief and treatment.',
      'Our team is experienced in handling a wide range of dental emergencies, from severe toothaches to broken teeth and lost restorations.',
      'We understand that dental emergencies can be stressful, and we strive to make your visit as comfortable and efficient as possible.'
    ],
    subServices: [
      {
        id: 'toothache',
        title: 'Toothache Relief',
        description: 'Immediate care for tooth pain and sensitivity.',
        price: '$99 - $200',
        duration: '30-60 minutes',
        features: [
          'Pain relief',
          'Diagnosis of issue',
          'Temporary treatment',
          'Follow-up care plan'
        ]
      },
      {
        id: 'knocked-out-tooth',
        title: 'Knocked-Out Tooth',
        description: 'Emergency care for avulsed teeth.',
        price: '$200 - $1,000+',
        duration: '30-90 minutes',
        features: [
          'Tooth reimplantation',
          'Splinting if needed',
          'Follow-up care',
          'Restoration options'
        ]
      }
    ]
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const getSubService = (serviceId: string, subServiceId: string): SubService | undefined => {
  const service = getServiceById(serviceId);
  return service?.subServices?.find(sub => sub.id === subServiceId);
};

export default services;
