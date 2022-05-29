import Header from "../components/Header/Header";
import "./Carbon.scss";
import "../sass/layout/layout.scss";
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
          <article className="reverse">
            <h4>Not loading images before they are actively requested </h4>
            <img src="../assets/load.svg" alt="loading icon" />
          </article>
          <article>
            <img src="../assets/power.svg" alt="power icon" />
            <h4>Minimizing the power consumption on devices </h4>
          </article>
          <article className="reverse">
            <h4>Not using videos</h4>
            <img src="../assets/video.svg" alt="video icon" />
          </article>
          <article>
            <img src="../assets/data.svg" alt="cloud data icon" />
            <h4>Storing data locally </h4>
          </article>
          <article className="reverse">
            <h4>Optimizing and limiting the use of custom fonts</h4>
            <img src="../assets/font.svg" alt="font icon" />
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
