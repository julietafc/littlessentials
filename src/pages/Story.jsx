import Banner from "../components/Banner/Banner";
import Chat from "../components/Chat/Chat";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import "../sass/layout/layout.scss";
export default function Story() {
  return (
    <div className="guide_wrapper">
      <Header />
      <Chat />
      <Banner heading="Our story" text="Follow our simple guide for best care practices of your children’s clothing, toys & gear. Make your items last and use them again and again." bgColor={"#f0f0f0"} color={"#8b5028"} />
      <div className="layout_innerpages getintouch guide">
        <aside>
          <h6>Follow & Connect with us and our community</h6>
          <div className="social">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
          </div>
        </aside>
        <section>
          <h3>Our mission </h3>
          <p>
            We offer high quality, timeless products for children that contribute to conscious consumption and waste reduction by partnering up with local designers & brands and addressing their surplus - benefiting your closet, wallet and the
            planet.
          </p>
          <h3>Who is this for? </h3>
          <p>
            Our subscription service curates essential items for your children in a simple & convenient way, removing a part of the overwhelm that comes with being a parent at times. We’re here to empower you, so you can simplify your life and make
            more time for your kids, family and yourself.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
}
