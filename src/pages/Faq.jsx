import Banner from "../components/Banner/Banner";
import NavBar from "../components/NavBar/NavBar";
import Accordion from "react-bootstrap/Accordion";
import Chat from "../components/Chat/Chat";
import "../sass/layout/layout.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Faq() {
  return (
    <>
      <NavBar />
      <Chat />
      <Banner heading="Frequently Asked Questions" text="Find answers to commonly raised questions"></Banner>
      <main className="layout_innerpages">
        <Accordion style={{ width: "70%" }} defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>I want to give a Littlessentials subscription as a gift. How does it work?</Accordion.Header>
            <Accordion.Body>
              Thank you for joining the cause and being there for your parenting friend or family member in a significant way. You’re giving them the gift of less overwhelm, so they can spend more quality time with their little one(s). When gifting
              Littlessentials, just tick off that it’s a gift and put in the details of the receiver in the form. It’s also possible for you to add a little personalized note by writing your message in the designated comment section. Depending on
              which type of subscription you choose, a package will be automatically shipped to them each month or every three months. Remember you can decide to discontinue your subscription at any time.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="accordion_header">When will I receive my package?</Accordion.Header>
            <Accordion.Body>
              <p>Depending on which type of subscription you choose, you will receive a package every month or every 3 months. To reduce our carbon footprint, we ship in batches twice a week - once on Mondays and once on Thursdays.</p>
              <p>Expect following delivery times: Denmark: 1-2 days Europe: 2-3 days</p>
              <p>Within the greater Copenhagen area we work with bicycle messengers, outside of that region we work with DHL Express.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>How do I best take care of my garments and other items?</Accordion.Header>
            <Accordion.Body>
              <p>Follow our simple guide on how to best take care of your Littlessential items here.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>What are the items made of?</Accordion.Header>
            <Accordion.Body>
              <p>
                We partner up with local, Danish brands that are invested in producing the best quality goods with the best materials. Some of the labels we look at when selecting partners are GOTS (Certified 100% Organic Cotton & Socially
                Responsible) for clothing, FSC (Responsible Forestry) for wooden & paper toys, OEKO-Tex® Standard 100 and B-Corporation. We also look into products that are free from BPA & phthalates for utensils and tableware.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>How do you curate products?</Accordion.Header>
            <Accordion.Body>
              <p>
                Our curation depends first and foremost on what’s available from our partners. We want to optimally utilize their overstock and make sure everything gets a home as soon as possible. Apart from that we take your childrens’ growth as a
                measurement, as well as developmental milestones when it comes to e.g. the curation of toys, as well as environmental and seasonal factors e.g. for summer or winter items.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <section>
          <h5>Still have questions?</h5>
          <p>Can't find the answer you are looking for Please chat to our friendly team</p>
        </section>
      </main>
    </>
  );
}
