import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Feature";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { SearchBar } from "@/components/ui/SearchBar";
import SpecialOffers from "@/components/sections/SpecialOffers";
import FeaturedCards from "@/components/sections/FeaturedCards";

export default function Home() {
  return (
    <main>
      <Header />
      <SearchBar />
      <SpecialOffers />
      <Features />
      <FeaturedCards />
      <Hero />
      <CTA />
      <Footer />
    </main>
  );
}
