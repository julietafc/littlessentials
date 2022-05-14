import Cards from "../Cards/CardsMission";
import "./SectionMission.scss";
export default function SectionMission(props) {
  return (
    <section className="mission">
      <Cards
        style="padding: 2em;background-color: red;"
        className="card"
        heading="Our mission"
        text="We offer high quality, timeless products for children that contribute to conscious consumption and waste reduction by partnering up with local designers & brands and addressing their surplus - benefiting your closet, wallet and the planet."
      />
      <Cards
        className="card"
        heading="Who is this for?"
        text="Our subscription service curates essential items for your children in a simple & convenient way, removing a part of the overwhelm that comes with being a parent at times. We’re here to empower you, so you can simplify your life and make more time for your kids, family and yourself."
      />
    </section>
  );
}
