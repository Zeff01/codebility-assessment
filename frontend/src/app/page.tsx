import FeaturedMenu from "./components/FeaturedMenu";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <FeaturedMenu />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
