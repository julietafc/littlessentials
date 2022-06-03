import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "../../sass/layout/buttons_links.module.scss";

export default function BtnLink(props) {
  const [hover, setHover] = useState(false);
  const handleMauseOver = () => setHover(true);
  const handleMauseOut = () => setHover(false);
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(props.link, { replace: true });
  };

  return (
    <Button variant="link" onMouseOver={handleMauseOver} onMouseOut={handleMauseOut} className={`pt-0 pb-0 text-white text-decoration-none ${!hover && "text-opacity-50"} ${styles.linkButton}`} onClick={handleClick}>
      {props.label}
    </Button>
  );
}
