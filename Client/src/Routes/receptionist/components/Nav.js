import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="sideBar-ctr">
          <div className="sidebar">
            <div className="sidebar-brand">
              <h2>
                <span
                  className="las la-clinic-medical"
                  style={{ fontSize: "32px" }}
                ></span>
                <span>Hospital</span>
              </h2>
            </div>
            <div className="sidebar-menu">
              <ul>
                <li>
                  <Link to="/">
                    <span
                      className={`${
                        this.props.active === "dashboard" ? "active" : ""
                      } _a_replaced`}
                    >
                      <span className="las la-home"></span>
                      <span>Dashboard</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/new">
                    <span
                      className={`${
                        this.props.active === "new" ? "active" : ""
                      } _a_replaced`}
                    >
                      <span className="las la-user-plus"></span>
                      <span>New Patient</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/triage">
                    <span
                      className={`${
                        this.props.active === "screening" ? "active" : ""
                      } _a_replaced`}
                    >
                      <span className="las la-user-edit"></span>
                      <span>Screening</span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Nav;
