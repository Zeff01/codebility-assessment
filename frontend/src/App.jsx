import { useState } from 'react'
import './App.css'
import NavBar from './NavBar/NavBar'
import SearchBar from './SearchBar/SearchBar'
import EyeCandy from './EyeCandy/Eyecandy'
import HowItWorks from './HowItWorks/HowItWorks'
import Footer from './Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <SearchBar/>
      <EyeCandy/>
      <HowItWorks/>
      <div className='footer-copyright'>
                <p>Jeric Batarina, 2025. Usagift is a sample website.</p>    
      </div>
    </>
  )
}

export default App
