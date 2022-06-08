import "./SectionManifesto.scss";
import Button from "../Button/Button";
import "./SectionIG.scss";
import { Link } from "react-router-dom";
export default function SectionIG(props) {
  return (
    <div className="wrapper">
      <section className="instagram">
        <div className="header">
          <h2>Follow our journey</h2>

          <a title="external link to Littlessentials' instagram account" href="https://www.instagram.com/littlessentialsuniverse/?hl=es" target="_blank">
            <Button className="button_news" label="check us out" />
          </a>
        </div>
        <div className="img_wrapper">
          <img src="../assets/img07.webp" alt="kids garments and accesories" />
          <img src="../assets/img08.webp" alt="instagram post with sign in invitation" />
          <img src="../assets/img09.webp" alt="wood camera toy for kids" />
          <img src="../assets/img10.webp" alt="five star review" />
        </div>
      </section>
    </div>
  );
}
