// app/page.jsx
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import PerformanceSection from "@/components/PerformanceSection";
import Features from "@/components/Features";
import Marketplace from "@/components/Marketplace";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer"; // <-- Import Footer
import AIChatbot from "@/components/AIChatbot";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <PerformanceSection />
      <Features />
      <Marketplace />
      <Contact />
      <Footer /> {/* <-- Add Footer here */}
      <AIChatbot />
    </main>
  );
}