import { useRef, useEffect, useState } from "react";
import React from "react";
// import SecHeroe from "../components/SecHeroe/SecHeroe";

import BtnCO2 from "../components/BtnCO2/BtnCO2";
import CO2Modal from "../components/CO2Modal/CO2Modal";
import Chat from "../components/Chat/Chat";
import "../sass/layout/layout.scss";

import FaceLogo from "../components/FaceLogo/FaceLogo";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn, ZoomOut, Zoom } from "react-scroll-motion";
import SectionIntro from "../components/SectionsHome/SectionIntro";
// import SectionMission from "../components/SectionsHome/SectionMission";
import SectionManifesto from "../components/SectionsHome/SectionManifesto";
import SectionWorks from "../components/SectionsHome/SectionWorks";
// import SectionSlider from "../components/SectionsHome/SectionSlider";
// import { SliderData } from "../components/SectionsHome/SliderData";
import Footer from "../components/Footer/Footer";
import SectionTestimonial from "../components/SectionsHome/SectionTestimonial";
import SectionNewsletter from "../components/SectionsHome/SectionNewsletter";
import SectionIG from "../components/SectionsHome/SectionIG";
import SectionCarousel from "../components/SectionsHome/SectionCarousel";
import Header from "../components/Header/Header";

export default function Home(props) {
  // const [isOnScroll, setIsOnScroll] = useState(false);
  const [x, setX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const handleEvent = () => {
    setOffsetY(window.pageYOffset);
  };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleEvent);
  //   return () => {
  //     window.removeEventListener("scroll", handleEvent);
  //   };
  // }, []);

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
  // ;

  const [show, setShow] = useState(false);

  return (
    <div className="Home">
      <Header />
      {/* <SecHeroe color="white"></SecHeroe> */}
      <main className="layout">
        <SectionIntro />
        {/* <SectionMission /> */}
        <SectionManifesto />
        <SectionWorks />
        <SectionCarousel />
        {/* <SectionSlider slides={SliderData} /> */}
        <SectionTestimonial />
        <SectionNewsletter heading="Receive 10% off your first order when you sign up for our newsletter." />
        <SectionIG />
        {/*<FaceLogo></FaceLogo> */}
      </main>
      <div className="floating_actions">
        <BtnCO2 setShow={setShow}></BtnCO2>
        <Chat />
        <CO2Modal show={show} onClose={() => setShow(false)} />
      </div>
      <Footer />
    </div>
  );
}
