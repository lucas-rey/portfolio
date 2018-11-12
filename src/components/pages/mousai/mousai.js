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
        <MenuWrapper fontColor="black" />
        <Back fontColor="black" />
        <PageHeader
          year={"2018"}
          workType={"Professional"}
          title={"Mousai"}
          letter={"I"}
          backgroundColor="yellow"
          fontColor="black">
          <img
            src={require("./../../../assets/i-flag.svg")}
            alt="nautical flag i"
          />
        </PageHeader>
        <div className="bottom-navigation">
          <a className="previous black change" href="/video-game">
            Prev
          </a>
          <div className="black-header-line change" />{" "}
          <a className="next black change" href="/brevet">
            Next
          </a>
        </div>
        <div className="topGradient" />
        <div className="main-container">
          <div className="project-group smaller-projects">
            <img
              src={require("./../../../assets/mousai-home.svg")}
              alt="rhino video game"
            />
            <img
              src={require("./../../../assets/mousai-album.svg")}
              alt="markhor video game"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Mousai;
