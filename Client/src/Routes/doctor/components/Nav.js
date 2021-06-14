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
                      <span>Home</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/clinical_information">
                    <span
                      className={`${
                        this.props.active === "clinical_information"
                          ? "active"
                          : ""
                      } _a_replaced`}
                    >
                      <span className="las la-stethoscope"></span>
                      <span>Clinical Info.</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/lab_request">
                    <span
                      className={`${
                        this.props.active === "lab_request" ? "active" : ""
                      } _a_replaced`}
                    >
                      <span className="las la-vials"></span>
                      <span>Lab Request</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/diagnosis">
                    <span
                      className={`${
                        this.props.active === "diagnosis" ? "active" : ""
                      } _a_replaced`}
                    >
                      <span className="las la-user-injured"></span>
                      <span>Diagnosis</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/referral">
                    <span
                      className={`${
                        this.props.active === "referral" ? "active" : ""
                      } _a_replaced`}
                    >
                      <span className="las la-share"></span>
                      <span>Referrals</span>
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
