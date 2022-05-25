import Header from "../components/Header/Header";
import "./Carbon.scss";
import Chat from "../components/Chat/Chat";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
export default function Carbon() {
  return (
    <>
      <Header />
      <Chat />
      <Banner
        className="banner_guide"
        heading="Less is more for sure"
        text="We align our online presence with what we believe in; removing the clutter and simplifying our lives, therefore focusing on what matters while minimizing our footprint, also digitally."
        bgColor={"#f0f0f0"}
        color={"#8b5028"}
      />
      <div className="lowcarbon">
        <section className="section2">
          <h2>Together me can make a change</h2>
          <p>Here are a few ways we have reduced our digital footprint:</p>
        </section>
        <section className="section3">
          <article>
            <h5>Not loading images before they are actively requested </h5>
            <img src="../assets/im01.png" alt="" />
          </article>
          <article>
            <img src="../assets/im01.png" alt="" />
            <h5>Minimizing the power consumption on devices </h5>
          </article>
          <article>
            <h5>Not using videos</h5>
            <img src="../assets/im01.png" alt="" />
          </article>
          <article>
            <img src="../assets/im01.png" alt="" />
            <h5>Storing data locally </h5>
          </article>
          <article>
            <h5>Optimizing and limiting the use of custom fonts</h5>
            <img src="../assets/im01.png" alt="" />
          </article>
        </section>
        <section className="section1">
          <p>
            If you would like more info about how you can reduce your digital footprint, feel free to reach out to us via info@littlessentials.dk and we’ll be happy to share what we know with you. Every small change starts with a seed of awareness.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}
