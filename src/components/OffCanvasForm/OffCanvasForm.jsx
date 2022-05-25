import React, { useState, Children } from "react";
import { Button, Offcanvas } from "react-bootstrap";

export default function OffCanvasForm({ name, children, ...props }) {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleMauseOver = () => setHover(true);
  const handleMauseOut = () => setHover(false);

  return (
    <>
      <Button variant="link" onClick={handleShow} onMouseOver={handleMauseOver} onMouseOut={handleMauseOut} className={`text-white ${!hover && "text-opacity-50"} text-decoration-none`}>
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        {children}
      </Offcanvas>
    </>
  );
}
