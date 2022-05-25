import Banner from "../components/Banner/Banner";
import Chat from "../components/Chat/Chat";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import "../sass/layout/layout.scss";
export default function StepByStep() {
  return (
    <div className="guide_wrapper">
      <Header />
      <Chat />
      <Banner
        heading="How it works"
        text="With littlessentials you make a difference and reduce your family’s carbon footprint by renting high quality products instead of buying.

"
        bgColor={"#cf9345"}
        color={"#f0f0f0"}
      />
      <div className="layout_innerpages getintouch guide">
        <aside>
          <h6>Follow & Connect with us and our community</h6>
          <div className="social">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
          </div>
        </aside>
        <section>
          <h3>Avoid perfumes in washing products & softeners </h3>
          <p>Avoid contact with harsh perfumes in detergents. These will wear out your garments faster. Use neutral soaps or natural products such as soap berries instead. If you like fragrances, you can use a few drops of essential oils.</p>
          <h3>Air out </h3>
          <p>Avoid contact with harsh perfumes in detergents. These will wear out your garments faster. Use neutral soaps or natural products such as soap berries instead. If you like fragrances, you can use a few drops of essential oils.</p>
          <h3>Store in a closed wardrobe </h3>
          <p>Keep your items in a closed off wardrobe to avoid dust and humidity. Keep your toys in toy bags or boxes.</p>
          <h3>Pass it on</h3>
          <p>Pass the items your child has outgrown on to a friend, family member or to one of our local partners. Read more about our partners here.</p>
        </section>
      </div>
      <Footer />
    </div>
  );
}
