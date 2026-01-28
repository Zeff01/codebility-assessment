import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Layout from "../components/layouts/Layout";

const Home = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Hero />
        <Feature />
      </Layout>
    </>
  );
};

export default Home;
