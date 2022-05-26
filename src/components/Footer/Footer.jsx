import { Link } from "react-router-dom";
import "./Footer.scss";
import LElement from "../LElement/LElement";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Footer(props) {
  return (
    <footer>
      <div className="footer_wrapper">
        <div className="main_grid">
          <p className="tagline">
            essentials for your children, yourself and the planet.
            <br />
            <strong>littl</strong>essentials impacts everyone.
          </p>
          <div className="social">
            <div className="some">
              <a href="https://www.instagram.com/littlessentialsuniverse/?hl=es" target="_blank">
                Instagram
              </a>
              <a href="https://www.facebook.com/littlessentialsuniverse" target="_blank">
                Facebook
              </a>
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Subscribe
              </Button>
            </Form>
          </div>
          <div className="nav">
            <div className="column">
              <h4>how it works</h4>
              <Link to="/how-it-works">Step by step</Link>
            </div>
            <div className="column">
              <h4>about</h4>
              <Link to="/guide">Our guide</Link>
              <Link to="/story">Our story</Link>
              <Link to="/values">Our values</Link>
              <Link to="/lowcarbon">Low carbon</Link>
              <Link to="/faq">FAQ</Link>
            </div>
            <div className="column">
              <h4>partners</h4>
              <Link to="/brands">Brands </Link>
              <Link to="/ngos">NGOs </Link>
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
      </div>
    </footer>
  );
}
