import React from "react";
import "./next-prev.scss";

class NextPrev extends React.Component {
  render() {
    return (
      <div>
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

export default NextPrev;
