"use client"

import { motion } from "framer-motion"
import { Users, Award, Zap, Star, Heart, ShoppingCart } from "lucide-react"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { AnimatedButton } from "@/components/animated-button"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      {/* Hero Section - Exact replica using real banner image */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Real hero banner image */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fokus_website_banner_copy_1-QJcPnr4IjqXFDb9soq9YWDCFGEThLx.webp"
            alt="FOKUS Hero Banner"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-6 h-10 border-2 border-black/30 rounded-full flex justify-center bg-white/20 backdrop-blur-sm">
            <motion.div
              className="w-1 h-3 bg-black/50 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black mb-6 text-gray-900">Our Flavors</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our range of premium energy drinks crafted for peak performance
            </p>
          </motion.div>

          {/* Featured Product - 3 Bottles */}
          <motion.div
            className="mb-16 flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/focusprd__1_-removebg-preview-0kqDX0w6KHwalSjGhXHwULb7QXirq0.webp"
                alt="FOKUS Three Flavors"
                className="w-full max-w-md h-auto"
              />

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-amber-500/20 to-red-500/20 rounded-3xl blur-xl -z-10"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
          </motion.div>

          {/* Individual Products */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                name: "FOKUS Kiwi Lemon",
                price: "₹150",
                originalPrice: "₹180",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame_2_2-FijPGUSJRGqpwuOdUH0Skof2OZu2FZ.webp",
                color: "from-green-400 to-green-600",
                badge: "Refreshing",
                flavor: "KIWI LEMON",
              },
              {
                id: 2,
                name: "FOKUS Mango Pineapple",
                price: "₹150",
                originalPrice: "₹180",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame_3_1-rr3YGfIyOi7fp51y4tGp71YbpjHhyC.webp",
                color: "from-amber-400 to-amber-500",
                badge: "Tropical",
                flavor: "MANGO PINEAPPLE",
              },
              {
                id: 3,
                name: "FOKUS Strawberry Watermelon",
                price: "₹150",
                originalPrice: "₹180",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame_1-G6GW8YoUPAnoDj9m7MHYbrbEEW6V7z.webp",
                color: "from-red-400 to-pink-500",
                badge: "Sweet",
                flavor: "STRAWBERRY WATERMELON",
              },
            ].map((product, index) => (
              <motion.div
                key={product.id}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                {/* Badge */}
                <motion.div
                  className="absolute top-4 left-4 z-10 bg-black text-white px-3 py-1 rounded-full text-sm font-semibold"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                >
                  {product.badge}
                </motion.div>

                {/* Wishlist Button */}
                <motion.button
                  className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
                </motion.button>

                {/* Product Image */}
                <div className="relative p-8 bg-gradient-to-br from-gray-50 to-gray-100">
                  <motion.div
                    className="relative mx-auto w-48 h-64 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotateY: 15 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />

                    {/* Glow Effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-b ${product.color} blur-xl opacity-30 -z-10`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </motion.div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">(4.8)</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-500 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4">{product.flavor} • 400ml</p>

                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-2xl font-black text-green-600">{product.price}</span>
                    <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full font-semibold">
                      17% OFF
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <AnimatedButton
                      variant="primary"
                      size="md"
                      className="flex-1 bg-black hover:bg-gray-800 text-white rounded-full"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </AnimatedButton>
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
                  initial={false}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <AnimatedButton
              variant="outline"
              size="lg"
              className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 rounded-full font-semibold"
            >
              View All Products
            </AnimatedButton>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black mb-6 text-gray-900">Trusted by Thousands</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our growing community of satisfied customers who trust FOKUS for their energy needs
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                number: "1M+",
                label: "Happy Customers",
                color: "from-blue-400 to-blue-600",
              },
              {
                icon: Award,
                number: "99%",
                label: "Satisfaction Rate",
                color: "from-green-400 to-green-600",
              },
              {
                icon: Star,
                number: "4.8",
                label: "Average Rating",
                color: "from-amber-400 to-amber-600",
              },
              {
                icon: Zap,
                number: "24/7",
                label: "Energy Boost",
                color: "from-amber-400 to-amber-600",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>

                <motion.div
                  className="text-4xl md:text-5xl font-black text-gray-900 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                >
                  {stat.number}
                </motion.div>

                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black mb-6 text-gray-900">Why Choose FOKUS?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the power of premium hydration with our scientifically formulated energy drinks
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Instant Energy Boost",
                description: "Feel energized within minutes with our advanced formula",
                color: "from-amber-400 to-amber-500",
              },
              {
                icon: Award,
                title: "Premium Quality",
                description: "Made with the finest ingredients for optimal performance",
                color: "from-green-400 to-blue-500",
              },
              {
                icon: Users,
                title: "Trusted by Millions",
                description: "Join the community of satisfied customers worldwide",
                color: "from-purple-400 to-pink-500",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-gray-200">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
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

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "Fitness Enthusiast",
                content: "FOKUS has completely transformed my workout routine. The energy boost is incredible!",
                avatar: "/placeholder.svg?height=80&width=80&text=RK",
                rating: 5,
              },
              {
                name: "Priya Sharma",
                role: "Software Developer",
                content: "Perfect for long coding sessions. Keeps me focused and alert throughout the day.",
                avatar: "/placeholder.svg?height=80&width=80&text=PS",
                rating: 5,
              },
              {
                name: "Arjun Singh",
                role: "Student",
                content: "Great taste and amazing energy boost. Perfect for study sessions and exams!",
                avatar: "/placeholder.svg?height=80&width=80&text=AS",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 overflow-hidden">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-400 via-amber-400 to-amber-500 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
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
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">Ready to FOKUS?</h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Join thousands of satisfied customers and experience the difference
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <AnimatedButton
                variant="secondary"
                size="xl"
                className="bg-white text-black hover:bg-gray-100 px-12 py-6 text-xl font-bold rounded-full shadow-2xl"
              >
                Shop Now
              </AnimatedButton>
              <AnimatedButton
                variant="outline"
                size="xl"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-12 py-6 text-xl font-bold rounded-full"
              >
                Learn More
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
