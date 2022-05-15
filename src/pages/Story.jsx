import NavBar from "../components/NavBar/NavBar";
import "../sass/layout/layout.scss";
export default function Story() {
  return (
    <>
      <NavBar />
      <main className="layout">
        <h2>Story</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
    </>
  );
}