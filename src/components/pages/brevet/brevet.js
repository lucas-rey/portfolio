import React from "react";
import "./brevet.scss";
import MainNav from "../../common/navbar/navbar";
import LeftText from "../../common/left-text/left-text";
import ImageLeft from "../../common/image-left/image-left";
import PageHeader from "../../common/page-header/page-header";
import Scroll from "../../common/scroll-icon/scroll-icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Name from "../../common/name/name";
// import { Link } from "react-router-dom";

class Brevet extends React.Component {
  render() {
    return (
      <div>
        <MainNav />
        <Name />
        <PageHeader
          year={"2017"}
          workType={"Mobile App"}
          title={"Brevet"}
          backgroundColor="blue"
          fontColor="white"
        />
        <div className="bottom-navigation">
          <a className="previous change" href="/mousai">
            <i class="fas fa-long-arrow-alt-left nav-arrow" /> Prev
          </a>
          <Scroll />
          <a className="next change" href="/vietnam">
            Next <i class="fas fa-long-arrow-alt-right nav-arrow" />
          </a>
        </div>
        <div className="topGradient" />

        <div className="main-container">
          <div className="project-group phones two">
            <img
              src={require("./../../../assets/brevet-splash.png")}
              alt="bike app splash scree"
            />
            <img
              src={require("./../../../assets/brevet-inprogress.png")}
              alt="bike app ride in progress"
            />
            <img
              src={require("./../../../assets/brevet-autoroute.png")}
              alt="bike app auto route ride"
            />
            <img
              src={require("./../../../assets/brevet-fullstat.png")}
              alt="bike app full ride stat layout"
            />
          </div>

          <div className=" full-width-p">
            <LeftText title={"Overview"} className="left-section">
              <b>Task:</b> Create an app prototype that introduces something new
              to the market.
              <br />
              <b>Software:</b> Proto.io, Adobe Illustrator, Adobe After Effects
              <br />
              <br />
              <b>Initial Thinking:</b> I wanted to design an app to help bikers.
              I am a triathlete and I found a lot of difficulty in training on
              bike in a busy city that I was still unfamiliar with. In my
              research I found that there were not any applications or products
              out there that allowed bikers to create and track their own
              routes. I also wanted to create a way for people to track those
              that were currently riding so that someone would be notified if
              something went wrong.
              <br />
              <br />I had just started riding in groups and I found that when
              riders first started using new routes they would print out a queue
              sheet with every turn and what mileage it was at marked on it.
              This can be extremely dangerous to look at in large groups and on
              high traffic routes when you also have to worry about the cars
              around you.
            </LeftText>
          </div>

          <div className="image-left-container maps">
            <img
              src={require("./../../../assets/cognitive-maps.gif")}
              alt="cognitive maps"
            />
            <div className=" full-width-p">
              <ImageLeft title={"Process"} className="right-section">
                My research for this project was inspired by the IDEO Method
                Cards created by the global design company called IDEO. Their
                focus is on creating a positive impact through design. There are
                51 method cards, each is used as a tool to inspire great design
                and thinking that puts people at the center of the design
                process. They are very useful in problem solving and helping
                designers work to figure out how to get from their first idea to
                a final product.
                <br />
                <br />
                One of the methods that I used for research was called cognitive
                mapping.
                <br />
                <b>How:</b> Ask participants to map an existing or virtual space
                and show how they navigate it.
                <br />
                <b>Why:</b> This is a useful way to discover the significant
                elements, pathways, and other spatial behavior associated with a
                real or virtual environment.
                <br />
                <br />I used this to show how many turns can be within one route
                and how hard that can be to remember or see written out. The
                circles represent major landmarks which are usually how riders
                recognize routes but there are far fewer landmarks than turns in
                these routes.
              </ImageLeft>
            </div>
          </div>

          <div className=" full-width-p">
            <LeftText title={"Character Profiles"} className="left-section">
              <b>General Observations:</b> speeds vary, usually split into
              different groups, riding close to one another, whoever is leading
              generally knows the route or has direction, dislike of biking
              trails because of speed limits, groups tend to be very serious
              about safety and making sure everyone gets home safely
              <br />
              <br />
              <b>Questions:</b>
              <br />
              Have you ever gotten lost?
              <ol>
                <li className="content-list">Yes it happens frequently</li>
                <li className="content-list">Not as much as I used to</li>
                <li className="content-list">
                  Everyone makes a wrong turn every now and then
                </li>
              </ol>
              <br />
              <br />
              How long does it take you to figure out that you’re lost?
              <ol>
                <li className="content-list">
                  Usually about a mile or so, I have to be 100% my surroundings
                  aren’t familiar
                </li>
                <li className="content-list">
                  Once you land on a busy road that you’ve never been on then
                  you figure it out pretty fast
                </li>
              </ol>
              <br />
              <br />
              What happens if you are unsure of directions or realize you’re off
              route?
              <ol>
                <li className="content-list">
                  Look for a place to stop and pull over
                </li>
                <li className="content-list">
                  Check directions on queue sheet
                </li>
                <li className="content-list">Check google maps on phone</li>
              </ol>
              <br />
              <br />
              Would you use an app that would give real-time directions on a
              ride?
              <ol>
                <li className="content-list">
                  Yes, but only on unfamiliar routes
                </li>
                <li className="content-list">
                  Yes, this would help me a lot with my route to work
                </li>
                <li className="content-list">
                  It would be nice if the app could create a route for you and
                  change to avoid high traffic roads
                </li>
              </ol>
            </LeftText>
          </div>

          <div className="brevet-process">
            <img
              src={require("./../../../assets/brevet-process.png")}
              alt="bike app process map"
            />
          </div>

          <div className="brevet-name">
            <div className=" full-width-p">
              <LeftText title={"Behind the Name"} className="left-section">
                I cycled through several names and finally landed on the name
                Brevet (pronouced bre-vey). This is a term that is usually used
                to describe a biking event that is popular in Europe, called
                Randonneuring.These are events, not races, in which bikers
                attempt to finish courses of 200km or more within a certain time
                limit. If the rider finishes they are awarded a certificate
                called Brevets des Randonneurs. In order to prove that they rode
                the full mileage most events will have riders carry brevet cards
                that are to be stamped at certain checkpoints. Since my app
                makes sure that riders stay on their path and gets them to the
                finish line I thought it was appropriate to name it after these
                strenuous events.
              </LeftText>
            </div>

            <img
              src={require("./../../../assets/brevet-logo.gif")}
              alt="brevet logo ideation"
            />
          </div>
          <div className="branding maps">
            <div className="brevet-branding">
              <img
                src={require("./../../../assets/brevet-branding.png")}
                alt="brevet logo"
              />
            </div>
            <div className="brand-colors">
              <div className="color-group">
                <div className="hex-text"> PRIMARY HEX #484e7d</div>
                <div className="rectangle brevet-one" />
              </div>
              <div className="color-group">
                <div className="hex-text-black"> HEX #ffffff</div>
                <div className="rectangle brevet-two" />
              </div>
              <div className="color-group">
                <div className="hex-text"> HEX #f1b981</div>
                <div className="rectangle brevet-three" />
              </div>
            </div>
          </div>

          <div className="project-group-two">
            <img
              src={require("./../../../assets/brevet-realtime.png")}
              alt="brevet splash screen"
            />
            <img
              src={require("./../../../assets/brevet-finishing.png")}
              alt="brevet ride in progress"
            />
          </div>

          <div className="project-group-two">
            <img
              src={require("./../../../assets/brevet-personalroute.png")}
              alt="brevet routes"
            />
            <img
              src={require("./../../../assets/brevet-profilestat.png")}
              alt="brevet profile"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Brevet;
