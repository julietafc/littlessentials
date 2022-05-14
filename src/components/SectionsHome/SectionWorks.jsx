import Button from "../Button/Button";
import "./SectionWorks.scss";
export default function SectionWorks(props) {
  return (
    <section className="works">
      <div className="steps">
        <div>
          <h1>01.</h1>
          <h3>Subscribe</h3>
        </div>
        <div>
          <h1>02.</h1>
          <h3>Enjoy</h3>
        </div>
        <div>
          <h1>03.</h1>
          <h3>Pass it on</h3>
        </div>
      </div>
      <div className="">
        <h4> HOW IT WORKS</h4>
        <h2 className="">Inspiring a conscious lifestyle for parents so you can focus on what matters most - your family.</h2>
        <p>Get the best out of your time with your little ones by subscribing to a curated selection of clothes, toys & gear for children aged 0-6, that cater to their growth, developmental milestones and the changing seasons.</p>
        <Button label="learn more" />
      </div>
    </section>
  );
}
