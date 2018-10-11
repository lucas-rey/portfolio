import React from "react";
import Description from "../../common/description/description";

class Home extends React.Component {
  render() {
    return (
      <div>
        home page
        <Description
          year={"2018"}
          workType={"professional"}
          title={"ADP Internship"}>
          This is a paragraph about what I learned during this internship. I
          participated in a lot of projects, some from start to finish. I helped
          take on the burden of heavy projects loads and have learned how to
          effectively communicate in larger corporations.
        </Description>
      </div>
    );
  }
}

export default Home;
