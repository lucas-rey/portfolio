import React from "react";
import "./lovemyself.scss";
// import RightSection from "../../common/right-section/right-section";
// import ImageDetails from "../../common/image-details/image-details";
import PageHeader from "../../common/page-header/page-header";
import MainNav from "../../common/navbar/navbar";

import Back from "../../common/back/back";
// import { Link } from "react-router-dom";

class LoveMyself extends React.Component {
  render() {
    return (
      <div>
        <MainNav />
        <Back />
        <PageHeader
          year={"2018"}
          workType={"Installation"}
          title={"Love Myself Project"}
          backgroundColor={"red"}
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

export default LoveMyself;
