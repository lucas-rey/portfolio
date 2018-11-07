import React from "react";
import PropTypes from "prop-types";
import "./image-left.scss";

class ImageLeft extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <div>
        <div className="image-group-left">
          <img
            src={require("./../../../assets/map.svg")}
            alt="map"
            className="diagram"
          />
          <div className="detail-container-right">
            <div className="title">{title}</div>
            <div className="line" />
            <div className="paragraph">{children}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageLeft;

ImageLeft.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string.isRequired
};
