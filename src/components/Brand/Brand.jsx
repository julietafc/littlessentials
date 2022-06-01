import React from "react";
import ScrollToTop from "../../ScrollToTop";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import "./Brand.scss";

export default function Brand(props) {
  return (
    <div className="wrapper">
      <ScrollToTop />
      <div className="brand_detail">
        {/* <a
          className="return_header"
          onClick={() => {
            props.setBrand(null);
          }}
        >
          Return to all brands
        </a> */}
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/brands">Brands</Breadcrumb.Item>
          <Breadcrumb.Item active>{props.brand.title}</Breadcrumb.Item>
        </Breadcrumb>
        <div className="brand_header">
          <img className="logo" src={"assets/brands/" + props.brand.logo} alt="" />
          <img className="picture" src={"assets/webP/" + props.brand.img1} alt="" />
        </div>
        <div className="brand_body">
          <aside>
            <h4>Website</h4>
            <a href={props.brand.website}>{props.brand.website}</a>
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
