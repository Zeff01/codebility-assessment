import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import AuroraBackground from '@/components/ui/AuroraBackground'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Let’s To-Do It',
  description: 'Modern fullstack todo app',
  icons: {
    icon: '/Logo.png',
    shortcut: '/Logo.png',
    apple: '/Logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-screen bg-[#05070D] text-slate-100">
        {/* Single shared background for every route (auth + site). Rendered
            once here so login/todos pages never need their own copy. */}
        <AuroraBackground />

        <Providers>
          <div className="relative z-10 flex min-h-screen flex-col">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}