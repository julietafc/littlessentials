import { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import "./Cards.scss";

export default function CardFlip(props) {
  const [flipped, setFlipped] = useState(false);
  function handleClick() {
    setFlipped((flipped) => !flipped);
  }
  return (
    <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
      <article className="cards">
        <div>
          <p>{props.number}</p>
          <h4>{props.heading}</h4>
        </div>
        <button onClick={handleClick}>+</button>
      </article>
      <div>
        <button onClick={handleClick}>X</button>
        <p>{props.description}</p>
      </div>
    </ReactCardFlip>
  );
}
