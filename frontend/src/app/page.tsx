import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-ink-3 mt-10">
        <div className="mx-auto max-w-7xl px-8">
          © {new Date().getFullYear()} Moola Drops Clone · Assessment Project
        </div>
      </footer>
    </div>
  );
}
