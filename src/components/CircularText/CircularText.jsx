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
    grades = -95 + a / 2;
  }

  const style = {
    transform: `translateY(20px) rotate(${grades}deg)`,
    transition: "transform .8s ease-out",
  };

  return (
    <section className={styles.CircularText}>
      <div className={styles.svgContainer}>
        <svg className={styles.svg} id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80">
          <g
            style={style}
            onTransitionEnd={(e) => {
              props.handleScroll(e, true);
              console.log("transition end");
            }}
            className={styles.group}
          >
            <path id="myTextPath" className={styles.path} d="M25,100c0-41.42,33.58-75,75-75,.07,0,.15,0,.22,0,41.32,.12,74.78,33.65,74.78,75s-33.58,75-75,75S25,141.42,25,100Z" />
            <circle className={styles.circle} cx="100" cy="100" r="72.5" />

            <text className={styles.text}>
              <textPath xlinkHref="#myTextPath" startOffset="0" className={styles.textPath}>
                <tspan dy="0">{props.texto}</tspan>
              </textPath>
            </text>
          </g>
          <rect className={styles.rectangle} x="0" y="80" width="200" height="20" />
        </svg>
      </div>
      <div className={styles.textContainer}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iure quae ipsa aliquid facere maxime veritatis iste debitis, hic itaque.</p>
      </div>
    </section>
  );
}
