import React from "react";
import "./construction.scss";
import MenuWrapper from "../../common/menu/menu";
import Back from "../../common/back/back";

class Construction extends React.Component {
  render() {
    return (
      <div>
        <MenuWrapper />
        <Back />
        <div className="text">Sorry. This page is still being built</div>
      </div>
    );
  }
}

export default Construction;
