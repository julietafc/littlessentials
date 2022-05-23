import "./SectionManifesto.scss";
import Button from "../Button/Button";
import "./SectionIG.scss";
export default function SectionIG(props) {
  return (
    <div className="wrapper">
      <section className="instagram">
        <div className="header">
          <h2>Follow our journey</h2>
          <Button className="button_news" label="check us out" />
        </div>
        <div className="img_wrapper">
          <img src="../assets/img07.png" alt="" />
          <img src="../assets/img08.png" alt="" />
          <img src="../assets/img09.png" alt="" />
          <img src="../assets/img10.png" alt="" />
        </div>
      </section>
    </div>
  );
}
