import React from "react";
import "./back.scss";
import PropTypes from "prop-types";

class Back extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  render() {
    const { history } = this.props;

    return (
      <div className="go-back-button">
        <div onClick={() => history.go(-1)} className="back">
          <div className="back-arrow">
            <i class="arrow left" />
          </div>
          Go Back
        </div>
      </div>
    );
  }
}

export default Back;
