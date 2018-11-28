import React from "react";
import "./navbar.scss";

// Modal.setAppElement("#projects");

class MainNav extends React.Component {
  render() {
    const { fontColor } = this.props;
    //if no colors are provided as props, set defaults
    const defaultBackgroundColor = "black";
    const defaultFontColor = "white";

    // const finalBackgroundColor = backgroundColor || defaultBackgroundColor;
    const finalFontColor = fontColor || defaultFontColor;

    return (
      <div>
        <div className="menu-items">
          <a href="/work">
            <div className={`menu-item change ${finalFontColor}`}>Work</div>
          </a>
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
