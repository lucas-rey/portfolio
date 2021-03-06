import React from "react";
import "./video-game.scss";
import MainNav from "../../common/navbar/navbar";
import LeftText from "../../common/left-text/left-text";
import PageHeader from "../../common/page-header/page-header";

import Name from "../../common/name/name";
// import { Link } from "react-router-dom";

class VideoGame extends React.Component {
  render() {
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
          <a className="previous change" href="/lovemyself">
            <i className="fas fa-chevron-circle-left black" />
          </a>
          <a className="next change" href="/mousai">
            <i className="fas fa-chevron-circle-right black" />
          </a>
        </div>
        <div className="topGradient" />
        <div className="main-container">
          <div className="project-group smaller-projects">
            <img
              src={require("./../../../assets/rhino.png")}
              alt="rhino video game"
            />
            <img
              src={require("./../../../assets/markhor.png")}
              alt="markhor video game"
            />
          </div>

          <div className="full-width-p">
            <LeftText title={"Overview"} className="left-section">
              <b>DESIGN PROBLEM</b>
              <br />
              Create an interactive experience that captures the world today. It
              must be placed in a time capsule for 100 years
              <br />
              <br />
              <b>CONTRIBUTIONS</b>
              <br />
              Development (C#), Character Design
              <br />
              <br />
              We are in a digital age, a world where you can connect to almost
              anyone, anywhere, at any time. A world where all of the things
              we’ve learned and experiences we’ve had over the centuries are at
              the tips of our fingers. We can explore worlds, experience the
              past, and create our wildest dreams, all without even leaving our
              seats.
              <br />
              <br />
              Since I was a child I have loved animals, to the point that I
              considered turning that into a career. At the time we were
              assigned this project there was huge controversy across the
              country about lifting bans on big-game hunting. I wanted to
              educate the public and the future about our endangered species
              today. I decided to make a video game because to me that showed
              more of the 21st century than anything else I could create. Not
              only that but it was also an entirely new challenge for me.
            </LeftText>
          </div>

          <div className="videogame-process">
            <img
              src={require("./../../../assets/video-game-process.png")}
              alt="user process map for game"
            />
          </div>

          <div className="full-width-p">
            <LeftText title={"Process"} className="right-section">
              I wanted to make something that looked nice and ran smoothly.
              After researching a few programs I decided on Unity. This came
              with it's own set of challenges as I had to learn a pretty
              complicated program quickly. Unity allows you to seamlessly
              combine graphics and code to create amazing 2D, 3D, and VR games.
              I made a 2D game. In order to use the program I also had to teach
              myself C# make the game functional. Below is the set of code that
              I used for the player controller. I had several other scripts as
              well but this was the main one. ​
              <br />
              <br />
              The goal of the game is to help the species get to a wildlife
              reserve. Users guide the animal through a course, they collect
              food and avoid traps. The traps will hurt the players health and
              the food will slowly heal them and increase their score. It is
              possible for the user to die, in which case they will be prompted
              by a game over screen urging them to try again.
            </LeftText>
          </div>

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

          <div className="full-width-p">
            <LeftText title={"Visual Design"} className="left-section">
              I designed the characters and their movements myself. In order to
              create realistic animations I had to create these sprite sheets
              which allowed me to separate the idle, walking, and jumping
              movements for each character. I used illustrator to design all of
              the graphics in my game from the background to the collectible
              items throughout each course.
              <br /> <br />
              A big part of this game was also creating all of the logic behind
              it myself. I had to code how the characters would know when to
              move, how users would gain or lose points, and I even had to
              implement gravity.
              <br /> <br />
              The two games that I was able to design in the short time frame
              were the northern white rhino and the markhor. Sadly, since this
              games creation the northern white rhino has been declared
              functionally extinct, meaning that with only 2 females left there
              is no chance for revival.
            </LeftText>
          </div>

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
