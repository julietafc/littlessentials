import "./SectionNewsletter.scss";
import MailchimpFormContainer from "../Mailchimp/MailchimpFormContainer";

export default function SectionNewsletter(props) {
  return (
    <section className="news">
      <div className="_text">
        <h2>{props.title}</h2>
        <h5>{props.heading}</h5>
      </div>
      <MailchimpFormContainer />
    </section>
  );
}
