import React from "react";
import "./lovemyself.scss";
import LeftText from "../../common/left-text/left-text";
import ImageLeft from "../../common/image-left/image-left";
import PageHeader from "../../common/page-header/page-header";
import MainNav from "../../common/navbar/navbar";
import Carousel from "react-bootstrap/lib/Carousel";
import Name from "../../common/name/name";
// import { Link } from "react-router-dom";

class LoveMyself extends React.Component {
  render() {
    return (
      <div>
        <MainNav />
        <Name />
        <PageHeader
          year={"2018"}
          workType={"Installation"}
          title={"Love Myself Project"}
          backgroundColor={"yellow"}
        />
        <div className="bottom-navigation">
          <a className="previous change" href="/street-smart">
            Prev
          </a>
          <div className="header-line change" />{" "}
          <a className="next change" href="/video-game">
            Next
          </a>
        </div>
        <div className="topGradient" />
        <div className="main-container">
          <div className="project-group smaller-projects">
            <img
              src={require("./../../../assets/lmp-dailymaps.png")}
              alt="rhino video game"
            />
            <img
              src={require("./../../../assets/lmp-imagegrid.png")}
              alt="markhor video game"
            />
          </div>

          <LeftText title={"Overview"} className="left-section">
            For this assignment we were placed into groups of 3-4 and asked to
            interrupt a space. We all got together and started listing off
            topics that we were interested in and things that we wanted to focus
            on and we landed on an interactive installation on campus that dealt
            with the topic of self-love. We planned a week long intervention on
            campus that asked people to answer a different question every day.
            The biggest idea behind this project for us was repitition and we
            really wanted to have people who would come out every day to see
            what was next, and we achieved that. We had to start from the ground
            up. We had to brand ourselves, generate merch to hand out, partner
            with campus organizations, and create social media campaigns for
            each day leading up to and during the event.
          </LeftText>

          <div className="lmp-cover">
            <img
              src={require("./../../../assets/lmp-banner.jpg")}
              alt="home page love myself project"
            />
          </div>

          <div className="brand">
            <LeftText title={"Branding"} className="left-section">
              We developed a color palette that would utilize 5 different
              colors. Our event would take place over a total of 5 days and we
              wanted to have a different color for each day to provide some
              visual differences. The color palette featured mostly cool colors
              that were bright and welcoming colors. These colors had to be able
              to catch peoples eye as they walked past our table during the
              event.
            </LeftText>

            <div className="brand-colors-two">
              <div className="color-group-circles circle-one">
                <div className="hex-text2"> DAY 1</div>
                <div className="circle lmp-one" />
              </div>
              <div className="color-group-circles">
                <div className="hex-text2"> DAY 2</div>
                <div className="circle lmp-two" />
              </div>
              <div className="color-group-circles">
                <div className="hex-text2"> DAY 3</div>
                <div className="circle lmp-three" />
              </div>
              <div className="color-group-circles">
                <div className="hex-text2"> DAY 4</div>
                <div className="circle lmp-four" />
              </div>
              <div className="color-group-circles">
                <div className="hex-text2"> DAY 5</div>
                <div className="circle lmp-five" />
              </div>
            </div>
          </div>

          <LeftText title={"Website"} className="left-section">
            As part of our project we are supposed to create two different final
            presentations: an annual report and a lookbook. Our annual report
            has taken the form of this website (click here if the image above
            does not work). I've created this website from scratch using Angular
            2. This site was originally intended to be used during our startup
            of the project but we decided that it would exist better in this
            form instead. It is currently a work in progress so it does not have
            all of the final information on it. We also intend to have research,
            documentation, and process pages. The website will lead you through
            every step of our project along the way and show how we got to our
            end product. Our idea evolved and changed a lot along the way as we
            learned what we would have time to do and what we could afford to
            do.
            <br /> <br />
            <a
              href="https://love-myself-project.firebaseapp.com"
              rel="noopener noreferrer"
              target="_blank">
              <button className="lmp-site btn2">View Website</button>
            </a>
          </LeftText>

          <Carousel className="carousel two">
            <Carousel.Item>
              <img
                className="carousel-image"
                alt="900x500"
                src={require("./../../../assets/lmp-1.jpg")}
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default LoveMyself;
