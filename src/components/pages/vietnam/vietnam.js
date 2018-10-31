import React from "react";
import "./vietnam.scss";
import MenuWrapper from "../../common/menu/menu";
// import RightSection from "../../common/right-section/right-section";
// import ImageDetails from "../../common/image-details/image-details";
import PageHeader from "../../common/page-header/page-header";

import Back from "../../common/back/back";
// import { Link } from "react-router-dom";

class Vietnam extends React.Component {
  render() {
    return (
      <div>
        <MenuWrapper />
        <Back />
        <PageHeader
          year={"2018"}
          workType={"School"}
          title={"Vietnam Journal"}
          letter={"E"}>
          <img
            src={require("./../../../assets/e-flag.svg")}
            alt="nautical flag e"
          />
        </PageHeader>
        <div className="bottom-navigation">
          <a className="previous change" href="/street-smart">
            Prev
          </a>
          <div className="header-line change" />{" "}
          <a className="next change" href="/video-game">
            Next
          </a>
        </div>
      </div>
    );
  }
}

export default Vietnam;
