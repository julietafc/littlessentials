import React, { useEffect, useState } from "react";

export default function Brand(props) {
  return (
    <>
      <div className="layout_innerpages brands">
        <h1>{props.brand.title}</h1>
        <p>{props.brand.description}</p>
        <div className="card_wrapper"></div>
        <button
          onClick={() => {
            props.setBrand(null);
          }}
        >
          Return to all brands{" "}
        </button>
      </div>
    </>
  );
}
