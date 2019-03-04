// import React from "react";
// import "./vcu.scss";

// // import { Link } from "react-router-dom";

// class vcu extends React.Component {
//   render() {
//     return (
//       <div>
//         <MainNav />
//         <Name />
//         <PageHeader
//           year={"2018"}
//           workType={"Publication"}
//           title={"Vietnam Journal"}
//           backgroundColor="red"
//           fontColor="white"
//         />
//         <div className="bottom-navigation">
//           <a className="previous change" href="/mousai">
//             <i className="fas fa-chevron-circle-left" />
//           </a>
//           <a className="next change" href="/adp">
//             <i className="fas fa-chevron-circle-right" />
//           </a>
//         </div>
//         <div className="topGradient" />
//         <div className="main-container">
//           <div className="project-group">
//             <img
//               src={require("./../../../assets/vietnam1.png")}
//               alt="vietnam spreads 1"
//             />
//             <img
//               src={require("./../../../assets/vietnam2.png")}
//               alt="vietnam spreads 2"
//             />
//           </div>
//           <div className="full-width-p">
//             <LeftText title={"Overview"} className="left-section">
//               <b>DESIGN PROBLEM</b>
//               <br />
//               Design a publication that's meaningful to you
//               <br />
//               <br />
//               <b>CONTRIBUTIONS</b>
//               <br />
//               Publication Design, Research, Print
//               <br />
//               <br />
//               Several years ago, my dad was given a copy of the journal my
//               grandad wrote on his second tour in Vietnam. This publication is a
//               collection of everything that happened to him during this time,
//               including a letter sent to him, and medals he was awarded. This
//               project has spurred many conversations with my grandad and I have
//               treasured every moment of those greatly. Because my grandparents
//               keep finding more and more items from his service I will almost
//               always consider this an ongoing project.
//               <br />
//               <br />
//               The most recent version was sent out to friends and family 8
//               months after the project’s inception. The next publication is
//               already in progress.
//             </LeftText>
//           </div>

//           <div className="viet-research">
//             <Carousel className="small-carousel">
//               <Carousel.Item>
//                 <img
//                   className="carousel-image"
//                   alt="900x500"
//                   src={require("./../../../assets/vietnam_1.jpg")}
//                 />
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img
//                   className="carousel-image"
//                   alt="900x500"
//                   src={require("./../../../assets/vietnam_2.jpg")}
//                 />
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img
//                   className="carousel-image"
//                   alt="900x500"
//                   src={require("./../../../assets/vietnam_3.jpg")}
//                 />
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img
//                   className="carousel-image"
//                   alt="900x500"
//                   src={require("./../../../assets/vietnam_4.jpg")}
//                 />
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img
//                   className="carousel-image"
//                   alt="900x500"
//                   src={require("./../../../assets/vietnam_5.jpg")}
//                 />
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img
//                   className="carousel-image"
//                   alt="900x500"
//                   src={require("./../../../assets/vietnam_6.jpg")}
//                 />
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img
//                   className="carousel-image"
//                   alt="900x500"
//                   src={require("./../../../assets/vietnam_7.jpg")}
//                 />
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img
//                   className="carousel-image"
//                   alt="900x500"
//                   src={require("./../../../assets/vietnam_8.jpg")}
//                 />
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img
//                   className="carousel-image"
//                   alt="900x500"
//                   src={require("./../../../assets/vietnam_9.jpg")}
//                 />
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img
//                   className="carousel-image"
//                   alt="900x500"
//                   src={require("./../../../assets/vietnam_10.jpg")}
//                 />
//               </Carousel.Item>
//             </Carousel>
//             <div className="full-width-p">
//               <ImageLeft title={"Research"} className="right-section">
//                 I was in constant communication with my grandma gathering
//                 background information and photographs. Because they live in
//                 Florida and I was in school in Virginia, I relied very heavily
//                 on my family to help me gather information. Unfortunately, he
//                 was injured at the end of his tour and his camera was lost in
//                 the commotion of coming home, so there are not many pictures
//                 from his second tour.
//                 <br />
//                 <br />
//                 While I have grown up listening to his stories there was still a
//                 lot of lingo that I did not understand. I spent a lot of time
//                 trying to collect these terms and abbreviations so that I could
//                 generate an index for them. I also wanted to do this for any
//                 family members that were less familiar with military terms
//                 themselves. Knowing these really helped to give a much better
//                 understanding to the story itself. I spent a couple of weeks
//                 transcribing the journal itself, but afterwards I turned my
//                 focus to research. I read a lot about the Vietnam war and the
//                 Easter Invasion, as that’s when this journal was written. I
//                 tried to find out as much as I could about everyone mentioned by
//                 my grandad. Colonel Bill Willey left a lasting impression on me
//                 during this time. Shortly after my grandad was injured Colonel
//                 Willey sent him a letter commending him for his service and
//                 wishing him well. By the time my grandfather received this
//                 letter Colonel Willey had been killed on the battlefield.
//               </ImageLeft>
//             </div>
//           </div>

//           <div className="dear-joe">
//             <img
//               src={require("./../../../assets/dearjoe.png")}
//               alt="Dear Joe"
//               className="dear-joe-image"
//             />
//           </div>
//           <div className="  full-width-p">
//             <LeftText title={"Visual Design"} className="left-section">
//               I was greatly inspired by Vietnamese design and war propaganda.
//               It’s because of this that I only used on color throughout the
//               entire journal (excluding images). I had originally intended to
//               create my own illustrations to the story but I quickly decided
//               that I did not want to overwhelm the story with them. I left this
//               as true to the original as I could. The only visual element that I
//               introduced was a jagged red line. This is the outline of Highway
//               13. The entire narrative revolves around this highway and so I
//               wanted to make it as central to the readers as it was to the
//               soldiers fighting. The line also resembles an EKG which becomes an
//               allusion to my grandfather’s heart rate throughout the story. In
//               tense moments I fill the pages with this red line, sometimes even
//               blocking out the entire page in red.
//             </LeftText>
//           </div>
//           <div className="highway">
//             <img
//               src={require("./../../../assets/highway13.gif")}
//               alt="outline of highway 13"
//               className="highway-image"
//             />
//           </div>
//           <Carousel>
//             <Carousel.Item>
//               <img
//                 className="carousel-image"
//                 alt="900x500"
//                 src={require("./../../../assets/vietnam_spread1.jpg")}
//               />
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="carousel-image"
//                 alt="900x500"
//                 src={require("./../../../assets/vietnam_spread2.jpg")}
//               />
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="carousel-image"
//                 alt="900x500"
//                 src={require("./../../../assets/vietnam_spread3.jpg")}
//               />
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="carousel-image"
//                 alt="900x500"
//                 src={require("./../../../assets/vietnam_spread4.jpg")}
//               />
//             </Carousel.Item>
//           </Carousel>
//         </div>
//       </div>
//     );
//   }
// }

// export default Vietnam;
