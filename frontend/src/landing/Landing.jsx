import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BestSellersSection from "./components/BestSellersSection.jsx";
import Chatbot from "./components/Chatbot.jsx";
import DeliverySection from "./components/DeliverySection.jsx";
import FeaturedProductsSection from "./components/FeaturedProductsSection.jsx";
import FinalCtaSection from "./components/FinalCtaSection.jsx";
import Footer from "./components/Footer.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Navbar from "./components/Navbar.jsx";
import ReviewsSection from "./components/ReviewsSection.jsx";
import WhyChooseSection from "./components/WhyChooseSection.jsx";
import { getThemeComponents } from "../components/ThemeComponents.jsx";

gsap.registerPlugin(ScrollTrigger);

function Landing() {
  const rootRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const ui = getThemeComponents("dailySushi");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray("[data-reveal]").forEach((item) => {
        gsap.from(item, {
          y: 38,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 84%",
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={rootRef} className={`min-h-[100dvh] ${ui.page}`}>
      <Navbar
        menuOpen={menuOpen}
        onMenuClose={() => setMenuOpen(false)}
        onMenuToggle={() => setMenuOpen((value) => !value)}
      />
      <HeroSection />
      <FeaturedProductsSection />
      <WhyChooseSection />
      <BestSellersSection />
      <ReviewsSection />
      <DeliverySection onChatOpen={() => setChatOpen(true)} />
      <FinalCtaSection />
      <Footer />
      <Chatbot
        isOpen={chatOpen}
        onClose={() => setChatOpen(false)}
        onOpen={() => setChatOpen(true)}
      />
    </main>
  );
}

export default Landing;
