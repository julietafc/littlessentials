import Link from "react-router-dom";
import "./Footer.scss";
import LElement from "../LElement/LElement";

export default function Footer(props) {
  return (
    <footer>
      <div className="main_grid">
        <p className="tagline">
          essentials for your children, yourself and the planet. <br /> <strong>littl</strong>essentials impacts everyone.
        </p>
        <div className="nav">
          <div className="column">
            <h4>how it works</h4>
            <Link to="/step-by-step">step by step</Link>
            <Link to="/faq">FAQ</Link>
          </div>
          <div className="column">
            <h4>about</h4>
            <Link to="/guide">our guide</Link>
            <Link to="/story">our story</Link>
            <Link to="/values">core values</Link>
            <Link to="/carbon">low carbon</Link>
          </div>
          <div className="column">
            <h4>partners</h4>
            <Link to="/brands">brands </Link>
          </div>
          <div className="column">
            <h4>connect</h4>
            <Link to="/get-in-touch">get in touch </Link>
            <Link to="/partner-with-us">partner with us </Link>
          </div>
        </div>
      </div>
      <div className="footer_footer">
        <p>
          © 2022 <strong>littl</strong>essentials
        </p>
        <Link to="/">
          <LElement width="35" color="white"></LElement>
        </Link>
      </div>
    </footer>
  );
}
