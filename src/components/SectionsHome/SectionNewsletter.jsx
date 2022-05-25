import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SectionNewsletter.scss";

export default function SectionNewsletter(props) {
  return (
    <div className="wrapper">
      <section className="news">
        <h5>{props.heading}</h5>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I agree with Littlessentials Privacy Policy" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Subscribe
          </Button>
        </Form>
      </section>
    </div>
  );
}
