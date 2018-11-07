import React from "react";
import PropTypes from "prop-types";
import "./mage-right.scss";

class ImageRight extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <div>
        <div className="image-group-right">
          <div className="detail-container-left">
            <div className="title">{title}</div>
            <div className="line" />
            <div className="paragraph">{children}</div>
          </div>
          <img
            src={require("./../../../assets/map.svg")}
            alt="map"
            className="diagram"
          />
        </div>
      </div>
    );
  }
}

export default ImageRight;

ImageRight.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string.isRequired
};
