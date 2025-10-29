"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface MotionSectionProps {
  children: ReactNode
  delay?: number
}

export function MotionSection({ children, delay = 0 }: MotionSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
