"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  onClick?: () => void
}

export function AnimatedButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: AnimatedButtonProps) {
  const baseClasses =
    "relative overflow-hidden font-semibold rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer"

  const variants = {
    primary:
      "bg-gradient-to-r from-amber-500 to-emerald-500 text-white shadow-lg hover:shadow-xl hover:from-emerald-500 hover:to-amber-500",
    secondary: "bg-white text-black shadow-lg hover:shadow-xl hover:bg-gray-50",
    outline: "border-2 border-current text-current hover:bg-current hover:text-white",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-12 py-6 text-xl",
  }

  return (
    <motion.button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {/* Ripple Effect */}
      <motion.div
        className="absolute inset-0 bg-white/20 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        whileTap={{ scale: 4, opacity: [0, 1, 0] }}
        transition={{ duration: 0.6 }}
      />

      {/* Shimmer Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.8 }}
      />

      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}
