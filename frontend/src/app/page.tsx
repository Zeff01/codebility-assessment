import NavBar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OurStays from "@/components/OurStays";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top">
      <NavBar />
      <main>
        <Hero />

        <OurStays/>
      </main>
      <Footer />
    </div>
  );
}