import { useState } from "react";
import React from "react";
import SecHeroe from "./components/SecHeroe/SecHeroe";
import NavBar from "./components/NavBar/NavBar";
import "./App.scss";
import "./index.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar></NavBar>
      <SecHeroe></SecHeroe>
    </div>
  );
}

export default App;
