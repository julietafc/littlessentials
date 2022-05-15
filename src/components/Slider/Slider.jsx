import React, { useState } from "react";
import { SliderData } from "./SliderData";
import Button from "../Button/Button";

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
      <div className="slider_container">
        {/* <FaArrowAltCircleLeft  /> */}

        {SliderData.map((slide, index) => {
          return (
            <div className={index === current ? "slide active" : "slide"} key={index}>
              {index === current && (
                <div className="slide_text">
                  <img className="slide_img" src={slide.imagePath} />
                  <div className="text">
                    <h4>PARTNERS</h4>
                    <h1>{slide.title}</h1>
                    <p>{slide.text}</p>
                    <Button />
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} /> */}
      </div>
      <div className="action">
        <button className="left-arrow" onClick={prevSlide}>
          prev
        </button>
        <button className="right-arrow" onClick={nextSlide}>
          next
        </button>
      </div>
    </section>
  );
};

export default Slider;
