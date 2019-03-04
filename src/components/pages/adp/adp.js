import React from "react";
import "./adp.scss";
import MainNav from "../../common/navbar/navbar";
// import ImageLeft from "../../common/image-left/image-left";
import PageHeader from "../../common/page-header/page-header";
import Name from "../../common/name/name";
// import { Link } from "react-router-dom";

class Adp extends React.Component {
  render() {
    return (
      <div>
        <MainNav />
        <Name />
        <PageHeader
          year={"2018"}
          workType={"Web Applications"}
          title={"ADP NextGen Payroll"}
          backgroundColor="red"
          fontColor="white"
        />
        <div className="bottom-navigation">
          <a className="previous change" href="/vietnam">
            <i className="fas fa-chevron-circle-left" />
          </a>
          <a className="next change" href="/brevet">
            <i className="fas fa-chevron-circle-right" />
          </a>
        </div>
        <div className="topGradient" />
        <div className="main-container">
          {/* <div className="page-notification">
            <div className="adp-intro">
              <p>UX Design at ADP – Payroll Innovation – 2019</p>
              <div className="notification">
                <i className="fas fa-exclamation-circle" />
                <div className="notification notification-text">
                  The nature of this work is confidential. Contact me for
                  further information.
                </div>
              </div>
            </div>
          </div> */}
          <div className="design-principles">
            <div className="section-title">Design Principles</div>
            <div class="et_pb_text">
              <ol>
                <li>
                  <span class="number_divider" />
                  Ideation
                  <p>
                    Every project starts with ideation. It’s here that we come
                    up with the goals and limitations of each project. These
                    sessions result in a set of wireframes that are then
                    converted to low or hi-fi wireframes to review with the
                    larger UX team. Ideation sessions are extremely important
                    for bringing in outside opinions and bouncing ideas off of
                    fellow designers. This has been extremely beneficial on many
                    of our projects and has allowed us to get a jump start into
                    the entire design process.
                  </p>
                </li>

                <li>
                  <span class="number_divider" />
                  Innovation
                  <p>
                    Our department was focused on innovation and creating
                    designs that brought something new to the table. I worked to
                    design applications that used new technologies including a
                    custom built software and machine learning. We created
                    innovative solutions to collect data and present it in a
                    meaningful way as well as innovating on how users interacted
                    with the products.
                  </p>
                </li>

                <li>
                  <span class="number_divider" />
                  User Advocate
                  <p>
                    Designers are the first line of defense for users. It is our
                    job to understand and communicate what the users want to the
                    rest of our product and management teams. At ADP we
                    frequently conducted user research sessions and met with
                    them to understand their current workflows in order to make
                    applications that were easy to use and intuitive. These
                    sessions often helped drive our designs even further and
                    they provided us with the data we needed to support the
                    features they were asking for. In design, the user is the
                    most important.
                  </p>
                </li>

                <li>
                  <span class="number_divider" />
                  Transparency
                  <p>
                    The goal of any application should be transparency, bringing
                    important information forward and hiding what it unecessary.
                    Design is about clear understanding and making sure that
                    users know what is being asked of them. We anticipate
                    (through testing and research) what users want to see and
                    then bring that forward to them. Every single one of our
                    products worked through transparency and making sure that
                    our system told users exactly what was happening in natural
                    language. Our applications became an extension of the users
                    themselves rather than a hindrance on their workflow.
                  </p>
                </li>
              </ol>
            </div>
          </div>

          <div className="work-sample">
            <div className="description-one">
              <div className="section-title">Project 1</div>
              <p>
                An internal application focused on surfacing transparency
                throughout the payroll process. This was the first live product
                in the department where we were able to gain feedback from real
                users.
              </p>
            </div>

            <div className="image-column-groups">
              <div className="image-column one">
                <img
                  src={require("./../../../assets/adp-project1-donut.jpg")}
                  alt="adp project one donut"
                />
                <img
                  src={require("./../../../assets/adp-project1-control.jpg")}
                  alt="adp project one controls"
                />
              </div>
              <div className="image-column two">
                <img
                  src={require("./../../../assets/adp-project1-control.jpg")}
                  alt="adp project one controls"
                />
                <img
                  src={require("./../../../assets/adp-project1-donut.jpg")}
                  alt="adp project one donut"
                />
              </div>
            </div>
          </div>

          <div className="work-sample">
            <div className="description-one">
              <div className="section-title">Project 2</div>
              <p>
                This application uses machine learning to pull data from
                uploaded files. Below are A/B testing designs created to compare
                different experiences of the same process and see what users
                preffered.
              </p>
            </div>

            <div className="image-column-groups">
              <div className="image-column one">
                <img
                  src={require("./../../../assets/adp-project2-a.jpg")}
                  alt="adp project two a"
                />
              </div>
              <div className="image-column two">
                <img
                  src={require("./../../../assets/adp-project2-b.jpg")}
                  alt="adp project two b"
                />
              </div>
            </div>
          </div>

          <div className="work-sample">
            <div className="description-one">
              <div className="section-title">Project 3</div>
              <p>
                An internal and external application focused on decreasing the
                amount of time spent on certain processes in ADP. It’s goal is
                to allow non-technical people to create technical files.
              </p>
            </div>

            <div className="image-column-groups">
              <div className="image-column one">
                <img
                  src={require("./../../../assets/adp-project3-1.jpg")}
                  alt="adp project 3-1"
                />
                <img
                  src={require("./../../../assets/adp-project3-2.jpg")}
                  alt="adp project 3-2"
                />
              </div>
              <div className="image-column two">
                <img
                  src={require("./../../../assets/adp-project3-3.jpg")}
                  alt="adp project 3-3"
                />
                <img
                  src={require("./../../../assets/adp-project3-4.jpg")}
                  alt="adp project 3-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Adp;
