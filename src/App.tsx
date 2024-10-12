import React from "react";
import NavBar from "./components/common/NavBar";
import tabs from "./data/tabs"
import { Outlet } from "react-router-dom";
import Footer from "./components/common/Footer";


const App = () => {


  return (
    <div className="min-h-screen flex flex-col justify-between flex-grow">
      <NavBar title="Animation App" links={tabs} />
      
        <Outlet />
      

      <Footer />
    </div>
  );
};

export default App;
