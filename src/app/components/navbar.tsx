"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="top-0 left-0 h-12 w-full bg-primary text-secondary rounded-b-xl shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-full items-center">
          <div className="text-2xl font-bold drop-shadow-sm">SSTechDevs</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-lg font-bold">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/mba">MBA</Link>
          </div>

          {/* Mobile Menu Button (Hidden when menu opens) */}
          {!isOpen && (
            <button className="md:hidden text-2xl" style={{ color: "#f6c52a" }} onClick={() => setIsOpen(true)}>
              ☰
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "-100%" }} // Start off-screen to the left
            animate={{ x: 0 }} // Slide in from left
            exit={{ x: "-100%" }} // Slide out to left
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 h-full w-64 bg-primary text-secondary shadow-lg p-6 md:hidden"
          >
            {/* Close Button inside Menu (Same color as Hamburger) */}
            <button
              className="absolute top-4 right-4 text-2xl"
              style={{ color: "#f6c52a" }}
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>

            <div className="mt-10 space-y-4 text-lg font-bold">
              <Link href="/" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/about" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>About</Link>
              <Link href="/contact" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact</Link>
              <Link href="/mba" className="block hover:text-gray-400" onClick={() => setIsOpen(false)}>MBA</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
