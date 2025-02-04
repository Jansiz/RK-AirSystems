"use client";

import Link from 'next/link';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  const handleServiceClick = (href: string) => {
    const element = document.querySelector(href);
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 500);
    }
  };

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="relative w-[100px] h-[100px]">
              <Image
                src="/logo.png"
                alt="RK Air Systems"
                fill
                className="object-contain"
                sizes="100px"
                quality={100}
              />
            </div>
            <p className="text-neutral-400 text-lg">
              Commercial & Residential HVAC Services In Barrie & Surrounding Areas
            </p>
            <div className="flex space-x-6">
              {/* Social Media Icons */}
              <a 
                href="https://www.instagram.com/rk_air_systems/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-neutral-400 hover:text-secondary transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.facebook.com/RKAirSystems" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-neutral-400 hover:text-secondary transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                'About',
                'Services',
                'Portfolio',
                'Testimonials',
                'Contact'
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-neutral-400 hover:text-secondary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {[
                {
                  name: 'Installation & Replacement',
                  href: '#installation'
                },
                {
                  name: 'Repairs & Maintenance',
                  href: '#repairs'
                },
                {
                  name: 'Air Quality Solutions',
                  href: '#air-quality'
                },
                {
                  name: '24/7 Emergency Service',
                  href: '#emergency'
                }
              ].map((service) => (
                <li key={service.name}>
                  <button
                    onClick={() => handleServiceClick(service.href)}
                    className="text-neutral-400 hover:text-secondary transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/50"></span>
                    <span>{service.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="flex items-center space-x-3">
              <PhoneIcon className="h-5 w-5 text-secondary" />
              <span className="text-neutral-400">+1 705-220-5272</span>
            </div>
            <div className="flex items-center space-x-3">
              <EnvelopeIcon className="h-5 w-5 text-secondary" />
              <span className="text-neutral-400">rob@rkairsystems.ca</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPinIcon className="h-5 w-5 text-secondary" />
              <span className="text-neutral-400">Barrie and Surrounding Areas</span>
            </div>
          </div>
        </div>

        {/* Copyright and Credits Section */}
        <div className="col-span-full mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm">
              © {new Date().getFullYear()} RK Air Systems. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-neutral-400 text-sm">
              <span>Website by</span>
              <a
                href="https://www.socialelevate.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-blue-light transition-colors duration-200 flex items-center space-x-1"
              >
                <span>Social Elevate</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 