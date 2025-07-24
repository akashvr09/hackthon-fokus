"use client"

import { motion } from "framer-motion"
import { Instagram, Twitter, Youtube, Facebook, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const socialIcons = [
    { icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { icon: Youtube, href: "#", color: "hover:text-red-500" },
    { icon: Facebook, href: "#", color: "hover:text-blue-600" },
  ]

  const footerLinks = {
    Product: ["Energy Drinks", "Flavors", "Bundles", "Subscriptions"],
    Company: ["About Us", "Our Story", "Careers", "Press"],
    Support: ["Help Center", "Contact", "Shipping", "Returns"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookies", "Disclaimer"],
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Mango Banner Section */}
      <section className="relative overflow-hidden">
        <motion.div
          className="w-full h-64 md:h-80"
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fokus_mango_banner_copy_1-MudPfppO6ImTpomK7CnN8qGSAOlHNK.webp"
            alt="FOKUS Mango Banner"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlay content */}
        <motion.div
          className="absolute inset-0 bg-black/20 flex items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-center text-white">
            <motion.h3
              className="text-4xl md:text-6xl font-black mb-4"
              animate={{
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.5)",
                  "0 0 40px rgba(255,255,255,0.8)",
                  "0 0 20px rgba(255,255,255,0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              Taste the Tropical
            </motion.h3>
            <p className="text-xl md:text-2xl font-semibold">MANGO PINEAPPLE FUSION</p>
          </div>
        </motion.div>
      </section>

      {/* Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.h3 className="text-4xl font-black mb-6" whileHover={{ scale: 1.05 }}>
                FO<span className="text-amber-500">K</span>US
              </motion.h3>

              <p className="text-gray-400 mb-8 leading-relaxed">
                Empowering your potential with premium energy drinks crafted for peak performance and sustained focus.
              </p>

              {/* Social Icons */}
              <div className="flex gap-4">
                {socialIcons.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`p-3 rounded-full bg-gray-800 text-gray-400 ${social.color} transition-all duration-300 hover:bg-gradient-to-br hover:from-amber-500 hover:to-emerald-500 hover:text-white`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Sections */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                >
                  <h4 className="text-white font-semibold mb-4">{category}</h4>
                  <ul className="space-y-3">
                    {links.map((link, linkIndex) => (
                      <motion.li key={link}>
                        <motion.a
                          href="#"
                          className="text-gray-400 hover:text-white transition-colors text-sm"
                          whileHover={{ x: 4 }}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: categoryIndex * 0.1 + linkIndex * 0.05 }}
                        >
                          {link}
                        </motion.a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Contact Section */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="text-white font-semibold mb-6">Get in Touch</h4>

              <div className="space-y-4">
                <motion.div className="flex items-center gap-3 text-gray-400" whileHover={{ x: 4 }}>
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">hello@fokus.in</span>
                </motion.div>

                <motion.div className="flex items-center gap-3 text-gray-400" whileHover={{ x: 4 }}>
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+91 98765 43210</span>
                </motion.div>

                <motion.div className="flex items-center gap-3 text-gray-400" whileHover={{ x: 4 }}>
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Mumbai, India</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-gray-400 text-sm">© 2025 FOKUS. All rights reserved. Made with ❤️ in India.</p>

            <div className="flex items-center gap-6">
              <motion.a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
                whileHover={{ y: -2 }}
              >
                Privacy
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
                whileHover={{ y: -2 }}
              >
                Terms
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
                whileHover={{ y: -2 }}
              >
                Cookies
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
