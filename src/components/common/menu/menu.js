import React from "react";
import "./menu.scss";
import { push as Menu } from "react-burger-menu";

class MenuWrapper extends React.Component {
  render() {
    return (
      <div>
        <div className="menu-text change">Menu</div>
        <div id="outer-container">
          <Menu
            right
            outerContainerId={"outer-container"}
            isOpen={false}
            width={150}>
            <main id="page-wrap">
              <a id="home" className="menu-item" href="/">
                <div className="item-group">
                  <img src={require("./../../../assets/home.svg")} alt="home" />
                  Home
                </div>
              </a>
              <a id="about" className="menu-item" href="/about">
                <div className="item-group">
                  <img
                    src={require("./../../../assets/about.svg")}
                    alt="about"
                  />
                  About
                </div>
              </a>
              <a id="contact" className="menu-item" href="/contact">
                <div className="item-group">
                  <img
                    src={require("./../../../assets/contact.svg")}
                    alt="contact"
                  />
                  Contact
                </div>
              </a>
              <a
                id="github"
                className="menu-item"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/lucas-rey/portfolio">
                <div className="item-group">
                  <img
                    src={require("./../../../assets/github.png")}
                    alt="website"
                  />
                  Github
                </div>
              </a>
              <a
                id="linkedin"
                className="menu-item"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/rachel-lucas/">
                <div className="item-group">
                  <img
                    src={require("./../../../assets/linked-in.png")}
                    alt="linked in"
                  />
                  LinkedIn
                </div>
              </a>
            </main>
          </Menu>
        </div>
      </div>
    );
  }
}

export default MenuWrapper;
