import React, { useState, useEffect } from "react";
import Chat from "../../components/Chat/Chat";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../ScrollToTop";
import "../../sass/layout/layout.scss";
import Header from "../../components/Header/Header";

import { Card, Button, Alert, Container } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { getSubscription } from "../../modules/fetchSubscription";

export default function Profile(props) {
  const { theUser, logout, theUserName } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getSubscription(theUser.uid, setLoading);
  }, []);

  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigate("/");
    } catch {
      setError("Failed to log out");
    }
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
              <h2 className="text-center mb-4">Profile</h2>

              {error && <Alert variant="danger">{error}</Alert>}

              {theUser && (
                <>
                  <strong>Name: </strong>
                  <p>{theUser.displayName ? theUser.displayName : theUserName}</p>
                  <strong>Email: </strong>
                  <p>{theUser.email}</p>
                </>
              )}
              <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                Update Profile
              </Link>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            <Button variant="link" onClick={handleLogout}>
              Log Out
            </Button>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
