import React from "react";
import "./lovemyself.scss";
import LeftText from "../../common/left-text/left-text";
import ImageLeft from "../../common/image-left/image-left";
import PageHeader from "../../common/page-header/page-header";
import MainNav from "../../common/navbar/navbar";
import Carousel from "react-bootstrap/lib/Carousel";
import Scroll from "../../common/scroll-icon/scroll-icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            <i className="fas fa-long-arrow-alt-left nav-arrow" /> Prev
          </a>
          <a className="next change" href="/endangered-species">
            Next <i className="fas fa-long-arrow-alt-right nav-arrow" />
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

          <div className="  full-width-p">
            <LeftText title={"Overview"} className="left-section">
              <b>DESIGN PROBLEM</b>
              <br />
              Identify a problem within the community and interrupt a space with
              a potential solution
              <br />
              <br />
              <b>CONTRIBUTIONS</b>
              <br />
              Research, Data Collection, Development
              <br />
              <br />
              The Love Myself Project was a week-long interactive installation
              on campus that tried to encourage self-love. Our intervention
              asked people to answer a different question each day and tie their
              answer to a fence. The fence resembled the boundaries that we put
              on our own lives with negative thoughts. At the end of the week
              the fence covered in colored strips represented the true strength
              we all have within ourselves to overcome these boundaries.
              <br />
              <br />
              We worked with organizations on campus to help provide free
              giveaways and marketing for our event. We created a web
              application to collect and store all of our research and responses
              for this project.
            </LeftText>
          </div>

          <div className="lmp-cover">
            <img
              src={require("./../../../assets/lmp-banner.jpg")}
              alt="home page love myself project"
            />
          </div>

          <div className="brand">
            <div className="  full-width-p">
              <LeftText title={"Visual Design"} className="left-section">
                Our brand was warm and welcoming. We had 5 different colors, one
                for each day of the week during our event. We also wanted them
                to be bright enough to grab people’s attention as they walked
                past our table.
              </LeftText>
            </div>

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

          <div className="full-width-p">
            <LeftText title={"Website"} className="left-section">
              Our final presentation of this event had to take two different
              forms, an annual report and a look book. As a team we got together
              and decided to bring our annual report together on a website. The
              site was created with Angular 2. Its original intentions were for
              marketing, but we quickly realized that social media would be more
              easily accessed by students than a website. The website now will
              lead you through every step of our project along the way and show
              how we got to our final event. Time and budget became big factors
              in shaping our event into what it became.
              <br /> <br />
              <a
                href="https://love-myself-project.firebaseapp.com"
                rel="noopener noreferrer"
                target="_blank">
                <button className="lmp-site btn2">View Website</button>
              </a>
            </LeftText>
          </div>

          <Carousel className="carousel two">
            <Carousel.Item>
              <img
                className="carousel-image"
                alt="900x500"
                src={require("./../../../assets/lmp_1.jpg")}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                alt="900x500"
                src={require("./../../../assets/lmp_2.jpg")}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                alt="900x500"
                src={require("./../../../assets/lmp_3.jpg")}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                alt="900x500"
                src={require("./../../../assets/lmp_4.jpg")}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                alt="900x500"
                src={require("./../../../assets/lmp_5.jpg")}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                alt="900x500"
                src={require("./../../../assets/lmp_6.jpg")}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                alt="900x500"
                src={require("./../../../assets/lmp_7.jpg")}
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default LoveMyself;
