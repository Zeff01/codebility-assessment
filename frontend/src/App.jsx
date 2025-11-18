import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

function App() {
  return (
    <div className="">
      <ThemeProvider>
        <Navbar />
        <div className="space-y-6 overflow-hidden ">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
