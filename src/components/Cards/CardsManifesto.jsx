import "./Cards.scss";
export default function CardsManifesto(props) {
  return (
    <article>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </article>
  );
}
