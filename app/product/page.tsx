"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Grid, List, Search, Filter, ChevronDown, Star, Heart, ShoppingCart } from "lucide-react"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { AnimatedButton } from "@/components/animated-button"
import { FruitAnimations } from "@/components/fruit-animations"

// Define our 3-color palette
const colors = {
  primary: "amber-500", // Main brand color (amber)
  secondary: "emerald-500", // Secondary accent color (emerald)
  tertiary: "indigo-500", // Third accent color (indigo)
}

const products = [
  {
    id: 1,
    title: "FOKUS Kiwi Lemon",
    price: "₹150",
    originalPrice: "₹180",
    category: "energy",
    gradient: `from-${colors.secondary}-400 to-${colors.secondary}-600`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame_2_2-FijPGUSJRGqpwuOdUH0Skof2OZu2FZ.webp",
    flavor: "KIWI LEMON",
    badge: "Refreshing",
    rating: 4.8,
    reviews: 1250,
  },
  {
    id: 2,
    title: "FOKUS Mango Pineapple",
    price: "₹150",
    originalPrice: "₹180",
    category: "energy",
    gradient: `from-${colors.primary}-400 to-${colors.primary}-600`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame_3_1-rr3YGfIyOi7fp51y4tGp71YbpjHhyC.webp",
    flavor: "MANGO PINEAPPLE",
    badge: "Tropical",
    rating: 4.9,
    reviews: 980,
  },
  {
    id: 3,
    title: "FOKUS Strawberry Watermelon",
    price: "₹150",
    originalPrice: "₹180",
    category: "energy",
    gradient: `from-${colors.tertiary}-400 to-${colors.tertiary}-600`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame_1-G6GW8YoUPAnoDj9m7MHYbrbEEW6V7z.webp",
    flavor: "STRAWBERRY WATERMELON",
    badge: "Sweet",
    rating: 4.7,
    reviews: 750,
  },
  {
    id: 4,
    title: "FOKUS Supplements - Focus Pills",
    price: "₹299",
    originalPrice: "₹399",
    category: "supplements",
    gradient: `from-${colors.tertiary}-400 to-${colors.tertiary}-600`,
    image: "/placeholder.svg?height=400&width=300&text=Focus+Pills",
    flavor: "FOCUS PILLS",
    badge: "Mental Clarity",
    rating: 4.9,
    reviews: 520,
  },
  {
    id: 5,
    title: "FOKUS Merch - Neon Hoodie",
    price: "₹1499",
    originalPrice: "₹1999",
    category: "merch",
    gradient: `from-${colors.primary}-400 to-${colors.primary}-600`,
    image: "/placeholder.svg?height=400&width=300&text=Neon+Hoodie",
    flavor: "NEON HOODIE",
    badge: "Limited Edition",
    rating: 4.8,
    reviews: 320,
  },
  {
    id: 6,
    title: "FOKUS Bundle - Starter Pack",
    price: "₹599",
    originalPrice: "₹799",
    category: "bundles",
    gradient: `from-${colors.secondary}-400 to-${colors.secondary}-600`,
    image: "/placeholder.svg?height=400&width=300&text=Starter+Pack",
    flavor: "STARTER PACK",
    badge: "Best Value",
    rating: 4.9,
    reviews: 890,
  },
]

const categories = ["all", "energy", "supplements", "merch", "bundles"]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-${colors.tertiary}-900 to-slate-900`}>
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
              PRODUCTS
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Discover our complete range of futuristic energy solutions
          </motion.p>
        </motion.div>
      </section>

      {/* Filters and Search */}
      <section className="px-4 mb-12">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-all duration-300"
              />
            </div>

            {/* Filter Toggle */}
            <motion.button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </motion.button>

            {/* View Toggle */}
            <div className="flex items-center gap-2 p-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <motion.button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-full transition-all duration-300 ${
                  viewMode === "grid" ? "bg-white/20 text-white" : "text-white/60 hover:text-white"
                }`}
                whileTap={{ scale: 0.9 }}
              >
                <Grid className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-full transition-all duration-300 ${
                  viewMode === "list" ? "bg-white/20 text-white" : "text-white/60 hover:text-white"
                }`}
                whileTap={{ scale: 0.9 }}
              >
                <List className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Category Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-wrap gap-3 justify-center">
                  {categories.map((category, index) => (
                    <motion.button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? `bg-gradient-to-r from-${colors.primary} to-${colors.secondary} text-white shadow-lg`
                          : "bg-white/10 backdrop-blur-md border border-white/20 text-white/70 hover:bg-white/20"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Products Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchTerm + viewMode}
              className={`grid gap-8 ${
                viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 max-w-4xl mx-auto"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className={`group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 transition-all duration-500 ${
                    viewMode === "list" ? "flex items-center" : ""
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  {/* Badge */}
                  <motion.div
                    className={`absolute top-4 left-4 z-10 bg-gradient-to-r from-${colors.primary} to-${colors.secondary} text-white px-3 py-1 rounded-full text-sm font-semibold`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                  >
                    {product.badge}
                  </motion.div>

                  {/* Wishlist Button */}
                  <motion.button
                    className="absolute top-4 right-4 z-10 p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart className="w-5 h-5 text-white" />
                  </motion.button>

                  {/* Product Image */}
                  <div className={`relative p-8 ${viewMode === "list" ? "w-1/3" : ""}`}>
                    <motion.div
                      className="relative mx-auto w-32 h-48 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotateY: 15 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        className="w-full h-full object-contain"
                      />

                      {/* Glow Effect */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-b ${product.gradient} blur-xl opacity-30 -z-10`}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      />
                    </motion.div>
                  </div>

                  {/* Product Info */}
                  <div className={`p-6 ${viewMode === "list" ? "w-2/3" : ""}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-white/20"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-white/60">({product.reviews})</span>
                    </div>

                    <h3
                      className={`text-xl font-bold text-white mb-2 group-hover:text-${colors.primary} transition-colors`}
                    >
                      {product.title}
                    </h3>

                    <p className="text-sm text-white/60 mb-4">{product.flavor} • 400ml</p>

                    <div className="flex items-center gap-2 mb-6">
                      <span className={`text-2xl font-black text-${colors.secondary}`}>{product.price}</span>
                      <span className="text-lg text-white/40 line-through">{product.originalPrice}</span>
                      <span
                        className={`text-sm bg-${colors.secondary}/20 text-${colors.secondary} px-2 py-1 rounded-full font-semibold`}
                      >
                        17% OFF
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <AnimatedButton
                        variant="primary"
                        size="md"
                        className={`flex-1 bg-gradient-to-r from-${colors.primary} to-${colors.secondary} hover:from-${colors.secondary} hover:to-${colors.primary} text-white rounded-full`}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </AnimatedButton>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-t from-${colors.primary}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                    initial={false}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <motion.div className="text-center py-20" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-2xl text-white/60 mb-4">No products found</p>
              <p className="text-white/40">Try adjusting your search or filters</p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
