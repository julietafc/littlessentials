import React, { useState, Children } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import styles from "../../sass/layout/buttons_links.module.scss";

export default function OffCanvasForm({ name, children, ...props }) {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleMauseOver = () => setHover(true);
  const handleMauseOut = () => setHover(false);

  return (
    <>
      <Button variant="link" onClick={handleShow} onMouseOver={handleMauseOver} onMouseOut={handleMauseOut} className={`pt-0 pb-0 text-white text-decoration-none ${!hover && "text-opacity-50"} ${styles.linkButton}`}>
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement={"end"} scroll={true}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        {children}
      </Offcanvas>
    </>
  );
}
