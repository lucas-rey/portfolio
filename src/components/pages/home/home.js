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
                I am a designer focused on user experience design and front end
                development. Several years ago I took it upon myself to learn
                how to code. This has helped me speak and understand more
                technical conversations and allowed me to more clearly define my
                role in the design process as a whole. I am the translator
                between the user and their products.
                <br /> <br />I am comfortable being uncomfortable. My biggest
                hobbies include triathlons, sailing, and hiking. I ran both
                cross country and track throughout high school, and what I miss
                the most about those days is being part of those teams. I love
                being with people who push me to be better and who I can push to
                improve as well. There's nothing quite like the relationships
                you form with your teammates.
                <br /> <br />I like to bring that philosophy into my work as
                well. I work in teams as often as I can and I use the advice of
                my peers and sometimes even strangers to influence my projects.
                I build designs that inspire, excite, and foster relationships
                with users. I know that the most beneficial or creative
                solutions are never the most obvious but they are usually the
                most overlooked.
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
