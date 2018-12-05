import React from "react";
import "./scroll-icon.scss";

class Scroll extends React.Component {
  render() {
    return (
      <div className="scroll-icon">
        <img src={require("./../../../assets/scroll.svg")} alt="mouse" />
        scroll down
      </div>
    );
  }
}

export default Scroll;
