import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ProductDetail from "./pages/productdetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
