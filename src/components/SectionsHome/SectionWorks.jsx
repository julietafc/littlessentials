import Button from "../Button/Button";
import "./SectionWorks.scss";
export default function SectionWorks(props) {
  return (
    <section className="works">
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
      <div className="">
        <h2 className="">Simply subscribe, enjoy and pass it on</h2>
        <p>With littlessentials you make a difference and reduce your family’s carbon footprint by renting high quality products instead of buying.</p>
        <Button label="learn more" />
      </div>
    </section>
  );
}
