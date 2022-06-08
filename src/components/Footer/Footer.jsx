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
              <a title="external link to Littlessentials' instagram account" href="https://www.instagram.com/littlessentialsuniverse/?hl=es" target="_blank">
                Instagram
              </a>
              <a title="external link to Littlessentials' facebook account" href="https://www.facebook.com/littlessentialsuniverse" target="_blank">
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
              <Link title="link to how it works page" to="/how-it-works">
                Step by step
              </Link>
            </div>
            <div className="column">
              <h4>about</h4>
              <Link title="link to Littlessentials' care guide" to="/guide">
                Our guide
              </Link>
              <Link title="link to Littlessentials' story" to="/story">
                Our story
              </Link>
              <Link title="link to Littlessentials' values" to="/values">
                Our values
              </Link>
              <Link title="link to low carbon information" to="/lowcarbon">
                Low carbon
              </Link>
              <Link title="link to frequently asked questions' page" to="/faq">
                FAQ
              </Link>
            </div>
            <div className="column">
              <h4>partners</h4>
              <Link title="link to Littlessentials' current partners" to="/brands">
                Brands
              </Link>
              <Link title="link to Littlessentials' ngos partners" to="/ngos">
                NGOs
              </Link>
            </div>
            <div className="column">
              <h4>connect</h4>
              <Link title="link to contact form for customers" to="/get-in-touch">
                Get in touch
              </Link>
              <Link title="link to contact form for potential partners" to="/partner-with-us">
                Partner with us{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="footer_footer">
          <div className="right_side">
            <p>
              © 2022 <strong>littl</strong>essentials
            </p>
            <Link title="link to Littlessentials' privacy policy" to="/policy">
              Privacy Policy
            </Link>
            <Link title="link to Littlessentials' refund policy" to="/policy">
              Refund Policy
            </Link>
            <Link title="link to Littlessentials' shipping policy" to="/policy">
              Shipping Policy
            </Link>
          </div>

          <Link to="/">
            <LElement width="35" color="white"></LElement>
          </Link>
        </div>
      </div>
    </footer>
  );
}
