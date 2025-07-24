"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Apple, Chrome } from "lucide-react"
import { NavBar } from "@/components/nav-bar"
import { AnimatedButton } from "@/components/animated-button"
import { FruitAnimations } from "@/components/fruit-animations"

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-500 via-emerald-500 to-indigo-500 flex items-center justify-center px-4">
      <NavBar />

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-yellow-500/20 to-orange-500/20"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(249, 115, 22, 0.2), rgba(234, 179, 8, 0.2), rgba(249, 115, 22, 0.2))",
              "linear-gradient(135deg, rgba(234, 179, 8, 0.2), rgba(249, 115, 22, 0.2), rgba(234, 179, 8, 0.2))",
              "linear-gradient(225deg, rgba(249, 115, 22, 0.2), rgba(234, 179, 8, 0.2), rgba(249, 115, 22, 0.2))",
            ],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />

        {/* Floating Fruit Animations */}
        <FruitAnimations />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Glassmorphism Card */}
        <div className="relative p-8 rounded-3xl bg-white/95 backdrop-blur-xl border border-white/30 shadow-2xl overflow-hidden">
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-yellow-500/5 to-orange-500/5"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(249, 115, 22, 0.05), rgba(234, 179, 8, 0.05), rgba(249, 115, 22, 0.05))",
                "linear-gradient(135deg, rgba(234, 179, 8, 0.05), rgba(249, 115, 22, 0.05), rgba(234, 179, 8, 0.05))",
                "linear-gradient(225deg, rgba(249, 115, 22, 0.05), rgba(234, 179, 8, 0.05), rgba(249, 115, 22, 0.05))",
              ],
            }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
          />

          <div className="relative z-10">
            {/* Logo */}
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl font-black text-black mb-2">
                FO<span className="text-orange-500">K</span>US
              </h1>
              <p className="text-gray-600">Welcome back! Please sign in to your account</p>
            </motion.div>

            {/* Toggle Buttons */}
            <div className="flex mb-8 p-1 rounded-full bg-gray-100 border border-gray-200">
              <motion.button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-3 px-6 rounded-full font-medium transition-all duration-300 ${
                  isLogin ? "bg-black text-white shadow-lg" : "text-gray-600 hover:text-black"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                Login
              </motion.button>
              <motion.button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 px-6 rounded-full font-medium transition-all duration-300 ${
                  !isLogin ? "bg-black text-white shadow-lg" : "text-gray-600 hover:text-black"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                Sign Up
              </motion.button>
            </div>

            {/* Form */}
            <AnimatePresence mode="wait">
              <motion.form
                key={isLogin ? "login" : "signup"}
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Name Field (Sign Up Only) */}
                {!isLogin && (
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <motion.input
                        type="text"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:bg-white transition-all duration-300"
                        whileFocus={{ scale: 1.02 }}
                        required={!isLogin}
                      />
                    </div>
                  </motion.div>
                )}

                {/* Email Field */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <motion.input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:bg-white transition-all duration-300"
                      whileFocus={{ scale: 1.02 }}
                      required
                    />
                  </div>
                </motion.div>

                {/* Password Field */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <motion.input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      className="w-full pl-12 pr-12 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:bg-white transition-all duration-300"
                      whileFocus={{ scale: 1.02 }}
                      required
                    />
                    <motion.button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </motion.button>
                  </div>
                </motion.div>

                {/* Forgot Password (Login Only) */}
                {isLogin && (
                  <motion.div
                    className="text-right"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.a
                      href="#"
                      className="text-sm text-gray-600 hover:text-amber-500 transition-colors"
                      whileHover={{ y: -1 }}
                    >
                      Forgot Password?
                    </motion.a>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  <AnimatedButton
                    variant="primary"
                    size="lg"
                    className="w-full group bg-black hover:bg-gray-800 text-white"
                  >
                    <span>{isLogin ? "Sign In" : "Create Account"}</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </AnimatedButton>
                </motion.div>

                {/* Social Login */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="relative text-center">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative bg-white px-4">
                      <span className="text-sm text-gray-500">Or continue with</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <motion.button
                      type="button"
                      className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-gray-50 border border-gray-200 text-gray-700 hover:bg-gray-100 transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Chrome className="w-5 h-5 text-red-500" />
                      <span className="text-sm font-medium">Google</span>
                    </motion.button>

                    <motion.button
                      type="button"
                      className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-gray-50 border border-gray-200 text-gray-700 hover:bg-gray-100 transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Apple className="w-5 h-5 text-gray-900" />
                      <span className="text-sm font-medium">Apple</span>
                    </motion.button>
                  </div>
                </motion.div>
              </motion.form>
            </AnimatePresence>

            {/* Terms */}
            <motion.p
              className="text-xs text-gray-500 text-center mt-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              By {isLogin ? "signing in" : "creating an account"}, you agree to our{" "}
              <motion.a
                href="#"
                className="text-amber-500 hover:text-amber-600 transition-colors"
                whileHover={{ y: -1 }}
              >
                Terms of Service
              </motion.a>{" "}
              and{" "}
              <motion.a
                href="#"
                className="text-amber-500 hover:text-amber-600 transition-colors"
                whileHover={{ y: -1 }}
              >
                Privacy Policy
              </motion.a>
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
