"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const calculatorRef = useRef<HTMLDivElement>(null);
  const comparisonRef = useRef<HTMLDivElement>(null);
  const securityRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  // States
  const [activeCategory, setActiveCategory] = useState("all");
  const [monthlySpend, setMonthlySpend] = useState(25000);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const annualSavings = Math.round(monthlySpend * 12 * 0.08); // 8% average cash back

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      const heroCtx = gsap.context(() => {
        gsap.fromTo(
          ".hero-fade",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
        );
        gsap.fromTo(
          ".hero-image",
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1.2, delay: 0.4, ease: "power3.out" }
        );

        // Interactive mouse-tilt 3D effect
        const phone = document.querySelector(".phone-3d") as HTMLElement;
        const hero = heroRef.current;
        if (hero && phone) {
          const handleMouseMove = (e: MouseEvent) => {
            const rect = hero.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const tiltX = (y / (rect.height / 2)) * -12; // tilt angle Y axis limit
            const tiltY = (x / (rect.width / 2)) * 18;   // tilt angle X axis limit
            
            gsap.to(phone, {
              rotateX: tiltX,
              rotateY: tiltY,
              ease: "power2.out",
              duration: 0.4
            });
          };

          const handleMouseLeave = () => {
            gsap.to(phone, {
              rotateX: 8,
              rotateY: -12,
              rotateZ: -2,
              ease: "power3.out",
              duration: 0.8
            });
          };

          hero.addEventListener("mousemove", handleMouseMove);
          hero.addEventListener("mouseleave", handleMouseLeave);
          
          // Set initial elegant 3D tilt
          gsap.set(phone, { rotateX: 8, rotateY: -12, rotateZ: -2 });
        }
      }, heroRef);

      const cardsCtx = gsap.context(() => {
        gsap.fromTo(
          ".card-item",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      }, cardsRef);

      const howCtx = gsap.context(() => {
        gsap.fromTo(
          ".step-item",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: howItWorksRef.current,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      }, howItWorksRef);

      // Scroll trigger animations for Calculator
      const calcCtx = gsap.context(() => {
        gsap.fromTo(
          ".calc-animate",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: calculatorRef.current,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      }, calculatorRef);

      // Scroll trigger animations for Comparison
      const compCtx = gsap.context(() => {
        gsap.fromTo(
          ".overflow-x-auto",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: comparisonRef.current,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      }, comparisonRef);

      // Scroll trigger animations for Security
      const secCtx = gsap.context(() => {
        gsap.fromTo(
          ".sec-box",
          { opacity: 0, scale: 0.98 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: securityRef.current,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      }, securityRef);

      return () => {
        heroCtx.revert();
        cardsCtx.revert();
        howCtx.revert();
        calcCtx.revert();
        compCtx.revert();
        secCtx.revert();
      };
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setErrorMsg("Please enter your email.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMsg("Please enter a valid email.");
      return;
    }
    setErrorMsg("");
    setIsSubmitted(true);
    setEmail("");
  };

  const giftCards = [
    { name: "Starbucks", cashback: "7.0%", category: "dining", logo: "/images/starbucks.jpg" },
    { name: "Grab", cashback: "5.5%", category: "travel", logo: "/images/grab.png" },
    { name: "Lazada", cashback: "8.0%", category: "shopping", logo: "/images/lazada.png" },
    { name: "Shopee", cashback: "8.5%", category: "shopping", logo: "/images/shopee.png" },
    { name: "Steam", cashback: "6.0%", category: "gaming", logo: "/images/steam.png" },
    { name: "Spotify", cashback: "10.0%", category: "gaming", logo: "/images/spotify.png" },
    { name: "Netflix", cashback: "9.0%", category: "gaming", logo: "/images/netflix.png" },
    { name: "Nike", cashback: "7.5%", category: "shopping", logo: "/images/nike.jpg" },
    { name: "Foodpanda", cashback: "6.5%", category: "dining", logo: "/images/foodpanda.png" }
  ];

  const filteredCards = activeCategory === "all" 
    ? giftCards 
    : giftCards.filter(c => c.category === activeCategory);

  const faqs = [
    { q: "How do I earn cashback?", a: "Simply purchase digital gift cards through the CardFlo app. The cashback reward is instantly calculated and credited directly to your CardFlo vault balance." },
    { q: "Can I transfer cash back to my bank account?", a: "Yes, you can easily cash out your balance to any local bank or electronic wallet instantly with zero transaction fees." },
    { q: "Are there any hidden fees?", a: "No. CardFlo is completely free to use. There are no monthly maintenance fees, hidden service charges, or card activation fees." },
    { q: "How secure is CardFlo?", a: "We use 256-bit encryption standards and secure, read-only tokenization APIs. Your credential data is never stored on our servers." }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#080809] text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-purple-500 selection:text-white">
      
      {/* 1. NAVIGATION BAR */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 bg-[#080809]/90 backdrop-blur-md border-b border-slate-900">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-purple-500/40 flex items-center justify-center font-semibold text-purple-400 text-sm">
              C
            </div>
            <span className="text-base font-semibold tracking-[0.25em] text-white uppercase">
              Card<span className="text-purple-400 font-bold">Flo</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-[11px] tracking-widest uppercase font-semibold text-slate-400">
            <a href="#cards" className="hover:text-purple-455 transition-colors">Gift Cards</a>
            <a href="#how-it-works" className="hover:text-purple-455 transition-colors">How it works</a>
            <a href="#calculator" className="hover:text-purple-455 transition-colors">Calculator</a>
            <a href="#comparison" className="hover:text-purple-455 transition-colors">Comparison</a>
            <a href="#faq" className="hover:text-purple-455 transition-colors">FAQ</a>
          </div>

          <div>
            <a 
              href="#waitlist" 
              className="border border-purple-400/30 bg-purple-400/5 hover:bg-purple-400/20 text-purple-400 px-5 py-2 rounded-full font-semibold text-[11px] tracking-wider uppercase transition-all shadow-md shadow-purple-500/5"
            >
              Get Invite
            </a>
          </div>
        </nav>
      </div>

      {/* 2. HERO SECTION */}
      <section ref={heroRef} className="relative pt-36 pb-20 md:pt-48 md:pb-36 flex items-center min-h-[90vh]">
        {/* Soft violet backdrop light */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="hero-fade inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-400/20 bg-purple-950/20 text-[10px] tracking-[0.25em] font-semibold text-purple-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-455 animate-pulse" />
              • Smart digital wallet
            </div>
            
            <h1 className="hero-fade text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] text-white">
              Gift cards that <br />
              <span className="font-light text-slate-400 italic">actually</span>{" "}
              <span className="font-bold text-purple-400">pay you back.</span>
            </h1>

            <p className="hero-fade text-slate-400 text-sm md:text-base font-light tracking-wide max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Automate your shopping returns. Purchase digital gift cards for top-tier merchants and instantly receive up to <span className="font-semibold text-white">10% cashback yield</span>. Direct transfers to your bank, no hassle.
            </p>

            <div className="hero-fade flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a 
                href="#waitlist" 
                className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3.5 rounded-full font-semibold text-xs tracking-widest uppercase transition-all shadow-lg shadow-purple-500/10 text-center"
              >
                Join Beta Waitlist
              </a>
              <a 
                href="#calculator" 
                className="border border-slate-800 hover:border-slate-700 bg-slate-900/30 hover:bg-slate-900/80 text-white px-8 py-3.5 rounded-full font-light text-xs tracking-widest uppercase transition-all text-center"
              >
                Calculate Yield
              </a>
            </div>

            <div className="hero-fade pt-8 border-t border-slate-900/80 flex flex-wrap gap-8 justify-center lg:justify-start text-[10px] tracking-widest font-semibold text-slate-500 uppercase">
              <div>✦ Instant wallet delivery</div>
              <div>✦ 200+ partner brands</div>
              <div>✦ Bank-grade tokenization</div>
            </div>
          </div>

          {/* Right Column: Transparent 3D Phone Model */}
          <div className="lg:col-span-5 flex justify-center relative hero-image [perspective:1000px]">
            <div className="relative w-96 h-[580px] lg:w-[480px] lg:h-[680px] flex items-center justify-center phone-3d [transform-style:preserve-3d] transition-all duration-300">
              <img 
                src="/images/clean-phone.png" 
                alt="Transparent 3D Phone Mockup" 
                className="w-full h-full object-contain pointer-events-none drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. GIFT CARDS GRID SECTION */}
      <section ref={cardsRef} id="cards" className="py-24 border-t border-slate-900 bg-[#080809]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] tracking-widest text-purple-400 font-mono block">• PARTNERS CATALOG</span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">Find your favorite brands</h2>
            <p className="text-slate-400 text-xs md:text-sm font-light tracking-wide leading-relaxed">
              Select your card, purchase instantly, and receive high-rate cashback immediately.
            </p>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 pt-6">
              {["all", "shopping", "dining", "travel", "gaming"].map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider capitalize transition-all border ${
                    activeCategory === cat 
                      ? "bg-purple-555/10 text-purple-400 border-purple-400/30 shadow-sm" 
                      : "text-slate-500 border-slate-900 hover:text-slate-355"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCards.map((card, idx) => (
              <div 
                key={idx} 
                className="card-item p-6 rounded-2xl bg-slate-900/10 border border-slate-900 hover:border-slate-800 transition-all duration-300 flex flex-col justify-between min-h-[170px] relative overflow-hidden"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-base font-semibold text-white tracking-wide">{card.name}</h3>
                    <span className="text-[10px] text-slate-550 tracking-wider uppercase font-semibold capitalize">{card.category}</span>
                  </div>
                  
                  {/* Brand Logo */}
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-900 flex items-center justify-center relative overflow-hidden">
                    <img 
                      src={card.logo} 
                      alt={card.name} 
                      className="w-full h-full object-contain p-1"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <span className="hidden text-[10px] text-slate-500 font-semibold uppercase">LOGO</span>
                  </div>
                </div>

                <div className="flex justify-between items-end border-t border-slate-900/80 pt-4 mt-6">
                  <div>
                    <span className="text-[9px] text-slate-500 tracking-widest uppercase font-semibold block">Yield Rate</span>
                    <span className="text-base font-bold text-purple-450">{card.cashback}</span>
                  </div>
                  <a 
                    href="#waitlist" 
                    className="text-[10px] tracking-widest uppercase font-semibold text-slate-400 hover:text-purple-450 transition-colors"
                  >
                    Select Card →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCESS / HOW IT WORKS SECTION */}
      <section ref={howItWorksRef} id="how-it-works" className="py-24 border-t border-slate-900 bg-[#080809]/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
            <span className="text-[10px] tracking-widest text-purple-400 font-mono block">• SYSTEM OPERATIONS</span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">Three steps to automatic returns</h2>
            <p className="text-slate-400 text-xs md:text-sm font-light tracking-wide leading-relaxed">
              We simplified transaction logistics so you can accumulate rewards effortlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Step 1 */}
            <div className="step-item space-y-4 p-6 rounded-2xl bg-slate-950/20 border border-slate-900">
              <div className="text-3xl font-light text-purple-400/40 font-mono">01</div>
              <h3 className="text-lg font-semibold text-white tracking-wide">Link Card Wallet</h3>
              <p className="text-slate-450 text-xs font-light tracking-wide leading-relaxed">
                Register your account and secure a read-only bridge to your spending vault. We employ bank-level aggregation pipelines.
              </p>
            </div>

            {/* Step 2 */}
            <div className="step-item space-y-4 p-6 rounded-2xl bg-slate-950/20 border border-slate-900">
              <div className="text-3xl font-light text-purple-400/40 font-mono">02</div>
              <h3 className="text-lg font-semibold text-white tracking-wide">Purchase Digital Cards</h3>
              <p className="text-slate-455 text-xs font-light tracking-wide leading-relaxed">
                Browse our detailed catalog and buy gift cards instantly. Cards are immediately stored and managed inside your app wallet.
              </p>
            </div>

            {/* Step 3 */}
            <div className="step-item space-y-4 p-6 rounded-2xl bg-slate-950/20 border border-slate-900">
              <div className="text-3xl font-light text-purple-400/40 font-mono">03</div>
              <h3 className="text-lg font-semibold text-white tracking-wide">Earn Instant Cashback</h3>
              <p className="text-slate-455 text-xs font-light tracking-wide leading-relaxed">
                Watch rewards automatically compound. Cash out directly to local banks or electronic cash wallets anytime with one click.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE CALCULATOR */}
      <section ref={calculatorRef} id="calculator" className="py-24 border-t border-slate-900 bg-[#080809]">
        <div className="max-w-4xl mx-auto px-6 calc-animate">
          
          <div className="text-center space-y-3 mb-16">
            <span className="text-[10px] tracking-widest text-purple-400 font-mono block">• SAVINGS ESTIMATION</span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">Project your annual savings</h2>
            <p className="text-slate-400 text-xs md:text-sm font-light tracking-wide font-sans">
              Slide to indicate your estimated monthly spend on everyday partner categories.
            </p>
          </div>

          <div className="bg-slate-950/40 border border-slate-900 rounded-3xl p-8 space-y-8 backdrop-blur-md">
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-450">Monthly Spending</span>
                <span className="text-xl font-bold text-purple-400 tracking-wide">₱{monthlySpend.toLocaleString()}</span>
              </div>
              
              <input
                type="range"
                min="5000"
                max="100000"
                step="5000"
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-purple-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-semibold tracking-wider">
                <span>₱5,000</span>
                <span>₱50,000</span>
                <span>₱100,000+</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-900/60">
              <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-900 flex flex-col justify-center">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Average Reward Percentage</span>
                <span className="text-xl font-semibold text-white tracking-wide mt-1">8.0% Cashback Yield</span>
              </div>

              <div className="bg-purple-500/5 p-6 rounded-2xl border border-purple-500/20 flex flex-col justify-center">
                <span className="text-[10px] text-purple-400 uppercase tracking-widest font-semibold">Estimated Annual Return</span>
                <span className="text-2xl font-bold text-white tracking-wide mt-1">₱{annualSavings.toLocaleString()}</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. COMPARISON TABLE SECTION */}
      <section ref={comparisonRef} id="comparison" className="py-24 border-t border-slate-900 bg-[#080809]/40">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-3 mb-16">
            <span className="text-[10px] tracking-widest text-purple-400 font-mono block">• FEATURE COMPARISONS</span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">How CardFlo Outperforms</h2>
            <p className="text-slate-400 text-xs md:text-sm font-light tracking-wide leading-relaxed">
              Compare us with traditional cashback credit cards and point-reward programs.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-900 bg-slate-950/20">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="border-b border-slate-900 bg-slate-950/80 text-[10px] tracking-widest uppercase font-semibold text-slate-400">
                  <th className="p-4 md:p-5">Feature</th>
                  <th className="p-4 md:p-5 text-purple-400 font-bold">CardFlo</th>
                  <th className="p-4 md:p-5">Standard Credit Cards</th>
                  <th className="p-4 md:p-5">Points Programs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900 text-slate-300 font-light">
                <tr>
                  <td className="p-4 md:p-5 font-semibold text-white">Cashback Rate</td>
                  <td className="p-4 md:p-5 text-purple-400 font-semibold">Average 8.0% - 10.0%</td>
                  <td className="p-4 md:p-5">1.0% - 2.0% max</td>
                  <td className="p-4 md:p-5">Less than 0.5% value</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-5 font-semibold text-white">Payout Speed</td>
                  <td className="p-4 md:p-5 text-purple-400 font-semibold">Instant (Seconds)</td>
                  <td className="p-4 md:p-5">Monthly billing cycle</td>
                  <td className="p-4 md:p-5">Weeks / Months</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-5 font-semibold text-white">Minimum Cashout</td>
                  <td className="p-4 md:p-5 text-purple-400 font-semibold">₱0.00 (No Minimum)</td>
                  <td className="p-4 md:p-5">₱1,000+</td>
                  <td className="p-4 md:p-5">High redemption hurdles</td>
                </tr>
                <tr>
                  <td className="p-4 md:p-5 font-semibold text-white">Annual Membership Fees</td>
                  <td className="p-4 md:p-5 text-purple-400 font-semibold">₱0.00 (Always Free)</td>
                  <td className="p-4 md:p-5">₱1,500 - ₱5,000</td>
                  <td className="p-4 md:p-5">Free (hidden points inflation)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. TRUST & SECURITY SECTION */}
      <section ref={securityRef} className="py-24 border-t border-slate-900 bg-[#080809]">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <span className="text-[10px] tracking-widest text-purple-400 font-mono block">• CORE ENCRYPTION</span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">Your funds are completely secured</h2>
            <p className="text-slate-400 text-xs md:text-sm font-light tracking-wide leading-relaxed">
              We never save card numbers, credentials, or personal banking logs. We leverage read-only tokens linked with secure central aggregators so your credentials remain 100% private.
            </p>
            <ul className="space-y-2 text-xs font-semibold text-slate-300">
              <li className="flex items-center gap-2">
                <span className="text-purple-400">✔</span> AES-256 bank-level encryption standard
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">✔</span> Secure read-only API structures
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">✔</span> ISO 27001 certified cloud infrastructure
              </li>
            </ul>
          </div>
          
          <div className="sec-box bg-slate-950 p-8 rounded-3xl border border-slate-900 text-center space-y-4 relative overflow-hidden shadow-sm">
            <div className="text-4xl">🔒</div>
            <h3 className="text-base font-semibold text-white">Bank-Grade Integration</h3>
            <p className="text-slate-550 text-xs font-light">
              CardFlo tokenizes credentials so your bank login details are isolated and protected against digital security breaches.
            </p>
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section ref={faqRef} id="faq" className="py-24 border-t border-slate-900 bg-[#080809]/40">
        <div className="max-w-3xl mx-auto px-6">
          
          <div className="text-center space-y-3 mb-16">
            <span className="text-[10px] tracking-widest text-purple-400 font-mono block">• KNOWLEDGE BASE</span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-slate-900 rounded-2xl bg-slate-950/30 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 flex justify-between items-center text-sm font-semibold text-white tracking-wide focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <span className="text-purple-400 font-mono text-base ml-2">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-6 text-xs text-slate-400 font-light tracking-wide leading-relaxed animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. BETA WAITLIST SIGNUP */}
      <section id="waitlist" className="py-24 border-t border-slate-900 bg-[#080809] relative">
        <div className="max-w-xl mx-auto px-6 text-center space-y-8">
          <div className="space-y-3">
            <span className="text-[10px] tracking-widest text-purple-400 font-mono block">• ACCESS REGISTRATION</span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">Request exclusive access</h2>
            <p className="text-slate-400 text-xs md:text-sm font-light tracking-wide leading-relaxed">
              Register below to claim your beta spot and activate a <span className="font-semibold text-purple-400">1.5x cashback rewards booster</span> valid for your first 30 days of active spending.
            </p>
          </div>

          <div className="bg-slate-900/10 p-8 rounded-3xl border border-slate-900 shadow-xl">
            {isSubmitted ? (
              <div className="py-6 space-y-3 animate-fade-in">
                <div className="w-10 h-10 rounded-full border border-teal-500/30 text-teal-400 flex items-center justify-center text-xl mx-auto">
                  ✓
                </div>
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Registration complete</h4>
                <p className="text-xs text-slate-405 font-light tracking-wide">
                  Your reservation is saved. We'll email your invite and cashback booster instructions to your registered email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-left">
                  <label htmlFor="email-field" className="block text-[10px] tracking-widest uppercase font-semibold text-slate-400 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email-field"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#060608] border border-slate-900 rounded-xl px-4 py-3 text-xs tracking-wider font-light focus:outline-none focus:border-purple-500/60 transition-colors text-white placeholder-slate-700"
                  />
                  {errorMsg && (
                    <p className="text-rose-550 text-[10px] tracking-wider mt-2 font-semibold">{errorMsg}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-650 hover:bg-purple-600 text-white py-3 rounded-xl font-semibold text-xs tracking-widest uppercase transition-all shadow-md shadow-purple-500/10"
                >
                  Request Invite
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="py-12 border-t border-slate-900 bg-[#080809] text-center text-slate-650 text-[10px] tracking-widest font-semibold uppercase">
        <p>© {new Date().getFullYear()} CardFlo Technologies Inc. All rights reserved.</p>
        <p className="mt-2 text-slate-700">Built with thin Geist Sans for clean visual presentation.</p>
      </footer>

    </div>
  );
}
