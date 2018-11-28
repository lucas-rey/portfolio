import React from "react";
import "./name.scss";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class Name extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  render() {
    const { history, fontColor } = this.props;
    const defaultFontColor = "white";
    const finalFontColor = fontColor || defaultFontColor;
    return (
      <div className="name-button">
        <a href="/#section-1">
          <div className={`name ${finalFontColor}`}>RACHEL LUCAS</div>
        </a>
      </div>
    );
  }
}

export default withRouter(Name);
