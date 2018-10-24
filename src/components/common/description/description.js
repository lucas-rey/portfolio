import React from "react";
import PropTypes from "prop-types";
import "./description.scss";
import Fade from "react-reveal/Fade";

class Description extends React.Component {
  render() {
    const { year, workType, title, children } = this.props;
    return (
      <Fade right cascade>
        <div className="description-container">
          <div className="date-type">
            <div className="year">{year}</div>
            <div className="circle" />
            <div className="type">{workType}</div>
          </div>
          <div className="title">{title}</div>
          <div className="line" />
          <div className="paragraph">{children}</div>
        </div>
      </Fade>
    );
  }
}

export default Description;

Description.propTypes = {
  year: PropTypes.string,
  workType: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.string.isRequired
};
