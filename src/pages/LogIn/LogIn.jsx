import styles from "./logIn.module.scss";
import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { useButtonsState } from "../../contexts/ButtonsStateContext";
import { useSubscription } from "../../contexts/SubscriptionContext";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function LogIn() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login, loginWithGoogle } = useAuth();
  const { setShowSignup, setShowLogin } = useButtonsState();
  const { inSubscription, setInSubscription } = useSubscription();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  let location = useLocation();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value).then((ress) => {
        console.log(ress);
      });
      if (location.pathname === "/subscription") {
        navigate("/subscription");
      } else {
        navigate("/profile", { replace: true });
      }
    } catch {
      setError("Fail to sign in");
    }

    setLoading(false);
  }

  return (
    <Container className="d-flex align-items-center justify-content-center">
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card class={styles.card}>
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit} className="border-bottom pb-2">
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required></Form.Control>
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required></Form.Control>
              </Form.Group>
              <Button disabled={loading} className="w-100 mt-4 mb-3" type="submit">
                Log In
              </Button>
            </Form>

            <Button
              className="w-100 mt-4 btn-desert"
              onClick={() => {
                setLoading(true);
                loginWithGoogle().then((ress) => {
                  setLoading(false);
                  console.log(location.pathname);
                  if (location.pathname === "/subscription") {
                    navigate("/subscription");
                  } else {
                    navigate("/profile", { replace: true });
                  }
                });
              }}
            >
              Log In With Google
            </Button>

            <div className="w-100 text-center mt-4 border-top pt-2 ">
              <Link to="/forgot-password">Forgot Password</Link>
            </div>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Do you need an account?
          <Button
            variant="link"
            onClick={() => {
              setShowLogin(false);
              setShowSignup(true);
            }}
          >
            sign up
          </Button>
        </div>
      </div>
    </Container>
  );
}
