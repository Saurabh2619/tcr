"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 h-16 flex items-center mb-3">
      <div className="container mx-auto flex justify-between items-center p-4 w-full">
        
        <Link href="/" className={`text-3xl font-bold text-[#2196f3] ${montserrat.className}`}>
          GuruMantra
        </Link>

        <motion.button
          className="md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
          animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.2 : 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>

        <ul className={`hidden md:flex space-x-10 ${lato.className} text-md`}>
          <li><Link href="/" className="hover:text-[#2196f3]">Home</Link></li>
          <li className="relative group">
            <Link href="/mba" className="hover:text-[#2196f3]">MBA</Link>
          <motion.ul
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute left-0 hidden group-hover:flex flex-col bg-white bg-opacity-90 backdrop-blur-md shadow-2xl py-3 px-5 rounded-lg transition-all duration-300 ease-in-out border border-gray-200"
              >
              <li>
                <Link href="/mba/cat" className="block px-6 py-2 text-gray-700 hover:text-[#2196f3] hover:bg-gray-100 rounded-md transition-all duration-200">
                  CAT
                </Link>
              </li>
              <li>
                <Link href="/mba/2" className="block px-6 py-2 text-gray-700 hover:text-[#2196f3] hover:bg-gray-100 rounded-md transition-all duration-200">
                 2
                </Link>
              </li>
              <li>
                <Link href="/mba/3" className="block px-6 py-2 text-gray-700 hover:text-[#2196f3] hover:bg-gray-100 rounded-md transition-all duration-200">
                 3
                </Link>
              </li>
           </motion.ul>

          </li>
          <li><Link href="/about" className="hover:text-blue-500">About</Link></li>
          <li><Link href="/contact" className="hover:text-blue-500">Contact</Link></li>
        </ul>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-lg z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "-100%", borderRadius: "50% 0 0 50%" }}
              animate={{ x: "0%", borderRadius: "0" }}
              exit={{ x: "-100%", borderRadius: "50% 0 0 50%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-4/5 h-screen bg-white shadow-lg flex flex-col items-center justify-center text-lg z-50"
            >
              <motion.div>
                <Link href="/" className={`text-3xl font-bold text-[#2196f3] mb-6 ${montserrat.className}`} onClick={() => setIsOpen(false)}>
                  GuruMantra
                </Link>
              </motion.div>

              <nav className="flex flex-col items-center space-y-6">
                {["Home", "MBA", "About", "Contact"].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.15, duration: 0.5, ease: "easeOut" }}
                  >
                    <div className="flex items-center space-x-2">
                      <Link href={`/${item.toLowerCase()}`} className="hover:text-blue-500 text-xl font-semibold" onClick={() => setIsOpen(false)}>
                        {item}
                      </Link>
                      {item === "MBA" && (
                        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                          {isDropdownOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                      )}
                    </div>
                    {item === "MBA" && isDropdownOpen && (
                      <motion.ul
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="pl-6 space-y-2"
                      >
                        <li><Link href="/mba/1" className="block px-4 py-2 hover:bg-gray-200">1</Link></li>
                        <li><Link href="/mba/2" className="block px-4 py-2 hover:bg-gray-200">2</Link></li>
                        <li><Link href="/mba/3" className="block px-4 py-2 hover:bg-gray-200">3</Link></li>
                      </motion.ul>
                    )}
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
