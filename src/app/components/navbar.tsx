"use client"

import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 1 }}
      animate={{
        opacity: 1,
        position: isScrolled ? "fixed" : "relative",
      }}
      transition={{ duration: 0.3 }}
      className={`top-0 left-0 h-14 w-full bg-primary text-secondary rounded-b-xl shadow-lg z-50 ${
        isScrolled ? "sticky animate-fade-in" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-full items-center py-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold drop-shadow-sm"
          >
            SSTechDevs
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-lg font-bold">
            {["Home", "About", "Contact", "MBA"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>{item}</Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          {!isOpen && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="md:hidden text-2xl"
              style={{ color: "#f6c52a" }}
              onClick={() => setIsOpen(true)}
            >
              <Menu size={28} />
            </motion.button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className="fixed top-0 left-0 h-full w-64 bg-primary text-secondary shadow-lg p-6 md:hidden"
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-2xl"
              style={{ color: "#f6c52a" }}
              onClick={() => setIsOpen(false)}
            >
              <X size={28} />
            </button>

            <div className="mt-10 space-y-4 text-lg font-bold">
              {["Home", "About", "Contact", "MBA"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="block hover:text-gray-400"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

