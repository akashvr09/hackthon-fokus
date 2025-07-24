"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ShoppingCart, User } from "lucide-react"
import { AnimatedButton } from "./animated-button"

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-xl shadow-lg" : "bg-white/90 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div className="flex-shrink-0" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <h1 className="text-3xl font-black text-black">
              FO<span className="text-amber-500">K</span>US
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {["Home", "Know Fokus", "Product"].map((item, index) => (
                <motion.a
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-black hover:text-amber-500 px-3 py-2 text-sm font-medium transition-colors relative group"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-emerald-500 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="/login"
              className="p-2 rounded-full hover:bg-gray-100 text-black transition-colors relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <User className="w-5 h-5" />
            </motion.a>

            <motion.button
              className="p-2 rounded-full hover:bg-gray-100 text-black transition-colors relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ShoppingCart className="w-5 h-5" />
              <motion.span
                className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full text-xs flex items-center justify-center text-white font-bold"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                0
              </motion.span>
            </motion.button>

            <AnimatedButton
              variant="primary"
              size="sm"
              className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full font-semibold"
            >
              Buy Now
            </AnimatedButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-gray-100 text-black"
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-lg border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {["Home", "Know Fokus", "Product"].map((item, index) => (
                <motion.a
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                  className="block text-black hover:text-amber-500 py-2 text-lg font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </motion.a>
              ))}

              <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <motion.a
                    href="/login"
                    className="p-2 rounded-full hover:bg-gray-100 text-black"
                    whileTap={{ scale: 0.9 }}
                  >
                    <User className="w-5 h-5" />
                  </motion.a>

                  <motion.button
                    className="p-2 rounded-full hover:bg-gray-100 text-black relative"
                    whileTap={{ scale: 0.9 }}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full text-xs flex items-center justify-center text-white font-bold">
                      0
                    </span>
                  </motion.button>
                </div>

                <AnimatedButton
                  variant="primary"
                  size="sm"
                  className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full font-semibold"
                >
                  Buy Now
                </AnimatedButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
