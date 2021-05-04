import React, { Component } from "react";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="sidebar">
          <div className="sidebar-brand">
            <h2>
              <span className="lab la-accusoft"></span>
              <span>Hospital</span>
            </h2>
          </div>
          <div className="sidebar-menu">
            <ul>
              <li>
                <a href className="active">
                  <span className="las la-igloo"></span>
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a href>
                  <span className="las la-users"></span>
                  <span>Patients</span>
                </a>
              </li>
              <li>
                <a href>
                  <span className="las la-clipboard-list"></span>
                  <span>Projects</span>
                </a>
              </li>
              <li>
                <a href>
                  <span className="las la-receipt"></span>
                  <span>Inventory</span>
                </a>
              </li>
              <li>
                <a href>
                  <span className="las la-user-circle"></span>
                  <span>Accounts</span>
                </a>
              </li>
              <li>
                <a href>
                  <span className="las la-clipboard-list"></span>
                  <span>Tasks</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Nav;
