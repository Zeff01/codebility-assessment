"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ShoppingBag,
  Star,
  Truck,
  Shield,
  Headphones,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import { useState } from "react"

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: "$199.99",
      originalPrice: "$249.99",
      image: "headphones.jpg",
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: "$299.99",
      originalPrice: "$399.99",
      image: "fitnessWatch.jpg",
      rating: 4.9,
      reviews: 89,
    },
    {
      id: 3,
      name: "Minimalist Backpack",
      price: "$79.99",
      originalPrice: "$99.99",
      image: "bag.jpg",
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: "$149.99",
      originalPrice: "$199.99",
      image: "speaker.jpg",
      rating: 4.6,
      reviews: 203,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <nav className="w-full bg-white shadow-sm px-4 md:px-8 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-primary">Moola</div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 text-lg font-medium">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Contact
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <Button className="hidden sm:flex bg-primary text-white px-6 py-2 rounded-lg">Sign In</Button>

            {/* Mobile Menu Button */}
            <Button
              variant="secondary"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <ul className="flex flex-col gap-4 pt-4">
              <li>
                <a href="#" className="block hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block hover:text-primary transition-colors">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="block hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="block hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li className="pt-2">
                <Button className="w-full bg-primary text-white">Sign In</Button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
                Discover Your Next
                <span className="text-primary"> Favorite Product</span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl leading-relaxed">
                Shop the latest trends with unbeatable prices. Quality products, fast shipping, and exceptional customer
                service.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button className="h-11 px-8 bg-accent hover:bg-accent/90 text-accent-foreground flex items-center justify-center gap-2 rounded-lg">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="text-lg font-medium">Shop Now</span>
                </Button>
                <Button variant="secondary">
                  Browse Categories
                </Button>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Free Shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Secure Payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Headphones className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">24/7 Support</span>
                </div>
              </div>
            </div>

            <div className="relative order-first md:order-last">
              <img
                src="/modern-shopping-hero.png"
                alt="Shopping hero"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Featured Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked items that our customers love most. Limited time offers with amazing discounts.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-destructive text-destructive-foreground px-2 py-1 rounded text-sm font-medium">
                      Sale
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    <h3 className="font-semibold text-foreground line-clamp-2">{product.name}</h3>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">({product.reviews})</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-foreground">{product.price}</span>
                      <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                    </div>

                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-muted/30 border-t">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="text-2xl font-bold text-primary">Moola</div>
              <p className="text-muted-foreground">
                Your trusted shopping destination for quality products at unbeatable prices. Shop with confidence.
              </p>
              <div className="flex gap-4">
                <Button variant="secondary" className="h-8 w-8 p-2">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="secondary" className="h-8 w-8 p-2">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="secondary" className="h-8 w-8 p-2">
                  <Instagram className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Customer Service</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Size Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Track Order
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Contact Us</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">support@moola.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">123 Shopping St, Commerce City, CC 12345</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2024 Moola. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
