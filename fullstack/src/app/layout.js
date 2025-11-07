import { Geist, Geist_Mono, DM_Serif_Text, Commissioner } from "next/font/google"
import "./globals.css"
import NavBar from "@/components/NavBar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const commissioner = Commissioner({
  variable: "--font-commissioner",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const dmSerifText = DM_Serif_Text({
  weight: "400",
  variable: "--font-dm-serif",
  subsets: ["latin"],
})

export const metadata = {
  title: "Developer Blog",
  description: "Boost Your Developer Career",
}

// The navbar is stickied on the root layout of the whole application
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSerifText.variable} ${commissioner.variable} antialiased`}
      >
        <NavBar className="sticky top-0 left-0 z-1" />
        {children}
      </body>
    </html>
  )
}
