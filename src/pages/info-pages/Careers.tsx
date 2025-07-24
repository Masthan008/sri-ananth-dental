import { PageLayout } from '@/components/PageLayout';
import { CheckCircle, Heart, Users, Award } from 'lucide-react';

type Benefit = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

type JobOpening = {
  title: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
};

const Careers = () => {
  const benefits: Benefit[] = [
    {
      icon: CheckCircle,
      title: 'Competitive Compensation',
      description: 'We offer competitive salaries and comprehensive benefits packages.'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'We believe in maintaining a healthy work-life balance for all our team members.'
    },
    {
      icon: Users,
      title: 'Team Environment',
      description: 'Join a supportive team that values collaboration and professional growth.'
    },
    {
      icon: Award,
      title: 'Professional Development',
      description: 'We invest in our team with continuing education and training opportunities.'
    }
  ];

  const jobOpenings: JobOpening[] = [
    {
      title: 'Associate Dentist',
      type: 'Full-time',
      location: 'Vikarabad',
      description: 'We are seeking a skilled and compassionate Associate Dentist to join our growing practice.',
      requirements: [
        'BDS/MDS from a recognized dental school',
        'Valid dental license to practice in Telangana',
        '2+ years of clinical experience preferred',
        'Excellent communication and patient care skills'
      ]
    },
    {
      title: 'Dental Hygienist',
      type: 'Full-time',
      location: 'Vikarabad',
      description: 'Join our team as a Dental Hygienist to provide exceptional preventive dental care to our patients.',
      requirements: [
        'Diploma or degree in Dental Hygiene',
        'Valid license to practice',
        '1+ years of experience preferred',
        'Strong interpersonal skills'
      ]
    },
    {
      title: 'Dental Assistant',
      type: 'Full-time',
      location: 'Vikarabad',
      description: 'We are looking for a dedicated Dental Assistant to support our dental team and ensure smooth operations.',
      requirements: [
        'Diploma in Dental Assisting or equivalent',
        'Knowledge of dental procedures and terminology',
        'Excellent organizational skills',
        'Willingness to learn and grow'
      ]
    },
    {
      title: 'Front Office Coordinator',
      type: 'Full-time',
      location: 'Vikarabad',
      description: 'Join our front office team to provide excellent patient service and administrative support.',
      requirements: [
        'Experience in dental or medical office administration',
        'Excellent communication and customer service skills',
        'Proficiency in dental software (preferred)',
        'Strong organizational abilities'
      ]
    }
  ];

  return (
    <PageLayout
      title="Join Our Team"
      subtitle="Build your career with Sri Ananth Dental Hospital"
      heroImage="/images/hero/careers-bg.jpg"
    >
      <div className="max-w-7xl mx-auto">
        {/* Why Join Us Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Sri Ananth Dental Hospital, we believe our team is our greatest asset. We're committed to creating a positive and supportive work environment where you can grow professionally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Current Openings */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Current Openings</h2>
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      <div className="flex items-center mt-1 space-x-4">
                        <span className="text-sm text-gray-600">{job.type}</span>
                        <span className="text-sm text-gray-600">•</span>
                        <span className="text-sm text-gray-600">{job.location}</span>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                      Apply Now
                    </button>
                  </div>
                  <p className="text-gray-700 mb-4">{job.description}</p>
                  <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                  <ul className="space-y-2 mb-6">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Application Form */}
        <section className="bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Don't See the Perfect Role?</h2>
            <p className="text-xl text-gray-600 mb-8">
              We're always looking for talented individuals to join our team. Send us your resume and we'll contact you when a position becomes available.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 text-left">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 text-left">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 text-left">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+91 "
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1 text-left">Position of Interest</label>
                  <select
                    id="position"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a position</option>
                    <option value="associate-dentist">Associate Dentist</option>
                    <option value="dental-hygienist">Dental Hygienist</option>
                    <option value="dental-assistant">Dental Assistant</option>
                    <option value="front-office">Front Office Coordinator</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1 text-left">Upload Resume</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                        >
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 5MB</p>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 text-left">Cover Letter (Optional)</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us why you'd be a great fit..."
                  ></textarea>
                </div>
                <div className="flex items-center">
                  <input
                    id="privacy-policy"
                    name="privacy-policy"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="privacy-policy" className="ml-2 block text-sm text-gray-700">
                    I agree to the <a href="/privacy-policy" className="text-blue-600 hover:text-blue-500">Privacy Policy</a>
                  </label>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Careers;
