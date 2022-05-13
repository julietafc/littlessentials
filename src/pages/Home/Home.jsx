// import SecInfo from "components/SecInfo";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
        {/* <SecInfo></SecInfo>
        <CircularText texto="littlessentials the best box" offsetY={offsetY} />
        <SecInfo></SecInfo>
        <SecInfo></SecInfo> */}
        <nav>
          <Link to="About">Home</Link>
        </nav>
      </main>
    </>
  );
}
