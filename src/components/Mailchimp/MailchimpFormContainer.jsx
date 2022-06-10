import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";
// import { useGHStContext } from "../../../utils/ContextProvider";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated }) => {
  // const { modalOpen, setModalOpen } = useGHStContext();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [modal, setModalOpen] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      firstName &&
      lastName &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
        MERGE1: firstName,
        MERGE2: lastName,
      });
  };
  useEffect(() => {
    if (status === "success") clearFields();
    if (status === "success") clearFields();
  }, [status]);

  const clearFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
      <h3 className="mc__title">{status === "success" ? "Success!" : "Join our email list for future updates."}</h3>

      {status === "sending" && <div className="mc__alert mc__alert--sending">sending...</div>}
      {status === "error" && <div className="mc__alert mc__alert--error" dangerouslySetInnerHTML={{ __html: message }} />}
      {status === "success" && <div className="mc__alert mc__alert--success" dangerouslySetInnerHTML={{ __html: message }} />}
      {status !== "success" ? (
        <div className="mc__field-container">
          <input
            label="First Name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            type="text"
            value={firstName}
            placeholder="Your email"
            isRequired
          />

          <input
            label="Last Name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            type="text"
            value={lastName}
            placeholder="Your last name"
            isRequired
          />

          <input
            label="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            value={email}
            placeholder="your@email.com"
            isRequired
          />
        </div>
      ) : null}

      {/*Close button appears if form was successfully sent*/}
      {status !== "success" && <input label="subscribe" type="submit" formValues={[email, firstName, lastName]} />}
    </form>
  );
};

const MailchimpFormContainer = (props) => {
  const postUrl = `https://littlessentials.us5.list-manage.com/subscribe/post?u=83b08747c892c56dbc2854023&id=9b68d9967b`;

  return (
    <div className="mc__form-container">
      <MailchimpSubscribe url={postUrl} render={({ subscribe, status, message }) => <CustomForm status={status} message={message} onValidated={(formData) => subscribe(formData)} />} />
    </div>
  );
};

export default MailchimpFormContainer;
