import NavBar from "../components/NavBar/NavBar";
import "../sass/layout/layout.scss";
export default function Manifesto() {
  return (
    <>
      <NavBar />
      <main className="layout">
        <h2>Manifesto</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
    </>
  );
}
