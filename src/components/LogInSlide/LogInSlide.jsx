import React, { useState, Children } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import SignUp from "../../pages/SignUp/SignUp";
import LogIn from "../../pages/LogIn/LogIn";

export default function LogInSlide({ name, children, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="link" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        {/* <Offcanvas.Body>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</Offcanvas.Body> */}
        {children}
      </Offcanvas>
    </>
  );
}

//   function Example() {
//     return (
//       <>
//         {['start', 'end', 'top', 'bottom'].map((placement, idx) => (
//           <OffCanvasExample key={idx} placement={placement} name={placement} />
//         ))}
//       </>
//     );
//   }
