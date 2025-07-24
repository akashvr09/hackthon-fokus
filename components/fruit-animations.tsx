"use client"

import { motion } from "framer-motion"

export function FruitAnimations() {
  const fruits = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/watermelon_1a8eda56-4f31-4571-8e06-ec6ae505271f-2xdS3uHlnKeL4yhB1vdwUX4l9I7jYa.webp",
      alt: "Watermelon",
      size: "w-12 h-12",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KiWi_12ddfc7f-03d0-40f4-9273-e2a22b92f573-YaHPJYNWtFUCwFFEEE1xn7jxNplWaE.webp",
      alt: "Kiwi",
      size: "w-10 h-10",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mango_b0b48ac0-57f8-40a4-9d64-d316a3b8b33a-5Dm7OGhteX1aZ8nC6zzXlTzquFQMuh.webp",
      alt: "Mango",
      size: "w-14 h-14",
    },
  ]

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Floating Fruits */}
      {[...Array(12)].map((_, i) => {
        const fruit = fruits[i % fruits.length]
        return (
          <motion.div
            key={i}
            className={`absolute ${fruit.size}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -80, -20],
              x: [-10, 10, -10],
              rotate: [0, 360],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          >
            <img
              src={fruit.src || "/placeholder.svg"}
              alt={fruit.alt}
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </motion.div>
        )
      })}

      {/* Additional floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-white/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -100, -20],
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}
