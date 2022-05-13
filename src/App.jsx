import { useRef, useEffect, useState } from "react";
import React from "react";
import SecHeroe from "./components/SecHeroe/SecHeroe";
import SecInfo from "./components/SecInfo/SecInfo";
import NavBar from "./components/NavBar/NavBar";
import CircularText from "./components/CircularText/CircularText";
import FaceLogo from "./components/FaceLogo/FaceLogo";
import SignUp from "./components/SignUp/SignUp";
import { Container } from "react-bootstrap";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn, ZoomOut, Zoom } from "react-scroll-motion";
import "./App.scss";
import "./index.scss";

function App() {
  const [isOnScroll, setIsOnScroll] = useState(false);
  const [x, setX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const handleEvent = () => {
    setOffsetY(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleEvent);
    return () => {
      window.removeEventListener("scroll", handleEvent);
    };
  }, []);

  // window.addEventListener("scroll", handleScroll);

  let top = window.pageYOffset;

  const body = document.body,
    html = document.documentElement;

  const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  let y;
  // console.log(top);
  // console.log(height);

  // function handleScroll(e, animationEnds) {
  //   // console.log("handleScroll");
  //   window.removeEventListener("scroll", handleScroll);
  //   if (animationEnds) {
  //     setIsOnScroll(false);
  //     window.addEventListener("scroll", handleScroll);
  //   } else {
  //     window.removeEventListener("scroll", handleScroll);
  //     setIsOnScroll(true);
  //     y = 2;
  //     if (window.pageYOffset > top) {
  //       setX(x + y);
  //       top = window.pageYOffset;
  //     } else {
  //       setX(x - y);
  //       top = window.pageYOffset;
  //     }
  //   }
  // }

  return (
    <div className="App">
      <SecHeroe color="white"></SecHeroe>
      <div className="pageWrapper">
        <NavBar></NavBar>
        <SecInfo offsetY={offsetY}></SecInfo>
        <FaceLogo></FaceLogo>
        <SecInfo></SecInfo>
        <CircularText texto="littlessentials the best box" offsetY={offsetY} />
        <SecInfo></SecInfo>
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <SignUp></SignUp>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default App;
