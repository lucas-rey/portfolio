import React from "react";
import "./construction.scss";
import PropTypes from "prop-types";
import MenuWrapper from "../../common/menu/menu";

class Construction extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  render() {
    const { history } = this.props;

    return (
      <div>
        <MenuWrapper />
        <button onClick={() => history.go(-1)}>Go Back</button>
        <div className="text">Sorry. This page is still being built</div>
      </div>
    );
  }
}

export default Construction;
