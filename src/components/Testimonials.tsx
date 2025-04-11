"use client";

import { useState, useEffect, useRef } from 'react';
import { StarIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { useInView } from 'react-intersection-observer';

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);
  const animationStarted = useRef(false);
  const { ref: sectionRefInView, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const testimonials = [
    {
      name: "Andrea Coates",
      role: "Homeowner",
      content: "I had an amazing experience with RK Air Services! From start to finish, Rob was professional, knowledgeable, and incredibly helpful. They provided prompt service, explained everything thoroughly, and ensured our HVAC system was running efficiently. It's clear they take pride in their work and value their customers. I highly recommend RK Air Services to anyone in Orillia looking for reliable and high-quality HVAC services!",
      rating: 5
    },
    {
      name: "br ford",
      role: "Property Owner",
      content: "Robert got our HRV system and heat pumps installed at our cottage. He was on time, kept to the schedule for the installation. Very professional and would definitely recommend this company.",
      rating: 5
    },
    {
      name: "Jackson Arcan",
      role: "Client",
      content: "My expierence with RK air systems was exceptional. Not only were they friendly but very knowledgeable and understanding when it came to questions and availability. I highly recommend this company for any specific needs you may have!",
      rating: 5
    },
    {
      name: "Andrew Brown",
      role: "Homeowner",
      content: "I recently had RK Air Systems perform some ductwork for my legal secondary suite. Robby's team backed by his knowledge and experience got the job done in an extremely timely matter and produced top quality results. Highly recommend their services!",
      rating: 5
    },
    {
      name: "Jesse Frybort",
      role: "Homeowner",
      content: "RK air systems has supplied and installed both our new furnace and AC unit. The technicians were professional, knowledgeable and went beyond our expectations. I'd strongly recommend this company. No pushy sales people, transparent and a good price for great work.",
      rating: 5
    },
    {
      name: "J. Valley",
      role: "Client",
      content: "We are very thankful to Rob and his team. Rob quickly evaluated our problem. When his team came (Brad and Ryan, if I remember correctly) they were friendly, polite and happy to answer our questions. They worked quickly and cleaned up after.",
      rating: 5
    },
    {
      name: "Dan Keane",
      role: "Business Owner",
      content: "After endless challenges with various vendors for months, our journey led us to RK Air Systems, and it was a game-changer. Rob's professionalism and expertise, not only addressed but completely resolved all our HVAC concerns.",
      rating: 5
    },
    {
      name: "Elaine Kerr",
      role: "Homeowner",
      content: "Rob was professional and accommodating - working thoroughly to ensure the job was done. He was punctual and very focused while on the job. He was referred by a contractor and he installed my AC system and initiated the duct & vent installation.",
      rating: 5
    },
    {
      name: "Dave Ross",
      role: "Business Owner",
      content: "Rob from RK Air Systems was super. He was very helpful on getting a shop heater install, when I was having a hard time finding someone. He wasn't recommend to me by anyone but he replied to an ad I had online. Glad he did though, we had the heater installed in no time.",
      rating: 5
    },
    {
      name: "Seung Kim",
      role: "Homeowner",
      content: "The RK Air Systems provides excellent services. This week we had problem with our heating system. We called RK Air Systems. He came to us and fixed the problem in no time. Excellent service! We are very happy with his service!",
      rating: 5
    },
    {
      name: "Christianne Ward",
      role: "Client",
      content: "Rob and his crew worked quickly and efficiently on our fireplace. They went above and beyond and we couldn't be happier with the turn out. Will definitely be using RK Air Systems for our future projects without a doubt!",
      rating: 5
    },
    {
      name: "Zafi Fab",
      role: "Client",
      content: "Rob and Matt are amazing. Very knowledgeable, very pleasant to deal with, very responsive, extremely hard working. I highly recommend them for any HVAC / AC needs. You won't be regret it.",
      rating: 5
    },
    {
      name: "Aric DeBartolo",
      role: "Business Owner",
      content: "Rob figured out a cost effective solution to heat both the front and back of our shop. We were on a strict schedule and he made his deadline early. Overall great quality while meeting all other expectations such as cost and quality!",
      rating: 5
    },
    {
      name: "Steven Cascone",
      role: "Property Owner",
      content: "I recently purchased a rental property in the Barrie area and had a few HVAC repair items that needed to get done from my initial home inspection. Rob was very quick to respond to my request and very accommodating in scheduling a day and time that worked for my tenants.",
      rating: 5
    },
    {
      name: "Stefan Fulga",
      role: "Homeowner",
      content: "One of the best companies I've used. They ducted my house in no time and without headaches on one of my renovation projects. Also recommended them to my friends and they never disappointed no matter the task they've been given. Highly recommend!",
      rating: 5
    },
    {
      name: "Zach Tomkinson",
      role: "Client",
      content: "Rob was a pleasure to deal with. He was responsive, on time with a very high level of professionalism. Great value for a fantastic service. Would recommend every time!",
      rating: 5
    },
    {
      name: "Rob P",
      role: "Client",
      content: "Rob from RK Air Systems was great to deal with. Rob was able to diagnose and repair my garage heater in a timely manner.",
      rating: 5
    },
    {
      name: "Jake Pacheco",
      role: "Homeowner",
      content: "Rob and his guys were awesome! Reasonably priced, got the job done quickly and were very professional. Would highly recommend!",
      rating: 5
    },
    {
      name: "Susan Dwyer-Thompson",
      role: "Client",
      content: "Great job, keen attention to details and excellent after service. I highly recommend RK Air Systems.",
      rating: 5
    },
    {
      name: "Mimi Lee",
      role: "Homeowner",
      content: "Rob offered not only great value but after service was fabulous! Highly recommend him.",
      rating: 5
    },
    {
      name: "Tyler Blondeau",
      role: "Client",
      content: "Needed furnace cleaned, very prompt and professional response, pricing was very reasonable. Highly recommend this company.",
      rating: 5
    },
    {
      name: "Randy Spenceley",
      role: "Client",
      content: "Great service and very knowledgeable and professional!",
      rating: 5
    }
  ];

  const stats = [
    { start: 0, end: 300, suffix: '+', label: 'Happy Clients' },
    { start: 0, end: 750, suffix: '+', label: 'Projects Completed' },
    { start: 0, end: 5, suffix: '+', label: 'Years Experience' },
    { start: 0, end: 100, suffix: '%', label: 'Client Satisfaction' }
  ];

  const [counts, setCounts] = useState<(number | string)[]>([0, 0, 0, '0']);

  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 6);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!inView || animationStarted.current) return;
    animationStarted.current = true;

    const animateValue = (start: number, end: number, duration: number, index: number) => {
      const startTime = performance.now();
      
      const update = () => {
        const currentTime = performance.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smoother animation
        const easeOutQuad = (t: number) => t * (2 - t);
        const currentValue = Math.floor(start + (end - start) * easeOutQuad(progress));

        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = currentValue;
          return newCounts;
        });

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      };

      requestAnimationFrame(update);
    };

    stats.forEach((stat, index) => {
      animateValue(stat.start, stat.end, 2000, index);
    });
  }, [inView, stats]);

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-primary" ref={sectionRefInView}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-blue-light rounded-full"></div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-24">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-white/5 backdrop-blur-lg
                        hover:shadow-2xl hover:shadow-secondary/20 
                        transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="text-4xl font-bold text-secondary mb-2 group-hover:text-blue-light transition-colors">
                {`${counts[index]}${stat.suffix || ''}`}
              </div>
              <div className="text-neutral-200">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {displayedTestimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 relative
                        hover:shadow-2xl hover:shadow-secondary/20 
                        transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="flex items-center space-x-4 mb-6">
                <UserCircleIcon className="w-12 h-12 text-secondary group-hover:text-blue-light transition-colors" />
                <div>
                  <h4 className="text-lg font-semibold text-white group-hover:text-secondary transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-neutral-300">{testimonial.role}</p>
                </div>
              </div>
              
              {/* Star Rating */}
              <div className="flex mb-4 space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon 
                    key={i} 
                    className="h-5 w-5 text-secondary transition-all duration-300
                              group-hover:text-blue-light group-hover:animate-float" 
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>

              <p className="text-neutral-200 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Decorative Quote Mark */}
              <div className="absolute top-4 right-4 text-6xl text-secondary/10 font-serif">
                "
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && testimonials.length > 6 && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAll(true)}
              className="group relative px-8 py-3 bg-white/10 text-white rounded-full 
                        overflow-hidden transition-all duration-300 
                        hover:shadow-2xl hover:shadow-secondary/20 hover:scale-105"
            >
              <span className="relative z-10 font-semibold">Show More Reviews</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-blue-light to-secondary 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-20">
          <button 
            onClick={scrollToContact}
            className="group relative px-8 py-3 bg-secondary text-white rounded-full 
                           overflow-hidden transition-all duration-300 
                           hover:shadow-2xl hover:shadow-secondary/20 hover:scale-105">
            <span className="relative z-10 font-semibold">Get Your Free Consultation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-blue-light to-secondary 
                          -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
        </div>
      </div>
    </section>
  );
} 