import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SectionNewsletter(props) {
  return (
    <section className="news">
      <h5>Receive 10% off your first order when you sign up for our newsletter.</h5>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Subscribe
        </Button>
      </Form>
    </section>
  );
}
