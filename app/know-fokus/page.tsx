"use client"

import { motion } from "framer-motion"
import { Award, Users, Zap, Target, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { AnimatedButton } from "@/components/animated-button"
import { FruitAnimations } from "@/components/fruit-animations"

const timelineEvents = [
  {
    year: "2020",
    title: "The Vision",
    description: "Founded with a mission to revolutionize the energy drink industry with cutting-edge formulations.",
  },
  {
    year: "2021",
    title: "First Formula",
    description: "Developed our breakthrough energy formula after months of research and testing.",
  },
  {
    year: "2022",
    title: "Market Launch",
    description: "Launched our first product line and gained 10,000+ customers in the first month.",
  },
  {
    year: "2023",
    title: "Global Expansion",
    description: "Expanded to 15 countries and partnered with major fitness influencers worldwide.",
  },
  {
    year: "2024",
    title: "Innovation Lab",
    description: "Opened our state-of-the-art research facility to develop next-gen products.",
  },
  {
    year: "2025",
    title: "Future Focus",
    description: "Leading the industry with AI-powered personalized nutrition and sustainable packaging.",
  },
]

const testimonials = [
  {
    name: "Alex Chen",
    role: "Fitness Influencer",
    content: "Fokus has completely transformed my workout routine. The sustained energy without crashes is incredible.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Sarah Johnson",
    role: "Professional Gamer",
    content: "As a pro gamer, focus is everything. Fokus gives me the mental clarity I need to perform at my best.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Mike Rodriguez",
    role: "Entrepreneur",
    content: "Running a startup requires constant energy. Fokus keeps me sharp throughout those long days.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export default function AboutPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Define our 3-color palette
  const colors = {
    primary: "amber-500", // Main brand color
    secondary: "emerald-500", // Secondary accent color
    tertiary: "indigo-500", // Third accent color
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <NavBar />

      {/* Hero Section with Fruit Animations */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <FruitAnimations />

        <motion.div
          className="max-w-6xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-black mb-6 leading-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span
              className={`bg-gradient-to-r from-${colors.primary} via-${colors.secondary} to-${colors.tertiary} bg-clip-text text-transparent`}
            >
              ABOUT
            </span>
            <br />
            <span className="text-white">FOKUS</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We're not just another energy drink company. We're pioneers in the future of human performance, creating
            products that enhance both body and mind for the next generation.
          </motion.p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                To empower individuals to reach their peak performance through innovative, science-backed energy
                solutions that fuel both physical and mental excellence.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Zap, title: "Innovation", desc: "Cutting-edge formulations", color: colors.primary },
                  { icon: Target, title: "Performance", desc: "Peak human potential", color: colors.secondary },
                  { icon: Users, title: "Community", desc: "Global movement", color: colors.tertiary },
                  { icon: Award, title: "Quality", desc: "Premium ingredients", color: `${colors.primary}` },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br from-${item.color} to-${item.color}/70 flex items-center justify-center flex-shrink-0`}
                    >
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-sm text-white/60">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br from-${colors.primary}/10 via-${colors.secondary}/10 to-${colors.tertiary}/10`}
                  animate={{
                    background: [
                      `linear-gradient(45deg, rgba(245, 158, 11, 0.1), rgba(16, 185, 129, 0.1), rgba(99, 102, 241, 0.1))`,
                      `linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(245, 158, 11, 0.1), rgba(16, 185, 129, 0.1))`,
                      `linear-gradient(225deg, rgba(16, 185, 129, 0.1), rgba(99, 102, 241, 0.1), rgba(245, 158, 11, 0.1))`,
                    ],
                  }}
                  transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
                />

                <div className="relative z-10 text-center">
                  <motion.div
                    className={`w-32 h-48 mx-auto mb-6 rounded-2xl bg-gradient-to-b from-${colors.primary} to-${colors.tertiary} shadow-2xl`}
                    animate={{
                      rotateY: [0, 15, -15, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <h3 className="text-2xl font-bold text-white mb-4">The Future is Now</h3>
                  <p className="text-white/60">
                    Experience tomorrow's energy today with our revolutionary formulations
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              From vision to reality - the story of how we're shaping the future of energy
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-${colors.primary} via-${colors.secondary} to-${colors.tertiary} rounded-full`}
            />

            <div className="space-y-16">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                    <motion.div
                      className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <div
                        className={`text-2xl font-black bg-gradient-to-r from-${colors.primary} to-${colors.secondary} bg-clip-text text-transparent mb-2`}
                      >
                        {event.year}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                      <p className="text-white/60 leading-relaxed">{event.description}</p>
                    </motion.div>
                  </div>

                  {/* Timeline Node */}
                  <motion.div
                    className={`relative z-10 w-6 h-6 rounded-full bg-gradient-to-r from-${colors.primary} to-${colors.secondary} shadow-lg shadow-${colors.primary}/50`}
                    whileHover={{ scale: 1.5 }}
                    animate={{
                      boxShadow: [
                        `0 0 20px rgba(245, 158, 11, 0.5)`,
                        `0 0 30px rgba(16, 185, 129, 0.5)`,
                        `0 0 20px rgba(245, 158, 11, 0.5)`,
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />

                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              What People Say
            </h2>
          </motion.div>

          <div className="relative">
            <motion.div
              className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 text-center overflow-hidden"
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-${colors.primary} to-${colors.secondary} overflow-hidden`}
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <blockquote className="text-xl md:text-2xl text-white/80 mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              <div>
                <div className="font-bold text-white text-lg">{testimonials[currentTestimonial].name}</div>
                <div className="text-white/60">{testimonials[currentTestimonial].role}</div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <motion.button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? `bg-gradient-to-r from-${colors.primary} to-${colors.secondary}`
                        : "bg-white/20"
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="p-12 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden relative">
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br from-${colors.primary}/10 via-${colors.secondary}/10 to-${colors.tertiary}/10`}
              animate={{
                background: [
                  `linear-gradient(45deg, rgba(245, 158, 11, 0.1), rgba(16, 185, 129, 0.1), rgba(99, 102, 241, 0.1))`,
                  `linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(245, 158, 11, 0.1), rgba(16, 185, 129, 0.1))`,
                  `linear-gradient(225deg, rgba(16, 185, 129, 0.1), rgba(99, 102, 241, 0.1), rgba(245, 158, 11, 0.1))`,
                ],
              }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
            />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                Ready to Join the Future?
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Experience the next generation of energy drinks and become part of our growing community
              </p>
              <AnimatedButton
                variant="primary"
                size="lg"
                className={`bg-gradient-to-r from-${colors.primary} to-${colors.secondary} hover:from-${colors.secondary} hover:to-${colors.primary}`}
              >
                Start Your Journey
              </AnimatedButton>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
