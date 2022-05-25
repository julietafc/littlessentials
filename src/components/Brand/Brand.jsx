import React, { useEffect, useState } from "react";
import ScrollToTop from "../../ScrollToTop";

import "./Brand.scss";

export default function Brand(props) {
  return (
    <div className="wrapper">
      <ScrollToTop />
      <div className="brand_detail">
        <a
          className="return_header"
          onClick={() => {
            props.setBrand(null);
          }}
        >
          Return to all brands
        </a>
        <div className="brand_header">
          <div className="header_text">
            <h1>{props.brand.title}</h1>
            <p>LOCATION: Copenhagen</p>
          </div>
          <img src="../assets/img11.png" alt="" />
        </div>
        <div className="brand_body">
          <aside>
            <h4>Website</h4>
            <a href={props.brand.website}>{props.brand.website}</a>
            <h4>Certifications</h4>
            <p>website url</p>
            <h4>Category</h4>
            <p>Toys</p>
          </aside>
          <section>
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
