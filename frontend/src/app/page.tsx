import Header from "@/components/sections/Header";
import SearchBar from "@/components/sections/SearchBar";
import Hero from "@/components/sections/Hero";
import PopularDeals from "@/components/sections/PopularDeals";
import Description from "@/components/sections/Description";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-poppins)]">
      <Header />
      <SearchBar />
      <Hero />
      <PopularDeals />
      <Description />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}
