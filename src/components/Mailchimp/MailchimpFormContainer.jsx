import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };
  useEffect(() => {
    if (status === "success") clearFields();
    if (status === "success") clearFields();
  }, [status]);

  const clearFields = () => {
    setEmail("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h3>{status === "success" ? "Welcome to our community!" : ""}</h3>

      {status === "sending" && <div>sending...</div>}
      {status === "error" && <div dangerouslySetInnerHTML={{ __html: message }} />}
      {status === "success" && <div dangerouslySetInnerHTML={{ __html: message }} />}
      {status !== "success" ? (
        <Form>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              value={email}
              placeholder="your@email.com"
            />
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>
        </Form>
      ) : null}
      {status !== "success" && (
        <Button formvalues={[email]} variant="primary" type="submit">
          Subscribe
        </Button>
      )}
    </form>
  );
};

const MailchimpFormContainer = (props) => {
  const postUrl = `https://littlessentials.us5.list-manage.com/subscribe/post?u=83b08747c892c56dbc2854023&id=9b68d9967b`;

  return (
    <div>
      <MailchimpSubscribe url={postUrl} render={({ subscribe, status, message }) => <CustomForm status={status} message={message} onValidated={(formData) => subscribe(formData)} />} />
    </div>
  );
};

export default MailchimpFormContainer;
