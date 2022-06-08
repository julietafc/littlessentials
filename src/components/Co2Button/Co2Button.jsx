import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, Row, Col } from "react-bootstrap";

export default function Co2Button() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button title="button opening info about CO2" className="co2_button" variant="primary" onClick={handleShow}>
        this website <br /> only emites <br />
        0.37g of CO2
      </Button>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Minimizing our footprint, also digitally</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="left">
            <p> Our webpage has a carbon footprint of 0.37 CO2, calculated through the Website Carbon Calculator (https://www.websitecarbon.com).</p>
            <br />
            <p> A regular website has an average of 1.76 CO2. This means we are using 80% less CO2 than the average website.</p>
            <br />
            <p>If you would like more info about how you can reduce your digital footprint, feel free to reach out to us via info@littlessentials.dk and we’ll be happy to share what we know with you.</p>
            <p>
              <strong>Every small change starts with a seed of awareness.</strong>
            </p>
          </div>
          <div className="right">
            <div className="info_1">
              <h2>60%</h2>
              <p>less C02</p>
            </div>
            <div className="info_2">
              <h2>0.37g</h2>
              <p>of CO2 per visit</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Row className="w-100">
            <Col>
              <a href="https://drive.google.com/file/d/1DFe1Lp_-voDFrLp-qpONfiGmG_uFoLar/view" title="link with info about ways to reduce C02 emissions" target="_blank">
                5 WAYS WE REDUCE OUR CO2 EMISSIONS
              </a>
            </Col>
            <Col className="d-flex justify-content-end">
              <Link to="lowcarbon">
                <Button title="link to low carbon page" variant="primary">
                  Learn more
                </Button>
              </Link>
            </Col>
          </Row>
        </Modal.Footer>
      </Modal>
    </>
  );
}
