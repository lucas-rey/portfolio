import React from "react";
import "./construction.scss";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import MenuWrapper from "../../common/menu/menu";

class Construction extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    const { match, location, history } = this.props;

    return (
      <div>
        <MenuWrapper />
        <button onClick={() => this.props.history.go(-1)}>Go Back</button>
        <div className="text">Sorry. This page is still being built</div>
      </div>
    );
  }
}

export default Construction;

const ConstructionWithRouter = withRouter(Construction);
