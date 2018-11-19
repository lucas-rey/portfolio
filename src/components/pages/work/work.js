import React from "react";
import "./work.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Fade from "react-reveal/Fade";

// import NavBar from "../../common/navbar/navbar";
// import Back from "../../common/back/back";
// import Description from "../../common/description/description";
// import ScrollSpy from "../../common/scrollspy/scrollspy";
// import Fade from "react-reveal/Fade";

class Work extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };
  render() {
    const { history, fontColor } = this.props;
    const defaultFontColor = "white";
    const finalFontColor = fontColor || defaultFontColor;
    return (
      <div>
        <Fade top>
          <div className="screen-container" id="section-1">
            <FontAwesomeIcon
              onClick={history.goBack}
              icon="times"
              fontColor="white"
              className={`${finalFontColor} icon-close`}
            />
            <div className="projects">
              <a href="/adp">
                <div
                  className="project-name link link--kukuri"
                  data-letters="ADP Internship">
                  ADP Internship
                </div>
              </a>
              <a href="/street-smart">
                <div
                  className="project-name link link--kukuri"
                  data-letters="Street Smart">
                  Street Smart
                </div>
              </a>
              <a href="/vietnam">
                <div
                  className="project-name link link--kukuri"
                  data-letters="Vietnam Journal">
                  Vietnam Journal
                </div>
              </a>
              <a href="/video-game">
                <div
                  className="project-name link link--kukuri"
                  data-letters="Video Game">
                  Video Game
                </div>
              </a>
              <a href="/mousai">
                <div
                  className="project-name link link--kukuri"
                  data-letters="Mousai">
                  Mousai
                </div>
              </a>
              <a href="/brevet">
                <div
                  className="project-name link link--kukuri"
                  data-letters="Brevet">
                  Brevet
                </div>
              </a>
              <a href="/vcu">
                <div
                  className="project-name link link--kukuri"
                  data-letters="VCU USC&A">
                  VCU USC&A
                </div>
              </a>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Work;
