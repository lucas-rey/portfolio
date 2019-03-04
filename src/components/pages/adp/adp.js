import React from "react";
import "./adp.scss";
import MainNav from "../../common/navbar/navbar";
import LeftText from "../../common/left-text/left-text";
// import ImageLeft from "../../common/image-left/image-left";
import PageHeader from "../../common/page-header/page-header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Name from "../../common/name/name";
// import { Link } from "react-router-dom";

class Mousai extends React.Component {
  render() {
    return (
      <div>
        <MainNav />
        <Name />
        <PageHeader
          year={"2018"}
          workType={"Web Applications"}
          title={"ADP NextGen Payroll"}
          backgroundColor="red"
          fontColor="white"
        />
        <div className="bottom-navigation">
          <a className="previous change" href="/vietnam">
            <i className="fas fa-long-arrow-alt-left nav-arrow" /> Prev
          </a>
          <a className="next change" href="/brevet">
            Next <i className="fas fa-long-arrow-alt-right nav-arrow" />
          </a>
        </div>
        <div className="topGradient" />
        <div className="main-container">
          <div className="page-notification">
            <div className="adp-intro">
              <p>UX Design at ADP – Payroll Innovation – 2019</p>
              <div className="notification">
                <i className="fas fa-exclamation-circle" />
                <div className="notification notification-text">
                  The nature of this work is confidential. Contact me for
                  further information.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mousai;
