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
                    <h3>Patient Details</h3>
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
              <div className="projects">
                <div className="card">
                  <div className="card-header">
                    <h3>Patient Units</h3>
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
                    <div>
                      <Units />
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

export default Patient;

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

function Details() {
  return (
    <>
      <div className="inputCtr" style={styles.input_ctr}>
        <h3>Patient Number : 1603AB2</h3>
        <div className="inputs_ctr" style={styles.input_group}>
          <table width="100%">
            <tr>
              <td>
                <span style={{ fontWeight: "bolder" }}>Firstname :</span> Denis
              </td>
              <td>
                <span style={{ fontWeight: "bolder" }}>Othername :</span>
                Mulindwa
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ fontWeight: "bolder" }}>Date of Birth :</span>
                02/06/1990
              </td>
              <td>
                <span style={{ fontWeight: "bolder" }}>Age:</span> 32
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ fontWeight: "bolder" }}>Phonenumber :</span>
                0789566342
              </td>
              <td>
                <span style={{ fontWeight: "bolder" }}>Email Address :</span>
                den@mail.com
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ fontWeight: "bolder" }}>Occupation :</span>
                Farmer
              </td>
              <td>
                <span style={{ fontWeight: "bolder" }}>Marital Status :</span>
                Married
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ fontWeight: "bolder" }}>Education Level :</span>
                University
              </td>
              <td>
                <span style={{ fontWeight: "bolder" }}>Religion :</span>
                Catholic
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ fontWeight: "bolder" }}>Tribe :</span> Muganda
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ fontWeight: "bolder" }}>District :</span> Lira
              </td>
              <td>
                <span style={{ fontWeight: "bolder" }}>Subcounty :</span>
                Barapwo
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ fontWeight: "bolder" }}>Parish :</span> Odokomit
              </td>
              <td>
                <span style={{ fontWeight: "bolder" }}>Village :</span> Ayere
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ fontWeight: "bolder" }}>Date :</span> 24/06/2020
              </td>
              <td>
                <span style={{ fontWeight: "bolder" }}>Time :</span> 12:35PM
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="inputCtr" style={styles.input_ctr}>
        <h5>Next of kin</h5>
        <div className="inputs_ctr" style={styles.input_group}>
          <table width="100%">
            <tr>
              <td>
                <span style={{ fontWeight: "bolder" }}>Firstname :</span> Samuel
              </td>
              <td>
                <span style={{ fontWeight: "bolder" }}>Othername :</span>
                Wekobosya
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ fontWeight: "bolder" }}>Relationship :</span>
                Father
              </td>
              <td>
                <span style={{ fontWeight: "bolder" }}>Address :</span> Lira
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ fontWeight: "bolder" }}>Contact :</span>
                0754435234
              </td>
              <td>
                <span style={{ fontWeight: "bolder" }}>Occupation :</span>
                Designer
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ fontWeight: "bolder" }}>Date :</span> 24/06/2020
              </td>
              <td>
                <span style={{ fontWeight: "bolder" }}>Time :</span> 12:35PM
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

function Units() {
  return (
    <>
      <div className="inputCtr" style={styles.input_ctr}>
        <div className="inputs_ctr" style={styles.input_group}>
          <table width="100%">
            <tr>
              <td>
                <span style={{ fontWeight: "bolder" }}>Weight :</span>56kg
              </td>
              <td>
                <span style={{ fontWeight: "bolder" }}>Height :</span> 170cm
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ fontWeight: "bolder" }}>Z-Score-Weight :</span>
                24cm
              </td>
              <td>
                <span style={{ fontWeight: "bolder" }}>Z-Score-Height :</span>
                12cm
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ fontWeight: "bolder" }}> Pressure :</span> 25Pa
              </td>
              <td>
                <span style={{ fontWeight: "bolder" }}> Sugar :</span> 14
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ fontWeight: "bolder" }}>MUAC :</span> 45
              </td>
              <td>
                <span style={{ fontWeight: "bolder" }}>BMI :</span> 28
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ fontWeight: "bolder" }}>Palliative Care :</span>
                23
              </td>
              <td>
                <span style={{ fontWeight: "bolder" }}>Class :</span> Very Sick
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ fontWeight: "bolder" }}>Tobacco Use :</span>30%
              </td>
            </tr>
            <tr>
              <td>
                <span style={{ fontWeight: "bolder" }}>Date :</span> 24/06/2020
              </td>
              <td>
                <span style={{ fontWeight: "bolder" }}>Time :</span> 12:35PM
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
