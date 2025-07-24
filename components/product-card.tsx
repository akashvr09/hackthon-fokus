"use client"

import { motion } from "framer-motion"
import { ShoppingCart, Heart } from "lucide-react"
import { AnimatedButton } from "./animated-button"

interface ProductCardProps {
  title: string
  price: string
  image: string
  gradient: string
  delay?: number
}

export function ProductCard({ title, price, image, gradient, delay = 0 }: ProductCardProps) {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -10 }}
    >
      <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-500 group-hover:bg-white/10 overflow-hidden">
        {/* Animated Background Gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
          initial={false}
          animate={{
            background: [
              `linear-gradient(45deg, var(--tw-gradient-stops))`,
              `linear-gradient(135deg, var(--tw-gradient-stops))`,
              `linear-gradient(225deg, var(--tw-gradient-stops))`,
              `linear-gradient(315deg, var(--tw-gradient-stops))`,
            ],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />

        {/* Product Image */}
        <motion.div
          className="relative mb-6 flex justify-center"
          whileHover={{ scale: 1.1, rotateY: 15 }}
          transition={{ duration: 0.5 }}
        >
          <div className={`w-32 h-48 rounded-2xl bg-gradient-to-b ${gradient} shadow-2xl relative overflow-hidden`}>
            {/* Glow Effect */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-b ${gradient} blur-xl opacity-50`}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />

            {/* Product Label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-black text-lg transform -rotate-12">FOKUS</span>
            </div>
          </div>
        </motion.div>

        {/* Product Info */}
        <div className="relative z-10 text-center">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
            {title}
          </h3>

          <motion.p
            className="text-3xl font-black mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.1 }}
          >
            {price}
          </motion.p>

          {/* Action Buttons */}
          <div className="flex gap-3 justify-center">
            <AnimatedButton variant="primary" size="sm" className="flex-1">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </AnimatedButton>

            <motion.button
              className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Heart className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
        />

        <motion.div
          className="absolute bottom-4 left-4 w-1 h-1 bg-white/40 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        />
      </div>
    </motion.div>
  )
}
