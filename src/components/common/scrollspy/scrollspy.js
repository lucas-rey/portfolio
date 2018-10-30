import React from "react";
import "./scrollspy.scss";
import Scrollspy from "react-scrollspy";

class ScrollSpy extends React.Component {
  render() {
    return (
      <div>
        <Scrollspy
          items={[
            "section-1",
            "section-2",
            "section-3",
            "section-4",
            "section-5",
            "section-6",
            "section-7",
            "section-8"
          ]}
          currentClassName="is-current">
          <li>
            <a href="#section-1">U</a>
          </li>
          <li>
            <a href="#section-2">X</a>
          </li>
          <li>
            <a href="#section-3">D</a>
          </li>
          <li>
            <a href="#section-4">E</a>
          </li>
          <li>
            <a href="#section-5">S</a>
          </li>
          <li>
            <a href="#section-6">I</a>
          </li>
          <li>
            <a href="#section-7">G</a>
          </li>
          <li>
            <a href="#section-8">N</a>
          </li>
        </Scrollspy>
      </div>
    );
  }
}

export default ScrollSpy;
