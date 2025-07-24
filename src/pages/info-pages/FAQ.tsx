import { PageLayout } from '@/components/PageLayout';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const FAQItem = ({ question, children }: { question: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        className="flex justify-between items-center w-full text-left py-3 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-blue-600" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          {children}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What should I expect during my first visit?",
      answer: "During your first visit, we'll review your medical and dental history, take any necessary x-rays, and perform a comprehensive oral examination. The dentist will discuss any findings with you and recommend a personalized treatment plan."
    },
    {
      question: "How often should I visit the dentist?",
      answer: "We recommend visiting the dentist every six months for a routine cleaning and check-up. However, some patients may need more frequent visits depending on their oral health needs."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept most major credit cards, personal checks, cash, and most dental insurance plans. We also offer flexible payment plans for more extensive treatments."
    },
    {
      question: "Do you see children?",
      answer: "Yes! We're a family dental practice and welcome patients of all ages. We recommend children have their first dental visit by their first birthday or when their first tooth appears."
    },
    {
      question: "What should I do if I have a dental emergency?",
      answer: "If you're experiencing severe pain, swelling, or have had a dental injury, please call our office immediately. We reserve time in our schedule for emergency appointments and will do our best to see you as soon as possible."
    },
    {
      question: "How can I improve my smile?",
      answer: "We offer a variety of cosmetic dentistry options including teeth whitening, veneers, and Invisalign. Schedule a consultation to discuss which treatment would be best for achieving your desired results."
    },
    {
      question: "What's the best way to whiten my teeth?",
      answer: "We offer both in-office whitening treatments and take-home whitening kits. The best option depends on your specific needs and desired results. Our dentist can recommend the most effective treatment during your consultation."
    },
    {
      question: "Are dental X-rays safe?",
      answer: "Yes, dental X-rays are very safe. We use digital X-rays which emit significantly less radiation than traditional film X-rays. We also use lead aprons and thyroid collars to minimize exposure."
    }
  ];

  return (
    <PageLayout
      title="Frequently Asked Questions"
      subtitle="Find answers to common questions about our dental practice"
      heroImage="/images/hero/faq-bg.jpg"
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-12">
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Common Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question}>
                  <p>{faq.answer}</p>
                </FAQItem>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 mb-12">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Still have questions?</h3>
          <p className="mb-4 text-gray-700">
            We're here to help! Contact our friendly staff with any other questions or concerns you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a
              href="tel:+919494444027"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors text-center"
            >
              Call Us: +91 94944 44027
            </a>
            <a
              href="mailto:info@sriananthdental.com"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FAQ;
