import React from "react";
import Description from "../../common/description/description";
import "./home.scss";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="screen-container">
          <div className="intro-wrapper">
            <div className="flag-group">
              <div className="d-flag flag">
                <img
                  src={require("./../../../assets/d-flag.jpg")}
                  alt="nautical flag d"
                />
              </div>
              <div className="d letter">D</div>
            </div>
            <div className="introduction">
              <h1>Hi there, I'm Rachel</h1>
              <h2>UX Design, Sailor, Triathlete</h2>
              <button onClick={e => this.handleClick(e)}>Learn More</button>
            </div>
          </div>
          <div className="scroll">
            <img
              src={require("./../../../assets/scroll.svg")}
              alt="nautical flag e"
            />
            <p>scroll down</p>
          </div>
        </div>
        <div className="screen-container">
          <div className="project-wrapper">
            <div className="flag-group">
              <div className="e-flag flag">
                <img
                  src={require("./../../../assets/e-flag.jpg")}
                  alt="nautical flag e"
                />
              </div>
              <div className="e letter">E</div>
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
            <div className="s-flag flag">
              <img
                src={require("./../../../assets/s-flag.jpg")}
                alt="nautical flag s"
              />
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
