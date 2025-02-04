"use client";

import { useState } from 'react';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ServiceDetail {
  title: string;
  content: string;
}

interface Service {
  title: string;
  description: string;
  image: string;
  details: ServiceDetail[];
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      title: "Installation & Replacement",
      description: "Professional HVAC installation services with expert technicians and top-rated equipment.",
      image: "/installation.png",
      details: [
        {
          title: "Comprehensive HVAC Solutions",
          content: "At RK Air Systems, we provide top-quality HVAC installation services designed for Barrie homeowners. Our expert team ensures reliable, energy-efficient solutions for your year-round comfort."
        },
        {
          title: "Furnace Installation",
          content: "Professional furnace installation services with energy-efficient models to keep your home warm during Barrie's cold winters."
        },
        {
          title: "AC Installation",
          content: "Expert air conditioning installation services with reliable solutions tailored to your cooling needs."
        },
        {
          title: "Heat Pump Systems",
          content: "Specialized installation of heat pump systems offering both heating and cooling options for year-round comfort."
        }
      ]
    },
    {
      title: "Repairs & Maintenance",
      description: "Fast, reliable repair services and preventive maintenance to keep your HVAC system running efficiently.",
      image: "/repair.png",
      details: [
        {
          title: "Expert Repair Services",
          content: "RK Air Systems provides fast, reliable repair services for all HVAC systems. Our skilled technicians quickly diagnose and resolve issues to restore your home's comfort."
        },
        {
          title: "Furnace Repair",
          content: "Quick diagnosis and repair of furnace issues, plus routine maintenance to ensure efficient operation during winter months."
        },
        {
          title: "AC Repair & Service",
          content: "Reliable air conditioning repair services and maintenance plans to extend your unit's lifespan and maintain optimal performance."
        },
        {
          title: "24/7 Emergency Service",
          content: "Round-the-clock emergency repair services ensuring you're never left without heating or cooling when you need it most."
        }
      ]
    },
    {
      title: "Air Quality",
      description: "Advanced solutions for cleaner, healthier indoor air quality in your home or business.",
      image: "/air-quality.png",
      details: [
        {
          title: "Indoor Air Quality Solutions",
          content: "Comprehensive air quality services designed to create a healthier indoor environment. We ensure the air you breathe is clean, fresh, and safe."
        },
        {
          title: "Air Purification",
          content: "Advanced air purification systems to eliminate airborne pollutants and allergens, improving your home's air quality."
        },
        {
          title: "Filtration Systems",
          content: "High-efficiency air filtration systems designed to capture dust, pollen, and contaminants for enhanced indoor comfort."
        },
        {
          title: "Ventilation Solutions",
          content: "Expert installation of ventilation systems to improve air circulation and maintain optimal indoor air quality."
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-primary to-primary-light" id="services">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">Our Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-blue-light rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden 
                        hover:shadow-2xl hover:shadow-secondary/20 
                        transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-72">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-neutral-200 mb-6">
                  {service.description}
                </p>
                <button 
                  onClick={() => setSelectedService(service)}
                  className="text-secondary-light hover:text-blue-light font-semibold 
                            transition-colors duration-300"
                >
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Service Details Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 
                     flex items-center justify-center overflow-hidden
                     animate-fadeIn px-4 py-8"
          onClick={(e) => e.target === e.currentTarget && setSelectedService(null)}
        >
          <div 
            className="relative w-full max-w-2xl max-h-[85vh] 
                      flex flex-col bg-white rounded-3xl shadow-2xl 
                      animate-slideUp border border-white/10"
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md z-10 
                          border-b border-neutral-200
                          rounded-t-3xl">
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-center">
                  <div className="animate-fadeIn">
                    <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">
                      {selectedService.title}
                    </h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-secondary to-blue-light rounded-full 
                                  animate-slideRight" />
                  </div>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="p-2.5 bg-neutral-100 hover:bg-neutral-200 rounded-full 
                              transition-all duration-300 hover:rotate-90
                              focus:outline-none focus:ring-2 focus:ring-secondary 
                              focus:ring-offset-2 group"
                    aria-label="Close modal"
                  >
                    <XMarkIcon className="w-6 h-6 text-neutral-700 group-hover:text-neutral-900" />
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Content - Scrollable Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <div className="p-6 md:p-8 space-y-8">
                <p className="text-lg text-neutral-600 leading-relaxed animate-fadeIn">
                  {selectedService.description}
                </p>
                
                <div className="space-y-6">
                  {selectedService.details.map((detail, index) => (
                    <div 
                      key={index} 
                      className="group p-6 rounded-2xl bg-neutral-50 hover:bg-white
                                transition-all duration-300 
                                hover:shadow-lg hover:shadow-secondary/5
                                animate-fadeIn border border-neutral-100
                                hover:border-secondary/20"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-2 h-2 rounded-full bg-secondary mt-3 
                                      group-hover:scale-150 group-hover:rotate-180 
                                      transition-all duration-500" />
                        <div className="flex-1 space-y-2">
                          <h4 className="text-xl font-semibold text-neutral-800 
                                       group-hover:text-secondary transition-colors duration-300">
                            {detail.title}
                          </h4>
                          <p className="text-neutral-600 leading-relaxed
                                      group-hover:text-neutral-700 transition-colors duration-300">
                            {detail.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Call to Action */}
                <div className="pt-4">
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="w-full group relative px-8 py-4 bg-secondary text-white 
                              rounded-full overflow-hidden transition-all duration-300 
                              hover:shadow-2xl hover:shadow-secondary/20 hover:scale-[1.02]
                              focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2
                              active:scale-95"
                  >
                    <span className="relative z-10 text-lg font-semibold">
                      Schedule Consultation
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary via-blue-light to-secondary 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
} 