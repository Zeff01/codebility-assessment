import { Route, Routes } from "react-router-dom"
import Hero from "../components/Splide/Hero"
import Home from "./Home"

function App() {

  return (
    <>
      <div className="container my-5">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App
