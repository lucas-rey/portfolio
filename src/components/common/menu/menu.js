import React from "react";
import "./menu.scss";
import { push as Menu } from "react-burger-menu";

class MenuWrapper extends React.Component {
  render() {
    return (
      <div>
        <div className="menu-text">Menu</div>
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
              <a id="professional" className="menu-item" href="/construction">
                <div className="item-group">
                  <img src={require("./../../../assets/work.svg")} alt="work" />
                  Professional
                </div>
              </a>
              <a id="school" className="menu-item" href="/school">
                <div className="item-group">
                  <img
                    src={require("./../../../assets/school.svg")}
                    alt="school"
                  />
                  School
                </div>
              </a>
              <a id="about" className="menu-item" href="/construction">
                <div className="item-group">
                  <img
                    src={require("./../../../assets/about.svg")}
                    alt="about"
                  />
                  About
                </div>
              </a>
              <a id="contact" className="menu-item" href="/construction">
                <div className="item-group">
                  <img
                    src={require("./../../../assets/contact.svg")}
                    alt="contact"
                  />
                  Contact
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
