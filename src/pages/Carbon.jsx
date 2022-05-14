import NavBar from "../components/NavBar/NavBar";
import "../sass/layout/layout.scss";
export default function Carbon() {
  return (
    <>
      <NavBar />
      <main className="layout">
        <h2>Carbon</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
    </>
  );
}
