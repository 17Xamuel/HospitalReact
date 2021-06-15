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
                            <IconButton>
                              <i
                                className="las la-eye"
                                style={{ color: "dodgerblue" }}
                              ></i>
                            </IconButton>
                          </td>
                        </tr>
                        <tr>
                          <td>2307AB3</td>
                          <td>12000</td>
                          <td>3000</td>
                          <td>
                            <IconButton>
                              <i
                                className="las la-eye"
                                style={{ color: "dodgerblue" }}
                              ></i>
                            </IconButton>
                          </td>
                        </tr>
                        <tr>
                          <td>2307AB3</td>
                          <td>12000</td>
                          <td>3000</td>
                          <td>
                            <IconButton>
                              <i
                                className="las la-eye"
                                style={{ color: "dodgerblue" }}
                              ></i>
                            </IconButton>
                          </td>
                        </tr>
                        <tr>
                          <td>2307AB3</td>
                          <td>12000</td>
                          <td>3000</td>
                          <td>
                            <IconButton>
                              <i
                                className="las la-eye"
                                style={{ color: "dodgerblue" }}
                              ></i>
                            </IconButton>
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
                    <h3>Last Payment</h3>
                    <Button variant="contained" color="primary">
                      <span
                        style={{ fontSize: "17.5px", marginInline: "10px" }}
                      >
                        <i className="las la-print"></i>
                      </span>
                      Print
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
        <h4>Patient Number : 1209ZS2</h4>
        <div className="inputs_ctr" style={styles.input_group}>
          <table width="100%">
            <tbody>
              <tr>
                <td>
                  <span style={{ fontWeight: "bolder" }}>Firstname :</span>
                  Denis
                </td>
                <td>
                  <span style={{ fontWeight: "bolder" }}>Othername :</span>
                  Mulindwa
                </td>
              </tr>
              <tr>
                <td>
                  <span style={{ fontWeight: "bolder" }}>Amount :</span>UGX
                  23000
                </td>
                <td>
                  <span style={{ fontWeight: "bolder" }}>Balance :</span>UGX
                  5000
                </td>
              </tr>
              <tr>
                <td>
                  <span style={{ fontWeight: "bolder" }}>Payment For :</span>
                </td>
              </tr>
              <tr>
                <td>
                  CBC Test <br />
                  Consultation
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
