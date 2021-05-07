import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import Nav from "../components/Nav";
import Header from "../components/Header";

class NewPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patient_surname: "",
      patient_middle_name: "",
      patient_other_name: "",
      patient_dob: "",
      patient_gender: "",
      patient_district:"",
      patient_subcounty:"",
      patient_parish:"",
      patient_village:""
    };
  }

  handleSubmit = () => {};

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
                <div className="card">
                  <div className="card-header">
                    <h3>New Patient</h3>
                    <button>
                      See all <span className="las la-arrow-right"></span>
                    </button>
                  </div>
                  <div className="card-body">
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                      <div className="inputCtr">
                        <h4>Patient Bio Data</h4>
                        <TextField
                          name="patient_surname"
                          variant="outlined"
                          label="Patient Surname"
                          style={{
                            width: "240px",
                            margin: "20px",
                          }}
                          value={this.state.patient_surname}
                          onChange={(e) => {
                            this.setState({
                              ...this.state,
                              patient_surname: e.target.value,
                            });
                          }}
                        />
                        <TextField
                          name="patient_middle_name"
                          variant="outlined"
                          label="Middle Name"
                          style={{
                            width: "240px",
                            margin: "20px",
                          }}
                          value={this.state.patient_middle_name}
                          onChange={(e) => {
                            this.setState({
                              ...this.state,
                              patient_middle_name: e.target.value,
                            });
                          }}
                        />
                        <TextField
                          name="patient_other_name"
                          variant="outlined"
                          label="Other Names"
                          style={{
                            width: "240px",
                            margin: "20px",
                          }}
                          value={this.state.patient_other_name}
                          onChange={(e) => {
                            this.setState({
                              ...this.state,
                              patient_other_name: e.target.value,
                            });
                          }}
                        />
                        <TextField
                          name="patient_dob"
                          variant="outlined"
                          label="Date of Birth"
                          style={{
                            width: "120px",
                            margin: "20px",
                          }}
                          value={this.state.patient_dob}
                          onChange={(e) => {
                            this.setState({
                              ...this.state,
                              patient_dob: e.target.value,
                            });
                          }}
                        />
                        <TextField
                          name="patient_gender"
                          variant="outlined"
                          label="Gender"
                          style={{
                            width: "150px",
                            margin: "20px",
                          }}
                          value={this.state.patient_gender}
                          onChange={(e) => {
                            this.setState({
                              ...this.state,
                              patient_gender: e.target.value,
                            });
                          }}
                        />
                      </div>
                      <div className="inputCtr">
                        <h4>Address</h4>
                        <TextField
                          name="patient_district"
                          variant="outlined"
                          label="District"
                          style={{
                            width: "240px",
                            margin: "20px",
                          }}
                          value={this.state.patient_district}
                          onChange={(e) => {
                            this.setState({
                              ...this.state,
                              patient_district: e.target.value,
                            });
                          }}
                        />
                        <TextField
                          name="patient_subcounty"
                          variant="outlined"
                          label="Subcounty"
                          style={{
                            width: "240px",
                            margin: "20px",
                          }}
                          value={this.state.patient_subcounty}
                          onChange={(e) => {
                            this.setState({
                              ...this.state,
                              patient_subcounty: e.target.value,
                            });
                          }}
                        />
                        <TextField
                          name="patient_parish"
                          variant="outlined"
                          label="Parish"
                          style={{
                            width: "240px",
                            margin: "20px",
                          }}
                          value={this.state.patient_parish}
                          onChange={(e) => {
                            this.setState({
                              ...this.state,
                              patient_parish: e.target.value,
                            });
                          }}
                        />
                        <TextField
                          name="patient_village"
                          variant="outlined"
                          label="Village"
                          style={{
                            width: "240px",
                            margin: "20px",
                          }}
                          value={this.state.patient_village}
                          onChange={(e) => {
                            this.setState({
                              ...this.state,
                              patient_village: e.target.value,
                            });
                          }}
                        />
                      </div>
                                            <div className="inputCtr">
                        <h4>Screening Data</h4>
                        <TextField
                          name="patient_surname"
                          variant="outlined"
                          label="Patient Surname"
                          style={{
                            width: "240px",
                            margin: "20px",
                          }}
                          value={this.state.patient_surname}
                          onChange={(e) => {
                            this.setState({
                              ...this.state,
                              patient_surname: e.target.value,
                            });
                          }}
                        />
                        <TextField
                          name="patient_middle_name"
                          variant="outlined"
                          label="Middle Name"
                          style={{
                            width: "240px",
                            margin: "20px",
                          }}
                          value={this.state.patient_middle_name}
                          onChange={(e) => {
                            this.setState({
                              ...this.state,
                              patient_middle_name: e.target.value,
                            });
                          }}
                        />
                        <TextField
                          name="patient_other_name"
                          variant="outlined"
                          label="Other Names"
                          style={{
                            width: "240px",
                            margin: "20px",
                          }}
                          value={this.state.patient_other_name}
                          onChange={(e) => {
                            this.setState({
                              ...this.state,
                              patient_other_name: e.target.value,
                            });
                          }}
                        />
                        <TextField
                          name="patient_dob"
                          variant="outlined"
                          label="Date of Birth"
                          style={{
                            width: "120px",
                            margin: "20px",
                          }}
                          value={this.state.patient_dob}
                          onChange={(e) => {
                            this.setState({
                              ...this.state,
                              patient_dob: e.target.value,
                            });
                          }}
                        />
                        <TextField
                          name="patient_gender"
                          variant="outlined"
                          label="Gender"
                          style={{
                            width: "150px",
                            margin: "20px",
                          }}
                          value={this.state.patient_gender}
                          onChange={(e) => {
                            this.setState({
                              ...this.state,
                              patient_gender: e.target.value,
                            });
                          }}
                        />
                      </div>
                                            <div className="inputCtr">
                        <h4>Screening Data</h4>
                        <TextField
                          name="patient_surname"
                          variant="outlined"
                          label="Patient Surname"
                          style={{
                            width: "240px",
                            margin: "20px",
                          }}
                          value={this.state.patient_surname}
                          onChange={(e) => {
                            this.setState({
                              ...this.state,
                              patient_surname: e.target.value,
                            });
                          }}
                        />
                        <TextField
                          name="patient_middle_name"
                          variant="outlined"
                          label="Middle Name"
                          style={{
                            width: "240px",
                            margin: "20px",
                          }}
                          value={this.state.patient_middle_name}
                          onChange={(e) => {
                            this.setState({
                              ...this.state,
                              patient_middle_name: e.target.value,
                            });
                          }}
                        />
                        <TextField
                          name="patient_other_name"
                          variant="outlined"
                          label="Other Names"
                          style={{
                            width: "240px",
                            margin: "20px",
                          }}
                          value={this.state.patient_other_name}
                          onChange={(e) => {
                            this.setState({
                              ...this.state,
                              patient_other_name: e.target.value,
                            });
                          }}
                        />
                        <TextField
                          name="patient_dob"
                          variant="outlined"
                          label="Date of Birth"
                          style={{
                            width: "120px",
                            margin: "20px",
                          }}
                          value={this.state.patient_dob}
                          onChange={(e) => {
                            this.setState({
                              ...this.state,
                              patient_dob: e.target.value,
                            });
                          }}
                        />
                        <TextField
                          name="patient_gender"
                          variant="outlined"
                          label="Gender"
                          style={{
                            width: "150px",
                            margin: "20px",
                          }}
                          value={this.state.patient_gender}
                          onChange={(e) => {
                            this.setState({
                              ...this.state,
                              patient_gender: e.target.value,
                            });
                          }}
                        />
                      </div>
                      <div className="inputsCtr">
                        <h4>Submit</h4>
                        <Button style={{
                          backgroundColor:'#4671ff',
                          color:'white',
                          margin: '25px'
                        }}>Submit</Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="projects">
                <div className="card">
                  <div className="card-header">
                    <h3>Recent Patients</h3>
                    <button>
                      See all <span className="las la-arrow-right"></span>
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

export default NewPatient;
