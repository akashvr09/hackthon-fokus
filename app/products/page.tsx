"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Grid, List, Search, Filter, ChevronDown, Star, Heart, ShoppingCart, Eye } from "lucide-react"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { FruitAnimations } from "@/components/fruit-animations"
import Link from "next/link"

// Define our 3-color palette
const colors = {
  primary: "amber-500", // Main brand color (amber)
  secondary: "emerald-500", // Secondary accent color (emerald)
  tertiary: "indigo-500", // Third accent color (indigo)
}

const products = [
  {
    id: 1,
    title: "FOKUS Kiwi Lemon Energy Drink",
    price: "₹150",
    originalPrice: "₹180",
    category: "energy",
    gradient: `from-emerald-400 to-emerald-600`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame_2_2-FijPGUSJRGqpwuOdUH0Skof2OZu2FZ.webp",
    flavor: "KIWI LEMON",
    badge: "Rohit's Choice",
    rating: 4.8,
    reviews: 1250,
    description: "Refreshing kiwi-lemon blend for pre-workout energy boost",
    inStock: true,
    colorTheme: "emerald",
  },
  {
    id: 2,
    title: "FOKUS Mango Pineapple Energy Drink",
    price: "₹150",
    originalPrice: "₹180",
    category: "energy",
    gradient: `from-amber-400 to-amber-600`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame_3_1-rr3YGfIyOi7fp51y4tGp71YbpjHhyC.webp",
    flavor: "MANGO PINEAPPLE",
    badge: "Best Seller",
    rating: 4.9,
    reviews: 980,
    description: "Tropical mango-pineapple fusion for intense training sessions",
    inStock: true,
    colorTheme: "amber",
  },
  {
    id: 3,
    title: "FOKUS Strawberry Watermelon Energy Drink",
    price: "₹150",
    originalPrice: "₹180",
    category: "energy",
    gradient: `from-indigo-400 to-indigo-600`,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame_1-G6GW8YoUPAnoDj9m7MHYbrbEEW6V7z.webp",
    flavor: "STRAWBERRY WATERMELON",
    badge: "New Flavor",
    rating: 4.7,
    reviews: 750,
    description: "Sweet strawberry-watermelon for post-workout recovery",
    inStock: true,
    colorTheme: "indigo",
  },
  {
    id: 4,
    title: "FOKUS Fitness Course - Complete Program",
    price: "₹2999",
    originalPrice: "₹4999",
    category: "courses",
    gradient: `from-indigo-400 to-indigo-600`,
    image: "/placeholder.svg?height=400&width=300&text=Fitness+Course",
    flavor: "DIGITAL COURSE",
    badge: "Exclusive",
    rating: 4.9,
    reviews: 520,
    description: "12-week comprehensive fitness program by Rohit Sharma",
    inStock: true,
    colorTheme: "indigo",
  },
  {
    id: 5,
    title: "FOKUS Premium Gym T-Shirt",
    price: "₹899",
    originalPrice: "₹1299",
    category: "merch",
    gradient: `from-amber-400 to-amber-600`,
    image: "/placeholder.svg?height=400&width=300&text=FOKUS+T-Shirt",
    flavor: "PREMIUM MERCH",
    badge: "Limited Edition",
    rating: 4.8,
    reviews: 320,
    description: "Premium quality gym wear with FOKUS branding",
    inStock: true,
    colorTheme: "amber",
  },
  {
    id: 6,
    title: "FOKUS Starter Bundle - 6 Pack",
    price: "₹799",
    originalPrice: "₹1080",
    category: "bundles",
    gradient: `from-emerald-400 to-emerald-600`,
    image: "/placeholder.svg?height=400&width=300&text=Starter+Bundle",
    flavor: "VARIETY PACK",
    badge: "Best Value",
    rating: 4.9,
    reviews: 890,
    description: "Try all flavors with this special starter bundle",
    inStock: true,
    colorTheme: "emerald",
  },
]

