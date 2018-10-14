import React from "react";
import "./school.scss";
import Description from "../../common/description/description";
import MenuWrapper from "../../common/menu/menu";
import Scroll from "../../common/scroll-icon/scroll-icon";

class School extends React.Component {
  render() {
    return (
      <div>
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
                workType={"school"}
                title={"HTML Poetry"}>
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
              <div className="u-flag flag">
                <img
                  src={require("./../../../assets/u-flag.svg")}
                  alt="nautical flag u"
                />
              </div>
              <div className="u letter">U</div>
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

export default School;
