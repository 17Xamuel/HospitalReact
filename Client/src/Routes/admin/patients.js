import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, IconButton } from "@material-ui/core";
import Nav from "./components/Nav";
import Header from "./components/Header";

class Patients extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <input type="checkbox" id="nav-toggle" defaultChecked />
        <Nav active="patients" />
        <div className="main-content">
          <Header />
          <main>
            <div className="recent-grid-left">
              <div className="projects">
                <div className="card">
                  <div className="card-header">
                    <h3>Registered Patients</h3>
                    <div className="">
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{ marginInline: 10 }}
                      >
                        <span
                          style={{ fontSize: "17.5px", marginInline: "10px" }}
                        >
                          <i className="las la-print"></i>
                        </span>
                        Print
                      </Button>
                    </div>
                  </div>
                  <div className="card-body">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>Name</td>
                          <td>Contact</td>
                          <td>Location</td>
                          <td>Date of Birth</td>
                          <td>Actions</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Sam</td>
                          <td>0789435123</td>
                          <td>Lira</td>
                          <td>04/03/2000</td>
                          <td>
                            <div>
                              <IconButton>
                                <i
                                  className="las la-edit"
                                  style={{ color: "dodgerblue" }}
                                ></i>
                              </IconButton>
                              <Link to="/patient_details">
                                <IconButton>
                                  <i
                                    className="las la-eye"
                                    style={{ color: "dodgerblue" }}
                                  ></i>
                                </IconButton>
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Sam</td>
                          <td>0789435123</td>
                          <td>Lira</td>
                          <td>04/03/2000</td>
                          <td>
                            <div>
                              <IconButton>
                                <i
                                  className="las la-edit"
                                  style={{ color: "dodgerblue" }}
                                ></i>
                              </IconButton>
                              <IconButton>
                                <i
                                  className="las la-eye"
                                  style={{ color: "dodgerblue" }}
                                ></i>
                              </IconButton>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Sam</td>
                          <td>0789435123</td>
                          <td>Lira</td>
                          <td>04/03/2000</td>
                          <td>
                            <div>
                              <IconButton>
                                <i
                                  className="las la-edit"
                                  style={{ color: "dodgerblue" }}
                                ></i>
                              </IconButton>
                              <IconButton>
                                <i
                                  className="las la-eye"
                                  style={{ color: "dodgerblue" }}
                                ></i>
                              </IconButton>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Sam</td>
                          <td>0789435123</td>
                          <td>Lira</td>
                          <td>04/03/2000</td>
                          <td>
                            <div>
                              <IconButton>
                                <i
                                  className="las la-edit"
                                  style={{ color: "dodgerblue" }}
                                ></i>
                              </IconButton>
                              <IconButton>
                                <i
                                  className="las la-eye"
                                  style={{ color: "dodgerblue" }}
                                ></i>
                              </IconButton>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Sam</td>
                          <td>0789435123</td>
                          <td>Lira</td>
                          <td>04/03/2000</td>
                          <td>
                            <div>
                              <IconButton>
                                <i
                                  className="las la-edit"
                                  style={{ color: "dodgerblue" }}
                                ></i>
                              </IconButton>
                              <IconButton>
                                <i
                                  className="las la-eye"
                                  style={{ color: "dodgerblue" }}
                                ></i>
                              </IconButton>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="projects"></div>
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default Patients;
