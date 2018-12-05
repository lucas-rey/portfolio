import React from "react";
import "./home.scss";
import MainNav from "../../common/navbar/navbar";
import Name from "../../common/name/name";
import ReactRotatingText from "react-rotating-text";
import LeftText from "../../common/left-text/left-text";
import Contacts from "../../common/form/form";

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
                "Sailor"
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
              <LeftText title={"About My Process"} className="left-section">
                I am comfortable being uncomfortable and I push my limits daily.
                My biggest hobbies include triathlons, sailing, and hiking. I
                ran both cross country and track, and what I miss the most about
                those days is not the races but being a part of a team. I loved
                being with people who pushed me to be better and who I could
                push to improve as well. There’s nothing quite like the
                relationships you form with your teammates.
                <br /> <br />I have recently developed a love for user centered
                designs. I love that type of feedback and being able to
                constantly improve an experience. There is nothing more valuable
                than that type of interaction. I build designs that inspire,
                excite, and foster relationships with users that are more
                meaningful to businesses. I want to push design into the next
                generation and create products that are more desirable to their
                end users.
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
                  {/* <a
                    href="./../../../assets/resume.pdf"
                    rel="noopener noreferrer"
                    target="_blank">
                    <i className="fas fa-file individual" />
                  </a> */}
                </div>
              </LeftText>
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
                <h2>Let's get in touch</h2>
              </div>
              <div className="description">
                <p>
                  If you have any opportunities or questions that you would like
                  to discuss further please don’t hesitate to reach out.
                </p>
              </div>
              <div className="contact-form">
                <Contacts to="rachel.e.lucas@gmail.com" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
