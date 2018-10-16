import React from "react";
import "./school.scss";
import Description from "../../common/description/description";
import MenuWrapper from "../../common/menu/menu";
import Scroll from "../../common/scroll-icon/scroll-icon";
import Footer from "../../common/footer/footer";
import { Link } from "react-router-dom";

class School extends React.Component {
  render() {
    return (
      <div>
        <div className="page-name">School</div>
        <MenuWrapper />
        <Scroll />
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
              <div className="t-flag flag">
                <img
                  src={require("./../../../assets/t-flag.svg")}
                  alt="nautical flag t"
                />
              </div>
              <div className="t letter">T</div>
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
              <div className="u-flag flag">
                <img
                  src={require("./../../../assets/u-flag.svg")}
                  alt="nautical flag u"
                />
              </div>
              <div className="u letter">U</div>
            </div>
            <div className="custom-description">
              <Description year={"2017"} workType={"School"} title={"Brevet"}>
                This project was an introduction to mobile design and
                prototyping. We were asked to design an application and then
                create a prototype that would be used in a promotional video.
                This was a solo project so I was responsible for the conception,
                branding, design, and development of the final product.
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
              <div className="d-flag flag">
                <img
                  src={require("./../../../assets/d-flag.svg")}
                  alt="nautical flag d"
                />
              </div>
              <div className="d letter">D</div>
            </div>
            <div className="custom-description">
              <Description
                year={"2018"}
                workType={"School"}
                title={"HTML Poetry"}>
                As part of my web design class we were asked to explore html and
                css by experimenting with the design of a short poem. Through 5
                levels of experimentation we learned how to use html and css
                together to create different layouts on the page.
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
              <div className="y-flag flag">
                <img
                  src={require("./../../../assets/y-flag.svg")}
                  alt="nautical flag y"
                />
              </div>
              <div className="y letter">Y</div>
            </div>
            <div className="custom-description">
              <Description
                year={"2018"}
                workType={"School"}
                title={"National Parks"}>
                This project was an introduction to bootstrap and its responsive
                layouts. We were asked to create a list of at least 8 items that
                could be navigated to through the header and display a small
                amount of information about each listing. The designs had to be
                fit for multiple screen sizes as well.
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

export default School;
