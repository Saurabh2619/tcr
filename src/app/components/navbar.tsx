'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Montserrat, Lato } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Disable scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 h-16 flex items-center">
      <div className="container mx-auto flex justify-between items-center p-4 w-full">
        {/* Logo (Always Visible) */}
        <Link href="/" className={`text-2xl font-bold text-blue-600 ${montserrat.className}`}>
          SSTechPhile
        </Link>

        {/* Animated Hamburger Button */}
        <motion.button
          className="md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
          animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.2 : 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex space-x-6 ${lato.className} text-md`}>
          <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link href="/mba" className="hover:text-blue-500">MBA</Link></li>
          <li><Link href="/about" className="hover:text-blue-500">About</Link></li>
          <li><Link href="/contact" className="hover:text-blue-500">Contact</Link></li>
        </ul>
      </div>

      {/* Creative Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Blurred Background Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-lg z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel with Curved Entry */}
            <motion.div
              initial={{ x: "-100%", borderRadius: "50% 0 0 50%" }}
              animate={{ x: "0%", borderRadius: "0" }}
              exit={{ x: "-100%", borderRadius: "50% 0 0 50%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-4/5 h-screen bg-white shadow-lg flex flex-col items-center justify-center text-lg z-50"
            >
              {/* Logo in Menu */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Link href="/" className={`text-3xl font-bold text-blue-600 mb-6 ${montserrat.className}`} onClick={() => setIsOpen(false)}>
                  SSTechPhile
                </Link>
              </motion.div>

              {/* Staggered Navigation Links */}
              <nav className="flex flex-col items-center space-y-6">
                {["Home", "MBA", "About", "Contact"].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.15, duration: 0.5, ease: "easeOut" }}
                  >
                    <Link href={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`} 
                    className="hover:text-blue-500 text-xl font-semibold" 
                    onClick={() => setIsOpen(false)}>
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
