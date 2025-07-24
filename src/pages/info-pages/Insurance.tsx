import { PageLayout } from '@/components/PageLayout';

const Insurance = () => {
  return (
    <PageLayout
      title="Dental Insurance"
      subtitle="Affordable dental care with your insurance"
      heroImage="/images/hero/insurance-bg.jpg"
    >
      <div className="prose max-w-none">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Dental Insurance Information</h2>
        
        <div className="bg-blue-50 p-6 rounded-xl mb-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">Accepted Insurance Plans</h3>
          <p className="mb-4">We accept most major dental insurance plans, including but not limited to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Delta Dental</li>
            <li>MetLife</li>
            <li>Cigna</li>
            <li>Aetna</li>
            <li>Guardian</li>
            <li>United Healthcare</li>
            <li>And many more...</li>
          </ul>
          <p className="text-sm text-gray-600">Don't see your insurance provider listed? Contact us to verify coverage.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Understanding Your Coverage</h3>
            <p className="mb-4">Dental insurance can be complex. Our team is here to help you understand your benefits and maximize your coverage.</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Preventive care coverage (cleanings, exams, x-rays)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Basic procedures (fillings, extractions)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Major procedures (crowns, bridges, dentures)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Orthodontic coverage (varies by plan)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">No Insurance?</h3>
            <p className="mb-4">We offer affordable payment plans and financing options to make dental care accessible for everyone.</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">In-House Membership Plan</h4>
                  <p className="text-sm text-gray-600">Affordable alternative to traditional insurance</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Flexible Payment Options</h4>
                  <p className="text-sm text-gray-600">Custom payment plans available</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Senior & Student Discounts</h4>
                  <p className="text-sm text-gray-600">Special rates for students and seniors</p>
                </div>
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Learn About Our Payment Options
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900">Do you accept my insurance?</h4>
              <p className="text-gray-600 mt-1">We accept most PPO dental insurance plans. Please contact our office with your insurance information, and we'll be happy to verify your coverage.</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">What if I don't have dental insurance?</h4>
              <p className="text-gray-600 mt-1">We offer an in-house dental savings plan and flexible payment options to make dental care affordable for everyone.</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">How much will my treatment cost with insurance?</h4>
              <p className="text-gray-600 mt-1">Costs vary depending on your specific insurance plan. We'll provide a detailed treatment plan with estimated costs after your initial consultation.</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Insurance;
