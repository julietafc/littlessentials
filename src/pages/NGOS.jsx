import Banner from "../components/Banner/Banner";
import Chat from "../components/Chat/Chat";
import Footer from "../components/Footer/Footer";
import Card from "react-bootstrap/Card";
import "../sass/layout/layout.scss";
import Header from "../components/Header/Header";
export default function NGOS() {
  return (
    <>
      <Header />
      <Chat />
      <Banner heading="Encouraging Circularity" text="We invite you to pass on the items you no longer need to one of our circularity partners listed below." bgColor={"#f1e9de"} color={"#8b5028"} />
      <div className="layout_innerpages brands">
        <p>
          Children grow out of clothing faster than any other group, and many times what we no longer need is still 100% usable by others. So instead of wasting these items, we encourage you to pass on the items you no longer need to one of our
          circularity partners, who will make sure they get a new home. In every Littlessentials package shipped to you, you will find an envelope and label directed to one of our local NGO partners. You can use this to easily send the items you no
          longer need. Currently we are teamed up with every Mødrehjælpen and Red Barnet shop across Denmark, so you can also just drop by with your used items. In doing so, you make sure they’ll get used by others within your local community.
        </p>
        <div className="card_wrapper_ngos">
          <Card className="card_brand" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="./assets/img06.png" />
            <Card.Body>
              <Card.Title>Mødrehjælpen</Card.Title>
              <Card.Link href="https://moedrehjaelpen.dk/">https://moedrehjaelpen.dk/</Card.Link>
              {/* <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text> */}
            </Card.Body>
          </Card>
          <Card className="card_brand" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="./assets/img06.png" />
            <Card.Body>
              <Card.Title>Red Barnet</Card.Title>
              <Card.Link href="https://redbarnet.dk/">https://redbarnet.dk/</Card.Link>
              {/* <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text> */}
            </Card.Body>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}
