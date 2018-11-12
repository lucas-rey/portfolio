import React from "react";
import "./vietnam.scss";
import MenuWrapper from "../../common/menu/menu";
import LeftText from "../../common/left-text/left-text";
import ImageLeft from "../../common/image-left/image-left";
import PageHeader from "../../common/page-header/page-header";

import Back from "../../common/back/back";
// import { Link } from "react-router-dom";

class Vietnam extends React.Component {
  render() {
    return (
      <div>
        <MenuWrapper />
        <Back />
        <PageHeader
          year={"2018"}
          workType={"School"}
          title={"Vietnam Journal"}
          letter={"E"}
          backgroundColor="red"
          fontColor="white">
          <img
            src={require("./../../../assets/e-flag.svg")}
            alt="nautical flag e"
          />
        </PageHeader>
        <div className="bottom-navigation">
          <a className="previous change" href="/street-smart">
            Prev
          </a>
          <div className="header-line change" />{" "}
          <a className="next change" href="/video-game">
            Next
          </a>
        </div>
        <div className="topGradient" />
        <div className="main-container">
          <div className="project-group">
            <img
              src={require("./../../../assets/vietnam1.svg")}
              alt="vietnam spreads 1"
            />
            <img
              src={require("./../../../assets/vietnam2.svg")}
              alt="vietnam spreads 2"
            />
          </div>
          <LeftText title={"Overview"} className="left-section">
            For this assignment we were asked to create a publication with the
            freedom to choose what it would be about. For several years now my
            dad has had a little black binder filled with scans of the pages
            from my grandads journal written during his second tour in Vietnam.
          </LeftText>

          <ImageLeft title={"Research"} className="right-section">
            I wanted to make something that looked nice and ran smoothly. After
            researching a few programs I decided on Unity. This came with it's
            own set of challenges as I had to learn a pretty complicated program
            quickly. Unity allows you to seamlessly combine graphics and code to
            create amazing 2D, 3D, and VR games. I made a 2D game. In order to
            use the program I also had to teach myself C# make the game
            functional. Below is the set of code that I used for the player
            controller. I had several other scripts as well but this was the
            main one. ​
            <br />
            <br />
            The goal of the game is to help the species get to a wildlife
            reserve. Users guide the animal through a course, they collect food
            and avoid traps. The traps will hurt the players health and the food
            will slowly heal them and increase their score. It is possible for
            the user to die, in which case they will be prompted by a game over
            screen urging them to try again.
          </ImageLeft>

          <div className="dear-joe">
            <img
              src={require("./../../../assets/dearjoe.svg")}
              alt="Dear Joe"
              className="dear-joe-image"
            />
          </div>

          <LeftText title={"Visual Design"} className="left-section">
            Inspired by Vietnamese design and the war propoganda, I only used
            one color throughout the entire journal (excluding images). I did
            not want to overwhelm the readers. I also only used one graphic
            element throughout the publication, an outline of Highway 13. This
            highway is mentioned repeatedly thoughout the journal and I wanted
            to reiterate just how central that location was to the story.
          </LeftText>
          <div className="highway">
            <img
              src={require("./../../../assets/highway13.svg")}
              alt="outline of highway 13"
              className="highway-image"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Vietnam;
