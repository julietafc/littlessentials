import Button from "../Button/Button";
import "./SectionWorks.scss";
import "../../sass/layout/layout.scss";
import { Link } from "react-router-dom";
export default function SectionWorks(props) {
  return (
    <div className="wrapper">
      <section className="works">
        <div className="header">
          <h2>High quality items for each phase of your child's growth</h2>
          <Link to="step-by-step">
            <Button label="learn more" />
          </Link>
        </div>
        <div className="steps">
          <div>
            <h1>01.</h1>
            <h3>Subscribe</h3>
          </div>
          <div>
            <h1>02.</h1>
            <h3>Enjoy</h3>
          </div>
          <div>
            <h1>03.</h1>
            <h3>Pass it on</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
