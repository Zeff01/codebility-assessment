import { useEffect, useState } from "react";
import Landing from "./landing/Landing.jsx";
import Login from "./login/Login.jsx";

function getRouteFromHash() {
  return window.location.hash.replace("#", "") || "/";
}

function App() {
  const [route, setRoute] = useState(getRouteFromHash);

  useEffect(() => {
    function handleHashChange() {
      setRoute(getRouteFromHash());
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  function handleLoginClick() {
    window.location.hash = "/login";
  }

  function handleHomeClick() {
    window.location.hash = "/";
  }

  if (route === "/login") {
    return (
      <Login
        onBackHome={handleHomeClick}
      />
    );
  }

  return (
    <Landing
      onLoginClick={handleLoginClick}
    />
  );
}

export default App;
