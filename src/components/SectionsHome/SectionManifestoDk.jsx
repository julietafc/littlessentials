import CardFlip from "../Cards/CardFlip";
import Button from "../Button/Button";
import "./SectionManifesto.scss";
import { Link } from "react-router-dom";
export default function SectionValues(props) {
  return (
    <div className="wrapper">
      <section className="manifestodk">
        <div className="header">
          <h2>Our Manifesto</h2>
          <Link className="button_manifesto" to="/values">
            <Button label="our values" />
          </Link>
        </div>
        <div className="cards_container">
          <CardFlip bgColor={"#f0f0f0"} number="01" heading="Curation" description="Curating essential items so we have what we need, and we use what we have." />
          <CardFlip number="02" heading="Local" description="Acting locally we not only put great brands in the spotlight, but we also reduce our carbon footprint by small distances in transport." />
          <CardFlip number="03" heading="Circularity" description="Encouraging circularity through teaming up with Mødrehjælpen and Red Barnet shops, where you can send the items you no longer need, yet are still usable." />
          <CardFlip number="04" heading="Community" description="Inspiring a sense of community and engaging in conversation, because the journey of parenting is not one we’re alone on and it does take a village." />
          <CardFlip
            number="05"
            heading="Low Carbon
"
            description="Facilitating a conscious, low carbon emission footprint. Working with local brands reduces transportation emissions, using overstock products that haven’t found a home and encouraging circularity."
          />
          <CardFlip number="06" heading="Conscious" description="Promoting a conscious lifestyle in every sense, from what we buy to how to eat healthier and spend more quality time together as a family." />
        </div>
      </section>
    </div>
  );
}
