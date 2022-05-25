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
          <div>
            <h6>Follow & Connect with us and our community</h6>
            <div className="social">
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
            </div>
          </div>
          <img className="el" src="../../assets/color_eco.svg" alt="moon shapes tan color" />
        </aside>
        <section>
          <h3>Step 1. Subscribe </h3>
          <p>
            In a few simple steps let us know your child’s age, style and how often you would like to get your package delivered. We have a monthly and seasonally subscription, so there’s something for everyone. Your subscription will be curated just
            for you, providing you with the essential clothing, toys & gear your child needs.
          </p>
          <h3>Step 2. Enjoy</h3>
          <p>By subscribing to our services, you won’t have to think about the next items your fast-growing little one needs. It will free up time, space and money - so you can focus on what really matters, your family.</p>
          <h3>Step 3. Pass it on </h3>
          <p>
            We have partnered up with local NGOs where you can drop off the items you no longer need, so that others can keep enjoying them. By passing them on, the items last longer and become more sustainable, and you get to help others in the
            process. It’s a win for your local community and the planet.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
}
