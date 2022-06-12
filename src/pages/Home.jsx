import { useState, useEffect } from "react";
import React from "react";

import Chat from "../components/Chat/Chat";
import "../sass/layout/layout.scss";
import styles from "../components/SectionsHome/SectionIntro.module.scss";

import SectionIntro from "../components/SectionsHome/SectionIntro";
import SectionManifesto from "../components/SectionsHome/SectionManifesto";
import SectionManifestoDk from "../components/SectionsHome/SectionManifestoDk";
import SectionWorks from "../components/SectionsHome/SectionWorks";
import Footer from "../components/Footer/Footer";
import SectionPlans from "../components/SectionsHome/SectionPlans";
import SectionTestimonial from "../components/SectionsHome/SectionTestimonial";
import SectionNewsletter from "../components/SectionsHome/SectionNewsletter";
import SectionIG from "../components/SectionsHome/SectionIG";
import SectionCarousel from "../components/SectionsHome/SectionCarousel";
import Header from "../components/Header/Header";

import Co2Button from "../components/Co2Button/Co2Button";

export default function Home(props) {
  const [isOnScroll, setIsOnScroll] = useState(false);
  const [x, setX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleEvent = () => {
    setOffsetY(window.pageYOffset);
    setIsOnScroll(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleEvent);
    return () => {
      setIsOnScroll(false);
      window.removeEventListener("scroll", handleEvent);
    };
  }, []);

  let top = window.pageYOffset;

  const body = document.body,
    html = document.documentElement;

  const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  let y;

  let first = Number(offsetY) < 600;
  let second = 600 < Number(offsetY) && 2200 > Number(offsetY);
  let thirth = Number(offsetY) > 3900;
  let color = first ? "white" : second ? "#d0e2fd" : thirth ? "#d0e2fd" : "white";
  let translate = first ? "translateX(100%)" : second ? "translateX(0)" : thirth ? "translateX(0)" : "translateX(-100%)";

  const styleDynamic = {
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "-1",
    width: "100%",
    height: "100%",
    backgroundColor: color,
    transform: translate,
    transition: "background-color .5s ease, transform .5s ease",
  };

  return (
    <div className={`Home ${styles.parallaxWrapper}`}>
      <div className={`${styles.parallaxGroup}`}>
        <div className={`${styles.parallaxLayer} ${styles.baseLayer}`}>
          <img src="../assets/webP/littlessentials_playful-package2.webp" alt="kids clothes" />
        </div>
        <div className={`${styles.parallaxLayer} ${styles.midLayer}`}>
          <img src="../assets/img02.webp" alt="girl holding a camera toy" />
        </div>
        <div className={`${styles.parallaxLayer} ${styles.topLayer}`}>
          <img src="../assets/webP/littlessentials_earth-package.webp" alt="mix of products for children" />
        </div>

        <Header />
        <div className="layout">
          <SectionIntro />
          <SectionWorks />
          <SectionPlans />
          <SectionManifesto className="manifesto_mobile" />
          <SectionManifestoDk className="manifesto_desktop" />
          <SectionCarousel />
          <SectionTestimonial />
          <SectionNewsletter title="Stay updated" heading="Receive 10% off your first order when you sign up for our newsletter." />
          <SectionIG />
        </div>
        <div className="floating_actions">
          <Chat />
          <Co2Button />
        </div>
        <Footer />
      </div>
    </div>
  );
}
