import React from "react";
import "./vcu.scss";
import MenuWrapper from "../../common/menu/menu";
import RightSection from "../../common/right-section/right-section";
import ImageDetails from "../../common/image-details/image-details";
import PageHeader from "../../common/page-header/page-header";

import Back from "../../common/back/back";
// import { Link } from "react-router-dom";

class Vcu extends React.Component {
  render() {
    return (
      <div>
        <MenuWrapper />
        <Back />
        <PageHeader
          year={"2017"}
          workType={"Professional"}
          title={"VCU USC&A"}
          letter={"N"}>
          <img
            src={require("./../../../assets/n-flag.svg")}
            alt="nautical flag n"
          />
        </PageHeader>
      </div>
    );
  }
}

export default Vcu;