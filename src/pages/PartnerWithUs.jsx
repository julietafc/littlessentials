import Banner from "../components/Banner/Banner";
import Chat from "../components/Chat/Chat";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../sass/layout/layout.scss";
export default function PartnerWithUs() {
  return (
    <>
      <NavBar />
      <Chat />
      <Banner heading="Get in touch" text="Don't hesitate to reach out! We'd love to hear from you" />
      <main className="layout_innerpages getintouch">
        <aside>
          <h6>Follow & Connect with us and our community</h6>
        </aside>
        <section>
          <p>
            We’d love to hear from you with any feedback or comments. <br />
            We also encourage you to write to our amazing support team through the chat
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
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
