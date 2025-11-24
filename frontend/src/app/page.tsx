"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Hero from "./components/Hero";
import GiftCard from "./components/GiftCard";
import WithGIF from "./components/WithGIF";
import Rates from "./components/Rates";
import Footer from "./components/Footer";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFFFF]">
      <Navbar onMenuToggle={setMenuOpen} />
      <div className={`${menuOpen ? "pt-[360px] sm:pt-[220px]" : "pt-[50px] sm:pt-[60px]"}`}>
        <SearchBar />
        <Hero />
        <GiftCard/>
        <WithGIF/>
        <Rates />
        <Footer/>
      </div>

   
    </div>
  );
}
