import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header>
        <h2>
          <label htmlFor="nav-toggle">
            <span className="las la-bars"></span>
          </label>
          Dashboard
        </h2>
        <div className="search-wrapper">
          <span className="las la-search"></span>
          <input type="search" name="" id="" placeholder="Search here" />
        </div>
        <div className="user-wrapper">
          {/* <img src="../assets/africa.jpg" alt="" width="40px" height="40px" /> */}
          <img
            src={require("../assets/africa.jpg")}
            alt=""
            width="40px"
            height="40px"
          />
          <div className="">
            <h4>John Doe</h4>
            <small>Doctor</small>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
