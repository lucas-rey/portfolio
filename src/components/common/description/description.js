import React from "react";
import PropTypes from "prop-types";
import "./description.scss";
import "./../../../assets/d-flag.jpg";

class Description extends React.Component {
  handleClick() {
    console.log("this is:", this);
  }
  render() {
    const { year, workType, title, children } = this.props;
    return (
      <div className="description-container">
        <div className="date-type">
          <div className="year">{year}</div>
          <div className="circle" />
          <div className="type">{workType}</div>
        </div>
        <div className="title">{title}</div>
        <div className="line" />
        <div className="paragraph">{children}</div>
        <button onClick={e => this.handleClick(e)}>View More</button>
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
