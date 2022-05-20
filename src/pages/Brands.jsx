import Banner from "../components/Banner/Banner";
import Chat from "../components/Chat/Chat";
import Footer from "../components/Footer/Footer";

import Card from "react-bootstrap/Card";
import "../sass/layout/layout.scss";
import Header from "../components/Header/Header";
export default function Brands() {
  return (
    <>
      <Header />
      <Chat />
      <Banner heading="Brands" text="We source products of brands that we believe in and we know will contribute to your little one’s developmental milestones and growth. " />
      <main className="layout_innerpages brands">
        <Card className="card_brand" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./assets/img06.png" />
          <Card.Body>
            <Card.Title>Liewood</Card.Title>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Learn More</Card.Link>
          </Card.Body>
        </Card>
        <Card className="card_brand" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./assets/img06.png" />
          <Card.Body>
            <Card.Title>Konges Sløjd</Card.Title>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Learn More</Card.Link>
          </Card.Body>
        </Card>
        <Card className="card_brand" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./assets/img06.png" />
          <Card.Body>
            <Card.Title>Soft Gallery</Card.Title>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Learn More</Card.Link>
          </Card.Body>
        </Card>
        <Card className="card_brand" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./assets/img06.png" />
          <Card.Body>
            <Card.Title>CamCam Copenhagen</Card.Title>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Learn More</Card.Link>
          </Card.Body>
        </Card>
        <Card className="card_brand" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./assets/img06.png" />
          <Card.Body>
            <Card.Title>Smallstuff</Card.Title>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Learn More</Card.Link>
          </Card.Body>
        </Card>
        <Card className="card_brand" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./assets/img06.png" />
          <Card.Body>
            <Card.Title>Wauw Kapow</Card.Title>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Learn More</Card.Link>
          </Card.Body>
        </Card>
        <Card className="card_brand" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./assets/img06.png" />
          <Card.Body>
            <Card.Title>Fabelab</Card.Title>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Learn More</Card.Link>
          </Card.Body>
        </Card>
      </main>
      <Footer />
    </>
  );
}
