import React from "react";
import "./home.scss";
import MainNav from "../../common/navbar/navbar";
import Back from "../../common/back/back";

// import Description from "../../common/description/description";
// import ScrollSpy from "../../common/scrollspy/scrollspy";
// import { Link } from "react-router-dom";
// import Fade from "react-reveal/Fade";

class Home extends React.Component {
  render() {
    return (
      <div>
        <MainNav />
        <Back />
        <div className="screen-container" id="section-1">
          <div className="home-content">
            <div className="home-text">Hi there, I'm Rachel</div>
            <img src={require("./../../../assets/about.svg")} alt="about" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
