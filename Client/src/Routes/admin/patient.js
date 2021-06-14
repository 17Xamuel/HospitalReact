import React, { Component } from "react";
import { Button } from "@material-ui/core";
import Nav from "./components/Nav";
import Header from "./components/Header";

class Patient extends Component {
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
                    <h3>Patient Bio Data</h3>
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
                    <div>
                      <Details />
                    </div>
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

export default Patient;

const styles = {
  input_ctr: {
    width: "50%",
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

function Details() {
  return (
    <div className="inputCtr" style={styles.input_ctr}>
      <h3>Patient Number : 1603AB2</h3>
      <div className="inputs_ctr" style={styles.input_group}>
        <div className="inpts_on_left">
          <table width="100%">
            <tr>
              <td>
                <span style={{ fontWeight: "bolder" }}>Firstname : </span>
                Mulindwa
              </td>
              <td>
                <span style={{ fontWeight: "bolder" }}>Othername : </span>
                Denis
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ fontWeight: "bolder" }}>Date of Birth : </span>
                02/05/1990
              </td>
              <td>
                <span style={{ fontWeight: "bolder" }}>Age : </span>
                32
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ fontWeight: "bolder" }}>Gender : </span>
                Male
              </td>
              <td>
                <span style={{ fontWeight: "bolder" }}>Occupation : </span>
                Farmer
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
