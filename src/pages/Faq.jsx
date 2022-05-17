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
              <strong>Air out </strong>
              <p>Use your clothing as long as possible, preferably naturally airing your items out before washing them. This way the fabric will last longer and you will be able to enjoy your items for a longer time. </p>
            </p>
          </article>
          <article>
            <p>
              <strong>Store in a closed wardrobe </strong>
              <p>Keep your items in a closed off wardrobe to avoid dust and humidity. Keep your toys in toy bags or boxes.</p>
            </p>
          </article>
          <article>
            <p>
              <strong>Pass it on </strong>
              <p>Pass the items your child has outgrown on to a friend, family member or to one of our local partners. Read more about our partners here.</p>
            </p>
          </article>
        </section>

        <section>
          <h5>Still have questions?</h5>
          <p>Can't find the answer you're looking for? Please chat to our friendly team</p>
        </section>
      </main>
    </>
  );
}
