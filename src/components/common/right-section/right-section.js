import React from "react";
import PropTypes from "prop-types";
import "./right-section.scss";

class RightSection extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className="detail-container">
        <div className="title">{title}</div>
        <div className="line" />
        <div className="paragraph">{children}</div>
      </div>
    );
  }
}

export default RightSection;

RightSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string.isRequired
};
