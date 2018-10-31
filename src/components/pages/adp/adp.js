import React from "react";
import "./adp.scss";
import MenuWrapper from "../../common/menu/menu";
// import RightSection from "../../common/right-section/right-section";
// import ImageDetails from "../../common/image-details/image-details";
import PageHeader from "../../common/page-header/page-header";

import Back from "../../common/back/back";
// import { Link } from "react-router-dom";

class Adp extends React.Component {
  render() {
    return (
      <div>
        <MenuWrapper />
        <Back />
        <PageHeader
          year={"2018"}
          workType={"Professional"}
          title={"ADP Pi"}
          letter={"X"}>
          <img
            src={require("./../../../assets/x-flag.svg")}
            alt="nautical flag x"
          />
        </PageHeader>
      </div>
    );
  }
}

export default Adp;
