import NavBar from "@/components/landing/NavBar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturedBrandsSection from "@/components/landing/FeaturedBrandsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import NewsletterSection from "@/components/landing/NewsletterSection";
import SiteFooter from "@/components/landing/SiteFooter";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-transparent text-slate-900">
      <NavBar />

      <main className="ethereal-bg overflow-x-clip pt-24 md:pt-28">
        <HeroSection />
        <FeaturedBrandsSection />
        <HowItWorksSection />
        <NewsletterSection />
      </main>

      <SiteFooter />
    </div>
  );
}
