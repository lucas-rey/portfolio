import React from "react";
import "./street-smart.scss";
import MainNav from "../../common/navbar/navbar";
import LeftText from "../../common/left-text/left-text";
import ImageLeft from "../../common/image-left/image-left";
import PageHeader from "../../common/page-header/page-header";
import Scroll from "../../common/scroll-icon/scroll-icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Name from "../../common/name/name";
// import { Link } from "react-router-dom";

class StreetSmart extends React.Component {
  render() {
    return (
      <div>
        <MainNav />
        <Name />
        <PageHeader
          year={"2018"}
          workType={"Mobile App"}
          title={"Street Smart"}
          backgroundColor="yellow"
        />
        <div className="bottom-navigation">
          <a className="previous change" href="/brevet">
            <i className="fas fa-long-arrow-alt-left nav-arrow" /> Prev
          </a>
          <a className="next change" href="/lovemyself">
            Next <i className="fas fa-long-arrow-alt-right nav-arrow" />
          </a>
        </div>
        <div className="topGradient" />
        <div className="main-container">
          <div className="project-group phones two">
            <img
              src={require("./../../../assets/street-smart-landing.png")}
              alt="street smart landing page"
            />
            <img
              src={require("./../../../assets/street-smart-maps.png")}
              alt="street smart maps"
            />
            <img
              src={require("./../../../assets/street-smart-profile.png")}
              alt="street smart profile"
            />
            <img
              src={require("./../../../assets/street-smart-rewards.png")}
              alt="street smart rewards"
            />
          </div>

          <div className=" full-width-p">
            <LeftText title={"Overview"} className="left-section">
              <b>DESIGN PROBLEM</b>
              <br />
              Create a business that can be profitable within three years
              <br />
              <br />
              <b>CONTRIBUTIONS</b>
              <br />
              Team Lead, UX Design, User Research, Prototyping
              <br />
              <br />
              Street Smart is a mobile app that increases the safety of cyclists
              within the community. We were asked to research our problem and
              have users help inform our final solution. We used design thinking
              to frame and pitch this problem to our peers. We conducted user
              research, drafted a marketing strategy, completed a financial
              analysis, and constructed a working prototype. The goal of our
              business was to increase the awareness of cars and cyclists to
              each other.
            </LeftText>
          </div>

          <div className="research">
            <img
              src={require("./../../../assets/ss-researchmap.png")}
              alt="research diagram, discover, ideate, validate"
            />
            <ImageLeft title={"Research Questions"} className="right-section">
              To frame our initial solution, we walked around campus and talked
              with students to try and get their insights.
              <br />
              <br />
              <ol>
                <li className="content-list">
                  Why do you enjoy biking? Do you bike for a specific reason?
                </li>
                <li className="content-list">How often do you bike?</li>
                <li className="content-list">
                  Have you ever felt unsafe while biking? Could you describe
                  that experience to me?
                </li>
                <li className="content-list">
                  Have you ever had any issues while riding that forced you to
                  stop?
                </li>
                <li className="content-list">
                  Do you use any gadgets that are bike specific? (Odometer,
                  cadence tracker, apps such as strava, etc.)
                </li>
                <li className="content-list">
                  If there was a product to track your safety and alert others
                  if you may have been in an accident would you use it?
                </li>
                <li className="content-list">
                  Is there anything about biking or your bike experiences that
                  you wish was different? Do you feel as if you are as safe as
                  you can be?
                </li>
              </ol>
              <br />
              Our feedback from these questions helped us develop a business
              model canvas that then shaped how our business would act and
              behave in the future. This feedback also helped to validate our
              initial product idea.
            </ImageLeft>
          </div>
          <div className="  full-width-p">
            <LeftText title={"Market Research"} className="left-section">
              We conducted research of other businesses out there that try to
              solve the same or similar problems to ours. We found several pain
              points within each that we then used to distinguish our own
              product.
              <br />
              <br />
              <ol>
                <li className="content-list">
                  Bike Shield (notified drivers of bikers and motorcyclists
                  around them) tried to generate a huge user base almost
                  instantly with little to no marketing. Failed very quickly.
                </li>
                <li className="content-list">
                  The app did not give enough warning, drivers were usually
                  notified after already passing a cyclist.
                </li>
                <li className="content-list">
                  Strava allows cyclists to track routes but does not give them
                  directions as they ride and there is no real safety featured
                  fixed into it aside from beacons (where someone can track you
                  themselves)
                </li>
                <li className="content-list">
                  With some products users have to buy physical attachments for
                  their bikes, just another thing that has to be bought and
                  maintained.
                </li>
              </ol>
              <br />
              We realized that drivers were going to be a very difficult user
              base for us to get. We introduced the idea of rewards with local
              businesses and gas stations into the product to try and ensure
              that we would have a strong number of drivers.
            </LeftText>
          </div>

          <div className="branding">
            <div className="  full-width-p">
              <LeftText title={"Visual Design"} className="left-section">
                We spent some time together as a team talking about how we
                wanted to brand ourselves and what our values were as a company.
                Street Smart aims to be modern and easy to use, making safety
                its number one priority. We chose a more muted color palette to
                keep the materials from being visually overwhelming. We chose a
                mustard yellow as our main color, an allusion to caution signs
                that catch your attention.
                <br /> <br />
                We wanted for the company to feel friendly and approachable.
                This greatly influenced how we talked to users through our
                product. We included helpful tips and sayings to make users feel
                more comfortable.
              </LeftText>
            </div>
            <div className="brand-colors">
              <div className="color-group">
                <div className="hex-text"> PRIMARY HEX #e0a939</div>
                <div className="rectangle ss-one" />
              </div>
              <div className="color-group">
                <div className="hex-text"> HEX #b4bd68</div>
                <div className="rectangle ss-two" />
              </div>
              <div className="color-group">
                <div className="hex-text"> HEX #689091</div>
                <div className="rectangle ss-three" />
              </div>
              <div className="color-group">
                <div className="hex-text"> HEX #526b80</div>
                <div className="rectangle ss-four" />
              </div>
              <div className="color-group">
                <div className="hex-text"> HEX #6a5281</div>
                <div className="rectangle ss-five" />
              </div>
            </div>
          </div>
          <div className="sslogo-group">
            <div className="ss-logos">
              <img
                src={require("./../../../assets/ss-simplelogo.png")}
                alt="simple logo street smart"
                className="single-logo"
              />
              <img
                src={require("./../../../assets/ss-detailedlogo.png")}
                alt="full color logo street smart"
                className="single-logo"
              />
              <img
                src={require("./../../../assets/ss-whitelogo.png")}
                alt="white logo street smart"
                className="single-logo"
              />
            </div>
            <div className="value-prop">Safer cities. Safer Roads.</div>
          </div>

          <div className="prototyping">
            <div className="prototype">
              <iframe
                width="438"
                height="930"
                src="//invis.io/Y3P144ZVTWP"
                frameBorder="0"
                allowFullScreen
                title="iframe"
              />
            </div>
            <div className="section-padding">
              <div className="  full-width-p">
                <LeftText title={"Prototyping"} className="left-section">
                  Our final prototype brings information forward to users. Our
                  final presentation acted as an investment pitch so the
                  prototype only features our MVP. By leaving some elements out
                  we greatly reduced our production time and initial costs. We
                  kept a very minimal feel throughout the app, trying not to
                  overload users with too much information. Users are
                  immediately met with their statistics, we did this in the
                  hopes that it would encourage them to use our app more and
                  increase those numbers.
                  <br />
                  <br />
                  On release our app would be restricted to use in specific
                  cities during a beta period while we would begin to market and
                  form relationships with those communities. As time went on and
                  our user base grew we would then begin expanding those limits.
                  <br />
                  <br />
                  To learn more about our marketing and financial strategies you
                  can view our pitch website.
                  <br />
                  <br />
                  <a
                    href="https://lucasre8.wixsite.com/streetsmart"
                    rel="noopener noreferrer"
                    target="_blank">
                    <button className="pitch btn2">View Pitch Site</button>
                  </a>
                </LeftText>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StreetSmart;
