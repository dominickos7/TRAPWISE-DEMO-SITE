import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Navbar } from '../components/ui';

const LeadCapturePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    problem: '',
    service: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-lg mx-auto text-center"
          >
            <div className="mb-8">
              <div className="w-16 h-16 bg-[#4F6DF5] rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Thanks! We'll get back to you within 24 hours.</h2>
              <p className="text-gray-600">We're excited to help you automate your clinic and boost your efficiency.</p>
            </div>
            <button
              onClick={() => navigate('/')}
              className="text-[#4F6DF5] font-medium hover:underline"
            >
              Return to Homepage
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Automate Your <span className="text-[#4F6DF5]">Success</span>
            </h1>
            <p className="text-lg text-gray-600">Tell us about your clinic and we'll show you how Trapwise.ai can help.</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4F6DF5]/20 focus:border-[#4F6DF5] transition-colors"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4F6DF5]/20 focus:border-[#4F6DF5] transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                required
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4F6DF5]/20 focus:border-[#4F6DF5] transition-colors"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-1">What problem are you looking to solve?</label>
              <textarea
                id="problem"
                name="problem"
                required
                value={formData.problem}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4F6DF5]/20 focus:border-[#4F6DF5] transition-colors"
                placeholder="Tell us about the challenges you're facing..."
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Selected Service</label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4F6DF5]/20 focus:border-[#4F6DF5] transition-colors"
              >
                <option value="">Select a service</option>
                <option value="ai-agent">AI Agent</option>
                <option value="ai-phone-agent">AI Phone Agent</option>
                <option value="email-automation">Email Automation</option>
                <option value="social-media-automation">Social Media Automation</option>
                <option value="crm-integration">CRM Integration</option>
              </select>
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Additional Notes (Optional)</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4F6DF5]/20 focus:border-[#4F6DF5] transition-colors"
                placeholder="Any additional information you'd like to share..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#4F6DF5] text-white font-medium py-4 rounded-xl hover:bg-[#4F6DF5]/90 transition-colors"
            >
              Submit
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default LeadCapturePage;