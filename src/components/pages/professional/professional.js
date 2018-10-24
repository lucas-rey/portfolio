import React from "react";
import "./professional.scss";
import Description from "../../common/description/description";
import MenuWrapper from "../../common/menu/menu";
import Footer from "../../common/footer/footer";
import { Link } from "react-router-dom";

class Professional extends React.Component {
  render() {
    return (
      <div>
        {/* <div className="page-name">Professional</div> */}
        <MenuWrapper />
        <div className="screen-container">
          <div className="project-wrapper">
            <div className="flag-group">
              <div className="w-flag flag">
                <img
                  src={require("./../../../assets/w-flag.svg")}
                  alt="nautical flag w"
                />
              </div>
              <div className="w letter">W</div>
            </div>
            <div className="custom-description">
              <Description
                year={"2018"}
                workType={"Professional"}
                title={"ADP Payroll Innovation"}>
                Next Gen Payroll Innovation. I worked as the voice of the newest
                generation to help bring transparency to an updated payroll
                system. I worked with other designers and researches to help
                design applications that put the user first. I gained knowledge
                of branding, the agile process, and working alongside
                development teams to work effectively.
              </Description>
              <Link to="construction">
                <button>View More</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="screen-container">
          <div className="project-wrapper">
            <div className="flag-group">
              <div className="o-flag flag">
                <img
                  src={require("./../../../assets/o-flag.svg")}
                  alt="nautical flag o"
                />
              </div>
              <div className="o letter">O</div>
            </div>
            <div className="custom-description">
              <Description
                year={"2017-2018"}
                workType={"Professional"}
                title={"VCU USC&A"}>
                My primary work for this department was campign work. We
                designed cohesive campaign materials for events and
                organizations around campus. I learned to work with clients and
                gained experience with tight deadlines. I created everything
                from posters, logos, and handouts to banners and even several
                wall murals.
              </Description>
              <Link to="construction">
                <button>View More</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="screen-container">
          <div className="project-wrapper">
            <div className="flag-group">
              <div className="r-flag flag">
                <img
                  src={require("./../../../assets/r-flag.svg")}
                  alt="nautical flag r"
                />
              </div>
              <div className="r letter">R</div>
            </div>
            <div className="custom-description">
              <Description
                year={"2018"}
                workType={"Professional"}
                title={"Mousai"}>
                This is a collabrative project with my boyfriend. This is
                currently still in progress but it will soon be released. I was
                approached with the design proposition of an extension to
                Spotify that will allow users to upvote and downvote songs
                within their playlist, an extension they are currently lacking.
                I created all of the design and branding for this application.
              </Description>
              <Link to="construction">
                <button>View More</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="screen-container">
          <div className="project-wrapper">
            <div className="flag-group">
              <div className="k-flag flag">
                <img
                  src={require("./../../../assets/k-flag.svg")}
                  alt="nautical flag k"
                />
              </div>
              <div className="k letter">K</div>
            </div>
            <div className="custom-description">
              <Description
                year={"2015-2018"}
                workType={"Professional"}
                title={"Logo Design"}>
                While it is not my main area of focus these days I do
                ocassionally design and create logos for different organizations
                and projects when requested.
              </Description>
              <Link to="construction">
                <button>View More</button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Professional;
