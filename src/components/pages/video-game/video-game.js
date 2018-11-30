import React from "react";
import "./video-game.scss";
import MainNav from "../../common/navbar/navbar";
import LeftText from "../../common/left-text/left-text";
import ImageLeft from "../../common/image-left/image-left";
import PageHeader from "../../common/page-header/page-header";

import Name from "../../common/name/name";
// import { Link } from "react-router-dom";

class VideoGame extends React.Component {
  render() {
    // var mouseWheelEvt = function(event) {
    //   if (document.body.doScroll)
    //     document.body.doScroll(event.wheelDelta > 0 ? "left" : "right");
    //   else if ((event.wheelDelta || event.detail) > 0)
    //     document.body.scrollLeft -= 10;
    //   else document.body.scrollLeft += 10;

    //   return false;
    // };
    // document.body.addEventListener("mousewheel", mouseWheelEvt);

    return (
      <div>
        <MainNav />
        <Name />
        <PageHeader
          year={"2017"}
          workType={"Video Game"}
          title={"Endangered Species"}
          backgroundColor="yellow"
        />
        <div className="bottom-navigation">
          <a className="previous change" href="/vietnam">
            Prev
          </a>
          <div className="header-line change" />{" "}
          <a className="next change" href="/mousai">
            Next
          </a>
        </div>
        <div className="topGradient" />
        <div className="main-container">
          <div className="project-group smaller-projects">
            <img
              src={require("./../../../assets/rhino.svg")}
              alt="rhino video game"
            />
            <img
              src={require("./../../../assets/markhor.svg")}
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

          <div className="videogame-process">
            <img
              src={require("./../../../assets/video-game-process.svg")}
              alt="user process map for game"
            />
          </div>

          <LeftText title={"Process"} className="right-section">
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
          </LeftText>

          <div className="characters">
            <div className="rhino">
              <img
                src={require("./../../../assets/rhino-movements.gif")}
                alt="rhino character walking"
              />
            </div>
            <div className="markhor">
              <img
                src={require("./../../../assets/markhor-movements.gif")}
                alt="markhor character walking"
              />
            </div>
          </div>

          <LeftText title={"Game Design"} className="left-section">
            I designed the characters and their movements myself. In order to
            create realistic animations I had to create these sprite sheets
            which allowed me to separate the idle, walking, and jumping
            movements for each character. I used illustrator to design all of
            the graphics in my game from the background to the collectible items
            throughout each course.
            <br /> <br />A big part of this game was also creating all of the
            logic behind it myself. I had to code how the characters would know
            when to move, how users would gain or lose points, and I even had to
            implement gravity.
          </LeftText>

          <div className="rhino-landscape">
            <div className="landscape-title">
              <div className="photo-heading"> Rhino Landscape</div>
              <img
                src={require("./../../../assets/scroll-sideways.gif")}
                alt="scroll sideways gif"
                className="scroll"
              />
            </div>
            <div className="landscape-image full-width">
              <img
                src={require("./../../../assets/rhino-landscape.jpg")}
                alt="african landscape"
              />
            </div>
          </div>

          <div className="markhor-landscape">
            <div className="landscape-title">
              <div className="photo-heading"> Markhor Landscape</div>
              <img
                src={require("./../../../assets/scroll-sideways.gif")}
                alt="scroll sideways gif"
                className="scroll"
              />
            </div>
            <div className="landscape-image full-width">
              <img
                src={require("./../../../assets/markhor-landscape.jpg")}
                alt="mountainous landscape"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoGame;
