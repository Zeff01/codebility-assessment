import { useEffect, useRef } from "react";
import { ShoppingBag, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImg from "../../assets/hero-section.jpg";
import logoImg from "../../assets/Logo.png";
import { getThemeComponents } from "../../components/ThemeComponents.jsx";

gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
  const heroRef = useRef(null);
  const ui = getThemeComponents("dailySushi");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .from("[data-hero-media]", {
          scale: 1.14,
          opacity: 0.72,
          duration: 1.45,
        })
        .from("[data-hero-copy]", {
          y: 44,
          opacity: 0,
          duration: 0.9,
          stagger: 0.13,
        }, "-=0.85")
        .from("[data-hero-badge]", {
          y: -18,
          opacity: 0,
          scale: 0.82,
          duration: 0.7,
          ease: "back.out(1.8)",
        }, "-=0.35");

      timeline.from("[data-floating-sushi]", {
        x: 120,
        y: 28,
        opacity: 0,
        rotate: 18,
        scale: 0.78,
        duration: 1,
        ease: "back.out(1.6)",
      }, "-=0.55");

      gsap.to("[data-hero-media]", {
        yPercent: 12,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to("[data-hero-deco]", {
        y: "random(-18, 18)",
        x: "random(-8, 8)",
        rotate: "random(-8, 8)",
        duration: "random(3.2, 5.4)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.18,
      });

      gsap.to("[data-hero-badge]", {
        y: -8,
        duration: 1.6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to("[data-floating-sushi]", {
        y: -24,
        x: -10,
        rotate: -5,
        duration: 2.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to("[data-floating-sushi-ring]", {
        rotate: 360,
        duration: 13,
        ease: "none",
        repeat: -1,
      });

      gsap.to("[data-hero-cta]", {
        y: -5,
        duration: 1.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className={`relative h-[100dvh] overflow-hidden pt-20 ${ui.hero.background}`} data-hero id="home">
      <div className="absolute inset-0">
        <img alt="Beautifully arranged sushi platter with rolls and desserts" className="h-full w-full object-cover will-change-transform" data-hero-media src={heroImg} />
        <div className={`absolute inset-0 ${ui.hero.overlay}`} />
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute right-10 top-[28%] z-10 hidden h-36 w-36 sm:block lg:right-16 lg:top-[34%] lg:h-44 lg:w-44" data-floating-sushi>
        <div className="absolute inset-0 rounded-full bg-[#E63946]/25 blur-2xl" />
        <div className="absolute inset-2 rounded-full border border-white/30" data-floating-sushi-ring />
        <div className="relative grid h-full w-full place-items-center rounded-full border border-white/25 bg-white/16 p-3 shadow-2xl shadow-black/30 backdrop-blur-md">
          <img alt="" className="h-full w-full rounded-full object-cover shadow-xl" src={logoImg} />
          <span className="absolute -left-2 top-5 h-9 w-9 rounded-full border-4 border-white bg-[#D4A017] shadow-lg shadow-black/25" />
          <span className="absolute -bottom-1 right-4 h-11 w-11 rounded-full border-4 border-white bg-[#E63946] shadow-lg shadow-black/25" />
        </div>
      </div>

    
      <div className="relative mx-auto grid h-[calc(100dvh-5rem)] w-full max-w-7xl items-center px-5 py-10 sm:px-6 sm:py-16 lg:px-10">
        <div className="max-w-3xl">
          <p className={`mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[0.24em] ${ui.hero.eyebrow}`} data-hero-copy>
            <Sparkles size={15} />
            Wrap Up Your Day with Sushi.
          </p>
          <h1 className="hero-title-animated font-serif text-5xl font-black leading-none tracking-normal sm:text-6xl lg:text-7xl" data-hero-copy>
            Freshly Made Sushi, Crafted Daily
          </h1>
          <p className={`mt-6 max-w-2xl text-lg leading-8 sm:text-xl ${ui.text.heroBody}`} data-hero-copy>
            Enjoy delicious baked sushi, flavorful maki rolls, classic California rolls, and sweet jelly treats delivered fresh to your doorstep.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row" data-hero-copy>
            <a className={`group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-black transition hover:-translate-y-1 ${ui.buttons.primarySoftShadow}`} data-hero-cta href="#order">
              Order Now
              <ShoppingBag className="transition group-hover:rotate-6" size={18} />
            </a>
            <a className={`inline-flex items-center justify-center rounded-full border px-7 py-4 text-sm font-black transition hover:-translate-y-1 ${ui.buttons.secondaryOnDark}`} href="#menu">
              View Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
