"use client";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SaveMoney from "./components/SaveMoney";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <SearchBar />
        <main className="flex-grow">
          <Hero />
          <SaveMoney />
        </main>
        <Footer />
      </div>
    </>
  );
}
