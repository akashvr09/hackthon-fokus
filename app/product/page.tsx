"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Grid, List, Search, Filter, ChevronDown, Star, Heart, ShoppingCart } from "lucide-react"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
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
              {filteredProducts.map((product, index) => {
                // Extract color theme from gradient for dynamic theming
                const colorTheme = product.gradient.includes("amber")
                  ? "amber"
                  : product.gradient.includes("emerald")
                    ? "emerald"
                    : "indigo"

                return (
                  <motion.div
                    key={product.id}
                    className={`group relative bg-white border border-gray-200 rounded-3xl overflow-hidden transition-all duration-700 ${
                      viewMode === "list" ? "flex items-center" : ""
                    }`}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.15,
                      duration: 0.8,
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    }}
                    whileHover={{
                      y: -15,
                      scale: 1.03,
                      rotateY: 5,
                      rotateX: 5,
                      transition: { duration: 0.4, ease: "easeOut" },
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                      perspective: "1000px",
                    }}
                  >
                    {/* Animated Glow Background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br from-${colorTheme}-100 via-${colorTheme}-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                      initial={false}
                      animate={{
                        background: [
                          `linear-gradient(45deg, rgb(var(--${colorTheme}-100)), rgb(var(--${colorTheme}-50)), white)`,
                          `linear-gradient(135deg, rgb(var(--${colorTheme}-100)), rgb(var(--${colorTheme}-50)), white)`,
                          `linear-gradient(225deg, rgb(var(--${colorTheme}-100)), rgb(var(--${colorTheme}-50)), white)`,
                          `linear-gradient(315deg, rgb(var(--${colorTheme}-100)), rgb(var(--${colorTheme}-50)), white)`,
                        ],
                      }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />

                    {/* Outer Glow Effect */}
                    <motion.div
                      className={`absolute -inset-1 bg-gradient-to-r from-${colorTheme}-400 via-${colorTheme}-300 to-${colorTheme}-400 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-700`}
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0, 0.3, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                    />

                    {/* Floating Particles */}
                    <motion.div
                      className={`absolute top-4 right-8 w-2 h-2 bg-${colorTheme}-400 rounded-full opacity-0 group-hover:opacity-70`}
                      animate={{
                        y: [0, -20, 0],
                        x: [0, 10, 0],
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    />

                    <motion.div
                      className={`absolute bottom-8 left-6 w-1.5 h-1.5 bg-${colorTheme}-300 rounded-full opacity-0 group-hover:opacity-60`}
                      animate={{
                        y: [0, -15, 0],
                        x: [0, -8, 0],
                        scale: [1, 2, 1],
                        opacity: [0.6, 0.9, 0.6],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                    />

                    {/* Enhanced Border Animation */}
                    <motion.div
                      className={`absolute inset-0 rounded-3xl border-2 border-${colorTheme}-300 opacity-0 group-hover:opacity-50`}
                      animate={{
                        borderColor: [
                          `rgb(var(--${colorTheme}-300))`,
                          `rgb(var(--${colorTheme}-400))`,
                          `rgb(var(--${colorTheme}-500))`,
                          `rgb(var(--${colorTheme}-400))`,
                          `rgb(var(--${colorTheme}-300))`,
                        ],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    />

                    {/* Badge with enhanced animation */}
                    <motion.div
                      className={`absolute top-4 left-4 z-10 bg-gradient-to-r from-${colorTheme}-500 to-${colorTheme}-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg`}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1 + 0.3,
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        boxShadow: `0 10px 25px rgba(var(--${colorTheme}-500), 0.4)`,
                      }}
                    >
                      {product.badge}
                    </motion.div>

                    {/* Enhanced Wishlist Button */}
                    <motion.button
                      className={`absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 hover:bg-${colorTheme}-50 hover:border-${colorTheme}-300 transition-all duration-300 shadow-md`}
                      whileHover={{
                        scale: 1.15,
                        rotate: 15,
                        boxShadow: `0 8px 20px rgba(var(--${colorTheme}-400), 0.3)`,
                      }}
                      whileTap={{ scale: 0.9, rotate: -5 }}
                      animate={{
                        y: [0, -2, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      }}
                    >
                      <Heart
                        className={`w-5 h-5 text-gray-600 group-hover:text-${colorTheme}-500 transition-colors duration-300`}
                      />
                    </motion.button>

                    {/* Enhanced Product Image with 3D effect */}
                    <div className={`relative p-8 ${viewMode === "list" ? "w-1/3" : ""}`}>
                      <motion.div
                        className="relative mx-auto w-32 h-48 flex items-center justify-center"
                        whileHover={{
                          scale: 1.15,
                          rotateY: 20,
                          rotateX: 10,
                          z: 50,
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <motion.img
                          src={product.image || "/placeholder.svg"}
                          alt={product.title}
                          className="w-full h-full object-contain relative z-10"
                          whileHover={{ filter: "brightness(1.1) contrast(1.1)" }}
                        />

                        {/* Enhanced Glow Effect */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-b from-${colorTheme}-400 to-${colorTheme}-600 blur-2xl opacity-20 group-hover:opacity-60 -z-10`}
                          animate={{
                            scale: [1, 1.3, 1.1, 1.4, 1],
                            opacity: [0.2, 0.6, 0.4, 0.7, 0.2],
                            rotate: [0, 180, 360],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        />

                        {/* Rotating Ring */}
                        <motion.div
                          className={`absolute inset-0 border-2 border-${colorTheme}-300 rounded-full opacity-0 group-hover:opacity-40`}
                          animate={{
                            rotate: [0, 360],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                        />
                      </motion.div>
                    </div>

                    {/* Enhanced Product Info */}
                    <div className={`p-6 relative z-10 ${viewMode === "list" ? "w-2/3" : ""}`}>
                      <motion.div
                        className="flex items-center gap-2 mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                      >
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0, rotate: -180 }}
                              whileInView={{ scale: 1, rotate: 0 }}
                              transition={{
                                delay: index * 0.1 + 0.5 + i * 0.1,
                                type: "spring",
                                stiffness: 200,
                              }}
                            >
                              <Star
                                className={`w-4 h-4 ${
                                  i < Math.floor(product.rating)
                                    ? `text-${colorTheme}-400 fill-current`
                                    : "text-gray-300"
                                } transition-colors duration-300`}
                              />
                            </motion.div>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">({product.reviews})</span>
                      </motion.div>

                      <motion.h3
                        className={`text-xl font-bold text-gray-800 mb-2 group-hover:text-${colorTheme}-600 transition-all duration-300`}
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.6 }}
                      >
                        {product.title}
                      </motion.h3>

                      <motion.p
                        className="text-sm text-gray-600 mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.7 }}
                      >
                        {product.flavor} • 400ml
                      </motion.p>

                      <motion.div
                        className="flex items-center gap-2 mb-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.8, type: "spring" }}
                      >
                        <motion.span
                          className={`text-2xl font-black text-${colorTheme}-600`}
                          whileHover={{ scale: 1.1 }}
                        >
                          {product.price}
                        </motion.span>
                        <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                        <motion.span
                          className={`text-sm bg-${colorTheme}-100 text-${colorTheme}-700 px-2 py-1 rounded-full font-semibold`}
                          animate={{
                            scale: [1, 1.05, 1],
                          }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          17% OFF
                        </motion.span>
                      </motion.div>

                      {/* Enhanced Action Buttons */}
                      <motion.div
                        className="flex gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.9 }}
                      >
                        <motion.button
                          className={`flex-1 bg-gradient-to-r from-${colorTheme}-500 to-${colorTheme}-600 hover:from-${colorTheme}-600 hover:to-${colorTheme}-700 text-white rounded-full px-6 py-3 font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300`}
                          whileHover={{
                            scale: 1.05,
                            boxShadow: `0 15px 30px rgba(var(--${colorTheme}-500), 0.4)`,
                          }}
                          whileTap={{ scale: 0.95 }}
                          animate={{
                            boxShadow: [
                              `0 5px 15px rgba(var(--${colorTheme}-500), 0.2)`,
                              `0 8px 25px rgba(var(--${colorTheme}-500), 0.3)`,
                              `0 5px 15px rgba(var(--${colorTheme}-500), 0.2)`,
                            ],
                          }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          >
                            <ShoppingCart className="w-4 h-4" />
                          </motion.div>
                          Add to Cart
                        </motion.button>
                      </motion.div>
                    </div>

                    {/* Corner Accent */}
                    <motion.div
                      className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-${colorTheme}-200 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                      style={{
                        clipPath: "polygon(100% 0%, 0% 0%, 100% 100%)",
                      }}
                      animate={{
                        background: [
                          `linear-gradient(to bottom left, rgb(var(--${colorTheme}-200)), transparent)`,
                          `linear-gradient(to bottom left, rgb(var(--${colorTheme}-300)), transparent)`,
                          `linear-gradient(to bottom left, rgb(var(--${colorTheme}-200)), transparent)`,
                        ],
                      }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </motion.div>
                )
              })}
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
