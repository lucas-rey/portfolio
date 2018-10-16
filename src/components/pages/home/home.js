import React from "react";
import "./home.scss";
import Description from "../../common/description/description";
import MenuWrapper from "../../common/menu/menu";
import Scroll from "../../common/scroll-icon/scroll-icon";
import Footer from "../../common/footer/footer";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="page-name">Home</div>
        <MenuWrapper />
        <Scroll />
        <div className="screen-container">
          <div className="intro-wrapper">
            <div className="flag-group">
              <div className="flag">
                <img
                  src={require("./../../../assets/d-flag.svg")}
                  alt="nautical flag d"
                />
              </div>
              <div className="d letter">D</div>
            </div>
            <div className="introduction">
              <h1>Hi there, I'm Rachel</h1>
              <h2>UX Designer, Sailor, Triathlete</h2>
              <Link to="construction">
                <button>Learn More</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="screen-container">
          <div className="project-wrapper">
            <div className="flag-group">
              <div className="e-flag flag">
                <img
                  src={require("./../../../assets/e-flag.svg")}
                  alt="nautical flag e"
                />
              </div>
              <div className="e letter">E</div>
            </div>
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
              <Link to="construction">
                <button>View More</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="screen-container">
          <div className="project-wrapper">
            <div className="flag-group">
              <div className="s-flag flag">
                <img
                  src={require("./../../../assets/s-flag.svg")}
                  alt="nautical flag s"
                />
              </div>
              <div className="s letter">S</div>
            </div>
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
              <Link to="construction">
                <button>View More</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="screen-container">
          <div className="project-wrapper">
            <div className="flag-group">
              <div className="i-flag flag">
                <img
                  src={require("./../../../assets/i-flag.svg")}
                  alt="nautical flag i"
                />
              </div>
              <div className="i letter">I</div>
            </div>
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
              <Link to="construction">
                <button>View More</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="screen-container">
          <div className="project-wrapper">
            <div className="flag-group">
              <div className="g-flag flag">
                <img
                  src={require("./../../../assets/g-flag.svg")}
                  alt="nautical flag g"
                />
              </div>
              <div className="g letter">G</div>
            </div>
            <div className="custom-description">
              <Description
                year={"2018"}
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
              <Link to="construction">
                <button>View More</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="screen-container">
          <div className="project-wrapper">
            <div className="flag-group">
              <div className="n-flag flag">
                <img
                  src={require("./../../../assets/n-flag.svg")}
                  alt="nautical flag n"
                />
              </div>
              <div className="n letter">N</div>
            </div>
            <div className="custom-description">
              <Description
                year={"2018"}
                workType={"Personal"}
                title={"Portfolio Website"}>
                Take a look at the process behind this website and how it came
                to be. You can learn more about the elements that I used within
                it and why. This site was custom made by myself so feel free to
                view my github repo as well.
              </Description>
              <Link to="construction">
                <button>View More</button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
