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
        <p>
          We are invested in the origin of our partners products and look for the highest quality goods. Some of the labels we look into when onboarding partners are GOTS (Certified 100% Organic Cotton & Socially Responsible) for clothing, FSC
          (Responsible Forestry) for wooden & paper toys, OEKO-Tex® Standard 100 and B-Corporation. We also look into products that are free from BPA & phthalates for utensils and tableware.
        </p>
        <div className="card_wrapper">
          <Card className="card_brand" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="./assets/img06.png" />
            <Card.Body>
              <Card.Title>Liewood</Card.Title>
              <Card.Link href="#">Learn More</Card.Link>
              {/* <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text> */}
            </Card.Body>
          </Card>
          <Card className="card_brand" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="./assets/img06.png" />
            <Card.Body>
              <Card.Title>Konges Sløjd</Card.Title>
              <Card.Link href="#">Learn More</Card.Link>
              {/* <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text> */}
            </Card.Body>
          </Card>
          <Card className="card_brand" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="./assets/img06.png" />
            <Card.Body>
              <Card.Title>Soft Gallery</Card.Title>
              <Card.Link href="#">Learn More</Card.Link>
              {/* <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text> */}
            </Card.Body>
          </Card>
          <Card className="card_brand" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="./assets/img06.png" />
            <Card.Body>
              <Card.Title>CamCam Copenhagen</Card.Title>
              <Card.Link href="#">Learn More</Card.Link>
              {/* <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text> */}
            </Card.Body>
          </Card>
          <Card className="card_brand" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="./assets/img06.png" />
            <Card.Body>
              <Card.Title>Smallstuff</Card.Title>
              <Card.Link href="#">Learn More</Card.Link>
              {/* <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text> */}
            </Card.Body>
          </Card>
          <Card className="card_brand" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="./assets/img06.png" />
            <Card.Body>
              <Card.Title>Wauw Kapow</Card.Title>
              <Card.Link href="#">Learn More</Card.Link>
              {/* <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text> */}
            </Card.Body>
          </Card>
          <Card className="card_brand" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="./assets/img06.png" />
            <Card.Body>
              <Card.Title>Fabelab</Card.Title>
              <Card.Link href="#">Learn More</Card.Link>
              {/* <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text> */}
            </Card.Body>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
