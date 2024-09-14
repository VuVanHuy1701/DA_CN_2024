import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Routers from "./Routers";

function App() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/home-five") {
      document.body.classList.add("home-five");
    } 

    return () => {
      
      document.body.classList.remove("home-five");
      document.body.classList.add("home-one");
    };
  }, [location.pathname]);
  return <Routers />;
}

export default App;
