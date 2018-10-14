import React from "react";
import "./scroll-icon.scss";

class Scroll extends React.Component {
  render() {
    return (
      <div className="scroll">
        <img src={require("./../../../assets/scroll.svg")} alt="mouse" />
        <p>scroll down</p>
      </div>
    );
  }
}

export default Scroll;
