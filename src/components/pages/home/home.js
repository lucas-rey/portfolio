import React from "react";
import "./home.scss";
import Description from "../../common/description/description";
import MenuWrapper from "../../common/menu/menu";
import Scroll from "../../common/scroll-icon/scroll-icon";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <MenuWrapper />
        <Scroll />
        <div className="screen-container">
          <div className="intro-wrapper">
            <div className="flag-group">
              <div className="d-flag flag">
                <img
                  src={require("./../../../assets/d-flag.svg")}
                  alt="nautical flag d"
                />
              </div>
              <div className="d letter">D</div>
            </div>
            <div className="introduction">
              <h1>Hi there, I'm Rachel</h1>
              <h2>UX Design, Sailor, Triathlete</h2>
              <Link to="about">
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
                workType={"professional"}
                title={"ADP Poetry"}>
                As part of my web design class we were asked to explore html and
                css by experimenting with the design of a short poem. Through 5
                levels of experimentation we learned how to use html and css
                together to create different layouts on the page.
              </Description>
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
                workType={"school"}
                title={"National Parks"}>
                This project was an introduction to bootstrap and its responsive
                layouts. We were asked to create a list of at least 8 items that
                could be navigated to through the header and display a small
                amount of information about each listing. The designs had to be
                fit for multiple screen sizes as well.
              </Description>
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
                workType={"school"}
                title={"National Parks"}>
                This project was an introduction to bootstrap and its responsive
                layouts. We were asked to create a list of at least 8 items that
                could be navigated to through the header and display a small
                amount of information about each listing. The designs had to be
                fit for multiple screen sizes as well.
              </Description>
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
                workType={"school"}
                title={"National Parks"}>
                This project was an introduction to bootstrap and its responsive
                layouts. We were asked to create a list of at least 8 items that
                could be navigated to through the header and display a small
                amount of information about each listing. The designs had to be
                fit for multiple screen sizes as well.
              </Description>
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
                workType={"school"}
                title={"National Parks"}>
                This project was an introduction to bootstrap and its responsive
                layouts. We were asked to create a list of at least 8 items that
                could be navigated to through the header and display a small
                amount of information about each listing. The designs had to be
                fit for multiple screen sizes as well.
              </Description>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
