import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Hero from "../components/Hero";





export default function Home() {
  return (
    <>
     <Navbar />
      <main className="pt-15"> {/* Padding for fixed navbar */}
        <Header />
        { <Hero />}
      
      </main>
     
    
    </>
  );
}
