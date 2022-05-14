import React, { useState } from "react";
import { SliderData } from "./SliderData";

import "./Slider.scss";

// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons-fa";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="slider">
      <button className="left-arrow" onClick={prevSlide}>
        prev
      </button>
      {/* <FaArrowAltCircleLeft  /> */}

      {SliderData.map((slide, index) => {
        return (
          <div className={index === current ? "slide active" : "slide"} key={index}>
            {index === current && <h1>{slide.text}</h1>}
          </div>
        );
      })}
      <button className="right-arrow" onClick={nextSlide}>
        next
      </button>
      {/* <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} /> */}
    </section>
  );
};

export default Slider;
