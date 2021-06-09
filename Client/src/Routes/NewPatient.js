import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import Nav from "../components/Nav";
import Header from "../components/Header";
import FormsApi from "../api/forms";

import "../design/main.css";

class NewPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patient: {
        patient_surname: "",
        patient_middle_name: "",
        patient_other_name: "",
        patient_dob: "",
        patient_gender: "",
        patient_marital_status: "",
        patient_district: "",
        patient_subcounty: "",
        patient_parish: "",
        patient_village: "",
        patient_screening_data: {},
      },
    };
  }

//   handleSubmit(event) {
//     // Prevent default behavior
//     event.preventDefault();

//     const data = new FormData(event.target);
//     // Access FormData fields with `data.get(fieldName)`
//     // For example, converting to upper case
//     data.set('username', data.get('username').toUpperCase());

//     // Do your Axios stuff here
// }
  handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    let _fcontent = {}; 
  fd.forEach((value, key) => {
    _fcontent[key] = value;
  }); 
     const api = new FormsApi();
    api.postPatient(_fcontent);
  };

  render() {
    return (
      <>
        <input type="checkbox" id="nav-toggle" />
        <Nav active="new" />
        <div className="main-content">
          <Header />
          <main>
            <div className="fullwidth-ctr">
              <div className="projects">
                <form className="card" autoComplete="off" onSubmit={this.handleSubmit}>
                  <div className="card-header">
                    <h3>New Patient</h3>
                    <div className="">
                    <span className="btn btn-faint btn-sw" style={{marginRight:"10px"}}>
                      <span className="las la-window-close"></span>
                      <span style={{marginLeft:"5px"}}>Cancel</span>
                    </span>
                    <button className="btn btn-sw" style={{marginLeft:"10px"}} type="submit">
                      <span className="las la-save"></span>
                      <span style={{marginLeft:"5px"}}>Save</span>
                    </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <div>
                      <div className="inputCtr" style={styles.input_ctr}>
                        <h4>Patient Bio Data</h4>
                        <div className="inputs_ctr" style={styles.input_group}>
                          <div className="inpts_on_left">
                          <TextField
                            name="surname"
                            variant="outlined"
                            label="Surname"
                            style={{
                              width: "240px",
                              margin: "20px",
                            }}
                          />
                          <TextField
                            name="first_name"
                            variant="outlined"
                            label="First Name"
                            style={{
                              width: "240px",
                              margin: "20px",
                            }}
                          />
                          <TextField
                            name="dob"
                            variant="outlined"
                            label="Date Of Birth"
                            style={{
                              width: "240px",
                              margin: "20px",
                            }}
                          />
                          <TextField
                            name="gender"
                            variant="outlined"
                            label="Gender"
                            style={{
                              width: "240px",
                              margin: "20px",
                            }}
                          />
                          </div>
                          <div className="inpts_center">
                          <TextField
                            name="phone_contact"
                            variant="outlined"
                            label="Phone Contact"
                            style={{
                              width: "240px",
                              margin: "20px",
                            }}
                          />
                          <TextField
                            name="email_address"
                            variant="outlined"
                            label="Email Address:(If Any)"
                            style={{
                              width: "240px",
                              margin: "20px",
                            }}
                          />
                          <TextField
                            name="pt_occupation"
                            variant="outlined"
                            label="Occupation"
                            style={{
                              width: "240px",
                              margin: "20px",
                            }}
                          />
                          <TextField
                            name="education_level"
                            variant="outlined"
                            label="Education Level"
                            style={{
                              width: "240px",
                              margin: "20px",
                            }}
                          />
                          </div>
                          <div className="inpts_on_right">
                          <TextField
                            name="marital_status"
                            variant="outlined"
                            label="Marital Status"
                            style={{
                              width: "240px",
                              margin: "20px",
                            }}
                          />
                          <TextField
                            name="religion"
                            variant="outlined"
                            label="Religion"
                            style={{
                              width: "240px",
                              margin: "20px",
                            }}
                          />
                          <TextField
                            name="tribe"
                            variant="outlined"
                            label="Tribe"
                            style={{
                              width: "240px",
                              margin: "20px",
                            }}
                          />
                          </div>
                        </div>
                      </div>
                      <div className="inputCtr" style={styles.input_ctr}>
                        <h4>Patient Bio Data</h4>
                        <div className="inputs_ctr" style={styles.input_group}>
                          <div className="inpts_on_left">
                          <TextField
                            name="surname"
                            variant="outlined"
                            label="Surname"
                            style={{
                              width: "240px",
                              margin: "20px",
                            }}
                          />
                          <TextField
                            name="first_name"
                            variant="outlined"
                            label="First Name"
                            style={{
                              width: "240px",
                              margin: "20px",
                            }}
                          />
                          <TextField
                            name="dob"
                            variant="outlined"
                            label="Date Of Birth"
                            style={{
                              width: "240px",
                              margin: "20px",
                            }}
                          />
                          <TextField
                            name="gender"
                            variant="outlined"
                            label="Gender"
                            style={{
                              width: "240px",
                              margin: "20px",
                            }}
                          />
                          </div>
                          <div className="inpts_center">
                          <TextField
                            name="phone_contact"
                            variant="outlined"
                            label="Phone Contact"
                            style={{
                              width: "240px",
                              margin: "20px",
                            }}
                          />
                          <TextField
                            name="email_address"
                            variant="outlined"
                            label="Email Address:(If Any)"
                            style={{
                              width: "240px",
                              margin: "20px",
                            }}
                          />
                          <TextField
                            name="pt_occupation"
                            variant="outlined"
                            label="Occupation"
                            style={{
                              width: "240px",
                              margin: "20px",
                            }}
                          />
                          <TextField
                            name="education_level"
                            variant="outlined"
                            label="Education Level"
                            style={{
                              width: "240px",
                              margin: "20px",
                            }}
                          />
                          </div>
                          <div className="inpts_on_right">
                          <TextField
                            name="marital_status"
                            variant="outlined"
                            label="Marital Status"
                            style={{
                              width: "240px",
                              margin: "20px",
                            }}
                          />
                          <TextField
                            name="religion"
                            variant="outlined"
                            label="Religion"
                            style={{
                              width: "240px",
                              margin: "20px",
                            }}
                          />
                          <TextField
                            name="tribe"
                            variant="outlined"
                            label="Tribe"
                            style={{
                              width: "240px",
                              margin: "20px",
                            }}
                          />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default NewPatient;

const styles = {
  input_ctr:{
    width:"75%",
    margin:"auto"
  },
  input_group:{
    width:"100%",
    border:"1px solid rgba(0,0,0,0.1)",
    borderRadius:"5px",
    margin:"15px auto",
    display:'flex',
    justifyContent:'space-around'
  }
}