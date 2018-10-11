import React from "react";
import PropTypes from "prop-types";
import "./description.scss";

class Description extends React.Component {
  render() {
    const { year, workType, title, children } = this.props;
    return (
      <div className="test">
        {year}
        {workType}
        {title}
        {children}
      </div>
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
