import React from "react";
import "./navbar.scss";
import Modal from "react-responsive-modal";
import PropTypes from "prop-types";
import { withRouter, ReactDOM } from "react-router-dom";
import Fade from "react-reveal/Fade";

class MainNav extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { history, fontColor } = this.props;
    //if no colors are provided as props, set defaults
    const defaultBackgroundColor = "black";
    const defaultFontColor = "white";

    // const finalBackgroundColor = backgroundColor || defaultBackgroundColor;
    const finalFontColor = fontColor || defaultFontColor;

    const { open } = this.state;

    return (
      <div>
        <div className="menu-items">
          <div
            className="menu-btn menu-btn-action menu-item"
            onClick={this.onOpenModal}>
            Open
          </div>
          <Modal open={open} onClose={this.onCloseModal}>
            <div className="screen-container" id="section-1">
              <div className="projects">
                <a href="/vietnam">
                  <div
                    className={`project-name link link--kukuri red`}
                    data-letters="Vietnam Journal">
                    Vietnam Journal
                  </div>
                </a>
                <a href="/street-smart">
                  <div
                    className={`project-name link link--kukuri blue`}
                    data-letters="Street Smart">
                    Street Smart
                  </div>
                </a>
                <a href="/lovemyself">
                  <div
                    className="project-name link link--kukuri yellow"
                    data-letters="Love Myself Project">
                    Love Myself Project
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
                {/* <a href="/vcu">
                <div
                  className="project-name link link--kukuri red"
                  data-letters="VCU USC&A">
                  VCU USC&A
                </div>
              </a> */}
              </div>
            </div>
          </Modal>
          <a href="/#about">
            <div className={`menu-item change ${finalFontColor}`}>About</div>
          </a>
          <a href="/#contact">
            <div className={`menu-item change ${finalFontColor}`}>Contact</div>
          </a>
        </div>
        <div id="outer-container" />
      </div>
    );
  }
}

export default MainNav;
