import "./SectionWorks.scss";
import "../../sass/layout/layout.scss";
import ButtonCmp from "../Button/Button";
export default function SectionWorks(props) {
  return (
    <div className="wrapper">
      <section className="works">
        <div className="header">
          <div className="text">
            <h2>High quality items for each phase of your child's growth</h2>
            <p>In a few simple steps you can customize your experience and enjoy high quality products curated just for you </p>
            <ButtonCmp label="Learn more" path="/how-it-works" title="link to how it works page" />
          </div>
          <img className="pebble" src="/assets/balance-light.svg" alt="kids clothes" />
        </div>
        <div className="steps">
          <div>
            <div className="heading">
              <h4>
                01. <span>Subscribe</span>
              </h4>
            </div>
            <p>Personalize your subscription to meet your needs</p>
          </div>
          <div>
            <div className="heading">
              <h4>
                02. <span>Enjoy</span>
              </h4>
            </div>
            <p>Now you can focus on what really matters, your family</p>
          </div>
          <div>
            <div className="heading">
              <h4>
                03. <span>Pass it on</span>
              </h4>
            </div>
            <p>Drop off the items you no longer need in one of our NGOs partners</p>
          </div>
        </div>
      </section>
    </div>
  );
}
