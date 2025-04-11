"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header className="fixed w-full z-50">
      {/* Gradient background with blur effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light opacity-95 backdrop-blur-sm" />
      
      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-32 items-center">
          {/* Logo and Slogan Container */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Logo */}
            <div className="flex-shrink-0 -ml-3 md:ml-0">
              <Link href="/" className="relative block">
                <div className="relative w-[100px] h-[100px]">
                  <Image
                    src="/logo.png"
                    alt="RK Air Systems"
                    fill
                    className="object-contain"
                    priority
                    sizes="100px"
                  />
                </div>
              </Link>
            </div>

            {/* Slogan - Visible on all screens */}
            <div className="border-l-2 border-white/10 pl-2 md:pl-4">
              <p className="text-white/90 text-sm md:text-base font-medium">
                Your Comfort,{' '}
                <span className="text-secondary">
                  Our Priority
                </span>
              </p>
              <p className="text-xs md:text-sm text-white/70">
                Serving Barrie & Area
              </p>
            </div>
          </div>

          {/* Desktop Menu with improved spacing */}
          <div className="hidden md:flex items-center space-x-12">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-secondary text-base font-medium 
                          transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-secondary 
                              transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <button className="group relative px-8 py-3 bg-secondary text-white rounded-full 
                            overflow-hidden transition-all duration-300 
                            hover:shadow-2xl hover:shadow-secondary/20 hover:scale-105
                            border border-white/10">
              <a href="/#contact">
                <span className="relative z-10 font-semibold">Get Quote</span>
              </a>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-blue-light to-secondary 
                            -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-secondary p-2"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-8 w-8" />
              ) : (
                <Bars3Icon className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Adjusted position for taller header */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 mt-2 px-4">
            <div className="bg-primary-light/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/10">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-white hover:text-secondary transition-colors duration-200
                            text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-white/10">
                <button className="w-full group relative px-8 py-4 bg-secondary text-white rounded-full 
                                overflow-hidden transition-all duration-300 
                                hover:shadow-2xl hover:shadow-secondary/20 hover:scale-105">
                  <a href="/#contact">
                    <span className="relative z-10 font-semibold">Get Quote</span>
                  </a>
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary via-blue-light to-secondary 
                                -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 