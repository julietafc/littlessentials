import React, { useState } from "react";

import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

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

  return (
    <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
      <div className="mc__field-container">
        <input label="First Name" onChangeHandler={setFirstName} type="text" value={firstName} placeholder="Your email" isRequired />

        <input label="Last Name" onChangeHandler={setLastName} type="text" value={lastName} placeholder="Your last name" isRequired />

        <input label="Email" onChangeHandler={setEmail} type="email" value={email} placeholder="your@email.com" isRequired />
      </div>

      <input label="subscribe" type="submit" formvalues={[email, firstName, lastName]} />
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
