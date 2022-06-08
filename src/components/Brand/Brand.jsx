import React from "react";
import ScrollToTop from "../../ScrollToTop";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import "./Brand.scss";

export default function Brand(props) {
  return (
    <div className="wrapper">
      <ScrollToTop />
      <div className="brand_detail">
        <Breadcrumb>
          <Breadcrumb.Item title="link to homepage" href="/">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item title="link to Littlessentials' partners list" href="/brands">
            Brands
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{props.brand.title}</Breadcrumb.Item>
        </Breadcrumb>
        <div className="brand_header">
          <img className="logo" src={"assets/brands/" + props.brand.logo} alt={props.brand.title} />
          <img className="picture" src={"assets/webP/" + props.brand.img1} alt={props.brand.title} />
        </div>
        <div className="brand_body">
          <aside>
            <h4>Website</h4>
            <a title={"external link to " + props.brand.title + "'s official website"} href={props.brand.website} target="_blank">
              {props.brand.website}
            </a>
            <h4>Location</h4>
            <p>Copenhagen, Denmark</p>
            <h4>Category</h4>
            <p>{props.brand.category}</p>
          </aside>
          <section>
            <h2>{props.brand.title}</h2>
            <p>{props.brand.description}</p>
          </section>
        </div>
        <a
          className="return_footer"
          onClick={() => {
            props.setBrand(null);
          }}
        >
          Return to all brands
        </a>
      </div>
    </div>
  );
}
