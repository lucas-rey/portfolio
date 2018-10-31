import React from "react";
import "./video-game.scss";
import MenuWrapper from "../../common/menu/menu";
// import RightSection from "../../common/right-section/right-section";
// import ImageDetails from "../../common/image-details/image-details";
import PageHeader from "../../common/page-header/page-header";

import Back from "../../common/back/back";
// import { Link } from "react-router-dom";

class VideoGame extends React.Component {
  render() {
    return (
      <div>
        <MenuWrapper />
        <Back />
        <PageHeader
          year={"2017"}
          workType={"School"}
          title={"Video Game"}
          letter={"S"}>
          <img
            src={require("./../../../assets/s-flag.svg")}
            alt="nautical flag s"
          />
        </PageHeader>
        <div className="bottom-navigation">
          <a className="previous change" href="/vietnam">
            Prev
          </a>
          <div className="header-line change" />{" "}
          <a className="next change" href="/mousai">
            Next
          </a>
        </div>
      </div>
    );
  }
}

export default VideoGame;
