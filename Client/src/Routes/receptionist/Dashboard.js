import React, { Component } from "react";

import Nav from "./components/Nav";
import Header from "./components/Header";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <input type="checkbox" id="nav-toggle" />
        <Nav active="dashboard" />
        <div className="main-content">
          <Header />
          <main>
            <div className="cards">
              <div className="card-single">
                <div className="">
                  <h1>54</h1>
                  <span>Patients</span>
                </div>
                <div className="">
                  <span className="las la-users"> </span>
                </div>
              </div>
              <div className="card-single">
                <div className="">
                  <h1>54</h1>
                  <span>Patients</span>
                </div>
                <div className="">
                  <span className="las la-users"> </span>
                </div>
              </div>
              <div className="card-single">
                <div className="">
                  <h1>54</h1>
                  <span>Patients</span>
                </div>
                <div className="">
                  <span className="las la-users"> </span>
                </div>
              </div>
              <div className="card-single">
                <div className="">
                  <h1>54</h1>
                  <span>Patients</span>
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
                    <button>
                      Sea all <span className="las la-arrow-right"></span>
                    </button>
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
                    <button>
                      Sea all <span className="las la-arrow-right"></span>
                    </button>
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
                    <button>
                      Sea all <span className="las la-arrow-right"></span>
                    </button>
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
                    <button>
                      Sea all <span className="las la-arrow-right"></span>
                    </button>
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
                    <button>
                      Sea all <span className="las la-arrow-right"></span>
                    </button>
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
                    <button>
                      Sea all <span className="las la-arrow-right"></span>
                    </button>
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
