import React, { useState, useEffect } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import styles from "../../sass/layout/buttons_links.module.scss";
import { useButtonsState } from "../../contexts/ButtonsStateContext";

export default function OffCanvasForm({ btnLabel, name, children, ...props }) {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);
  const { showSignup, setShowSignup, showLogin, setShowLogin } = useButtonsState();

  useEffect(() => {
    if (name === "signup") {
      setShow(showSignup);
    } else {
      setShow(showLogin);
    }
  }, [showSignup, showLogin]);

  const handleClose = () => {
    if (name === "signup") {
      setShowSignup(false);
    } else {
      setShowLogin(false);
    }
  };

  const handleShow = () => {
    if (name === "signup") {
      setShowSignup(true);
    } else {
      setShowLogin(true);
    }
  };
  const handleMauseOver = () => setHover(true);
  const handleMauseOut = () => setHover(false);

  return (
    <>
      {btnLabel !== "invisible" && (
        <Button
          variant="link"
          onClick={handleShow}
          onMouseOver={handleMauseOver}
          onMouseOut={handleMauseOut}
          className={`pt-0 pb-0 ${props.textColor ? props.textColor : "text-white"} text-decoration-none ${!hover && "text-opacity-50"} ${styles.linkButton}`}
        >
          {btnLabel}
        </Button>
      )}
      <Offcanvas show={show} onHide={handleClose} placement={"end"} scroll={true}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>

        {children}
      </Offcanvas>
    </>
  );
}
