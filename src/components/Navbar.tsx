import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <button
      onClick={scrollToContact}
      className="bg-secondary text-white px-6 py-2 rounded-lg hover:bg-blue-light transition-colors"
    >
      Get Quote
    </button>
  );
} 