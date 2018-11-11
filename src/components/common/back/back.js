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
        <div onClick={history.goBack} className={`back ${finalFontColor}`}>
          <div className="back-arrow">
            <i className={`${finalFontColor}-arrow left `} />
          </div>
          Go Back
        </div>
      </div>
    );
  }
}

export default withRouter(Back);
