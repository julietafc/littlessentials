import Cards from "../Cards/CardsMission";
import "./SectionMission.scss";
export default function SectionNewsletter(props) {
  return (
    <section>
      <h4>Stay in the loop</h4>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign up
        </Button>
      </Form>
    </section>
  );
}
