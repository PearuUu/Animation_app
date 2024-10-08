import React from "react";


const App = () => {
  const name = "John";

  const names: Array<string> = ["test1", "test2", "test3"];

  const isLogged = true;

  return (
    <div className="bg-zinc-900 w-100 h-screen text-white">
      <h1 className="text-3xl font-bold">Hello world! {name}</h1>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {isLogged ? <h1 className="text-3xl font-bold">Test</h1> : ""}
    </div>
  );
};

export default App;
