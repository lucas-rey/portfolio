import React from "react";
import "./mousai.scss";
import NavBar from "../../common/navbar/navbar";
import LeftText from "../../common/left-text/left-text";
// import ImageLeft from "../../common/image-left/image-left";
import PageHeader from "../../common/page-header/page-header";

import Back from "../../common/back/back";
// import { Link } from "react-router-dom";

class Mousai extends React.Component {
  render() {
    return (
      <div>
        <NavBar fontColor="black" />
        <Back fontColor="black" />
        <PageHeader
          year={"2018"}
          workType={"Professional"}
          title={"Mousai"}
          letter={"I"}
          backgroundColor="yellow"
          fontColor="black">
          <img
            src={require("./../../../assets/i-flag.svg")}
            alt="nautical flag i"
          />
        </PageHeader>
        <div className="bottom-navigation">
          <a className="previous black change" href="/video-game">
            Prev
          </a>
          <div className="black-header-line change" />{" "}
          <a className="next black change" href="/brevet">
            Next
          </a>
        </div>
        <div className="topGradient" />
        <div className="main-container">
          <div className="project-group smaller-projects">
            <img
              src={require("./../../../assets/mousai-home.svg")}
              alt="rhino video game"
            />
            <img
              src={require("./../../../assets/mousai-album.svg")}
              alt="markhor video game"
            />
          </div>

          <LeftText title={"Overview"} className="left-section">
            For this project we were given two parameters: 1) it had to be an
            interactive experience for the viewers and 2) if we were to place it
            in a time capsule for 100 years how could we show the world as it is
            today. We were advised to make a poster but to me that did not at
            all convey the world as it is today. We are in a digital age, a
            world where you can connect to almost anyone anywhere at anytime. A
            world where all of the things we've learned and experiences we've
            had over the centuries are at the tips of our fingers. We can
            explore worlds, experience the past, and create our wildest dreams,
            all without even leaving our seats.
            <br />
            <br />
            Since I was a child I have loved animals, to the point that I
            considered turning that into a career. At the time we were assigned
            this project there was huge controversy across the country about
            lifting bans on big-game hunting. I wanted to educate the public and
            the future about endangered species. I decided to make a video game
            because to me that showed more of the 21st century than a poster
            could ever show. And not only would this be more technologically
            relevant to today, it was a new challenge for me. It was something
            new to learn which was more way exciting to me than the familiar.
          </LeftText>
        </div>
      </div>
    );
  }
}

export default Mousai;
