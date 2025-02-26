'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Montserrat, Lato } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 h-16 flex items-center">
      <div className="container mx-auto flex justify-between items-center p-4 ">
        {/* Logo */}
        <Link href="/" className={`text-2xl font-bold text-blue-600 ${montserrat.className}`}>
          SSTechPhile
        </Link>

        {/* Hamburger Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex space-x-6 ${lato.className} text-md`}>
          <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link href="/mba" className="hover:text-blue-500">MBA</Link></li>
          <li><Link href="/about" className="hover:text-blue-500">About</Link></li>
          <li><Link href="/contact" className="hover:text-blue-500">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-full left-0 w-full p-4 space-y-4 text-center">
          <Link href="/" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/mba" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>MBA</Link>
          <Link href="/about" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
