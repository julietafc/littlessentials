import Cards from "../Cards/Cards";
import "./SectionMission.scss";
export default function SectionMission(props) {
  return (
    <section>
      <Cards
        style="padding: 2em;background-color: red;"
        className="card"
        heading="Our mission"
        text="We offer high quality, timeless products for children that contribute to conscious consumption and waste reduction by partnering up with local designers & brands and addressing their surplus - benefiting your closet, wallet and the planet."
      />
      <Cards
        className="card"
        heading="Our mission"
        text="We offer high quality, timeless products for children that contribute to conscious consumption and waste reduction by partnering up with local designers & brands and addressing their surplus - benefiting your closet, wallet and the planet."
      />
    </section>
  );
}
