"use client";

import { useState, useEffect } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-secondary text-white rounded-full 
                   shadow-lg hover:shadow-2xl hover:scale-110 
                   transition-all duration-300 z-50
                   group"
          aria-label="Scroll to top"
        >
          <ChevronUpIcon className="w-6 h-6 group-hover:text-white" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-blue-light to-secondary 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
        </button>
      )}
    </>
  );
} 