import React from "react";
import NavBar from "./components/common/NavBar";
import tabs from "./data/tabs";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/common/Footer";
import { useTransition, animated } from "@react-spring/web";

const App = () => {
  const location = useLocation();
  
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-150%,0,0)" },
    exitBeforeEnter: true,
    config: { duration: 150 },
  });

  return (
    <div className="min-h-screen flex flex-col justify-between flex-grow items-center overflow-x-hidden">
      <NavBar title="Animation App" links={tabs} />

      {transitions((style, location) => (
        
        <animated.div
          key={location.pathname}
          style={style}
          className="w-3/4 h-full flex items-center"
        >
          <Outlet />
        </animated.div>
      ))}

      <Footer />
    </div>
  );
};

export default App;
