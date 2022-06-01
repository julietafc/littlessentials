import { Col, Row } from "react-bootstrap";
import "../../sass/layout/layout.scss";
import "./SectionTestimonial.scss";
import "../../App.scss";

export default function SectionTestimonial(props) {
  return (
    <div className="wrapper">
      <section className="testimonial col">
        {/* <h2 className="heading_mobile"> Essential Community</h2> */}
        <Row className="d-md-none d-sm-inline w-100 mb-3">
          <h2 className="text-center "> Essential Community</h2>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center justify-content-md-end pe-lg-3 col-12 col-md ">
            <img src="../assets/img12.webp" alt="curly hair woman with a kid" />
          </Col>
          <Col className="ps-lg-4">
            <div className="text_wrapper d-flex justify-content-center mt-4 d-md-block">
              <h2 className="heading_desktop"> Essential Community</h2>
              <div className="text">
                <p>
                  “I love the peace of mind Littlessentials brings, knowing that I’m getting high-quality products that I actually need for my daughter each month, without having to think about it. My subscription grows with her and is just so
                  convenient to have. It’s been one of the greatest services I got since becoming a parent.”
                </p>
                <figcaption>- Ida L., mother of 18-month old Luna</figcaption>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
}
