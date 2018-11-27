import React from "react";
import "./work.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Fade from "react-reveal/Fade";

class Work extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };
  render() {
    const { history, fontColor } = this.props;
    //if no colors are provided as props, set defaults
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
                  className={`project-name link link--kukuri red`}
                  data-letters="ADP Internship">
                  ADP Internship
                </div>
              </a>
              <a href="/street-smart">
                <div
                  className={`project-name link link--kukuri blue`}
                  data-letters="Street Smart">
                  Street Smart
                </div>
              </a>
              <a href="/vietnam">
                <div
                  className="project-name link link--kukuri yellow"
                  data-letters="Vietnam Journal">
                  Vietnam Journal
                </div>
              </a>
              <a href="/video-game">
                <div
                  className="project-name link link--kukuri yellow"
                  data-letters="Video Game">
                  Video Game
                </div>
              </a>
              <a href="/mousai">
                <div
                  className="project-name link link--kukuri yellow"
                  data-letters="Mousai">
                  Mousai
                </div>
              </a>
              <a href="/brevet">
                <div
                  className="project-name link link--kukuri blue"
                  data-letters="Brevet">
                  Brevet
                </div>
              </a>
              <a href="/vcu">
                <div
                  className="project-name link link--kukuri blue"
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
