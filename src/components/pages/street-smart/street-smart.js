import React from "react";
import "./street-smart.scss";
import MenuWrapper from "../../common/menu/menu";
import RightSection from "../../common/right-section/right-section";
import ImageDetails from "../../common/image-details/image-details";
import PageHeader from "../../common/page-header/page-header";

import Back from "../../common/back/back";
// import { Link } from "react-router-dom";

class StreetSmart extends React.Component {
  render() {
    return (
      <div>
        <MenuWrapper />
        <Back />
        <PageHeader
          year={"2018"}
          workType={"School"}
          title={"Street Smart"}
          letter={"D"}>
          <img
            src={require("./../../../assets/d-flag.svg")}
            alt="nautical flag d"
          />
        </PageHeader>
        <div className="main-container">
          <div className="phone-group">
            <img
              src={require("./../../../assets/street-smart-landing.svg")}
              alt="hiker silhouette"
            />
            <img
              src={require("./../../../assets/street-smart-maps.svg")}
              alt="hiker silhouette"
            />
            <img
              src={require("./../../../assets/street-smart-profile.svg")}
              alt="hiker silhouette"
            />
            <img
              src={require("./../../../assets/street-smart-rewards.svg")}
              alt="hiker silhouette"
            />
          </div>
          <RightSection title={"Overview"} className="left-section">
            <b>Task:</b> Create a business that can be profitable within three
            years.
            <br />
            <b>Software:</b> Invision, Adobe Illustrator, Wix
            <br />
            <br />
            <b>Initial Thinking:</b> I worked with 3 other people to try and
            solve for the lack of safety around the biking community in
            Richmond. We conducted user research, drafted a marketing strategy,
            completed a financial analysis, and constructed a working prototype.
            Our final presentation was our potential investment pitch. <br />
            <br />
            We picked a problem that we were all connected to and would enjoy
            trying to solve. We ended up on biking and the lack of safety for
            riders in our area Richmond, VA. As students we all knew at least
            one or more people who had been involved in accidents, and there had
            been several incidents of hit and runs in our area. Drivers in
            Richmond have been known to be very aggressive towards bikers and
            many of us have seen riders struggle to even have room on the road.
            In Richmond it is legal to bike on the sidewalks, but they are
            wildly uneven/unkept and the high pedestrian traffic makes it
            extremely dangerous.
          </RightSection>

          <ImageDetails title={"Research Questions"} className="right-section">
            To frame our solution we walked around campus and talked with anyone
            who was willing and just asked a few basic questions.
            <br />
            <br />
            <ol>
              <li>
                Why do you enjoy biking? Do you bike for a specific reason?
              </li>
              <li>How often do you bike?</li>
              <li>
                Have you ever felt unsafe while biking? Could you describe that
                experience to me?
              </li>
              <li>
                Have you ever had any issues while riding that forced you to
                stop?
              </li>
              <li>
                Do you use any gadgets that are bike specific? (Odometer,
                cadence tracker, apps such as strava, etc.)
              </li>
              <li>
                If there was a product to track your safety and alert others if
                you may have been in an accident would you use it?
              </li>
              <li>
                Is there anything about biking or your bike experiences that you
                wish was different? Do you feel as if you are as safe as you can
                be?
              </li>
            </ol>
            <br />
            Based off of our feedback to these questions we developed a business
            model canvas that would shape how our business would act and behave
            in the future and what our product would be.
          </ImageDetails>
        </div>
      </div>
    );
  }
}

export default StreetSmart;
