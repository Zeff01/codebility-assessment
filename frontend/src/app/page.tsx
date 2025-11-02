"use client";


import Reveal from "../components/Reveal";
import ScrollProgress from "../components/ScrollProgress";
import GiftCards from "../components/GiftCards";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Features section animation
          if (entry.target.id === 'features') {
            const headerElement = entry.target.querySelector('.features-header-animated');
            const titleElement = entry.target.querySelector('.features-title-magical');
            const subtitleElement = entry.target.querySelector('.features-subtitle-reveal');
            const descriptionElement = entry.target.querySelector('.features-description-reveal');
            const sparkleContainer = entry.target.querySelector('.sparkle-container');
            
            if (headerElement) headerElement.classList.add('is-visible');
            if (titleElement) titleElement.classList.add('is-visible');
            if (subtitleElement) subtitleElement.classList.add('is-visible');
            if (descriptionElement) descriptionElement.classList.add('is-visible');
            if (sparkleContainer) sparkleContainer.classList.add('is-visible');
          }
          
          // Rewards section animation
          if (entry.target.id === 'rewards') {
            const headerElement = entry.target.querySelector('.rewards-header-animated');
            const titleElement = entry.target.querySelector('.rewards-title-magical');
            const subtitleElement = entry.target.querySelector('.rewards-subtitle-reveal');
            const descriptionElement = entry.target.querySelector('.rewards-description-reveal');
            const sparkleContainer = entry.target.querySelector('.sparkle-container');
            
            if (headerElement) headerElement.classList.add('is-visible');
            if (titleElement) titleElement.classList.add('is-visible');
            if (subtitleElement) subtitleElement.classList.add('is-visible');
            if (descriptionElement) descriptionElement.classList.add('is-visible');
            if (sparkleContainer) sparkleContainer.classList.add('is-visible');
          }
        }
      });
    }, observerOptions);

    const featuresSection = document.getElementById('features');
    const rewardsSection = document.getElementById('rewards');
    
    if (featuresSection) {
      observer.observe(featuresSection);
    }
    if (rewardsSection) {
      observer.observe(rewardsSection);
    }

    return () => {
      if (featuresSection) {
        observer.unobserve(featuresSection);
      }
      if (rewardsSection) {
        observer.unobserve(rewardsSection);
      }
    };
  }, []);

  return (

    <div className="min-h-screen animated-bg text-foreground overflow-x-hidden overflow-y-hidden">
      <ScrollProgress />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-foreground/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between h-16">
            {/* Left Navigation */}
            <nav className="flex items-center gap-6">
              <button className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200">
                How it works
              </button>
              <button className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200">
                Rewards
              </button>
              <button className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200">
                About
              </button>
            </nav>
            
            {/* Center Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-[#7c3aed] to-[#22c55e] bg-clip-text text-transparent">
                GIFTER
              </h1>
            </div>
            
            {/* Right Navigation */}
            <nav className="flex items-center gap-4">
              <button className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200">
                Sign in
              </button>
              <button className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#7c3aed] to-[#22c55e] rounded-lg hover:from-[#6d28d9] hover:to-[#16a34a] transition-all duration-200 hover:shadow-lg hover:shadow-[#7c3aed]/25">
                Get started
              </button>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Cinematic Background Effects */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* Animated gradient orbs */}
          <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-[#7c3aed]/30 to-[#22c55e]/20 blur-3xl animate-[floating-orb_12s_ease-in-out_infinite]" />
          <div className="absolute top-20 -right-20 h-80 w-80 rounded-full bg-gradient-to-br from-[#06b6d4]/25 to-[#f59e0b]/15 blur-3xl animate-[floating-orb_12s_ease-in-out_infinite] [animation-delay:3s]" />
          <div className="absolute bottom-20 left-1/2 h-64 w-64 rounded-full bg-gradient-to-br from-[#22c55e]/20 to-[#7c3aed]/25 blur-3xl animate-[floating-orb_12s_ease-in-out_infinite] [animation-delay:6s]" />
          
          {/* Particle effects */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#7c3aed]/40 rounded-full animate-[particle-dance_8s_ease-in-out_infinite]" />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#22c55e]/50 rounded-full animate-[particle-dance_8s_ease-in-out_infinite] [animation-delay:2s]" />
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-[#06b6d4]/40 rounded-full animate-[particle-dance_8s_ease-in-out_infinite] [animation-delay:4s]" />
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-[#f59e0b]/50 rounded-full animate-[particle-dance_8s_ease-in-out_infinite] [animation-delay:1s]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 w-full">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Animated Badge */}
              <div className="hero-element inline-flex items-center gap-3 rounded-full border border-foreground/10 bg-background/60 px-4 py-2 text-sm font-medium backdrop-blur-sm animate-cinematic-entrance">
                <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-ping rounded-full bg-[#22c55e]" />
                  <span className="h-2 w-2 animate-ping rounded-full bg-[#22c55e] [animation-delay:200ms]" />
                  <span className="h-2 w-2 animate-ping rounded-full bg-[#22c55e] [animation-delay:400ms]" />
                </div>
                <span className="bg-gradient-to-r from-[#7c3aed] to-[#22c55e] bg-clip-text text-transparent font-semibold animate-[text-glow_3s_ease-in-out_infinite]">
                New: 5% instant cashback at checkout
                </span>
              </div>
              
              {/* Main Heading with Cinematic Animation */}
              <div className="space-y-4">
                <h1 className="hero-element text-5xl font-heading leading-tight tracking-[-0.02em] sm:text-6xl lg:text-7xl">
                  <span className="block animate-hero-title-reveal">The perfect gift</span>
                  <span className="block mt-2 bg-gradient-to-r from-[#7c3aed] via-[#22c55e] to-[#06b6d4] bg-clip-text text-transparent animate-[gradient-wave_4s_ease-in-out_infinite]">
                    that keeps on giving
                  </span>
              </h1>
                
                <p className="hero-element text-lg font-body text-foreground/80 sm:text-xl max-w-2xl animate-cinematic-entrance" style={{ animationDelay: '0.5s' }}>
                Send heartfelt gifts instantly and earn rewards for every thoughtful gesture. Because the best gifts are the ones that give back to you too.
              </p>
              </div>

              {/* Animated CTA Buttons */}
              <div className="hero-element flex flex-col gap-4 sm:flex-row sm:items-center animate-cinematic-entrance" style={{ animationDelay: '0.8s' }}>
                <button className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#22c55e] px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-[#7c3aed]/30 transition-all duration-300 hover:shadow-[#7c3aed]/50 hover:scale-105 hover:-translate-y-1 active:scale-95 animate-[button-pulse_2s_ease-in-out_infinite]">
                  <span className="relative z-10">Start gifting</span>
                  <svg className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                  </svg>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#6d28d9] to-[#16a34a] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </button>
                <button className="group inline-flex items-center justify-center rounded-xl border-2 border-foreground/15 bg-background/60 px-8 py-4 text-base font-semibold text-foreground shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-foreground/5 hover:border-[#7c3aed]/30 hover:shadow-xl">
                  <span>See how it works</span>
                  <svg className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
          </button>
        </div>

              {/* Animated Feature Pills */}
              <div className="hero-element flex flex-wrap items-center gap-6 text-sm text-foreground/70 animate-cinematic-entrance" style={{ animationDelay: '1.2s' }}>
                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/20">
                  <span className="h-2 w-2 rounded-full bg-[#22c55e] animate-pulse"/>
                  <span className="font-medium">Instant delivery</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20">
                  <span className="h-2 w-2 rounded-full bg-[#f59e0b] animate-pulse"/>
                  <span className="font-medium">Perfect for any occasion</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/20">
                  <span className="h-2 w-2 rounded-full bg-[#7c3aed] animate-pulse"/>
                  <span className="font-medium">Earn rewards</span>
                </div>
              </div>
            </div>

            {/* Right Card with Cinematic Animation */}
            <div className="hero-element relative animate-dramatic-reveal" style={{ animationDelay: '1s' }}>
              {/* Floating background elements */}
              <div className="absolute -inset-8 -z-10">
                <div className="absolute -top-4 -left-4 h-32 w-32 rounded-full bg-gradient-to-br from-[#7c3aed]/20 to-[#22c55e]/10 blur-2xl animate-[floating-orb_10s_ease-in-out_infinite]" />
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-[#06b6d4]/20 to-[#f59e0b]/10 blur-2xl animate-[floating-orb_10s_ease-in-out_infinite] [animation-delay:3s]" />
              </div>

              {/* Main Card */}
            <div className="relative mx-auto w-full max-w-md">
                <div className="absolute -inset-6 -z-10 animate-[floating-orb_8s_ease-in-out_infinite] rounded-3xl bg-gradient-to-tr from-[#7c3aed]/20 via-transparent to-[#06b6d4]/20 blur-2xl" />
                <div className="relative aspect-[16/10] w-full animate-[card-levitate_6s_ease-in-out_infinite] rounded-3xl bg-gradient-to-br from-[#0ea5e9] via-[#7c3aed] to-[#22c55e] p-[2px] group hover:scale-105 transition-transform duration-500">
                  <div className="relative h-full w-full rounded-[calc(theme(borderRadius.3xl)-2px)] bg-background overflow-hidden">
                    {/* Animated background effects */}
                  <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
                      <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl animate-[particle-dance_6s_ease-in-out_infinite]" />
                      <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-white/5 blur-xl animate-[particle-dance_6s_ease-in-out_infinite] [animation-delay:2s]" />
                  </div>

                    <div className="flex h-full flex-col justify-between p-6 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm font-semibold">
                          <div className="h-5 w-5 rounded bg-gradient-to-br from-[#7c3aed] to-[#22c55e] animate-[button-pulse_2s_ease-in-out_infinite]" />
                          <span className="bg-gradient-to-r from-[#7c3aed] to-[#22c55e] bg-clip-text text-transparent animate-[text-glow_3s_ease-in-out_infinite]">Gifter Rewards</span>
                      </div>
                        <div className="text-[10px] uppercase tracking-widest text-foreground/60 bg-foreground/5 px-2 py-1 rounded-full">Member</div>
                    </div>

                      <div className="grid gap-3">
                      <div className="text-xs text-foreground/60">Card balance</div>
                        <div className="text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent animate-[text-glow_4s_ease-in-out_infinite]">$250.00</div>
                      <div className="mt-2 flex items-center gap-2 text-xs text-foreground/70">
                        <span className="inline-flex h-1.5 w-1.5 animate-pulse rounded-full bg-[#22c55e]"/>
                          <span className="font-medium">5% cashback active</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-foreground/60">
                        <div className="font-mono">**** **** **** 2841</div>
                      <div>Exp 12/27</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-12 sm:py-16 lg:py-20">
        <div className="text-center features-header-animated sparkle-container">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="features-title-magical">
              Gifting made magical
            </span>
            <span className="block mt-2 text-foreground features-subtitle-reveal">with features that spread joy</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-foreground/70 sm:text-lg features-description-reveal">
            Create unforgettable moments with instant gifts, surprise deliveries, and rewards that make every gesture count.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Instant Text Gifting */}
          <Reveal>
          <div className="group relative overflow-hidden rounded-3xl border border-foreground/10 bg-gradient-to-br from-[#7c3aed]/5 to-[#22c55e]/5 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#7c3aed]/10">
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#7c3aed]/10 blur-3xl" />
            <div className="relative">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7c3aed] text-white shadow-lg">
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2 2 22l4-4M21 21l-4-4M2 2l20 20"/>
                  <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground">Surprise them instantly</h3>
              <p className="mt-4 text-base text-foreground/70">
                Send the perfect gift directly to their phone in seconds. No more waiting for delivery or worrying about timing. 
                Perfect for birthdays, anniversaries, or just because moments.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex items-center gap-2 text-sm font-medium text-[#22c55e]">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[#22c55e]" />
                  Instant delivery
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-[#06b6d4]">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[#06b6d4]" />
                  Works on any phone
                </div>
              </div>
            </div>
          </div>
          </Reveal>

          {/* Referral Rewards */}
          <Reveal delayMs={150}>
          <div className="group relative overflow-hidden rounded-3xl border border-foreground/10 bg-gradient-to-br from-[#22c55e]/5 to-[#06b6d4]/5 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#22c55e]/10">
            <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-[#22c55e]/10 blur-3xl" />
            <div className="relative">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#22c55e] text-white shadow-lg">
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground">Share the gift of giving</h3>
              <p className="mt-4 text-base text-foreground/70">
                When you introduce friends to our gifting platform, you both benefit. Earn rewards on every gift they send, 
                creating a beautiful cycle of giving and receiving that lasts forever.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex items-center gap-2 text-sm font-medium text-[#f59e0b]">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[#f59e0b]" />
                  Lifetime earnings
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-[#7c3aed]">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[#7c3aed]" />
                  No limits
                </div>
              </div>
            </div>
          </div>
          </Reveal>
        </div>

        {/* Additional Features Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Perfect for Every Occasion",
              desc: "Birthdays, holidays, thank yous, or just because. Digital or physical cards for every special moment.",
              icon: (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              ),
              color: "#06b6d4"
            },
            {
              title: "Safe & Secure Gifting",
              desc: "Your gifts are protected with bank-grade security. Send with confidence knowing every transaction is safe.",
              icon: (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              ),
              color: "#22c55e"
            },
            {
              title: "Gift History & Memories",
              desc: "Keep track of all the joy you've spread. See your gift history and the happiness you've created.",
              icon: (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18"/>
                  <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
                </svg>
              ),
              color: "#7c3aed"
            }
          ].map((feature, index) => (
            <Reveal key={index} delayMs={index * 100}>
            <div className="group rounded-2xl border border-foreground/10 bg-background p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#7c3aed]/5">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-white" style={{ backgroundColor: feature.color }}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{feature.desc}</p>
            </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Gift Card Selection Section */}
      <GiftCards />

      {/* Rewards Section */}
      <section id="rewards" className="mx-auto max-w-6xl px-6 py-12 sm:py-16 lg:py-20">
        {/* Section Header */}
        <div className="text-center mb-16 rewards-header-animated sparkle-container">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="rewards-title-magical">
              Rewards that grow with you
            </span>
            <span className="block mt-2 text-foreground rewards-subtitle-reveal">Earn more as you gift more</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-foreground/70 sm:text-lg rewards-description-reveal">
            The more you spread joy, the more you earn. Level up your rewards with every thoughtful gesture.
          </p>
        </div>
        {/* Minimalist Rewards Timeline with Theme Colors, animated on scroll-in */}
        <Reveal className="flex-1 w-full">
        <div className="relative w-full flex flex-col lg:flex-row items-center gap-8 py-10">
          <div className="flex flex-row lg:w-full justify-between items-center gap-6 relative z-0">

            {/* Step 1: Instant Cashback */}
            <div className="relative flex flex-col items-center text-center flex-1 min-w-0 w-full bg-background border border-foreground/10 rounded-2xl p-6 shadow-sm">
              <span className="mb-2 text-2xl" style={{color:'#22c55e'}} >$</span>
              <h4 className="font-bold text-base" style={{color:'#22c55e'}}>Instant Cashback</h4>
              <p className="text-xs text-foreground/70">Earn up to 5% back with every gift, paid instantly.</p>
              {/* Connector */}
              <div className="hidden lg:block absolute right-0 top-8 h-2 w-14 border-t-2 border-dotted border-foreground/20 z-[-1]" />
            </div>

            {/* Step 2: No Hidden Fees */}
            <div className="relative flex flex-col items-center text-center flex-1 min-w-0 w-full bg-background border border-foreground/10 rounded-2xl p-6 shadow-sm">
              <span className="mb-2 text-2xl" style={{color:'#06b6d4'}}>P</span>
              <h4 className="font-bold text-base" style={{color:'#06b6d4'}}>No Hidden Fees</h4>
              <p className="text-xs text-foreground/70">$0 monthly fees. No tricks, just gifts.</p>
              {/* Connector */}
              <div className="hidden lg:block absolute right-0 top-8 h-2 w-14 border-t-2 border-dotted border-foreground/20 z-[-1]" />
            </div>

            {/* Step 3: Bank-Grade Security */}
            <div className="relative flex flex-col items-center text-center flex-1 min-w-0 w-full bg-background border border-foreground/10 rounded-2xl p-6 shadow-sm">
              <span className="mb-2 text-2xl" style={{color:'#7c3aed'}}>S</span>
              <h4 className="font-bold text-base" style={{color:'#7c3aed'}}>Bank-Grade Security</h4>
              <p className="text-xs text-foreground/70">256-bit SSL. Protected. Fast digital delivery.</p>
              {/* Connector */}
              <div className="hidden lg:block absolute right-0 top-8 h-2 w-14 border-t-2 border-dotted border-foreground/20 z-[-1]" />
            </div>

            {/* Step 4: VIP Level */}
            <div className="relative flex flex-col items-center text-center flex-1 min-w-0 w-full bg-background border border-foreground/10 rounded-2xl p-6 shadow-sm">
              <span className="mb-2 text-2xl" style={{color:'#fbbf24'}}>V</span>
              <h4 className="font-bold text-base" style={{color:'#fbbf24'}}>Level Up: VIP</h4>
              <p className="text-xs text-foreground/70">Unlock exclusive perks & celebrate every milestone.</p>
            </div>
          </div>
        </div>
        </Reveal>
      </section>

      {/* CTA Section */}
      <section id="get-started" className="relative mx-auto max-w-6xl px-6 pb-4">
        <Reveal variant="tilt">
        <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-gradient-to-br from-[#7c3aed] via-[#6d28d9] to-[#0ea5e9] p-[2px]">
          <div className="rounded-[calc(theme(borderRadius.3xl)-2px)] bg-background p-8 sm:p-12">
            <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-pretty text-2xl font-bold tracking-tight sm:text-3xl">Ready to spread joy?</h2>
                <p className="mt-2 max-w-2xl text-sm text-foreground/70 sm:text-base">Join thousands of thoughtful gifters who earn rewards while making others smile. Start your gifting journey in seconds.</p>
              </div>
              <button className="inline-flex items-center justify-center rounded-xl bg-[#22c55e] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#22c55e]/30 transition hover:bg-[#16a34a]">
                Start Gifting Today
              </button>
            </div>
          </div>
        </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="border-t border-foreground/10 py-4 text-center text-sm text-foreground/60">
        © {new Date().getFullYear()} Riin Valena. All rights reserved.
      </footer>
    </div>
  );
}



