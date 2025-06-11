"use client"

import { motion } from "framer-motion"

export default function SlideInUp({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  )
}
