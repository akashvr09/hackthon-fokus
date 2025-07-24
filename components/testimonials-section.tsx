"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Fitness Enthusiast",
    content:
      "FOKUS has completely transformed my workout routine. The energy boost is incredible and lasts for hours without any crash!",
    avatar: "/placeholder.svg?height=80&width=80&text=RK",
    rating: 5,
    location: "Mumbai",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Software Developer",
    content:
      "As a developer working long hours, FOKUS keeps me alert and focused. It's become an essential part of my daily routine.",
    avatar: "/placeholder.svg?height=80&width=80&text=PS",
    rating: 5,
    location: "Bangalore",
  },
  {
    id: 3,
    name: "Arjun Singh",
    role: "Student",
    content: "Perfect for study sessions! FOKUS helps me stay concentrated during exams. The taste is amazing too!",
    avatar: "/placeholder.svg?height=80&width=80&text=AS",
    rating: 5,
    location: "Delhi",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black mb-6 text-gray-900">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Real stories from real people who love FOKUS</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 md:p-12 shadow-lg border border-orange-100"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-center mb-8">
                  <Quote className="w-12 h-12 text-orange-500" />
                </div>

                <blockquote className="text-xl md:text-2xl text-gray-800 text-center mb-8 leading-relaxed font-medium">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="flex items-center justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="flex items-center justify-center gap-4">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-yellow-500 overflow-hidden shadow-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    <img
                      src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <div className="text-center">
                    <div className="font-bold text-gray-900 text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-gray-600">{testimonials[currentIndex].role}</div>
                    <div className="text-sm text-orange-500 font-medium">{testimonials[currentIndex].location}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <motion.button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white shadow-lg border border-gray-200 text-gray-600 hover:text-orange-500 hover:border-orange-200 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-orange-500 w-8" : "bg-gray-300"
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white shadow-lg border border-gray-200 text-gray-600 hover:text-orange-500 hover:border-orange-200 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
