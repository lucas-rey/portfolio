import React from "react";
import "./vietnam.scss";
import MainNav from "../../common/navbar/navbar";
import LeftText from "../../common/left-text/left-text";
import ImageLeft from "../../common/image-left/image-left";
import PageHeader from "../../common/page-header/page-header";
import Name from "../../common/name/name";

// import { Link } from "react-router-dom";

class Vietnam extends React.Component {
  render() {
    return (
      <div>
        <MainNav />
        <Name />
        <PageHeader
          year={"2018"}
          workType={"Publication"}
          title={"Vietnam Journal"}
          backgroundColor="yellow"
        />
        <div className="bottom-navigation">
          <a className="previous change" href="/street-smart">
            Prev
          </a>
          <div className="header-line change" />{" "}
          <a className="next change" href="/video-game">
            Next
          </a>
        </div>
        <div className="topGradient" />
        <div className="main-container">
          <div className="project-group">
            <img
              src={require("./../../../assets/vietnam1.svg")}
              alt="vietnam spreads 1"
            />
            <img
              src={require("./../../../assets/vietnam2.svg")}
              alt="vietnam spreads 2"
            />
          </div>
          <LeftText title={"Overview"} className="left-section">
            We were given almost complete freedom for this assignment. Our only
            parameter was that we had to produce a printed publication in the
            end. Several years ago my dad was given a copy of the journal that
            my grandad wrote on his second tour in Vietnam. Because it is
            handwritten, it is something that I found highly intimidating the
            first few times that I tried to read it. I know that several of my
            family members felt the same and many more did not even know that
            this even existed.
            <br />
            <br />
            Nearly a year in the making, I worked hard to create a publication
            that could be easily distributed and consumed by family and friends.
            I worked closely with my dad, grandfather, and grandmother to
            collect all of the content within it and learn more about the
            stories told. I completed my first draft that semester only to learn
            that there were several more pages that my dad had been missing and
            that my grandfather was willing to write a postscript to the journal
            since it ends abruptly on the day he was wounded in battle and sent
            home. The events written up to that moment and most of his gear was
            left in his duffle bag in Vietnam and never returned.
          </LeftText>
          <ImageLeft title={"Research"} className="right-section">
            I was in constant communication with my grandmother gathering
            background information and photographs from his service.
            Unfortunately my grandads camera was lost in all of the commotion
            when he was injured and there are little to no pictures of him from
            his second tour. Most of the images throughout the journal are
            either found images or they were taken on his first tour.
            <br />
            <br />
            While I have grown up hearing his stories and I have learned many
            military terms there was still a lot that I did not understand. I
            spent a lot of time trying to gather all of these terms and
            abbreviations so that I could generate an index for them. Knowing
            this information really helped give a much better understanding to
            the story itself. After transcribing the original journal I turned
            my focus on to research. I read a lot about the Vietnam war itself
            and I tried to find out as much as I could about everyone mentioned
            by my grandfather. Colonel Burr Willey left a lasting impression on
            me during this time. Shortly after my grandfather was injured Col.
            Willey sent him a letter commending him for his service and wishing
            him well. By the time my grandfather recieved this letter Col.
            Willey had been killed on the battlefield.
          </ImageLeft>
          <div className="dear-joe">
            <img
              src={require("./../../../assets/dearjoe.svg")}
              alt="Dear Joe"
              className="dear-joe-image"
            />
          </div>
          <LeftText title={"Visual Design"} className="left-section">
            Inspired by Vietnamese design and the war propoganda, I only used
            one color throughout the entire journal (excluding images). I had
            originally intended to create my own illustrations to the story but
            I quickly decided that I did not want to overwhelm the story like
            that and I wanted to leave it as true to the original as I could.
            The only graphic element that I inserted myself was a jagged red
            line. This is the outline of Highway 13. The entire story revolves
            around this highway and so I wanted to make it as central to the
            readers as it was to the soldiers fighting. The line also resembles
            an EKG which becomes an illusion to my grandfathers heart rate
            throughout the story. In tense moments I fill the pages with this
            red line, sometimes even blocking out the entire page in red.
          </LeftText>
          <div className="highway">
            <img
              src={require("./../../../assets/highway13.gif")}
              alt="outline of highway 13"
              className="highway-image"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Vietnam;
