"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    { 
      image: "/project-1.png", 
      title: "Need a New HVAC System?",
      description: "Get a free consultation for your home's heating and cooling needs"
    },
    { 
      image: "/project-2.png", 
      title: "Commercial HVAC Solutions",
      description: "Expert solutions for your business - contact us for a custom quote"
    },
    { 
      image: "/project-3.png", 
      title: "Smart Climate Control",
      description: "Upgrade to modern, energy-efficient HVAC systems"
    },
    { 
      image: "/project-4.png", 
      title: "24/7 Emergency Service",
      description: "Fast, reliable HVAC repairs when you need them most"
    },
    { 
      image: "/project-5.png", 
      title: "Maintenance Plans",
      description: "Keep your HVAC system running efficiently all year round"
    },
    { 
      image: "/project-6.png", 
      title: "Energy Efficiency Upgrades",
      description: "Save money with our energy-efficient HVAC solutions"
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-neutral-100 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-800">Our Portfolio</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-blue-light rounded-full"></div>
        </div>

        <div className="relative">
          {/* Main Display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-neutral-900/5"></div>
              <Image
                src={projects[activeIndex].image}
                alt={projects[activeIndex].title}
                fill
                className="object-cover transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                quality={90}
              />
            </div>

            {/* Content Section */}
            <div className="lg:pl-8">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl 
                            border border-white/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/30 z-0"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-neutral-800 mb-4">
                    {projects[activeIndex].title}
                  </h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {projects[activeIndex].description}
                  </p>
                  <button className="group relative px-8 py-3 bg-secondary text-white rounded-full 
                                   overflow-hidden transition-all duration-300 
                                   hover:shadow-2xl hover:shadow-secondary/20 hover:scale-105">
                    <span className="relative z-10 font-semibold">Get a Quote</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary via-blue-light to-secondary 
                                  -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </button>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={prevSlide}
                    className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl 
                             transition-all duration-300 hover:scale-105 group"
                  >
                    <ChevronLeftIcon className="w-5 h-5 text-neutral-600 group-hover:text-secondary" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl 
                             transition-all duration-300 hover:scale-105 group"
                  >
                    <ChevronRightIcon className="w-5 h-5 text-neutral-600 group-hover:text-secondary" />
                  </button>
                </div>

                {/* Progress Indicator */}
                <div className="flex items-center space-x-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`transition-all duration-300 relative h-2 rounded-full
                                ${index === activeIndex ? 'w-8 bg-secondary' : 'w-2 bg-neutral-300'}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Preview Strip */}
          <div className="hidden lg:flex mt-8 space-x-4 overflow-x-auto pb-4">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden 
                          transition-all duration-300 transform
                          ${index === activeIndex 
                            ? 'ring-2 ring-secondary ring-offset-2 scale-110' 
                            : 'opacity-50 hover:opacity-75'}`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 