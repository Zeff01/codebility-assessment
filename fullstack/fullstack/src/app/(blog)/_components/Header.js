"use client"
import Link from "next/link"
import { motion } from "motion/react"

export default function Header() {
  return (
    <header>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-4 flex"
      >
        <Link href="/" className="text-3xl font-bold tracking-tighter">
          Blog Site
        </Link>
      </motion.nav>
    </header>
  )
}
