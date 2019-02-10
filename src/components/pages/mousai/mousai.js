import React from "react";
import "./mousai.scss";
import MainNav from "../../common/navbar/navbar";
import LeftText from "../../common/left-text/left-text";
// import ImageLeft from "../../common/image-left/image-left";
import PageHeader from "../../common/page-header/page-header";
import Scroll from "../../common/scroll-icon/scroll-icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Name from "../../common/name/name";
// import { Link } from "react-router-dom";

class Mousai extends React.Component {
  render() {
    return (
      <div>
        <MainNav />
        <Name />
        <PageHeader
          year={"2018"}
          workType={"Web Application"}
          title={"Mousai"}
          backgroundColor="blue"
          fontColor="white"
        />
        <div className="bottom-navigation">
          <a className="previous change" href="/endangered-species">
            <i className="fas fa-long-arrow-alt-left nav-arrow" /> Prev
          </a>
          <Scroll />
          <a className="next change" href="/vietnam">
            Next <i className="fas fa-long-arrow-alt-right nav-arrow" />
          </a>
        </div>
        <div className="topGradient" />
        <div className="main-container">
          <div className="project-group smaller-projects">
            <img
              src={require("./../../../assets/mousai-home.png")}
              alt="mousai login"
            />
            <img
              src={require("./../../../assets/mousai-album.png")}
              alt="mousai playlist"
            />
          </div>

          <div className="  full-width-p">
            <LeftText title={"Overview"} className="left-section">
              <b>DESIGN PROBLEM</b>
              <br />
              Spotify users need a way to rate group and personal playlists
              <br />
              <br />
              <b>CONTRIBUTIONS</b>
              <br />
              Design, Branding, Front End Development
              <br />
              <br />
              This was a collabrative design and development project. I am
              designing and implementing all of the front end work for this
              application, including UX Design and branding. Using Spotify’s
              API’s we created an extention of the that gives users the ability
              to upvote and downvote songs in any of their playlists. This
              process allows users to indirectly order/maintain their playlists
              and after a certain number of downvotes a song will be completely
              removed.
              <br /> <br />
              The application is named after the Mousai (Muses) in Greek
              mythology. They were the goddess of music, poetry, and
              inspiration.
              <br /> <br />
              <div className="warning">
                <i className="fas fa-exclamation-circle" />
                <div className="warning-text">
                  This project is still in progress
                </div>
              </div>
            </LeftText>
          </div>

          <div className="branding short-brand">
            <div className="  full-width-p">
              <LeftText title={"Visual Design"} className="left-section">
                The brand is modern and minimal, using bold colors that pop off
                of the page. The information displayed is limited to only what
                is absolutely necessary and important to the user for
                transparency and readability. <br /> <br />
                We are currently in the process of developing a logo.
              </LeftText>
            </div>
            <div className="brand-colors">
              <div className="color-group">
                <div className="hex-text"> PRIMARY HEX #0099FF</div>
                <div className="rectangle mousai-one" />
              </div>
              <div className="color-group">
                <div className="hex-text"> HEX #212237</div>
                <div className="rectangle mousai-two" />
              </div>
              <div className="color-group">
                <div className="hex-text-black"> HEX #D9E021</div>
                <div className="rectangle mousai-three" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mousai;
