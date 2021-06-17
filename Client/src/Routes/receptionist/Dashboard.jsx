import React, { Component } from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import Nav from "./components/Nav";
import Header from "./components/Header";
import UsersApi from "../../api/users";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AnchorEl: null,
      _pnumber: "...",
      _pnumber_month: "...",
      _doctors: "...",
      _pending_consultions: "...",
    };
    this.patients();
    this.patients_this_month();
    this.doctors_today();
    this.pending_consultions();
  }
  //cards Requests
  async patients() {
    const res = (await UsersApi.data("/user/all/patients")) || [];
    if (res) {
      this.setState({ ...this.state, _pnumber: res.length });
    }
  }
  async patients_this_month() {
    const res = (await UsersApi.data("/user/all/patients_this_month")) || [];
    if (res) {
      this.setState({ ...this.state, _pnumber_month: res.length });
    }
  }
  async doctors_today() {
    const res = (await UsersApi.data("/user/all/doctors_today")) || [];
    if (res) {
      this.setState({ ...this.state, _doctors: res.length });
    }
  }
  async pending_consultions() {
    const res = (await UsersApi.data("/user/all/pending_consultions")) || [];
    if (res) {
      this.setState({ ...this.state, _pending_consultions: res.length });
    }
  }
  handleOpenActions = (e) => {
    this.setState({ ...this.state, AnchorEl: e.currentTarget });
  };
  handleCloseActions = () => {
    this.setState({ ...this.state, AnchorEl: null });
  };
  render() {
    return (
      <>
        <input type="checkbox" id="nav-toggle" defaultChecked />
        <Nav active="dashboard" />
        <div className="main-content">
          <Header />
          <main>
            <div className="cards">
              <div className="card-single">
                <div className="">
                  <h1>{this.state._pnumber_month}</h1>
                  <span>
                    Patients Registered <br />
                    <span style={{ fontSize: "13px" }}>This Month</span>
                  </span>
                </div>
                <div className="">
                  <span className="las la-users"> </span>
                </div>
              </div>
              <div className="card-single">
                <div className="">
                  <h1>{this.state._pending_consultions}</h1>
                  <span>Pending Consultations</span>
                </div>
                <div className="">
                  <span className="las la-users"></span>
                </div>
              </div>
              <div className="card-single">
                <div className="">
                  <h1>{this.state._doctors}</h1>
                  <span>Doctors Available</span>
                </div>
                <div className="">
                  <span className="las la-users"> </span>
                </div>
              </div>
              <div className="card-single">
                <div className="">
                  <h1>{this.state._pnumber}</h1>
                  <span>Total Patients</span>
                </div>
                <div className="">
                  <span className="las la-users"> </span>
                </div>
              </div>
            </div>
            <div className="recent-grid">
              <div className="projects">
                <div className="card">
                  <div className="card-header">
                    <h3>Recent Patients</h3>
                    <Link to="/all_patients">
                      <Button variant="contained" color="primary">
                        See all
                        <span
                          style={{ fontSize: "17.5px", marginLeft: "10px" }}
                        >
                          <span className="las la-arrow-right"></span>
                        </span>
                      </Button>
                    </Link>
                  </div>
                  <div className="card-body">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>Patient No.</td>
                          <td>Name</td>
                          <td></td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>16/06/001</td>
                          <td>Xamuel</td>
                          <td>
                            <Button variant="contained" color="primary">
                              Details
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>16/06/001</td>
                          <td>Xamuel</td>
                          <td>
                            <Button variant="contained" color="primary">
                              Details
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>16/06/001</td>
                          <td>Xamuel</td>
                          <td>
                            <Button variant="contained" color="primary">
                              Details
                            </Button>
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
                    <h3>Actions</h3>
                    <Button
                      variant="contained"
                      color="primary"
                      aria-controls="reception-actions"
                      aria-haspopup="true"
                      onClick={this.handleOpenActions}
                    >
                      Show
                      <span
                        style={{ fontSize: "17.5px", marginInline: "10px" }}
                      >
                        <span className="las la-angle-down"></span>
                      </span>
                    </Button>
                    <Menu
                      id="reception-actions"
                      anchorEl={this.state.AnchorEl}
                      keepMounted
                      open={Boolean(this.state.AnchorEl)}
                      onClose={this.handleCloseActions}
                    >
                      <Link to="/new">
                        <MenuItem onClick={this.handleCloseActions}>
                          New Patient
                        </MenuItem>
                      </Link>
                      <Link to="/triage">
                        <MenuItem onClick={this.handleCloseActions}>
                          Triage
                        </MenuItem>
                      </Link>
                    </Menu>
                  </div>
                  <div className="card-body">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>Patient</td>
                          <td>Department</td>
                          <td>Status</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Fat</td>
                          <td>OPD</td>
                          <td>
                            <span className="status purple"></span>Sick
                          </td>
                        </tr>
                        <tr>
                          <td>Dan</td>
                          <td>OPD</td>
                          <td>
                            <span className="status pink"></span>Very Sick
                          </td>
                        </tr>
                        <tr>
                          <td>Hajara</td>
                          <td>OPD</td>
                          <td>
                            <span className="status orange"></span>Treatment
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="recent-grid">
              <div className="projects">
                <div className="card">
                  <div className="card-header">
                    <h3>Recent Patients</h3>
                    <Button variant="contained" color="primary">
                      See all
                      <span
                        style={{ fontSize: "17.5px", marginInline: "10px" }}
                      >
                        <span className="las la-arrow-right"></span>
                      </span>
                    </Button>
                  </div>
                  <div className="card-body">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>Patient</td>
                          <td>Department</td>
                          <td>Status</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Fat</td>
                          <td>OPD</td>
                          <td>
                            <span className="status purple"></span>Sick
                          </td>
                        </tr>
                        <tr>
                          <td>Dan</td>
                          <td>OPD</td>
                          <td>
                            <span className="status pink"></span>Very Sick
                          </td>
                        </tr>
                        <tr>
                          <td>Hajara</td>
                          <td>OPD</td>
                          <td>
                            <span className="status orange"></span>Treatment
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
                    <h3>Recent Patients</h3>
                    <Button variant="contained" color="primary">
                      See all
                      <span
                        style={{ fontSize: "17.5px", marginInline: "10px" }}
                      >
                        <span className="las la-arrow-right"></span>
                      </span>
                    </Button>
                  </div>
                  <div className="card-body">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>Patient</td>
                          <td>Department</td>
                          <td>Status</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Fat</td>
                          <td>OPD</td>
                          <td>
                            <span className="status purple"></span>Sick
                          </td>
                        </tr>
                        <tr>
                          <td>Dan</td>
                          <td>OPD</td>
                          <td>
                            <span className="status pink"></span>Very Sick
                          </td>
                        </tr>
                        <tr>
                          <td>Hajara</td>
                          <td>OPD</td>
                          <td>
                            <span className="status orange"></span>Treatment
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="recent-grid">
              <div className="projects">
                <div className="card">
                  <div className="card-header">
                    <h3>Recent Patients</h3>
                    <Button variant="contained" color="primary">
                      See all
                      <span
                        style={{ fontSize: "17.5px", marginInline: "10px" }}
                      >
                        <span className="las la-arrow-right"></span>
                      </span>
                    </Button>
                  </div>
                  <div className="card-body">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>Patient</td>
                          <td>Department</td>
                          <td>Status</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Fat</td>
                          <td>OPD</td>
                          <td>
                            <span className="status purple"></span>Sick
                          </td>
                        </tr>
                        <tr>
                          <td>Dan</td>
                          <td>OPD</td>
                          <td>
                            <span className="status pink"></span>Very Sick
                          </td>
                        </tr>
                        <tr>
                          <td>Hajara</td>
                          <td>OPD</td>
                          <td>
                            <span className="status orange"></span>Treatment
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
                    <h3>Recent Patients</h3>
                    <Button variant="contained" color="primary">
                      See all
                      <span
                        style={{ fontSize: "17.5px", marginInline: "10px" }}
                      >
                        <span className="las la-arrow-right"></span>
                      </span>
                    </Button>
                  </div>
                  <div className="card-body">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>Patient</td>
                          <td>Department</td>
                          <td>Status</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Fat</td>
                          <td>OPD</td>
                          <td>
                            <span className="status purple"></span>Sick
                          </td>
                        </tr>
                        <tr>
                          <td>Dan</td>
                          <td>OPD</td>
                          <td>
                            <span className="status pink"></span>Very Sick
                          </td>
                        </tr>
                        <tr>
                          <td>Hajara</td>
                          <td>OPD</td>
                          <td>
                            <span className="status orange"></span>Treatment
                          </td>
                        </tr>
                      </tbody>
                    </table>
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

export default Dashboard;
