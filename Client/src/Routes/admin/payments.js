import React, { Component } from "react";
import { Button, IconButton } from "@material-ui/core";
import Nav from "./components/Nav";
import Header from "./components/Header";

class Payments extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <input type="checkbox" id="nav-toggle" defaultChecked />
        <Nav active="payments" />
        <div className="main-content">
          <Header />
          <main>
            <div className="cards">
              <div className="card-single">
                <div className="">
                  <h3>UGX 500000</h3>
                  <span>Total Income</span>
                </div>
                <div className="">
                  <span className="las la-users"> </span>
                </div>
              </div>
              <div className="card-single">
                <div className="">
                  <h3>UGX 200000</h3>
                  <span>Pending Payments</span>
                </div>
                <div className="">
                  <span className="las la-users"> </span>
                </div>
              </div>
              <div className="card-single">
                <div className="">
                  <h3>UGX 2500000</h3>
                  <span>This Month</span>
                </div>
                <div className="">
                  <span className="las la-users"> </span>
                </div>
              </div>
              <div className="card-single">
                <div className="">
                  <h3>UGX 2000000</h3>
                  <span>Today Payments</span>
                </div>
                <div className="">
                  <span className="las la-users"> </span>
                </div>
              </div>
            </div>
            <div className="recent-grid-left">
              <div class="projects">
                <div className="card">
                  <div className="card-header">
                    <h3>Recent Payments</h3>
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
                  <div className="card-body">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>Patient Id</td>
                          <td>Amount(Shs)</td>
                          <td>Balance(Shs)</td>
                          <td>View</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>2307AB3</td>
                          <td>12000</td>
                          <td>3000</td>
                          <td>
                            <Button variant="contained" color="primary">
                              <span
                                style={{
                                  fontSize: "10px",
                                  marginInline: "3px",
                                }}
                              ></span>
                              Details
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>2307AB3</td>
                          <td>12000</td>
                          <td>3000</td>
                          <td>
                            <Button variant="contained" color="primary">
                              <span
                                style={{
                                  fontSize: "10px",
                                  marginInline: "3px",
                                }}
                              ></span>
                              Details
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>2307AB3</td>
                          <td>12000</td>
                          <td>3000</td>
                          <td>
                            <Button variant="contained" color="primary">
                              <span
                                style={{
                                  fontSize: "10px",
                                  marginInline: "3px",
                                }}
                              ></span>
                              Details
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>2307AB3</td>
                          <td>12000</td>
                          <td>3000</td>
                          <td>
                            <Button variant="contained" color="primary">
                              <span
                                style={{
                                  fontSize: "10px",
                                  marginInline: "3px",
                                }}
                              ></span>
                              Details
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="projects">
                <div className="card">
                  <div className="card-header">
                    <h3>Payments Available</h3>
                    <Button variant="contained" color="primary">
                      <span
                        style={{ fontSize: "17.5px", marginInline: "10px" }}
                      >
                        <i className="las la-plus"></i>
                      </span>
                      Add
                    </Button>
                  </div>
                  <div className="card-body">
                    <Payment />
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

export default Payments;

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

function Payment() {
  return (
    <>
      <div className="inputCtr" style={styles.input_ctr}>
        <div className="inputs_ctr" style={styles.input_group}>
          <table width="100%">
            <thead>
              <td>Payment</td>
              <td>Amount(Shs)</td>
              <td>Action</td>
            </thead>
            <tbody>
              <tr>
                <td>Consultation</td>
                <td>20000</td>
                <td>
                  <Button variant="contained" color="primary">
                    <span
                      style={{
                        fontSize: "10px",
                        marginInline: "3px",
                      }}
                    ></span>
                    Edit
                  </Button>
                </td>
              </tr>
              <tr>
                <td>CBC Test</td>
                <td>20000</td>
                <td>
                  <Button variant="contained" color="primary">
                    <span
                      style={{
                        fontSize: "10px",
                        marginInline: "3px",
                      }}
                    ></span>
                    Edit
                  </Button>
                </td>
              </tr>
              <tr>
                <td>AIDS Test</td>
                <td>20000</td>
                <td>
                  <Button variant="contained" color="primary">
                    <span
                      style={{
                        fontSize: "10px",
                        marginInline: "3px",
                      }}
                    ></span>
                    Edit
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
