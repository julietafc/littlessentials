import { useRef, useEffect, useState } from "react";
import React from "react";
import { Routes, Route, Link, Router } from "react-router-dom";
import SecHeroe from "./components/SecHeroe/SecHeroe";
import { ParallaxProvider } from "react-scroll-parallax";

import Home from "./pages/Home";
import StepByStep from "./pages/StepByStep";
import Faq from "./pages/Faq";
import Story from "./pages/Story";
import Guide from "./pages/Guide";
import Values from "./pages/Values";
import Carbon from "./pages/Carbon";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";

import FaceLogo from "./components/FaceLogo/FaceLogo";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn, ZoomOut, Zoom } from "react-scroll-motion";

function App() {
  // const [isOnScroll, setIsOnScroll] = useState(false);
  // const [x, setX] = useState(0);
  // const [offsetY, setOffsetY] = useState(0);
  // const handleEvent = () => {
  //   setOffsetY(window.pageYOffset);
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleEvent);
  //   return () => {
  //     window.removeEventListener("scroll", handleEvent);
  //   };
  // }, []);

  // window.addEventListener("scroll", handleScroll);

  // let top = window.pageYOffset;

  // const body = document.body,
  //   html = document.documentElement;

  // const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  // let y;
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
    <ParallaxProvider>
      <div className="App">
        <main className="pageWrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="step-by-step" element={<StepByStep />} />
            <Route path="faq" element={<Faq />} />
            <Route path="story" element={<Story />} />
            <Route path="guide" element={<Guide />} />
            <Route path="manifesto" element={<Manifesto />} />
            <Route path="lowcarbon" element={<Carbon />} />
            <Route path="partners" element={<Partners />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
          {/*<FaceLogo></FaceLogo> */}
        </main>
      </div>
    </ParallaxProvider>
  );
}

export default App;
