import React from "react";
import NavBar from "./components/common/NavBar";
import tabs from "./data/tabs"


const App = () => {


  return (
    <div>
      <NavBar title="Animation App" links={tabs}/>
      
    </div>
  );
};

export default App;
