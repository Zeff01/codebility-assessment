import CardGrid from "@/components/Cards/CardGrid";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/Hero/HeroCarousel";
import HeroGrid from "@/components/Hero/HeroGrid";
import NavigationBar from "@/components/Navigation/NavigationBar";
import TextLine from "@/components/TextLine";


export default function Home() {
  return (
    <>
    <NavigationBar />
    <HeroCarousel />
    <HeroGrid />
    <TextLine />
    <CardGrid />
    <Footer />
    </>
  );
}
