import FeatureSection from "../../sections/FeatureSection";
import HeroSection from "../../sections/HeroSection";
import Navigation from "../../sections/Navigation"

export default function Home() {
  return (
    <>
      <Navigation/>
      <main>
        <HeroSection/>
        <FeatureSection/>
      </main>
    </>
  );
}
