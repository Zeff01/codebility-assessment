import type React from "react"
import type { Metadata } from "next"
import { Crimson_Text, Source_Sans_3 as Source_Sans_Pro } from "next/font/google"
import "./globals.css"

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
  display: "swap",
})

const sourceSans = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Personal Blog",
  description: "My thoughts and experiences",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${crimsonText.variable} ${sourceSans.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
