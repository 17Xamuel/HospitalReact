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
                      <span>Home</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/clinical_information">
                    <a
                      href
                      className={
                        this.props.active === "clinical_information"
                          ? "active"
                          : ""
                      }
                    >
                      <span className="las la-users"></span>
                      <span>Clinical Info.</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/lab_request">
                    <a
                      href
                      className={
                        this.props.active === "lab_request" ? "active" : ""
                      }
                    >
                      <span className="las la-users"></span>
                      <span>Lab Request</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/diagnosis">
                    <a
                      href
                      className={
                        this.props.active === "diagnosis" ? "active" : ""
                      }
                    >
                      <span className="las la-users"></span>
                      <span>Diagnosis</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/referral">
                    <a
                      href
                      className={
                        this.props.active === "referral" ? "active" : ""
                      }
                    >
                      <span className="las la-users"></span>
                      <span>Referrals</span>
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
