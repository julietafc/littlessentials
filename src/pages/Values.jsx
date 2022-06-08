import Banner from "../components/Banner/Banner";
import Chat from "../components/Chat/Chat";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SoMe from "../components/SoMe/SoMe";
import "../sass/layout/layout.scss";
export default function Values() {
  return (
    <>
      <Header />
      <Chat />
      <Banner className="banner_guide" heading="Our values" text="Sourcing environmentally friendly brands to simplify parenting." bgColor={"#d1cbbe"} color={"#8b5028"} />
      <div className="layout_innerpages">
        <aside>
          <SoMe />
          <img className="el" src="../../assets/color_hands.svg" alt="moon shapes tan color" />
        </aside>
        <section>
          <h3>Simplicity </h3>
          <p>We aim to reduce clutter to have a clear mind, focusing only on the essential items needed for our children.</p>
          <h3>Authenticity </h3>
          <p>Being your honest, true self is a path of self-exploration. There is no end-goal, it’s all about the journey.</p>
          <h3>Inclusive </h3>
          <p>We celebrate our diversity as humans. No matter your gender, income level, or limitations, we are here to support you.</p>
          <h3>Inspirational</h3>
          <p>Parenthood is a rite of passage. We want to establish a community and platform where you can find resources, share struggles and celebrate your victories together.</p>
          <h3>Inspirational</h3>
          <p>Parenthood is a rite of passage. We want to establish a community and platform where you can find resources, share struggles and celebrate your victories together.</p>
          <h3>Conscious</h3>
          <p>We want to create awareness so that we can live with intention. As we learn more, we share more.</p>
          <h3>Kind</h3>
          <p>We recognize that we all have our stories, struggles & learnings. We are empathetic and compassionate. Because we are all just human.</p>
        </section>
      </div>
      <Footer />
    </>
  );
}
