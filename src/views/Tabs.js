import React, { Component } from "react";
import ReactDOM from "react-dom";
// import Velocity from  'velocity-animate'
import { CSSTransition } from "react-transition-group";
import Carinsurance from "./CarInsurance";
import "./app.css"
// // import TermLife from "../components/PolicySections/TermLife"
// import TermLife from "../components/PolicySections/TermLife";
// import "../components/layout.css";
// import TravelInsurance from "./TravelInsurance/TravelInsurance";
// import HealthInsurance from "../components/PolicySections/HealthInsurance";
// import TwoWheeler from "../components/PolicySections/TwoWheeler";
// import Products from "./AllProducts/products";
// import { useHistory } from "react-router";

var tabs = [
  {
    title: "All Products",
    text: <h1></h1>,
  },
  {
    title: "Health",
    text: <h1></h1>,
  },
  {
    title: "Investment",
    text: <h1></h1>,
  },
  {
    title: "Car",
    text: <Carinsurance />,
  },
  {
    title: "Two Wheeler",
    text: <h1></h1>,
  },
  {
    title: "More Products",
    text: (
      <div>
        <h1 style={{ textAlign: "center" }}> View All Of Our Products </h1>
      </div>
    ),
  },
];

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 3,
      mount: false,
    };
    this.changeTab = this.changeTab.bind(this);
    this.moveTracker = this.moveTracker.bind(this);
  }

  componentDidMount() {
    this.setState({ mount: true });
    this.moveTracker();
  }

  moveTracker() {
    var title = ReactDOM.findDOMNode(this).querySelector(
      '.tabs__titles__title[data-active="true"]'
    );
    var tracker = ReactDOM.findDOMNode(this).querySelector(".tabs__tracker");
    // Velocity(
    //   tracker,
    //   { width: title.clientWidth, left: title.offsetLeft },
    //   { duration: 1000, easing: [250, 15] }
    // )
  }

  changeTab(e) {
    e.stopPropagation();
    this.setState(
      { current: e.target.getAttribute("data-index") },
      function () {
        this.moveTracker();
      }
    );
  }

  render() {
    return (
      <div style={{ width: "975px" }} className="tabs">
        {/* <div className="tabs__tracker" /> */}
        <div style={{ display: "flex" }} className="tabs__titles">
          {tabs.map((tab, index, array) => (
            <h2
              className="tabs__titles__title"
              data-active={this.state.current == index}
              data-index={index}
              key={"tab-title-" + index}
              onClick={this.changeTab}
            >
              {tab.title}
            </h2>
          ))}
        </div>
        <div className="tabs__contents">
          <CSSTransition classNames="scale" timeout={500} in={this.state.mount}>
            <div
              className="tabs__contents__content scale"
              key={"tab-text-" + this.state.current}
            >
              {tabs[this.state.current].text}
            </div>
          </CSSTransition>
        </div>
      </div>
    );
  }
}
// if (demoMode) {
//   var titles = document.querySelectorAll(".tabs__titles__title")
//   setTimeout(function () {
//     titles[1].click()
//   }, 1500)
//   setTimeout(function () {
//     titles[2].click()
//   }, 3000)
//   setTimeout(function () {
//     titles[0].click()
//   }, 4500)
// }

// export default Tabs

// import React from "react";

// const Tabs = () => {
//   return (
//     <div>
//       <div class="hero-widget__form-wrapper">
//         <div id="content">
//           <div>
//             <ul class="widget-nav will-fade fade-appear">
//               <li class="active" data-hover="Term Life">
//                 Term Life
//               </li>
//               <li class="" data-hover="Health">
//                 Health
//               </li>
//               <li class="" data-hover="Investment">
//                 Investment
//               </li>
//               <li class="" data-hover="Car">
//                 Car
//               </li>
//               <li class="" data-hover="Bike">
//                 Bike
//               </li>
//               <li class="" data-hover="Taxi">
//                 Taxi
//               </li>
//               <li class="" data-hover="Travel">
//                 Travel
//               </li>
//             </ul>
//             <div class="h1 hero_header will-fade fade-appear">
//               <span>
//                 <span class="hero_header__content">
//                   <h2>Most Reliable Term Life Plans at Lowest Rates</h2>
//                 </span>
//               </span>
//             </div>
//           </div>
//         </div>
//         <div
//           class="hero-widget__form-wrapper__renew-block stashable      hidden"
//           data-cf="instant-renew-block"
//         >
//           <div class="hfr__title-text">Already Bought from Coverfox?</div>
//           <div class="hfr__link">
//             <span id="instant-renewal">Renew here </span> in 2 steps
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tabs;
