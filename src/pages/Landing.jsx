import React from "react";
import SecHeroe from "../components/SectionLanding/SecHeroe/SecHeroe";
import "../sass/layout/landing_layout.scss";
import Footer from "../components/Footer/Footer";
import SectionNewsletter from "../components/SectionsHome/SectionNewsletter";
import SectionIG from "../components/SectionsHome/SectionIG";

import HeaderLanding from "../components/Header/HeaderLanding";
import Second from "../components/SectionLanding/Second";
import Third from "../components/SectionLanding/Third";
import Testimonial from "../components/SectionLanding/Testimonial";

export default function Landing() {
  return (
    <div className="Home">
      <HeaderLanding />
      <SecHeroe color="white"></SecHeroe>
      <div className="landing_layout">
        <Second />
        <Third />
        <SectionNewsletter
          heading="Sign up to download 
your free PDF"
          className="newsletter"
        />
        <Testimonial />
        <SectionIG />
      </div>
      <Footer />
    </div>
  );
}
