"use client";

import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '', // Honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  // Check URL for success parameter
  useEffect(() => {
    if (window.location.search.includes('success')) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000); // Hide after 5 seconds
      // Smooth scroll to contact section
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check honeypot
    if (formData.honeypot) {
      console.log('Bot detected');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message. We will get back to you soon!'
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        honeypot: '',
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 relative">
      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          <div className="relative bg-white rounded-2xl p-8 shadow-xl max-w-md mx-4 animate-slideUp">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg 
                  className="w-8 h-8 text-green-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-800 mb-2">
                Thank You!
              </h3>
              <p className="text-neutral-600 mb-6">
                Your message has been sent successfully. We'll get back to you soon.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-blue-light transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-800">Contact Us</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-blue-light rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-neutral-800">Get in Touch</h3>
            <p className="text-lg text-neutral-800/80">
              Ready to experience premium HVAC solutions? Contact us today for a consultation.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <PhoneIcon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-neutral-800/60">Phone</p>
                  <p className="text-lg font-semibold text-neutral-800">+1 705-220-5272</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <EnvelopeIcon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-neutral-800/60">Email</p>
                  <p className="text-lg font-semibold text-neutral-800">rob@rkairsystems.ca</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <MapPinIcon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-neutral-800/60">Servicing</p>
                  <p className="text-lg font-semibold text-neutral-800">Barrie and Surrounding Areas</p>
                </div>
              </div>
            </div>
          </div>
          <form 
            onSubmit={handleSubmit}
            className="space-y-6 bg-neutral-100 p-8 rounded-2xl"
          >
            <input type="hidden" name="_next" value="https://www.rkairsystems.ca/?success=true#contact" />
            <input type="hidden" name="_subject" value="New Contact Form Submission" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl border-2 border-neutral-200 
                          focus:border-secondary focus:outline-none transition-colors
                          text-neutral-900 placeholder:text-neutral-500"
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl border-2 border-neutral-200 
                          focus:border-secondary focus:outline-none transition-colors
                          text-neutral-900 placeholder:text-neutral-500"
              />
            </div>
            
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl border-2 border-neutral-200 
                          focus:border-secondary focus:outline-none transition-colors
                          text-neutral-900 placeholder:text-neutral-500"
              />
            </div>
            
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl border-2 border-neutral-200 
                          focus:border-secondary focus:outline-none transition-colors
                          text-neutral-900 placeholder:text-neutral-500 resize-none"
              ></textarea>
            </div>
            
            {/* Honeypot field - hidden from real users */}
            <div className="hidden">
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
            </div>

            {submitStatus && (
              <div className={`rounded-md p-4 ${
                submitStatus.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative px-8 py-3 bg-secondary text-white rounded-xl 
                        overflow-hidden transition-all duration-300 
                        hover:shadow-2xl hover:shadow-secondary/20 hover:scale-105"
            >
              <span className="relative z-10 font-semibold">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-blue-light to-secondary 
                            -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 