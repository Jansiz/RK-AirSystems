"use client";

import Image from 'next/image';

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section aria-label="Hero" className="relative h-screen">
      <Image
        src="/Hero-background.png"
        alt="Professional HVAC installation by RK AirSystems in Barrie"
        fill
        sizes="100vw"
        className="object-cover brightness-50"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/70 to-primary">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center leading-tight animate-slide-up">
            Welcome to{' '}
            <span>
              <span className="text-secondary">RK{' '}</span>
              <span className="text-blue-light">Air{' '}</span>
              <span className="text-secondary">Systems</span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl text-neutral-100 opacity-90 animate-slide-up delay-100">
            Commercial & Residential HVAC Services In Barrie & Surrounding Areas
          </p>
          <button 
            onClick={scrollToAbout}
            className="mt-12 group relative px-8 py-3 bg-secondary text-white rounded-full 
                     overflow-hidden transition-all duration-300 
                     hover:shadow-2xl hover:shadow-secondary/20 hover:scale-105"
          >
            <span className="relative z-10 font-semibold">Discover More</span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-blue-light to-secondary 
                          -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
        </div>
      </div>
    </section>
  );
} 