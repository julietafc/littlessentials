import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../../sass/layout/buttons_links.module.scss";

export default function BtnLink(props) {
  let location = useLocation();
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const handleMauseOver = () => setHover(true);
  const handleMauseOut = () => setHover(false);
  const navigate = useNavigate();

  useEffect(() => {
    // console.log("location.pathname ", location.pathname);
    // console.log("props.link ", props.link);
    setActive(location.pathname === props.link);
  }, []);

  const handleClick = (e) => {
    navigate(props.link, { replace: true });
  };

  return (
    <Button variant="link" onMouseOver={handleMauseOver} onMouseOut={handleMauseOut} className={`pt-0 pb-0 text-white text-decoration-none ${hover && "text-opacity-50"} ${styles.linkButton} ${active && styles.linkActive} `} onClick={handleClick}>
      {props.label}
    </Button>
  );
}
