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
import Brands from "./pages/Brands";
import GetInTouch from "./pages/GetInTouch";
import PartnerWithUs from "./pages/PartnerWithUs";
import Policy from "./pages/Policy";
import Circularity from "./pages/Circularity";

import FaceLogo from "./components/FaceLogo/FaceLogo";
import SignUp from "./pages/SignUp/SignUp";
import LogIn from "./pages/LogIn/LogIn";
import Profile from "./pages/Profile/Profile";
import { Container } from "react-bootstrap";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn, ZoomOut, Zoom } from "react-scroll-motion";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ScrollToTop from "./ScrollToTop";

function App() {
  // const fetchData = async () => {
  //   try {
  //     const res = await fetch(URL);
  //     const data = await res.json();
  //     // console.log(data);
  //     setBrands(data);
  //     fetchData();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="step-by-step" element={<StepByStep />} />
            <Route path="faq" element={<Faq />} />
            <Route path="story" element={<Story />} />
            <Route path="guide" element={<Guide />} />
            <Route path="values" element={<Values />} />
            <Route path="lowcarbon" element={<Carbon />} />
            <Route path="brands" element={<Brands />} />
            <Route path="get-in-touch" element={<GetInTouch />} />
            <Route path="partner-with-us" element={<PartnerWithUs />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<LogIn />} />
            <Route path="profile" element={<Profile />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="policy" element={<Policy />} />
            <Route path="ngos" element={<Circularity />} />
          </Routes>
          {/*<FaceLogo></FaceLogo> */}
        </main>
      </div>
    </ParallaxProvider>
  );
}

export default App;
