export default function CardsMission(props) {
  return (
    <div className={props.className}>
      <h2>{props.heading}</h2>
      <p>{props.text}</p>
    </div>
  );
}
