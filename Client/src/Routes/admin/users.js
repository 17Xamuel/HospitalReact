import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import Nav from "./components/Nav";
import Header from "./components/Header";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <input type="checkbox" id="nav-toggle" defaultChecked />
        <Nav active="users" />
        <div className="main-content">
          <Header />
          <main>
            <div className="recent-grid-left">
              <div className="projects">
                <div className="card">
                  <div className="card-header">
                    <h3>Registered Users</h3>
                    <div className="">
                      <Link to="/register">
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          style={{ marginInline: 10 }}
                        >
                          <span
                            style={{ fontSize: "17.5px", marginInline: "10px" }}
                          >
                            <i className="las la-plus"></i>
                          </span>
                          Add
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="card-body">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>Name</td>
                          <td>Contact</td>
                          <td>Department</td>
                          <td>Actions</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Sam</td>
                          <td>0789435123</td>
                          <td>Lira</td>
                          <td>
                            <div>
                              <Link to="/user_details">
                                <Button variant="contained" color="primary">
                                  <span
                                    style={{
                                      fontSize: "10px",
                                      marginInline: "3px",
                                    }}
                                  ></span>
                                  Details
                                </Button>
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Sam</td>
                          <td>0789435123</td>
                          <td>Lira</td>
                          <td>
                            <div>
                              <Button variant="contained" color="primary">
                                <span
                                  style={{
                                    fontSize: "10px",
                                    marginInline: "3px",
                                  }}
                                ></span>
                                Details
                              </Button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Sam</td>
                          <td>0789435123</td>
                          <td>Lira</td>
                          <td>
                            <div>
                              <Button variant="contained" color="primary">
                                <span
                                  style={{
                                    fontSize: "10px",
                                    marginInline: "3px",
                                  }}
                                ></span>
                                Details
                              </Button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Sam</td>
                          <td>0789435123</td>
                          <td>Lira</td>
                          <td>
                            <div>
                              <Button variant="contained" color="primary">
                                <span
                                  style={{
                                    fontSize: "10px",
                                    marginInline: "3px",
                                  }}
                                ></span>
                                Details
                              </Button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Sam</td>
                          <td>0789435123</td>
                          <td>Lira</td>
                          <td>
                            <div>
                              <Button variant="contained" color="primary">
                                <span
                                  style={{
                                    fontSize: "10px",
                                    marginInline: "3px",
                                  }}
                                ></span>
                                Details
                              </Button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="projects">
                <div className="card">
                  <div className="card-header">
                    <h3>Users</h3>
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
                    <h5>User Types</h5>
                    <div className="inputCtr" style={styles.input_ctr}>
                      <div className="inputs_ctr" style={styles.input_group}>
                        <table width="100%">
                          <thead>
                            <tr>
                              <td>Type</td>
                              <td>Number</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Doctors</td>
                              <td>23</td>
                            </tr>
                            <tr>
                              <td>Lab Technicians</td>
                              <td>45</td>
                            </tr>
                            <tr>
                              <td>Receptionists</td>
                              <td>25</td>
                            </tr>
                            <tr>
                              <td>Admin</td>
                              <td>2</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default Users;

const styles = {
  input_ctr: {
    width: "90%",
    margin: "auto",
  },
  input_group: {
    width: "100%",
    border: "1px solid rgba(0,0,0,0.1)",
    borderRadius: "5px",
    margin: "15px auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
};
