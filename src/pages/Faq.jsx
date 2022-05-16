import NavBar from "../components/NavBar/NavBar";
import "../sass/layout/layout.scss";
export default function Faq() {
  return (
    <>
      <NavBar />
      <main className="layout_innerpages">
        <section>
          <img src="../assets/img04.png" alt="" />
          <div>
            <h3>More details about our service</h3>
            <h1>Frequently asked questions</h1>
            <p></p>
          </div>
        </section>
        <section className="articles_wrapper">
          <article>
            <p>
              <strong>I want to give a Littlessentials subscription as a gift. How does it work?</strong>
              <p>
                Thank you for joining the cause and being there for your parenting friend or family member in a significant way. You’re giving them the gift of less overwhelm, so they can spend more quality time with their little one(s). When gifting
                Littlessentials, just tick off that it’s a gift and put in the details of the receiver in the form. It’s also possible for you to add a little personalized note by writing your message in the designated comment section. Depending on
                which type of subscription you choose, a package will be automatically shipped to them each month or every three months. Remember you can decide to discontinue your subscription at any time.
              </p>
            </p>
          </article>
          <article>
            <p>
              <strong>When will I receive my package?</strong>
              <p>
                Depending on which type of subscription you choose, you will receive a package every month or every 3 months. To reduce our carbon footprint, we ship in batches twice a week - once on Mondays and once on Thursdays. Expect following
                delivery times: Denmark: 1-2 days Europe: 2-3 days Within the greater Copenhagen area we work with bicycle messengers, outside of that region we work with DHL Express.
              </p>
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
