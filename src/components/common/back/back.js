import React from "react";
import "./back.scss";
import PropTypes from "prop-types";

class Back extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  render() {
    const { history } = this.props.navigation;

    return (
      <div className="go-back-button">
        <button onClick={() => history.goBack()} className="back">
          <div className="back-arrow">
            <i class="arrow left" />
          </div>
          Go Back
        </button>
      </div>
    );
  }
}

export default Back;
