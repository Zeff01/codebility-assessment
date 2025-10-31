import Hero from "../components/hero";
import Features from "../components/features";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col gap-40">
      <Hero />
      <Features />
      <Testimonials />
    </div>
  );
}
