import styles from "../CircularText/circularText.module.scss";
import { useEffect, useState } from "react";

export default function CircularText(props) {
  // let grades = window.pageYOffset === 0 ? -180 : -180 + props.x;
  const body = document.body,
    html = document.documentElement;

  let grades;

  if (props.isOnScroll) {
    console.log(grades);
    console.log(window.pageYOffset);
    let x = window.pageYOffset === 0 ? 1 : window.pageYOffset;
    const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    let a = (x * 360) / (height - window.innerHeight);
    grades = -180 + a / 2.5;
  }

  const style = {
    transform: `rotate(${grades}deg)`,
    transition: "transform .8s ease-out",
  };

  return (
    <section className={styles.CircularText}>
      <div className={styles.svgContainer}>
        <svg
          className={styles.svg}
          style={style}
          onTransitionEnd={(e) => {
            props.handleScroll(e, true);
            console.log("transition end");
          }}
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
        >
          <path id="myTextPath" className={styles.path} d="M250,150c0,55.23-44.77,100-100,100s-100-44.77-100-100c0-32.08,15.1-60.62,38.58-78.92,16.95-13.21,38.26-21.08,61.42-21.08,55.23,0,100,44.77,100,100Z" />
          <text className={styles.text}>
            <textPath xlinkHref="#myTextPath" startOffset="0" className={styles.textPath}>
              <tspan dy="5">{props.texto}</tspan>
            </textPath>
          </text>
        </svg>
      </div>
      <div className={styles.textContainer}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iure quae ipsa aliquid facere maxime veritatis iste debitis, hic itaque.</p>
      </div>
    </section>
  );
}
