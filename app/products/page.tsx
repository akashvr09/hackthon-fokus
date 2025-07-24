"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Grid, List, Search } from "lucide-react"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"

const products = [
  {
    id: 1,
    title: "Fokus Energy - Citrus Blast",
    price: "$4.99",
    category: "energy",
    gradient: "from-green-400 to-green-600",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 2,
    title: "Fokus Energy - Tropical Storm",
    price: "$4.99",
    category: "energy",
    gradient: "from-orange-400 to-orange-600",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 3,
    title: "Fokus Energy - Arctic Freeze",
    price: "$4.99",
    category: "energy",
    gradient: "from-blue-400 to-blue-600",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 4,
    title: "Fokus Supplements - Focus Pills",
    price: "$29.99",
    category: "supplements",
    gradient: "from-purple-400 to-purple-600",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 5,
    title: "Fokus Merch - Neon Hoodie",
    price: "$59.99",
    category: "merch",
    gradient: "from-pink-400 to-pink-600",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 6,
    title: "Fokus Bundle - Starter Pack",
    price: "$24.99",
    category: "bundles",
    gradient: "from-cyan-400 to-cyan-600",
    image: "/placeholder.svg?height=400&width=300",
  },
]

const categories = ["all", "energy", "supplements", "merch", "bundles"]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <NavBar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <motion.div
          className="max-w-6xl mx-auto text-center"
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
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
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
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg"
                    : "bg-white/10 backdrop-blur-md border border-white/20 text-white/70 hover:bg-white/20"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Products Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchTerm}
              className={`grid gap-8 ${
                viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 max-w-4xl mx-auto"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  gradient={product.gradient}
                  delay={index * 0.1}
                />
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
