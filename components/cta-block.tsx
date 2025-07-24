"use client"

import { motion } from "framer-motion"
import { ArrowRight, Zap } from "lucide-react"
import { AnimatedButton } from "./animated-button"

export function CTABlock() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))",
              "linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(6, 182, 212, 0.1), rgba(168, 85, 247, 0.1))",
              "linear-gradient(225deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1), rgba(6, 182, 212, 0.1))",
            ],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-sm mb-8"
          whileHover={{ scale: 1.05 }}
        >
          <Zap className="w-4 h-4" />
          <span>Limited Time Offer</span>
        </motion.div>

        <motion.h2
          className="text-5xl md:text-7xl font-black mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Ready to</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            FOKUS?
          </span>
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Join thousands of people who've already discovered the power of next-generation hydration
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <AnimatedButton variant="primary" size="lg" className="group">
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </AnimatedButton>

          <AnimatedButton variant="outline" size="lg">
            Learn More
          </AnimatedButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          {[
            { number: "50K+", label: "Happy Customers" },
            { number: "99%", label: "Satisfaction Rate" },
            { number: "24/7", label: "Energy Boost" },
          ].map((stat, index) => (
            <motion.div key={index} className="text-center" whileHover={{ scale: 1.05 }}>
              <motion.div
                className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
              >
                {stat.number}
              </motion.div>
              <div className="text-white/60 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
