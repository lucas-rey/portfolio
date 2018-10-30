import React from "react";
import "./home.scss";
import Description from "../../common/description/description";
import MenuWrapper from "../../common/menu/menu";
import ScrollSpy from "../../common/scrollspy/scrollspy";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

class Home extends React.Component {
  render() {
    return (
      <div>
        <MenuWrapper />
        <ScrollSpy />
        <div className="screen-container" id="section-1">
          <div className="intro-wrapper">
            <Fade left cascade>
              <div className="flag-group">
                <div className="u-flag flag">
                  <img
                    src={require("./../../../assets/u-flag.svg")}
                    alt="nautical flag u"
                  />
                </div>
                <div className="u letter">U</div>
              </div>
            </Fade>
            <Fade>
              <div className="introduction">
                <h1>Hi there, I'm Rachel</h1>
                <h2>UX Designer, Sailor, Triathlete</h2>
                <Link to="about">
                  <button>Learn More</button>
                </Link>
              </div>
            </Fade>
          </div>
        </div>
        <div className="screen-container" id="section-2">
          <div className="project-wrapper">
            <Fade left cascade>
              <div className="flag-group">
                <div className="x-flag flag">
                  <img
                    src={require("./../../../assets/x-flag.svg")}
                    alt="nautical flag x"
                  />
                </div>
                <div className="x letter">X</div>
              </div>
            </Fade>
            <div className="custom-description">
              <Description
                year={"2018"}
                workType={"Professional"}
                title={"ADP Payroll Innovation"}>
                Next Gen Payroll Innovation. I worked as the voice of the newest
                generation to help bring transparency to an updated payroll
                system. I worked with other designers and researches to help
                design applications that put the user first. I gained knowledge
                of branding, the agile process, and working alongside
                development teams to work effectively.
              </Description>
              <Fade>
                <Link to="adp">
                  <button>View More</button>
                </Link>
              </Fade>
            </div>
          </div>
        </div>
        <div className="screen-container" id="section-3">
          <div className="project-wrapper">
            <Fade left cascade>
              <div className="flag-group">
                <div className="d-flag flag">
                  <img
                    src={require("./../../../assets/d-flag.svg")}
                    alt="nautical flag d"
                  />
                </div>
                <div className="d letter">D</div>
              </div>
            </Fade>
            <div className="custom-description">
              <Description
                year={"2018"}
                workType={"School"}
                title={"Street Smart"}>
                Street Smart is a biking safety app aimed at decreasing the
                amount of bike and motor vehicle accidents. We started a
                hypothetical business and worked to research and design our
                business in such a way that it would be profitable within a few
                years. This class culminated in a final investment pitch that
                included our marketing strategy, financial plans, and a
                prototype of the product.
              </Description>
              <Fade>
                <Link to="street-smart">
                  <button>View More</button>
                </Link>
              </Fade>
            </div>
          </div>
        </div>
        <div className="screen-container" id="section-4">
          <div className="project-wrapper">
            <Fade left cascade>
              <div className="flag-group">
                <div className="e-flag flag">
                  <img
                    src={require("./../../../assets/e-flag.svg")}
                    alt="nautical flag e"
                  />
                </div>
                <div className="e letter">E</div>
              </div>
            </Fade>
            <div className="custom-description">
              <Description
                year={"2018"}
                workType={"School"}
                title={"Vietnam Journal"}>
                Several years ago my dad was given the journal that my grandad
                wrote on his final tour in Vietnam. I transcribed, researched,
                and drafted for about a year to develop this final publication.
                Most of my family had not read through his story so I wanted to
                give them all the opportunity. This publication is for sale and
                all of its proceeds are donated towards The Wounded Warrior
                Project.
              </Description>
              <Fade>
                <Link to="vietnam">
                  <button>View More</button>
                </Link>
              </Fade>
            </div>
          </div>
        </div>
        <div className="screen-container" id="section-5">
          <div className="project-wrapper">
            <Fade left cascade>
              <div className="flag-group">
                <div className="s-flag flag">
                  <img
                    src={require("./../../../assets/s-flag.svg")}
                    alt="nautical flag s"
                  />
                </div>
                <div className="s letter">S</div>
              </div>
            </Fade>
            <div className="custom-description">
              <Description
                year={"2017"}
                workType={"School"}
                title={"Video Game"}>
                For this project we were asked to create an interactable piece
                that could be placed in a timebox and opened 100 years from now.
                I wanted to document the endangered species of today as I
                realized future generations may not get to see these animals. I
                decided to create an education video game, encouraging users to
                try and save the species by guiding animals to wildlife
                perserves.
              </Description>
              <Fade>
                <Link to="video-game">
                  <button>View More</button>
                </Link>
              </Fade>
            </div>
          </div>
        </div>
        <div className="screen-container" id="section-6">
          <div className="project-wrapper">
            <Fade left cascade>
              <div className="flag-group">
                <div className="i-flag flag">
                  <img
                    src={require("./../../../assets/i-flag.svg")}
                    alt="nautical flag i"
                  />
                </div>
                <div className="i letter">I</div>
              </div>
            </Fade>
            <div className="custom-description">
              <Description
                year={"2018"}
                workType={"Professional"}
                title={"Mousai"}>
                This is a collabrative project. It is currently still in
                production but it will soon be released for use. I was
                approached with the design proposition of an extension to
                Spotify that will allow users to upvote and downvote songs
                within their playlist. I created all of the design and branding
                for this application.
              </Description>
              <Fade>
                <Link to="mousai">
                  <button>View More</button>
                </Link>
              </Fade>
            </div>
          </div>
        </div>
        <div className="screen-container" id="section-7">
          <div className="project-wrapper">
            <Fade left cascade>
              <div className="flag-group">
                <div className="g-flag flag">
                  <img
                    src={require("./../../../assets/g-flag.svg")}
                    alt="nautical flag g"
                  />
                </div>
                <div className="g letter">G</div>
              </div>
            </Fade>
            <div className="custom-description">
              <Description year={"2017"} workType={"School"} title={"Brevet"}>
                This project was an introduction to mobile design and
                prototyping. We were asked to design an application and then
                create a prototype that would be used in a promotional video.
                This was a solo project so I was responsible for the conception,
                branding, design, and development of the final product.
              </Description>
              <Fade>
                <Link to="brevet">
                  <button>View More</button>
                </Link>
              </Fade>
            </div>
          </div>
        </div>
        <div className="screen-container" id="section-8">
          <div className="project-wrapper">
            <Fade left cascade>
              <div className="flag-group">
                <div className="n-flag flag">
                  <img
                    src={require("./../../../assets/n-flag.svg")}
                    alt="nautical flag n"
                  />
                </div>
                <div className="n letter">N</div>
              </div>
            </Fade>
            <div className="custom-description">
              <Description
                year={"2017"}
                workType={"Professional"}
                title={"VCU USC&A"}>
                My primary work for this department was campign work. We
                designed cohesive campaign materials for events and
                organizations around campus. I learned to work with clients and
                gained experience with tight deadlines. I created everything
                from posters, logos, and handouts to banners and even several
                wall murals.
              </Description>
              <Fade>
                <Link to="vcu">
                  <button>View More</button>
                </Link>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
