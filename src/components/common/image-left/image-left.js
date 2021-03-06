import React from "react";
import PropTypes from "prop-types";
import "./image-left.scss";

class ImageLeft extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <div>
        <div className="image-group-left">
          <div className="detail-container-right">
            <div className="section-title">{title}</div>
            <div className="paragraph extra-padding">{children}</div>
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
