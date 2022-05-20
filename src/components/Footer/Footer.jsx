import { Link } from "react-router-dom";
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
            <Link to="/step-by-step">Step by step</Link>
            <Link to="/faq">FAQ</Link>
          </div>
          <div className="column">
            <h4>about</h4>
            <Link to="/guide">Our guide</Link>
            <Link to="/story">Our story</Link>
            <Link to="/values">Core values</Link>
            <Link to="/carbon">Low carbon</Link>
          </div>
          <div className="column">
            <h4>partners</h4>
            <Link to="/brands">Brands </Link>
          </div>
          <div className="column">
            <h4>connect</h4>
            <Link to="/get-in-touch">Get in touch </Link>
            <Link to="/partner-with-us">Partner with us </Link>
          </div>
        </div>
      </div>
      <div className="footer_footer">
        <div className="right_side">
          <p>
            © 2022 <strong>littl</strong>essentials
          </p>
          <Link to="/policy">Privacy Policy</Link>
          <Link to="/policy">Refund Policy</Link>
          <Link to="/policy">Shipping Policy</Link>
        </div>
        <Link to="/">
          <LElement width="35" color="white"></LElement>
        </Link>
      </div>
    </footer>
  );
}
