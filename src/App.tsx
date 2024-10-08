import React from "react";
import NavBar from "./components/common/NavBar";
import NavBarItem from "./models/NavBarItem";


const App = () => {
  const sampleNavLinks: NavBarItem[] = [
    new NavBarItem({
      Title: "Home",
      SubItems: [
        new NavBarItem({ Title: "Dashboard" }),
        new NavBarItem({ Title: "Analytics" }),
      ],
    }),
    new NavBarItem({
      Title: "About",
      SubItems: [
        new NavBarItem({ Title: "Team" }),
        new NavBarItem({ Title: "Company" }),
      ],
    }),
    new NavBarItem({
      Title: "Services",
      SubItems: [
        new NavBarItem({ Title: "Web Development" }),
        new NavBarItem({ Title: "App Development" }),
      ],
    }),
    new NavBarItem({
      Title: "Services",
    }),
  ];


  return (
    <div>
      <NavBar title="Test" links={sampleNavLinks}/>
      
    </div>
  );
};

export default App;
