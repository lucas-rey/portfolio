import React from "react";
import PropTypes from "prop-types";
import "./page-header.scss";

class PageHeader extends React.Component {
  render() {
    const { year, workType, title, children, letter } = this.props;
    return (
      <div className="background">
        <div className="screen-container-detail">
          <div className="page-content">
            <div className="header-left">
              <div className="header-date-type">
                <div className="header-year change">{year}</div>
                <div className="title-circle change" />
                <div className="header-type change">{workType}</div>
              </div>
              <div className="header-title change">{title}</div>
            </div>
            <div className="header-right">
              <div className="flag-page">{children}</div>
              <div className="flag-letter-header letter">{letter}</div>
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
  children: PropTypes.string.isRequired,
  letter: PropTypes.string
};
