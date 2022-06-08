import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SectionNewsletter.scss";
import MailchimpFormContainer from "../Mailchimp/MailchimpFormContainer";

export default function SectionNewsletter(props) {
  return (
    <section className="news">
      <div className="_text">
        <h2>Stay updated</h2>
        <h5>{props.heading}</h5>
      </div>
      <MailchimpFormContainer />
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
  );
}
