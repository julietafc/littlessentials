import styles from "./signUp.module.scss";
import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container, Spinner } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const userNameRef = useRef();
  const { signup, loginWithGoogle, setShowSignup, setShowLogin } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    // function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value, userNameRef.current.value);
    } catch {
      setError("Fail to create an account");
    }

    setLoading(false);
    navigate("/subscription", { replace: true });
  }

  return (
    <Container className="d-flex align-items-center justify-content-center">
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit} className="border-bottom pb-4">
              <Form.Group id="userName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" ref={userNameRef} required></Form.Control>
              </Form.Group>
              <Form.Group id="email" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required></Form.Control>
              </Form.Group>
              <Form.Group id="password" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required></Form.Control>
              </Form.Group>
              <Form.Group id="password-confirm" className="mb-3">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password" ref={passwordConfirmRef} required></Form.Control>
              </Form.Group>

              <Button disabled={loading} className="w-100 mt-2  btn-desert" type="submit">
                {loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : "Sign Up"}
              </Button>
            </Form>

            <Button
              className="w-100 mt-4 btn-desert"
              onClick={() =>
                loginWithGoogle().then(() => {
                  setLoading(false);
                  navigate("/subscription", { replace: true });
                })
              }
            >
              Sign Up With Google
            </Button>
          </Card.Body>
        </Card>

        <div className="w-100 text-center mt-2">
          Already have an account?{" "}
          <Button
            variant="link"
            onClick={() => {
              setShowSignup(false);
              setShowLogin(true);
            }}
          >
            Log In
          </Button>
        </div>
      </div>
    </Container>
  );
}
