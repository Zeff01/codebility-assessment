import './App.css';
import Navigation from './components/Navigation';
import HeroComponent from './components/HeroComponent';
import Header from './components/Header';
import GiftCardInfo from './components/GiftCardInfo';
import BrandCards from './components/BrandCards';
import VirtualGifting from './components/VirtualGifting';
import MoolaInfo from './components/MoolaInfo';
import MoolaFeatures from './components/MoolaFeatures';
import MoolaTestimonials from './components/MoolaTestimonials';
import MoolaFooter from './components/MoolaFooter';


function App() {
 return (
    <>
     <Navigation />
     <HeroComponent />
     <Header />
     <GiftCardInfo />
     <BrandCards />
     <VirtualGifting />
     <MoolaInfo />
     <MoolaFeatures />
     <MoolaTestimonials />
     <MoolaFooter />
    </>
  );
  
}

export default App;
