import Banner from "../components/Banner/Banner";
import Chat from "../components/Chat/Chat";
import Footer from "../components/Footer/Footer";
import React, { useEffect, useState } from "react";

import "../sass/layout/layout.scss";
import Header from "../components/Header/Header";
import BrandList from "../components/BrandList/BrandList";
import Brand from "../components/Brand/Brand";

export default function Brands() {
  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState(null);

  useEffect(() => {
    fetch("../json/brands.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBrands(data);
      });
  }, []);

  return (
    <>
      <Header />
      <Chat />
      {brand ? (
        <Brand brand={brand} setBrand={setBrand} />
      ) : (
        <>
          <Banner heading="Brands" text="We source products of brands that we believe in and we know will contribute to your little one’s developmental milestones and growth." bgColor={"#cf9345"} color={"#f1e9de"} />
          <div className="layout_innerpages brands">
            <p>
              We are invested in the origin of our partners products and look for the highest quality goods. Some of the labels we look into when onboarding partners are GOTS (Certified 100% Organic Cotton & Socially Responsible) for clothing, FSC
              (Responsible Forestry) for wooden & paper toys, OEKO-Tex® Standard 100 and B-Corporation. We also look into products that are free from BPA & phthalates for utensils and tableware.
            </p>
            <div className="card_wrapper">
              <BrandList setBrand={setBrand} brands={brands} />
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
}
