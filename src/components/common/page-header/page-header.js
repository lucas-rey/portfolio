import React from "react";
import PropTypes from "prop-types";
import "./page-header.scss";

class PageHeader extends React.Component {
  render() {
    const { year, workType, title, backgroundColor, fontColor } = this.props;
    //if no colors are provided as props, set defaults
    const defaultBackgroundColor = "black";
    const defaultFontColor = "white";

    const finalBackgroundColor = backgroundColor || defaultBackgroundColor;
    const finalFontColor = fontColor || defaultFontColor;

    return (
      <div className={`background ${finalBackgroundColor}`}>
        <div className="screen-container-detail">
          <div className="page-content">
            <div className="header-left">
              <div className={`header-date-type ${finalFontColor}`}>
                <div className="header-year change">{year}</div>
                <div className={`title-circle change ${finalFontColor}`} />
                <div className="header-type change">{workType}</div>
              </div>
              <div className={`header-title change ${finalFontColor}`}>
                {title}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHeader;

PageHeader.propTypes = {
  year: PropTypes.string,
  workType: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.string,
  letter: PropTypes.string
};
