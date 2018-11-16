import React from "react";
import "./back.scss";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class Back extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  render() {
    const { history, fontColor } = this.props;
    const defaultFontColor = "white";
    const finalFontColor = fontColor || defaultFontColor;
    return (
      <div className="go-back-button">
        <a href="/">
          <div className={`back ${finalFontColor}`}>RACHEL LUCAS</div>
        </a>
      </div>
    );
  }
}

export default withRouter(Back);
