import React from "react";
import "./about.scss";
import NavBar from "../../common/navbar/navbar";
import PageHeader from "../../common/page-header/page-header";
import Back from "../../common/back/back";

class About extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Back />
        <PageHeader
          year={"Design"}
          workType={"Develop"}
          title={"About Me"}
          letter={"U"}
          backgroundColor={"red"}>
          <img
            src={require("./../../../assets/u-flag.svg")}
            alt="nautical flag u"
          />
        </PageHeader>
        <div className="bottom-navigation">
          <a className="previous change" href="/vcu">
            Prev
          </a>
          <div className="header-line change" />{" "}
          <a className="next change" href="/adp">
            Next
          </a>
        </div>
        <div className="topGradient" />
        <div className="main-container">
          <div className="about-group">
            <div className="bio">
              <div className="about-tabs">
                <h4>My Process</h4>
                <h4>My Story</h4>
              </div>
              <div className="beginning">
                <p>
                  I have been drawing, painting, and creating ever since I can
                  remember. One of my earliest memories is laying on the floor
                  in my playroom pretending that I was in college finishing my
                  homework, which just so happened to be drawing a lion. But I
                  soon fell out of that dream, unaware that I could sustain a
                  real career with my passion; I turned my attention to science,
                  health, history, although nothing really resonated with me. I
                  still drew and painted in my free time and I even started
                  making bracelets that I sold to my classmates. But over the
                  years I started taking fewer and fewer art classes, and I
                  slowly began to forget about the passion I once had.
                </p>
                <p>
                  My senior year, my mom told me me about this really cool
                  major: graphic design. In an instant she rekindled a flame
                  that had been dormant for nearly 7 years. My dad downloaded
                  the Adobe Creative Suite for me and I eventually designed my
                  very first logo for my high school’s band program. I had no
                  idea where I wanted to go to college. I applied to 5 different
                  schools. The very last school that I applied to was Virginia
                  Commonwealth University, the number one public arts school in
                  the country. I honestly did not think that I could get in and
                  I only applied because my dad dared me to. That dare changed
                  my life. I moved away from the only home I had ever known and
                  I completely started over. That thought might sound terrifying
                  to some, but I was ready for the challenge. Because of that
                  dare I take every opportunity I am presented with now. You
                  never know what is around the corner.
                </p>
                <p>
                  I am comfortable being uncomfortable and I push my limits
                  daily. My biggest hobbies include triathlons, sailing, and
                  hiking. I’ve ridden my bike 70+ miles, finished a marathon,
                  and yet, calculus my freshman year was the hardest thing I’ve
                  done. I ran both cross country and track, and what I miss the
                  most about those days is not the races but being a part of a
                  team. I loved being with people who pushed me to be better and
                  who I could push to improve as well. There’s nothing quite
                  like the relationships you form with your teammates.
                </p>
                <p>
                  I have recently developed a love for user centered designs. I
                  love the feedback that comes from real people who interact
                  with your designs. There is nothing more valuable than that
                  type of interaction. I build designs that inspire, excite, and
                  foster relationships with users that are more meaningful to
                  businesses. I want to push design into the next generation and
                  create products that are more desirable to their end users.
                  After all, we do judge books by their covers.
                </p>
              </div>
              <div className="now">
                <p>This is the section about what I do now</p>
              </div>
            </div>

            <div className="interests">
              <div className="hiking individual-interest">
                <img
                  src={require("./../../../assets/hiking.svg")}
                  alt="hiker silhouette"
                />
                <div className="interest-text">Hiker</div>
              </div>
              <div className="dogs individual-interest">
                <img
                  src={require("./../../../assets/dog.svg")}
                  alt="dog silhouette"
                />
                <div className="interest-text">Dog Lover</div>
              </div>
              <div className="plants individual-interest">
                <img
                  src={require("./../../../assets/plants.svg")}
                  alt="plants silhouette"
                />
                <div className="interest-text">Plant Enthusiast</div>
              </div>
              <div className="triathlon individual-interest">
                <img
                  src={require("./../../../assets/triathlon.svg")}
                  alt="swim, bike, run silhouettes"
                />
                <div className="interest-text">Triathlete</div>
              </div>
              <div className="sailing individual-interest">
                <img
                  src={require("./../../../assets/sailing.svg")}
                  alt="sailboat silhouette"
                />
                <div className="interest-text">Sailor</div>
              </div>
              <div className="music individual-interest">
                <img
                  src={require("./../../../assets/music.svg")}
                  alt="headphones silhouette"
                />
                <div className="interest-text">Musician</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
