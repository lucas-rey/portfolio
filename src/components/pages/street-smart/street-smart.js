import React from "react";
import "./street-smart.scss";
import MainNav from "../../common/navbar/navbar";
import LeftText from "../../common/left-text/left-text";
import ImageLeft from "../../common/image-left/image-left";
import PageHeader from "../../common/page-header/page-header";
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
          backgroundColor="blue"
          fontColor="white"
        />
        <div className="bottom-navigation">
          <a className="previous change" href="/vietnam">
            Prev
          </a>
          <div className="header-line change" />{" "}
          <a className="next change" href="/lovemyself">
            Next
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
              <b>Task:</b> Create a business that can be profitable within three
              years.
              <br />
              <b>Software:</b> Invision, Adobe Illustrator, Wix
              <br />
              <br />
              <b>Initial Thinking:</b> I worked with 3 other people to try and
              solve for the lack of safety around the biking community in
              Richmond. We conducted user research, drafted a marketing
              strategy, completed a financial analysis, and constructed a
              working prototype. Our final presentation was our potential
              investment pitch. <br />
              <br />
              We picked a problem that we were all connected to and would enjoy
              trying to solve. We ended up on biking and the lack of safety for
              riders in our area Richmond, VA. As students we all knew at least
              one or more people who had been involved in accidents, and there
              had been several incidents of hit and runs in our area. Drivers in
              Richmond have been known to be very aggressive towards bikers and
              many of us have seen riders struggle to even have room on the
              road. In Richmond it is legal to bike on the sidewalks, but they
              are wildly uneven/unkept and the high pedestrian traffic makes it
              extremely dangerous.
            </LeftText>
          </div>

          <div className="research">
            <img
              src={require("./../../../assets/ss-researchmap.png")}
              alt="research diagram, discover, ideate, validate"
            />
            <ImageLeft title={"Research Questions"} className="right-section">
              To frame our solution we walked around campus and talked with
              anyone who was willing and just asked a few basic questions.
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
              Based off of our feedback to these questions we developed a
              business model canvas that would shape how our business would act
              and behave in the future and what our product would be.
            </ImageLeft>
          </div>
          <div className="  full-width-p">
            <LeftText title={"Pain Points"} className="left-section">
              There are several products out in the world that try to solve this
              problem but we found several issues with each of them.
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
              Based off of all of our research we developed the idea for Street
              Smart, an app that would notify drivers of cyclists coming up in
              their routes. Completely hands free notifications that would be
              used to just give future warning. We would incentive users to join
              by partnering with local businesses and gas stations and giving
              out rewards periodically.
            </LeftText>
          </div>

          <div className="branding">
            <div className="  full-width-p">
              <LeftText title={"Branding"} className="left-section">
                To develop our brand we first had to establish our values and
                how we wanted to present ourselves to the public.Street smart
                aimed to be modern and easy to use, making safety its number one
                priority. We picked a muted color palette using only one warm
                color, which became our primary color. We chose a cooler palette
                for our accent colors to try and keep our materials from being
                visually overwhelming. We very rarely used all of the colors
                together in our materials, the first three to the right being
                our most prominent choices. <br /> <br />
                We wanted for our businesses to feel friendly and approachable.
                This greatly influenced the type of copy that was included in
                the final product. We included helpful tips and sayings to makes
                users feel more comfortable. We were aware that drivers would be
                perhaps the hardest to involve so we generated as many
                incentives and language that would keep them from feeling
                frustrated throughout the experience.
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
                  Our final prototype brought information forward to users. This
                  prototype features our minimum viable product, so it only
                  features what is necessary to go to market and test. By
                  leaving some elements out we greatly reduced our production
                  time and initial costs, this would put us in less trouble in
                  case the app struggled initially. We kept a very minimal feel
                  throughout the app, trying not to overload users with too much
                  information. Users are immediately met with their statistics,
                  we did this in the hopes that this would encourage them to use
                  our app more to increase those numbers. The next two pages
                  feature two differnent ways to ride with the app, the record
                  button will track new routes, or users can follow previously
                  ridden or created routes.
                  <br />
                  <br />
                  On release our app would be restricted to use in specific
                  cities while we began marketing and forming relationships. As
                  time went on and we grew our user base we would then begin
                  expanding those limits. To learn more about our marketing and
                  financial strategies you can view our pitch website.
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
