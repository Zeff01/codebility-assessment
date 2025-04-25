import React from "react";
import SearchForm from "./components/SearchForm";
import Hero from "./components/Hero";
import Bottom1 from "./components/Bottom1";
import Bottom2 from "./components/Bottom2";
import Bottom3 from "./components/Bottom3";
import Bottom4 from "./components/Bottom4";

const LandingPage = () => {
  return (
    <>
      <header>
        <SearchForm />
      </header>
      <main>
        <Hero />
      </main>
      <div className="max-w-7xl mx-auto py-3">
        <Bottom1 />
        <Bottom2 />
        <Bottom3 />
        <Bottom4 />
      </div>
    </>
  );
};

export default LandingPage;
