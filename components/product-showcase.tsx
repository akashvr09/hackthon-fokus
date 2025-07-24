"use client"

import { motion } from "framer-motion"
import { Star, Heart, ShoppingCart } from "lucide-react"
import { AnimatedButton } from "./animated-button"

const products = [
  {
    id: 1,
    name: "FOKUS Energy - Citrus Blast",
    price: "₹299",
    originalPrice: "₹399",
    rating: 4.8,
    reviews: 1250,
    image: "/placeholder.svg?height=300&width=200&text=Citrus+Blast",
    color: "from-green-400 to-green-600",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "FOKUS Energy - Tropical Storm",
    price: "₹299",
    originalPrice: "₹399",
    rating: 4.9,
    reviews: 980,
    image: "/placeholder.svg?height=300&width=200&text=Tropical+Storm",
    color: "from-orange-400 to-orange-600",
    badge: "New",
  },
  {
    id: 3,
    name: "FOKUS Energy - Berry Blast",
    price: "₹299",
    originalPrice: "₹399",
    rating: 4.7,
    reviews: 750,
    image: "/placeholder.svg?height=300&width=200&text=Berry+Blast",
    color: "from-purple-400 to-purple-600",
    badge: "Limited",
  },
]

export function ProductShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black mb-6 text-gray-900">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our range of premium energy drinks crafted for peak performance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
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
                className="absolute top-4 left-4 z-10 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
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
                  className="relative mx-auto w-32 h-48 rounded-2xl overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.1, rotateY: 15 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`w-full h-full bg-gradient-to-b ${product.color} relative`}>
                    {/* Glow Effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-b ${product.color} blur-xl opacity-50`}
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
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews})</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2 mb-6">
                  <span className="text-2xl font-black text-orange-500">{product.price}</span>
                  <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full font-semibold">
                    25% OFF
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <AnimatedButton
                    variant="primary"
                    size="md"
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white rounded-full"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </AnimatedButton>
                </div>
              </div>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
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
            className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-semibold"
          >
            View All Products
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  )
}
