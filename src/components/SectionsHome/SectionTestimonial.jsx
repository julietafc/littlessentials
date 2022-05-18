import "../../sass/layout/layout.scss";

import "../../App.scss";
export default function SectionTestimonial(props) {
  return (
    <section className="testimonial">
      <img src="../assets/im01.png" alt="" />

      <div className="text">
        <p>
          “I love the peace of mind Littlessentials brings, knowing that I’m getting high-quality products that I actually need for my daughter each month, without having to think about it. My subscription grows with her and is just so convenient to
          have. It’s been one of the greatest services I got since becoming a parent.”
        </p>
        <figcaption>- Ida L., mother of 18-month old Luna</figcaption>
      </div>
    </section>
  );
}
