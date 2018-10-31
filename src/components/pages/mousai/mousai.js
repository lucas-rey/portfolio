import React from "react";
import "./mousai.scss";
import MenuWrapper from "../../common/menu/menu";
// import RightSection from "../../common/right-section/right-section";
// import ImageDetails from "../../common/image-details/image-details";
import PageHeader from "../../common/page-header/page-header";

import Back from "../../common/back/back";
// import { Link } from "react-router-dom";

class Mousai extends React.Component {
  render() {
    return (
      <div>
        <MenuWrapper />
        <Back />
        <PageHeader
          year={"2018"}
          workType={"Professional"}
          title={"Mousai"}
          letter={"I"}>
          <img
            src={require("./../../../assets/i-flag.svg")}
            alt="nautical flag i"
          />
        </PageHeader>
        <div className="bottom-navigation">
          <a className="previous change" href="/video-game">
            Prev
          </a>
          <div className="header-line change" />{" "}
          <a className="next change" href="/brevet">
            Next
          </a>
        </div>
      </div>
    );
  }
}

export default Mousai;
