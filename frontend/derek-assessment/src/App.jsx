import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import HowItWorksSection from './Components/HowItWorksSection/HowItWorksSection';
import Footer from './Components/Footer/Footer';
import './App.css'

function App() {


  return (
    <>
    <div className='container'>
        <Header/>
        <Hero/>
        <HowItWorksSection/>
        <Footer/>
    </div>
  
    </>
  )
}

export default App
