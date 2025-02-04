"use client";

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What areas do you service?",
      answer: "We proudly serve Barrie and surrounding areas including Innisfil, Oro-Medonte, Springwater, and other nearby communities. Contact us to confirm if we service your location."
    },
    {
      question: "Do you offer emergency HVAC services?",
      answer: "Yes, we provide 24/7 emergency HVAC services. Our team is always ready to respond to urgent heating and cooling issues to ensure your comfort and safety."
    },
    {
      question: "What HVAC brands do you work with?",
      answer: "We work with all major HVAC brands and are certified to install and repair various systems. We can help you choose the best equipment for your specific needs and budget."
    },
    {
      question: "How often should I service my HVAC system?",
      answer: "We recommend servicing your HVAC system at least twice a year: once before the cooling season and once before the heating season. Regular maintenance helps prevent breakdowns and extends system life."
    },
    {
      question: "Do you offer financing options?",
      answer: "Yes, we offer flexible financing options to help make your HVAC investment more manageable. Contact us to learn more about our current financing programs."
    },
    {
      question: "What warranties do you offer?",
      answer: "We provide manufacturer warranties on all equipment installations and a labor warranty on our services. Specific warranty terms vary by product and service type."
    },
    {
      question: "How long does a typical installation take?",
      answer: "Most standard HVAC installations can be completed within 1-2 days. However, the exact timeline depends on the system type, complexity, and any additional work required."
    },
    {
      question: "What maintenance plans do you offer?",
      answer: "We offer several maintenance plan options that include regular inspections, priority service, and discounts on repairs. These plans help ensure optimal system performance and prevent costly breakdowns."
    },
    {
      question: "Are your technicians licensed and insured?",
      answer: "Yes, all our technicians are fully licensed, insured, and undergo regular training to stay current with the latest HVAC technologies and best practices."
    },
    {
      question: "How can I improve my home's air quality?",
      answer: "We offer various air quality solutions including air purifiers, filtration systems, humidifiers, and UV light treatments. We can assess your home's needs and recommend the best solutions."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-800 text-center">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-blue-light rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center"
              >
                <span className="font-medium text-neutral-800">{faq.question}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-secondary transition-transform duration-300 
                    ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`px-6 transition-all duration-300 ease-in-out overflow-hidden
                  ${openIndex === index ? 'max-h-48 py-4' : 'max-h-0'}`}
              >
                <p className="text-neutral-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 