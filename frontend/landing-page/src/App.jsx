import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Hero from "./sections/Hero";
import Rewards from "./sections/Rewards";
import Footer from "./sections/Footer";
import Reviews from "./sections/Reviews";
import Payment from "./sections/Payment";

function App() {
  return (
    <>
      <div className="min-h-screen w-full">
        <div className="mx-auto">
          <Navbar />
          <Searchbar />
          <Hero />
          <Rewards />
          <Payment />
          <Reviews />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
