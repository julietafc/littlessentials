import { useRef, useEffect, useState } from "react";
import React from "react";
import SecHeroe from "../components/SecHeroe/SecHeroe";

import NavBar from "../components/NavBar/NavBar";
import BtnCO2 from "../components/BtnCO2/BtnCO2";
import CO2Modal from "../components/CO2Modal/CO2Modal";

import FaceLogo from "../components/FaceLogo/FaceLogo";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn, ZoomOut, Zoom } from "react-scroll-motion";
import SectionIntro from "../components/SectionsHome/SectionIntro";
import SectionMission from "../components/SectionsHome/SectionMission";
import SectionManifesto from "../components/SectionsHome/SectionManifesto";
import SectionWorks from "../components/SectionsHome/SectionWorks";
import Slider from "../components/Slider/Slider";
import { SliderData } from "../components/Slider/SliderData";

export default function Home(props) {
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
  // ;
  //   constructor() {
  //     super();
  //     this.state = {
  //       messageList: []
  //     };
  //   };

  //   _onMessageWasSent(message) {
  //     this.setState({
  //       messageList: [...this.state.messageList, message]
  //     })
  //   };

  //   _sendMessage(text) {
  //     if (text.length > 0) {
  //       this.setState({
  //         messageList: [...this.state.messageList, {
  //           author: 'them',
  //           type: 'text',
  //           data: { text }
  //         }]
  //       })
  //     }
  //   };

  const [show, setShow] = useState(false);

  return (
    <div className="Home">
      <SecHeroe color="white"></SecHeroe>
      <main className="pageWrapper">
        <NavBar></NavBar>
        <SectionIntro offsetY={offsetY}></SectionIntro>
        <SectionMission />
        <SectionManifesto />
        <SectionWorks />
        <Slider slides={SliderData} />
        {/*<FaceLogo></FaceLogo> */}
      </main>

      <button onClick={() => setShow(true)}>Show modal</button>
      <BtnCO2></BtnCO2>
      <CO2Modal show={show} onClose={() => setShow(false)} />
    </div>
  );
}
