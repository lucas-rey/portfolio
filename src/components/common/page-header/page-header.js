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
                <div className="header-year">{year}</div>
                <div className="title-circle" />
                <div className="header-type">{workType}</div>
              </div>
              <div className="header-title">{title}</div>
            </div>
            <div className="header-right">
              <div className="flag-page">{children}</div>
              <div className="flag-letter-header letter">{letter}</div>
            </div>
          </div>
        </div>
        <div className="bottom-navigation">
          <div className="previous">Prev</div>
          <div className="header-line" />
          <div className="next">Next</div>
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
