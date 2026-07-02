import Hero from "./Hero";
import HomeSections from "./HomeSections";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HomeSections />
      </main>
    </>
  );
}
