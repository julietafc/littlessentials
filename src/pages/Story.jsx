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
      <Banner heading="Our story" text="On a mission to provide parents with organic children's clothing, sustainable toys & gear, so they can focus on what really matters." bgColor={"#f0f0f0"} color={"#8b5028"} />
      <div className="layout_innerpages">
        <aside>
          <div>
            <h6>Follow & Connect with us and our community</h6>
            <div className="social">
              <a href="https://www.instagram.com/littlessentialsuniverse/?hl=es" target="_blank">
                Instagram
              </a>
              <a href="https://www.facebook.com/littlessentialsuniverse" target="_blank">
                Facebook
              </a>
            </div>
          </div>
          <img className="el" src="../../assets/color_eco.svg" alt="moon shapes tan color" />
        </aside>
        <section>
          <h3>Our mission </h3>
          <p>
            We offer high quality, timeless products for children that contribute to conscious consumption and waste reduction by partnering up with local designers & brands and addressing their surplus - benefiting your closet, wallet and the
            planet.
          </p>
          <h3>Who are we? </h3>
          <p>
            Littlessentials was created by three Copenhagen-based designers, out of a shared value for sustainability and desire to make a difference in the world. As parents and parents-to-be of the future generation, we have come to understand the
            amount of potential waste generated with having kids. On average, children will use about 280 pieces of clothing in just the first two years of their life. Because they grow so fast, most of these are only worn for 2-3 months, and are
            discarded while still being in good condition. This creates two issues; parents constantly need to purchase new items for their children and a huge amount of unnecessary waste is generated.
          </p>
          <p>
            To combat these problems, Littlessentials curates the most essential items of clothing, toys and other gear necessary for children aged 0-6, so that parents can enjoy their time with those that matter most, their family. We have partnered
            up with local brands that offer high-quality, timeless products and work with their overstock in order to reduce waste. When your children have grown out of their items, you can pass them on to our NGO partners, so that the items aren't
            discarded, but can be enjoyed by others in your community.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
}
