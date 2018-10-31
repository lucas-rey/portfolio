import React from "react";
import "./brevet.scss";
import MenuWrapper from "../../common/menu/menu";
// import RightSection from "../../common/right-section/right-section";
// import ImageDetails from "../../common/image-details/image-details";
import PageHeader from "../../common/page-header/page-header";

import Back from "../../common/back/back";
// import { Link } from "react-router-dom";

class Brevet extends React.Component {
  render() {
    return (
      <div>
        <MenuWrapper />
        <Back />
        <PageHeader
          year={"2017"}
          workType={"School"}
          title={"Brevet"}
          letter={"G"}>
          <img
            src={require("./../../../assets/g-flag.svg")}
            alt="nautical flag g"
          />
        </PageHeader>
        <div className="bottom-navigation">
          <a className="previous change" href="/mousai">
            Prev
          </a>
          <div className="header-line change" />{" "}
          <a className="next change" href="/vcu">
            Next
          </a>
        </div>
      </div>
    );
  }
}

export default Brevet;
