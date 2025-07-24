"use client"

import { motion } from "framer-motion"
import { Users, Award, Star, Zap } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: "50K+",
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
    number: "4.9",
    label: "Average Rating",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    icon: Zap,
    number: "24/7",
    label: "Energy Boost",
    color: "from-orange-400 to-orange-600",
  },
]

export function StatsSection() {
  return (
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
          {stats.map((stat, index) => (
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
  )
}
