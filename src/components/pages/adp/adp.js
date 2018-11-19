import React from "react";
import "./adp.scss";
// import RightSection from "../../common/right-section/right-section";
// import ImageDetails from "../../common/image-details/image-details";
import PageHeader from "../../common/page-header/page-header";
import NavBar from "../../common/navbar/navbar";

import Back from "../../common/back/back";
// import { Link } from "react-router-dom";

class Adp extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Back />
        <PageHeader
          year={"2018"}
          workType={"Professional"}
          title={"ADP Pi"}
          backgroundColor={"blue"}
        />
        <div className="bottom-navigation">
          <a className="previous change" href="/vcu">
            Prev
          </a>
          <div className="header-line change" />{" "}
          <a className="next change" href="/street-smart">
            Next
          </a>
        </div>
        <div className="topGradient" />
      </div>
    );
  }
}

export default Adp;
