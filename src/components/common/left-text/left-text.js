import React from "react";
import PropTypes from "prop-types";
import "./left-text.scss";

class LeftText extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className="detail-container">
        <div className="section-title">{title}</div>
        <div className="paragraph">{children}</div>
      </div>
    );
  }
}

export default LeftText;

LeftText.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string.isRequired
};
