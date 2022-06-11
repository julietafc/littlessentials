import Banner from "../components/Banner/Banner";

import Footer from "../components/Footer/Footer";

import "../sass/layout/layout.scss";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Header from "../components/Header/Header";

export default function Policy() {
  return (
    <>
      <Header />
      <Banner heading="Policies" text="Transparency is one of our core values" bgColor={"#222222"} color={"#f1e9de"} />
      <div className="policy">
        <section>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Privacy Policy</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Refund Policy</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Shipping Policy</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first" id="first">
                    <h4>Privacy Policy</h4>
                    <p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from www.littlessentials.dk (the “Site”).</p>
                    <p>
                      <strong> Personal information we collect</strong>
                      <br /> When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
                      Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site and information about how you interact with the Site.
                      We refer to this automatically-collected information as “Device Information”.
                    </p>
                    <p>
                      <strong> We collect Device Information using the following technologies:</strong>
                      <br />
                    </p>
                    <ul>
                      <li>“Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.</li>
                      <li>“Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</li>
                      <li>“Web beacons”, “tags”, and “pixels” are electronic files used to record information about how you browse the Site.</li>
                    </ul>

                    <p>
                      Additionally, when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card
                      numbers, email address, and phone number. We refer to this information as “Order Information”.
                    </p>
                    <p>When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information. </p>
                    <p>
                      <strong>How do we use your personal information?</strong>
                      <br /> We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order
                      confirmations).
                    </p>
                    <p>Additionally, we use this Order Information to:</p>
                    <ul>
                      <li>Communicate with you;</li>
                      <li>Screen our orders for potential risk or fraud;</li>
                      <li>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services. </li>
                    </ul>

                    <p>
                      We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how
                      our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).
                    </p>
                    <p>
                      <strong> Sharing your Personal Information</strong> <br /> We share your Personal Information with third parties to help us use your Personal Information, as described above. We also use Google Analytics to help us understand
                      how our customers use the Site -- you can read more about how Google uses your Personal Information by clicking{" "}
                      <a title="link to privacy policy info" href="https://www.google.com/intl/en/policies/privacy/">
                        right here
                      </a>
                      . You can also opt-out of Google Analytics
                      <a title="external link to info about google analytics " href="https://tools.google.com/dlpage/gaoptout">
                        here
                      </a>
                      .
                    </p>
                    <p>
                      Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful requests for information we receive, or to otherwise protect our
                      rights.
                    </p>
                    <p>
                      <strong>Behavioral advertising</strong>
                      <br /> As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For more information about how targeted advertising works,
                      you can visit the Network Advertising Initiative’s (“NAI”){" "}
                      <a title="external link about online advertising" href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work">
                        educational page
                      </a>
                      .
                    </p>
                    <p>You can opt out of targeted advertising by using the links below:</p>
                    <ul>
                      <li>
                        <a title="external link to opt out from Facebook" href="https://www.facebook.com/settings/?tab=ads">
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a title="external link to opt out from Google" href="https://www.google.com/settings/ads/anonymous">
                          Google
                        </a>
                      </li>
                      <li>
                        <a title="external link to opt out from Bing" href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads">
                          Bing
                        </a>
                      </li>
                    </ul>
                    <p>
                      Additionally, you can opt-out of some of these services by visiting the Digital Advertising Alliance’s opt-out portal at
                      <a title="info about opt out" href="http://optout.aboutads.info/">
                        {" "}
                        http://optout.aboutads.info/
                      </a>
                      .
                    </p>
                    <p>
                      <strong>Do not track</strong>
                      <br /> Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.
                    </p>
                    <p>
                      <strong> Your rights</strong>
                      <br /> If you are a European resident, you have the right to access the personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this
                      right, please contact us through the contact information below.
                    </p>
                    <p>
                      Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our
                      legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including Canada and the United States.
                    </p>
                    <p>
                      <strong> Data retention</strong>
                      <br /> When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.
                    </p>
                    <p>
                      <strong>Changes</strong>
                      <br /> We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
                    </p>
                    <p>
                      <strong>Contact us</strong>
                      <br /> For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e‑mail at
                      <a title="link to Littlessential email" href="mailto: info@littlessentials.dk">
                        info@littlessentials.dk
                      </a>
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <h4>Refund Policy</h4>
                    <p>We have a 14-day return policy, which means you have 14 days after receiving your items to request a return.</p>
                    <p>To be eligible for a return, your items must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.</p>
                    <p>
                      To start a return, you can contact us at info@littlessentials.dk. If your return is accepted, we’ll send you a return shipping label, as well as for instructions on how and where to send your package. Items sent back to us
                      without first requesting a return will not be accepted.
                    </p>
                    <p>
                      You can always contact us for any return questions at
                      <a title="link to contact Littlessentials by email" href="mailto: info@littlessentials.dk">
                        info@littlessentials.dk
                      </a>
                    </p>
                    <p>
                      <strong>Damages and issues</strong>
                      <br />
                      Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item so that we can evaluate the issue and make it right.
                    </p>
                    <p>
                      <strong>Refunds</strong>
                      <br /> We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment method. Please remember it can
                      take some time for your bank or credit card company to process and post the refund too.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <h4>Shipping Policy</h4>
                    <p>
                      Please note, delivery dates mentioned below include handling time of the order, which may take 1-3 business days. Once an order is shipped, you will receive an email with a tracking link. Depending on the courier, the link might
                      not be active within the first 2 business days. Please be mindful that in order for us to reduce our carbon footprint, we only ship twice a week; once on Mondays and once on Tuesdays.
                    </p>
                    <p>
                      <strong> Cancellation before order shipping</strong>
                      <br /> Unfortunately, it is only possible to cancel your order, if it has not yet been packed and shipped yet. If you want to cancel an order, please send us an email with subject line “CANCEL ORDER” or contact us by phone as
                      soon as possible: <br />
                      <strong>Office hours</strong> Monday to Friday between 8 - 16 CET/CEST
                      <br /> <strong>Phone</strong> (+45) 11 11 11 11
                      <br />
                      <strong> E-mail</strong>
                      <a title="link to contact Littlessentials by email" href="mailto: info@littlessentials.dk">
                        info@littlessentials.dk
                      </a>
                    </p>
                    <p>
                      <strong>Notice regarding shipping to North America</strong>
                      <br /> We are currently not shipping orders to the USA or Canada.
                    </p>
                    <p>
                      <strong>PLEASE NOTE:</strong> Orders delivered to EU countries are following the rules of the VAT One Stop Shop scheme. Depending on your order and country, you will be liable to pay local taxes and duties upon receiving your
                      order, for which Littlessentials cannot accept liability. The refusal to pay such fees will cause a full cancellation of the order. Transportation costs and custom clearance costs associated with a cancellation will be deducted
                      from the total amount refunded to you. Import fees for orders received in the United Kingdom, Norway and Switzerland will be covered by Littlessentials.
                    </p>
                    <p>
                      We are not able to re-send an order from our office or warehouse. In these cases the order will be refunded, and you are welcome to place a new order at <a href="www.littlessentials.dk">www.littlessentials.dk</a>.
                    </p>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </section>
      </div>
      <Footer />
    </>
  );
}
