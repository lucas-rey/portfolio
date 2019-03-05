import React from "react";
import "./home.scss";
import MainNav from "../../common/navbar/navbar";
import Name from "../../common/name/name";
import Contacts from "../../common/form/form";
import resume from "./../../../assets/lucas-resume.pdf";

class Home extends React.Component {
  render() {
    var ReactRotatingText = require("react-rotating-text");
    return (
      <div>
        <MainNav />
        <Name />
        {/* <div className="topGradient" /> */}
        <div className="screen-container" id="section-1">
          <div className="home-content">
            <div className="home-text">Hi there, I'm Rachel.</div>
            <ReactRotatingText
              items={[
                "Designer",
                "Developer",
                "Observer",
                "Triathlete",
                "Sailor",
                "Empathizer"
              ]}
              className="home-text"
            />
          </div>
        </div>
        <div className="topGradient" />
        <div className="about-me" id="about">
          <div className="text-group">
            <div className="section-title">A little about me</div>
            <div className="hobbies">
              <div className="intro">
                Behind every successful product is a team of thinkers,
                innovators, and risk takers. I help turn big ideas into reality
                and translate complicated ideas into understandable designs. I
                aim to compel, empower, and inspire users to step into the
                future.
                <br /> <br />
                The future is here. Let’s design it.
                <br /> <br />
                <div className="outside-links">
                  <a
                    href="https://github.com/lucas-rey/portfolio"
                    rel="noopener noreferrer"
                    target="_blank">
                    <img
                      src={require("./../../../assets/github.png")}
                      alt="github"
                      className="individual-link"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rachel-lucas/"
                    rel="noopener noreferrer"
                    target="_blank">
                    <img
                      src={require("./../../../assets/linked-in.png")}
                      alt="linkedin"
                      className="individual-link"
                    />
                  </a>
                  <a href={resume} rel="noopener noreferrer" target="_blank">
                    <i className="fas fa-file individual" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="image-bounds">
            <img
              src={require("./../../../assets/glacier.JPG")}
              alt="boat on a river in Montana"
            />
          </div>
        </div>
        <div className="screen-container two" id="contact">
          <div className="contact-group">
            <div className="contact-text">
              <div className="contact-title">
                <div className="section-title">Let's create</div>
              </div>
              <div className="description">
                <p>
                  If you have any opportunities or questions that you would like
                  to discuss further please don’t hesitate to reach out
                </p>
              </div>
              <div className="contact-form">
                <Contacts to="rachellucas14@gmail.com" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
