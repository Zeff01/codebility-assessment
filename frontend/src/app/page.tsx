import Hero from "../components/Hero";
import Features from "../components/Features";
import "../components/Style.css";
import Adheaders, { Cardheaders } from "../constants/const";

const App = () => {
  return (
    <>
      <Hero {...Adheaders[0]} />
      <Features {...Cardheaders} />
    </>
  );
};

export default App;