const categories = ["all", "energy", "courses", "supplements", "merch", "bundles"]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState("featured")

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return Number.parseInt(a.price.replace("₹", "")) - Number.parseInt(b.price.replace("₹", ""))
      case "price-high":
        return Number.parseInt(b.price.replace("₹", "")) - Number.parseInt(a.price.replace("₹", ""))
      case "rating":
        return b.rating - a.rating
      case "name":
        return a.title.localeCompare(b.title)
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-amber-950/30 to-emerald-950/30">
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
            Discover Rohit's complete range of energy drinks, courses, and fitness merchandise
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
                className="w-full pl-12 pr-4 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-all duration-300"
              />
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white focus:outline-none focus:border-white/40 transition-all duration-300"
            >
              <option value="featured" className="text-black">
                Featured
              </option>
              <option value="price-low" className="text-black">
                Price: Low to High
              </option>
              <option value="price-high" className="text-black">
                Price: High to Low
              </option>
              <option value="rating" className="text-black">
                Highest Rated
              </option>
              <option value="name" className="text-black">
                Name A-Z
              </option>
            </select>

            {/* Filter Toggle */}
            <motion.button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </motion.button>

            {/* View Toggle */}
            <div className="flex items-center gap-2 p-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
              <motion.button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-full transition-all duration-300 ${
                  viewMode === "grid" ? "bg-white/10 text-white" : "text-white/60 hover:text-white"
                }`}
                whileTap={{ scale: 0.9 }}
              >
                <Grid className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-full transition-all duration-300 ${
                  viewMode === "list" ? "bg-white/10 text-white" : "text-white/60 hover:text-white"
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
                          : "bg-white/5 backdrop-blur-md border border-white/10 text-white/70 hover:bg-white/10"
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
              key={selectedCategory + searchTerm + viewMode + sortBy}
              className={`grid gap-8 ${
                viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 max-w-4xl mx-auto"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {sortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-700 ${
                    viewMode === "list" ? "flex items-center" : ""
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  whileHover={{
                    y: -15,
                    scale: 1.03,
                    boxShadow: `0 25px 50px -12px rgba(${product.colorTheme === "amber" ? "245, 158, 11" : product.colorTheme === "emerald" ? "16, 185, 129" : "99, 102, 241"}, 0.25)`,
                  }}
                >
                  {/* Animated Background Glow */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-all duration-700`}
                    initial={false}
                    whileHover={{
                      background: [
                        `linear-gradient(45deg, var(--tw-gradient-stops))`,
                        `linear-gradient(135deg, var(--tw-gradient-stops))`,
                        `linear-gradient(225deg, var(--tw-gradient-stops))`,
                        `linear-gradient(315deg, var(--tw-gradient-stops))`,
                      ],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  />

                  {/* Stock Status */}
                  {!product.inStock && (
                    <motion.div
                      className="absolute top-0 left-0 right-0 bg-red-500 text-white text-center py-2 text-sm font-semibold z-20"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      Out of Stock
                    </motion.div>
                  )}

                  {/* Badge */}
                  <motion.div
                    className={`absolute ${!product.inStock ? "top-12" : "top-4"} left-4 z-10 bg-gradient-to-r ${product.gradient} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {product.badge}
                  </motion.div>

                  {/* Wishlist Button */}
                  <motion.button
                    className={`absolute ${!product.inStock ? "top-12" : "top-4"} right-4 z-10 p-3 bg-gray-100 rounded-full border border-gray-200 transition-all duration-500 hover:bg-gray-200`}
                    whileHover={{
                      scale: 1.15,
                      backgroundColor: `rgba(${product.colorTheme === "amber" ? "245, 158, 11" : product.colorTheme === "emerald" ? "16, 185, 129" : "99, 102, 241"}, 0.1)`,
                      borderColor: `rgba(${product.colorTheme === "amber" ? "245, 158, 11" : product.colorTheme === "emerald" ? "16, 185, 129" : "99, 102, 241"}, 0.3)`,
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                      <Heart className="w-5 h-5 text-gray-600" />
                    </motion.div>
                  </motion.button>

                  {/* Product Image */}
                  <div className={`relative p-8 ${viewMode === "list" ? "w-1/3" : ""} overflow-hidden`}>
                    {/* Floating Particles */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-2 h-2 bg-${product.colorTheme}-400 rounded-full`}
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            y: [-20, -60, -20],
                            x: [-10, 10, -10],
                            opacity: [0, 0.8, 0],
                            scale: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: Math.random() * 2,
                          }}
                        />
                      ))}
                    </div>

                    <motion.div
                      className="relative mx-auto w-32 h-48 flex items-center justify-center"
                      whileHover={{
                        scale: 1.15,
                        rotateY: 15,
                        rotateX: 5,
                      }}
                      transition={{
                        duration: 0.6,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      <motion.img
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        className={`w-full h-full object-contain transition-all duration-700 ${!product.inStock ? "opacity-50 grayscale" : ""}`}
                        whileHover={{ filter: "brightness(1.1)" }}
                      />

                      {/* Enhanced Glow Effect */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-b ${product.gradient} blur-xl opacity-10 -z-10`}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                        whileHover={{
                          scale: [1.3, 1.5, 1.3],
                          opacity: [0.2, 0.3, 0.2],
                        }}
                      />

                      {/* Rotating Ring Effect */}
                      <motion.div
                        className={`absolute inset-0 border-2 border-${product.colorTheme}-400/30 rounded-full opacity-0 group-hover:opacity-100`}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      />
                    </motion.div>
                  </div>

                  {/* Product Info */}
                  <div className={`p-6 relative z-10 ${viewMode === "list" ? "w-2/3" : ""}`}>
                    {/* Rating */}
                    <motion.div
                      className="flex items-center gap-2 mb-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.5 + i * 0.1, type: "spring" }}
                            whileHover={{ scale: 1.2, rotate: 360 }}
                          >
                            <Star
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          </motion.div>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">({product.reviews})</span>
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      className={`text-xl font-bold text-gray-800 mb-2 transition-all duration-500 group-hover:text-${product.colorTheme}-600`}
                      whileHover={{ scale: 1.02 }}
                    >
                      {product.title}
                    </motion.h3>

                    {/* Flavor & Description */}
                    <motion.p
                      className="text-sm text-gray-600 mb-2 font-medium"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.6 }}
                    >
                      {product.flavor}
                    </motion.p>

                    <motion.p
                      className="text-sm text-gray-500 mb-4 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.7 }}
                    >
                      {product.description}
                    </motion.p>

                    {/* Price */}
                    <motion.div
                      className="flex items-center gap-2 mb-6"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.span
                        className={`text-2xl font-black text-${product.colorTheme}-600`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {product.price}
                      </motion.span>
                      <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                      <motion.span
                        className={`text-sm bg-${product.colorTheme}-100 text-${product.colorTheme}-700 px-3 py-1 rounded-full font-bold border border-${product.colorTheme}-200`}
                        whileHover={{ scale: 1.1, y: -2 }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.8, type: "spring" }}
                      >
                        {Math.round(
                          ((Number.parseInt(product.originalPrice.replace("₹", "")) -
                            Number.parseInt(product.price.replace("₹", ""))) /
                            Number.parseInt(product.originalPrice.replace("₹", ""))) *
                            100,
                        )}
                        % OFF
                      </motion.span>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      className="flex gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.9 }}
                    >
                      <Link href={`/product/${product.id}`} className="flex-1">
                        <motion.button
                          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full border-2 border-gray-200 text-gray-700 font-medium transition-all duration-500 hover:bg-gray-50 hover:border-gray-300"
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Eye className="w-4 h-4" />
                          View Details
                        </motion.button>
                      </Link>

                      <motion.button
                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full font-bold transition-all duration-500 ${
                          product.inStock
                            ? `bg-gradient-to-r ${product.gradient} text-white shadow-lg hover:shadow-xl hover:scale-105`
                            : "bg-gray-400 text-gray-200 cursor-not-allowed"
                        }`}
                        whileHover={product.inStock ? { scale: 1.05, y: -2 } : {}}
                        whileTap={product.inStock ? { scale: 0.95 } : {}}
                        onClick={() => product.inStock && console.log("Add to cart:", product.id)}
                        disabled={!product.inStock}
                      >
                        <ShoppingCart className="w-4 h-4" />
                        {product.inStock ? "Add to Cart" : "Out of Stock"}
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Corner Accent */}
                  <motion.div
                    className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${product.gradient} opacity-0 group-hover:opacity-10 transition-all duration-700`}
                    style={{ clipPath: "polygon(100% 0%, 0% 0%, 100% 100%)" }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {sortedProducts.length === 0 && (
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
