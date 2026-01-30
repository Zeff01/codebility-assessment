import { Navbar } from "@/components/layout/navbar";
import { SearchBar } from "@/components/sections/search-bar";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <SearchBar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
      </main>
      <footer className="border-t border-border px-6 py-8 md:px-20">
        <div className="mx-auto max-w-7xl text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Moola Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
