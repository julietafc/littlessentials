import "./SectionCarousel.scss";

import Carousel from "react-bootstrap/Carousel";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function SectionCarousel() {
  return (
    <section className="carousel">
      <div className="header">
        <h2>Our Partners</h2>
        <Link className="button_carousel" to="/brands">
          <Button label="learn more" />
        </Link>
      </div>
      <Carousel>
        <Carousel.Item>
          <img src="../assets/img11.png" alt="First slide" />
          <div className="text">
            <h4>Liewood</h4>
            <p>
              Liewood is based in Copenhagen and our universe is deeply rooted in the Nordic design tradition. They advocate slow living, creating irresistible products for the modern family that will last for generations. Liewood products are
              created on the basis of original workmanship, the finest materials and with a modern approach to design.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img src="../assets/img11.png" alt="First slide" />
          <div className="text">
            <h4>Konges Sløjd</h4>
            <p>
              Konges Sløjd is a creative brand that salutes the wild, varied and perfectly imperfect life with children. The brand aims to blaze a trail for garments, toys and interiors produced in a way that is kinder to the environment and made to
              last. Everything is crafted to survive snuggly newborns, adventurous toddlers or curious children and still be passed on.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img src="../assets/img11.png" alt="First slide" />
          <div className="text">
            <h4>Soft Gallery</h4>
            <p>
              Every season, Soft Gallery collaborates with both local and international artists. They convert unique seasonal themes into prints and hand embroideries, bringing life to the soft canvas and giving each collection an organic flow with
              new beautiful impulses and variations. The clothes are luxurious and contemporary with an added artistic twist. Soft Gallery places great emphasis on high-quality materials and comfortable silhouettes.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img src="../assets/img11.png" alt="First slide" />
          <div className="text">
            <h4>CamCam Copenhagen</h4>
            <p>
              Cam Cam Copenhagen’s core originates from the love of babies and children, and a belief that they only deserve the best. They create quality, timeless and tactile design for children, offering poetic products which help create calm and
              harmonious environments. Their overall design focus is sustainability - this means sustainable, organic production and enduring design and material quality.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img src="../assets/img11.png" alt="First slide" />
          <div className="text">
            <h4>Smallstuff</h4>
            <p>
              At Smallstuff they love colors and beautiful designs with a unique mix and match opportunity. In all designs they use natural materials; cotton, wool and wood, combined with handcrafted crochet and knitted items. They want to inspire
              children and their creativity by entering their universe in a happy and childlike way, while appealing to parents with high quality, natural products.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img src="../assets/img11.png" alt="First slide" />
          <div className="text">
            <h4>Wauw Kapow</h4>
            <p>
              Wauw Kapow creates children’s clothes inspired by the playful spirit of children.They believe children are free to wear whatever they want, and a lot of our clothes are therefore not gender-specific. To resist the hard job of being worn
              by playing children all day, our clothes are made of high-quality textiles. Their designs are inspired by modern and conceptional arts and colors, the comfortable and functional elements of streetwear.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img src="../assets/img11.png" alt="First slide" />
          <div className="text">
            <h4>Fabelab</h4>
            <p>
              Fabelab is a playful organic Scandinavian children’s interior brand, founded in Copenhagen, that believes in creating high-quality, innovative, and responsibly made products. Their selection of wooden toys is easy on the eyes,
              consciously crafted, and most importantly fun for the little ones to play with.
            </p>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
