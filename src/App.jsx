import { useEffect, useState } from "react";
import React from "react";
import SecHeroe from "./components/SecHeroe/SecHeroe";
import NavBar from "./components/NavBar/NavBar";
import CircularText from "./components/CircularText/CircularText";
import "./App.scss";
import "./index.scss";

function App() {
  const [isOnScroll, setIsOnScroll] = useState(false);
  const [x, setX] = useState(0);

  window.addEventListener("scroll", handleScroll);

  let top = window.pageYOffset;

  const body = document.body,
    html = document.documentElement;

  const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  let y;
  console.log(top);
  console.log(height);

  function handleScroll(e, animationEnds) {
    console.log("handleScroll");
    window.removeEventListener("scroll", handleScroll);
    if (animationEnds) {
      setIsOnScroll(false);
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
      setIsOnScroll(true);
      y = 2;
      if (window.pageYOffset > top) {
        setX(x + y);
        top = window.pageYOffset;
      } else {
        setX(x - y);
        top = window.pageYOffset;
      }
    }
  }

  return (
    <div className="App">
      <NavBar></NavBar>
      <SecHeroe></SecHeroe>
      <SecHeroe></SecHeroe>
      <SecHeroe></SecHeroe>
      <CircularText texto="littlessentials the best box" isOnScroll={isOnScroll} setIsOnScroll={setIsOnScroll} handleScroll={handleScroll} />
      <SecHeroe></SecHeroe>
      <SecHeroe></SecHeroe>
    </div>
  );
}

export default App;
