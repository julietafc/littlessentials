import Banner from "../components/Banner/Banner";
import Chat from "../components/Chat/Chat";
import Footer from "../components/Footer/Footer";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../sass/layout/layout.scss";
import Header from "../components/Header/Header";
export default function PartnerWithUs() {
  return (
    <>
      <Header />
      <Chat />
      <Banner heading="Partner With Us" text="We can help your business by connecting you conscious costumers" />
      <main className="layout_innerpages getintouch">
        <aside>
          <h6>Follow & Connect with us and our community</h6>
          <div className="social">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
          </div>
        </aside>
        <section>
          <p>
            We’d love to hear from you with any feedback or comments. <br />
            We also encourage you to write to our amazing support team through the chat
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Your name</Form.Label>
              <Form.Control type="text" placeholder="Your name" />
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
              <Form.Check type="checkbox" label="I've read the Terms & Conditions" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </section>
      </main>
      <Footer />
    </>
  );
}
