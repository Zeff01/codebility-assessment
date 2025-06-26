import GiftCards from "../components/GiftCards";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
const MainLayout = () => {
    return (
        <div className="w-full">
            <Navbar />
            <Searchbar />
            <Hero />
            <GiftCards />
        </div>
    )
}

export default MainLayout;