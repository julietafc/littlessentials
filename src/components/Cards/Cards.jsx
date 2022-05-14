import "./Cards.scss";
export default function Cards(props) {
  return (
    <div>
      <h3>{props.heading}</h3>
      <p>{props.text}</p>
    </div>
  );
}
