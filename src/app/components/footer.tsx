'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 relative overflow-hidden mt-3">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center relative z-10"
      >
        {/* Logo and Description */}
        <div className="text-center md:text-left mb-6 md:mb-0 max-w-sm">
          <h2 className="text-3xl font-extrabold text-blue-400">SSTechPhile</h2>
          <p className="text-gray-300 mt-3 leading-relaxed">
            Your go-to platform for in-depth college details, admissions, and career guidance.
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center md:justify-start space-x-6 text-gray-300 text-md font-medium">
          {['Home', 'MBA', 'About', 'Contact'].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1, color: '#60A5FA' }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/${item.toLowerCase()}`} className="hover:text-blue-400 transition-all duration-300">
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-5 mt-6 md:mt-0">
          {[
            { href: '#', icon: <Facebook size={24} />, label: 'Facebook' },
            { href: '#', icon: <Instagram size={24} />, label: 'Instagram' },
            { href: '#', icon: <Twitter size={24} />, label: 'Twitter' },
            { href: '#', icon: <Linkedin size={24} />, label: 'LinkedIn' },
          ].map(({ href, icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="text-gray-400 hover:text-blue-400 transition-all duration-300"
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Animated Floating Dots */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: Math.random() * 100 }}
            animate={{ opacity: 1, y: -Math.random() * 200 }}
            transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-2 h-2 bg-white rounded-full opacity-50"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-4 relative z-10">
        &copy; {new Date().getFullYear()} SSTechPhile. All rights reserved.
      </div>
    </footer>
  );
}
