import NavBar from "../components/NavBar/NavBar";
import "../sass/layout/layout.scss";
export default function Values() {
  return (
    <>
      <NavBar />
      <main className="layout_innerpages">
        <section>
          <img src="../assets/img04.png" alt="" />
          <div>
            <h3>Less is more, for sure.</h3>
            <h1>Our values</h1>
            <p>
              We aim at simplifying life, so we can focus on what really matters. While we’re at it, we want to reduce waste and support local brands. It’s all possible, by following a few steps. The time is here to live our lives with intention,
              kindness and care for the planet and its people.
            </p>
          </div>
        </section>
        <section className="articles_wrapper">
          <article>
            <p>
              <strong>Simplicity. </strong>
              <p>We aim to reduce clutter to have a clear mind, focusing only on the essential items needed for our children.</p>
            </p>
          </article>
          <article>
            <p>
              <strong>Authenticity</strong>
              <p>Being your honest, true self is a path of self-exploration. There is no end-goal, it’s all about the journey.</p>
            </p>
          </article>
          <article>
            <p>
              <strong>Inclusive </strong>
              <p>We celebrate our diversity as humans. No matter your gender, income level, or limitations, we are here to support you.</p>
            </p>
          </article>
          <article>
            <p>
              <strong>Inspirational </strong>
              <p>Parenthood is a rite of passage. We want to establish a community and platform where you can find resources, share struggles and celebrate your victories together.</p>
            </p>
          </article>
          <article>
            <p>
              <strong>Conscious </strong>
              <p>We want to create awareness so that we can live with intention. As we learn more, we share more.</p>
            </p>
          </article>
          <article>
            <p>
              <strong>Kind </strong>
              <p>We recognize that we all have our stories, struggles & learnings. We are empathetic and compassionate. Because we are all just human.</p>
            </p>
          </article>
        </section>
      </main>
    </>
  );
}
