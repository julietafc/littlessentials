import Banner from "../components/Banner/Banner";
import Chat from "../components/Chat/Chat";
import Footer from "../components/Footer/Footer";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../sass/layout/layout.scss";
import Header from "../components/Header/Header";
import SoMe from "../components/SoMe/SoMe";
import Styles from "../pages/Subscription/subscription.module.scss";
export default function PartnerWithUs() {
  const [showSMS, setShowSMS] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [userName, setUserName] = useState("");
  return (
    <>
      <Header />
      <Chat />
      <Banner heading="Partner With Us" text="We can help your business by connecting you to conscious customers" bgColor={"#8b5028"} color={"#d1cbbe"} />
      <div className="layout_innerpages getintouch">
        <aside>
          <SoMe />
        </aside>
        {!showSMS ? (
          <section>
            <p>
              We’d love to hear from you with any ideas on working together . <br />
              We also encourage you to write to our amazing support team through the chat
            </p>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Your brand</Form.Label>
                <Form.Control type="text" placeholder="Your brand" onChange={(e) => setUserName(e.target.value)} value={userName} />
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
