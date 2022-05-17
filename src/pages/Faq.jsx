import Banner from "../components/Banner/Banner";
import NavBar from "../components/NavBar/NavBar";
import Chat from "../components/Chat/Chat";
import "../sass/layout/layout.scss";
export default function Faq() {
  return (
    <>
      <NavBar />
      <Chat />
      <main>
        <Banner heading="Frequently Asked Questions" text="Find answers to commonly raised questions"></Banner>
        <section className="articles_wrapper">
          <article>
            <p>
              <strong>Avoid perfumes in washing products & softeners </strong>
              <p>Avoid contact with harsh perfumes in detergents. These will wear out your garments faster. Use neutral soaps or natural products such as soap berries instead. If you like fragrances, you can use a few drops of essential oils.</p>
            </p>
          </article>
          <article>
            <p>
              <strong>How do I best take care of my garments and other items? </strong>
              <p>Follow our simple guide on how to best take care of your Littlessential items here.</p>
            </p>
          </article>
          <article>
            <p>
              <strong>What are the items made of?</strong>
              <p>
                We partner up with local, Danish brands that are invested in producing the best quality goods with the best materials. Some of the labels we look at when selecting partners are GOTS (Certified 100% Organic Cotton & Socially
                Responsible) for clothing, FSC (Responsible Forestry) for wooden & paper toys, OEKO-Tex® Standard 100 and B-Corporation. We also look into products that are free from BPA & phthalates for utensils and tableware.
              </p>
            </p>
          </article>
          <article>
            <p>
              <strong>How do you curate products?</strong>
              <p>
                Our curation depends first and foremost on what’s available from our partners. We want to optimally utilize their overstock and make sure everything gets a home as soon as possible. Apart from that we take your childrens’ growth as a
                measurement, as well as developmental milestones when it comes to e.g. the curation of toys, as well as environmental and seasonal factors e.g. for summer or winter items.
              </p>
            </p>
          </article>
          <article></article>
        </section>
      </main>
    </>
  );
}
