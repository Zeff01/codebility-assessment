"use client";

import { useState } from "react";
import Header from "@/components/header"; 
import HeroSection from "@/components/herosection"; 
import Searchbar from "@/components/searchbar"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import SubFooter from "@/components/subfooter";
import MainFooter from "@/components/mainfooter";
import Copyright from "@/components/copyright";
import HQLocationMap from "@/components/hqlocation";

config.autoAddCss = false;

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main>
      <Header setMenuOpen={setIsMenuOpen} /> {/* <- Correct prop name */}
      <Searchbar />
      <HeroSection isMenuOpen={isMenuOpen} />
      <HQLocationMap /> 
      <SubFooter /> 
      <MainFooter /> 
      <Copyright />
    </main>
  );
}
