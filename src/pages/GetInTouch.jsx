import React, { useState } from "react";
import Banner from "../components/Banner/Banner";
import Chat from "../components/Chat/Chat";
import Footer from "../components/Footer/Footer";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../sass/layout/layout.scss";
import Styles from "../pages/Subscription/subscription.module.scss";
import Header from "../components/Header/Header";
import SoMe from "../components/SoMe/SoMe";

export default function GetInTouch() {
  const [showSMS, setShowSMS] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <>
      <Header />
      <Chat />
      <Banner heading="Get in touch" text="Don't hesitate to reach out! We'd love to hear from you" bgColor={"#e8c37f"} color={"#8b5028"} />
      <div className="layout_innerpages getintouch">
        <aside>
          <SoMe />
        </aside>
        {!showSMS ? (
          <section>
            <p>
              We’d love to hear from you with any feedback or comments. <br />
              We also encourage you to write to our amazing support team through the chat
            </p>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Your name</Form.Label>
                <Form.Control type="text" placeholder="Your name" onChange={(e) => setUserName(e.target.value)} value={userName} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your message</Form.Label>
                <Form.Control as="textarea" placeholder="Type here whatever comes up in your mind" style={{ height: "100px" }} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I've read the Terms & Conditions" onChange={() => setIsValid(!isValid)} />
              </Form.Group>
              <Button variant="primary" type="button" disabled={!isValid} onClick={() => setShowSMS(true)} className={`${!isValid && "bg-light text-black-50 border-light"}`}>
                Submit
              </Button>
            </Form>
          </section>
        ) : (
          <section className={Styles.appearSMS}>
            <div>
              <h3>Thank you for reaching out {userName ? `${userName.split(" ")[0]}` : ""}!</h3> <p> We'll get back to you as soon as possible &#128522; </p>
            </div>
          </section>
        )}
      </div>
      <Footer />
    </>
  );
}
