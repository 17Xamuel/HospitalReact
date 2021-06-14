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
                <span className="lab la-accusoft"></span>
                <span>Hospital</span>
              </h2>
            </div>
            <div className="sidebar-menu">
              <ul>
                <li>
                  <Link to="/">
                    <a
                      href
                      className={
                        this.props.active === "dashboard" ? "active" : ""
                      }
                    >
                      <span className="las la-igloo"></span>
                      <span>Dashboard</span>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link to="/departments">
                    <a
                      href
                      className={
                        this.props.active === "departments" ? "active" : ""
                      }
                    >
                      <span className="las la-users"></span>
                      <span>Departments</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/patients">
                    <a
                      href
                      className={
                        this.props.active === "patients" ? "active" : ""
                      }
                    >
                      <span className="las la-users"></span>
                      <span>Patients</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/tests">
                    <a
                      href
                      className={this.props.active === "tests" ? "active" : ""}
                    >
                      <span className="las la-users"></span>
                      <span>Tests</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/users">
                    <a
                      href
                      className={this.props.active === "users" ? "active" : ""}
                    >
                      <span className="las la-users"></span>
                      <span>Users</span>
                    </a>
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
