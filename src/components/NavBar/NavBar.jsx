import { useRef, useEffect, useState } from "react";
import styles from "../NavBar/navBar.module.scss";
import LElement from "../LElement/LElement";

export default function NavBar(props) {
  const ref = useRef();
  const [isNavVisible, setIsNavVisible] = useState();
  let positionY;

  useEffect(() => {
    // console.log("useefct");
    positionY = window.innerHeight - ref.current.getBoundingClientRect().height;
    console.log("ref", ref.current.getBoundingClientRect().height);
    const appearOptions = {
      threshold: 0,
      rootMargin: `0px 0px -${positionY}px 0px`,
    };

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      // const position=window.innerHeight-
      if (entry.isIntersecting && entry.boundingClientRect.top <= entry.boundingClientRect.height) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(false);
      }

      // console.log("entry", entry);
    }, appearOptions);
    observer.observe(ref.current);
  }, []);

  useEffect(() => {
    // console.log(isNavVisible);
  }, [isNavVisible]);

  return (
    <nav className={`${styles.NavBar} ${isNavVisible ? styles.visible : ""}`} ref={ref}>
      <ul className={styles.mainNav}>
        <li className={styles.li}>
          <a>
            <LElement width="50" color="white"></LElement>
          </a>
        </li>
        <li className={styles.li}>
          <a>how it works</a>
        </li>
        <li className={styles.li}>
          <a>about</a>
        </li>
        <li className={styles.li}>
          <a>partners</a>
        </li>
        <li className={styles.li}>
          <a>contact</a>
        </li>
      </ul>
      <ul className={styles.subNav}>
        <li className={styles.li}>
          <a>get started</a>
        </li>
        <li className={styles.li}>
          <button>login</button>
        </li>
      </ul>
    </nav>
  );
}
