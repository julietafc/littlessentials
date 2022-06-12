import styles from "./updateProfile.module.scss";
import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

import Chat from "../../components/Chat/Chat";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../ScrollToTop";
import "../../sass/layout/layout.scss";
import Header from "../../components/Header/Header";

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const nameRef = useRef();
  const { theUser, udEmail, udPassword, udName } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("passwords do not match");
    }

    const promises = [];

    setError("");
    setLoading(true);

    if (emailRef.current.vale !== theUser.email) {
      promises.push(udEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(udPassword(passwordRef.current.value));
    }
    if (nameRef.current.value) {
      promises.push(udName(nameRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        navigate("/profile");
      })
      .catch(() => {
        setError("Fail to update an account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <ScrollToTop />
      <Header />
      <Chat />
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Update Profile</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="userName" className="mb-4">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" ref={nameRef} required defaultValue={theUser.displayName}></Form.Control>
                </Form.Group>
                <Form.Group id="email" className="mb-4">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required defaultValue={theUser.email}></Form.Control>
                </Form.Group>
                <Form.Group id="password" className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} placeholder="Leave blank to keep the same"></Form.Control>
                </Form.Group>
                <Form.Group id="password-confirm" className="mb-4">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control type="password" ref={passwordConfirmRef} placeholder="Leave blank to keep the same"></Form.Control>
                </Form.Group>
                <Button disabled={loading} className="w-100 mt-3 btn-desert" type="submit">
                  Update
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            <Link to="/profile">Cacel</Link>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
