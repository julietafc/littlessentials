import { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import "./Cards.scss";

export default function CardFlip(props) {
  const styleCard = { backgroundColor: props.bgColor, color: props.color };
  const [flipped, setFlipped] = useState(false);
  function handleClick() {
    setFlipped((flipped) => !flipped);
  }
  return (
    <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
      <article style={styleCard} className="cards" onClick={handleClick}>
        <div className="front">
          <p>{props.number}</p>
          <h4>{props.heading}</h4>
        </div>
        {/* <button onClick={handleClick}>+</button> */}
      </article>
      <div className="back" onClick={handleClick}>
        {/* <button onClick={handleClick}>X</button> */}
        <p>{props.description}</p>
      </div>
    </ReactCardFlip>
  );
}
