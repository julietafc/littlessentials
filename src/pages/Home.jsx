import { useRef, useEffect, useState } from "react";
import React from "react";

import BtnCO2 from "../components/BtnCO2/BtnCO2";
import CO2Modal from "../components/CO2Modal/CO2Modal";
import Chat from "../components/Chat/Chat";
import "../sass/layout/layout.scss";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import SectionIntro from "../components/SectionsHome/SectionIntro";
// import SectionMission from "../components/SectionsHome/SectionMission";
import SectionManifesto from "../components/SectionsHome/SectionManifesto";
import SectionWorks from "../components/SectionsHome/SectionWorks";
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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="Home">
      <Header />
      {/* <SecHeroe color="white"></SecHeroe> */}
      <main className="layout">
        <SectionIntro />
        <SectionWorks />
        {/* <SectionMission /> */}
        <SectionManifesto />
        <SectionCarousel />
        {/* <SectionSlider slides={SliderData} /> */}
        <SectionTestimonial />
        <SectionNewsletter />
        <SectionIG />
        {/*<FaceLogo></FaceLogo> */}
      </main>
      <div className="floating_actions">
        {/* <BtnCO2 setShow={setShow}></BtnCO2> */}
        <Chat />
        {/* <CO2Modal show={show} onClose={() => setShow(false)} /> */}
        <Button className="co2_button" variant="primary" onClick={handleShow}>
          this website <br /> only emites <br />
          0.49g of CO2
        </Button>

        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>I will not close if you click outside me. Don't even try to press escape key.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </div>
      <Footer />
    </div>
  );
}
