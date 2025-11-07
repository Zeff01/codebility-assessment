"use client"
import { useRouter } from "next/navigation"
import React, { useEffect } from "react"

// Redirect back to home page
export default function page() {
  const router = useRouter()
  useEffect(() => {
    router.push("/")
  }, [router])
  return
}
