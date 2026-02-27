import HomePage from "./Pages/HomePage";
import Navbar from "./Components/NavigationBar";

export default function Home() {

  return (
    <>
    <div className="min-h-screen bg-[#F1E8DF]">
        {/*Navigation Bar*/}
        <Navbar />

        {/*Home Page*/}
        <HomePage />
      </div>
    </>
  );
}
