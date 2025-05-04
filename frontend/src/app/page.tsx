import Companies from '@/components/companies/Companies';
import Features from '@/components/features/Features';
import Footer from '@/components/footer/Footer';
import Hero from '@/components/hero/Hero';
import BottomNavBar from '@/components/navbar/BottomNavBar';
import TopNavBar from '@/components/navbar/TopNavbar';

export default function Home() {
  return (
    <>
      <div className="p-5">
        <TopNavBar />
      </div>
      <main className="flex flex-col gap-10">
        <BottomNavBar />
        <Hero />
        <Companies />
        <Features />
      </main>
      <Footer />
    </>
  );
}
