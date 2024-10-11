import React from "react";
import NavBar from "./components/common/NavBar";
import tabs from "./data/tabs"
import { Outlet } from "react-router-dom";


const App = () => {


  return (
    <div>
      <NavBar title="Animation App" links={tabs}/>
      <div>
        <Outlet />  
      </div>
      <footer>
        
      </footer>
    </div>
  );
};

export default App;
