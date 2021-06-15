import React, { Component } from "react";
import {
  TextField,
  Snackbar,
  Button,
  IconButton,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import Nav from "./components/Nav";
import Header from "./components/Header";
import FormsApi from "../../api/forms";

import "../../design/main.css";
import "../../design/forms.css";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class NewPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      message: "Please Wait...",
      messageState: "",
      currentTab: 0,
      backTabButtonClickable: false,
      submitButton: false,
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ ...this.state, open: true, messageState: "info" });
    const fd = new FormData(e.target);
    let _fcontent = {};
    fd.forEach((value, key) => {
      _fcontent[key] = value;
    });
    const api = new FormsApi();
    let res = await api.post("/user/receptionist/new_patient", _fcontent);
    if (res.status === true) {
      this.setState({
        ...this.state,
        message: "Patient Registered SuccessFully...",
        messageState: "success",
      });
    }
  };

  closePopUp = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ ...this.state, open: false });
  };

  handleSlideForward = () => {
    this.setState({
      ...this.state,
      submitButton: true,
      currentTab: 1,
    });
  };
  handleSlideBack = () => {
    if (this.state.currentTab === 0) {
      return;
    } else {
      this.setState({
        ...this.state,
        submitButton: false,
        currentTab: this.state.currentTab - 1,
      });
    }
  };
  render() {
    return (
      <>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={this.state.open}
          autoHideDuration={5000}
          onClose={this.closePopUp}
          action={
            <React.Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={this.closePopUp}
              >
                <i className="las la-times"></i>
              </IconButton>
            </React.Fragment>
          }
        >
          <Alert onClose={this.closePopUp} severity={this.state.messageState}>
            {this.state.message}
          </Alert>
        </Snackbar>
        <input type="checkbox" id="nav-toggle" defaultChecked />
        <Nav active="new" />
        <div className="main-content">
          <Header />
          <main>
            <div className="fullwidth-ctr">
              <div className="projects">
                <form
                  className="card"
                  autoComplete="off"
                  onSubmit={this.handleSubmit}
                >
                  <div
                    className=""
                    style={{
                      borderBottom: "1px solid #f0f0f0",
                      padding: "1rem",
                    }}
                  >
                    <div className="form-header-ctr">
                      <div className="">
                        {/* <h3>New Patient</h3> */}
                        <TextField
                          name="patient_number"
                          variant="outlined"
                          label="Patient Number"
                          style={{
                            width: "250px",
                            margin: "20px 0px",
                          }}
                        />
                      </div>

                      <div className="">
                        <Button
                          variant="contained"
                          color="primary"
                          style={{ marginRight: 10 }}
                        >
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          aria-describedby={this.id}
                          variant="contained"
                          color="primary"
                          style={{ marginLeft: 10 }}
                          disabled={!this.state.submitButton}
                        >
                          Save
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div>
                      <div
                        className=""
                        style={
                          this.state.currentTab === 0
                            ? { display: "block" }
                            : { display: "none" }
                        }
                      >
                        <div className="inputCtr">
                          <h4>Patient Bio Data</h4>
                          <div className="inputs_ctr">
                            <div className="inpts_on_left">
                              <TextField
                                name="surname"
                                variant="outlined"
                                type=""
                                label="Surname"
                                style={{
                                  width: "75%",
                                  margin: "20px",
                                }}
                              />
                              <TextField
                                name="first_name"
                                variant="outlined"
                                label="First Name"
                                style={{
                                  width: "75%",
                                  margin: "20px",
                                }}
                              />
                              <TextField
                                name="dob"
                                variant="outlined"
                                // label="Date Of Birth"
                                helperText="Date of Birth"
                                type="date"
                                style={{
                                  width: "75%",
                                  margin: "20px 20px 0px 20px",
                                }}
                              />
                              <FormControl
                                variant="outlined"
                                style={{
                                  width: "75%",
                                  margin: "20px",
                                }}
                              >
                                <InputLabel id="gender">Gender</InputLabel>
                                <Select
                                  inputProps={{ name: "gender" }}
                                  labelId="gender"
                                  id="select_gender"
                                  label="Gender"
                                >
                                  <MenuItem value="M">Male</MenuItem>
                                  <MenuItem value="F">Female</MenuItem>
                                </Select>
                              </FormControl>
                            </div>
                            <div className="inpts_center">
                              <TextField
                                name="phone_contact"
                                variant="outlined"
                                label="Phone Contact"
                                style={{
                                  width: "75%",
                                  margin: "20px",
                                }}
                              />
                              <TextField
                                name="email_address"
                                variant="outlined"
                                label="Email Address:(If Any)"
                                style={{
                                  width: "75%",
                                  margin: "20px",
                                }}
                              />
                              <TextField
                                name="pt_occupation"
                                variant="outlined"
                                label="Occupation"
                                style={{
                                  width: "75%",
                                  margin: "20px",
                                }}
                              />
                              <TextField
                                name="education_level"
                                variant="outlined"
                                label="Education Level"
                                style={{
                                  width: "75%",
                                  margin: "20px",
                                }}
                              />
                            </div>
                            <div className="inpts_on_right">
                              <FormControl
                                variant="outlined"
                                style={{
                                  width: "75%",
                                  margin: "20px",
                                }}
                              >
                                <InputLabel id="marital_status">
                                  Marital Status
                                </InputLabel>
                                <Select
                                  inputProps={{ name: "marital_status" }}
                                  labelId="marital_status"
                                  id="select_marital_status"
                                  label="Marital Status"
                                >
                                  <MenuItem value="Single">Single</MenuItem>
                                  <MenuItem value="Married">Married</MenuItem>
                                  <MenuItem value="Divorced">Divorced</MenuItem>
                                </Select>
                              </FormControl>
                              <FormControl
                                variant="outlined"
                                style={{
                                  width: "75%",
                                  margin: "20px",
                                }}
                              >
                                <InputLabel id="religion">Religion</InputLabel>
                                <Select
                                  inputProps={{ name: "religion" }}
                                  labelId="religion"
                                  id="select_religion"
                                  label="Religion"
                                >
                                  <MenuItem value="Christian">
                                    Christian
                                  </MenuItem>
                                  <MenuItem value="Muslim">Muslim</MenuItem>
                                  <MenuItem value="Pentecostal">
                                    Pentecostal
                                  </MenuItem>
                                </Select>
                              </FormControl>
                              <TextField
                                name="age"
                                variant="outlined"
                                label="Age"
                                style={{
                                  width: "75%",
                                  margin: "20px",
                                }}
                              />
                            </div>
                          </div>
                          <div
                            className=""
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                            }}
                          >
                            <Button
                              variant="contained"
                              color="primary"
                              style={{ marginLeft: 10 }}
                              onClick={this.handleSlideForward}
                            >
                              Next
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div
                        className=""
                        style={
                          this.state.currentTab === 1
                            ? { display: "block" }
                            : { display: "none" }
                        }
                      >
                        <div className="inputCtr">
                          <h4>Patient Address</h4>
                          <div className="inputs_ctr">
                            <div className="inpts_on_left">
                              <TextField
                                name="district"
                                variant="outlined"
                                label="District"
                                style={{
                                  width: "75%",
                                  margin: "20px",
                                }}
                              />
                              <TextField
                                name="sub_county"
                                variant="outlined"
                                label="Sub County"
                                style={{
                                  width: "75%",
                                  margin: "20px",
                                }}
                              />
                              <TextField
                                name="parish"
                                variant="outlined"
                                label="Parish"
                                style={{
                                  width: "75%",
                                  margin: "20px",
                                }}
                              />
                            </div>
                            <div className="inpts_center">
                              <TextField
                                name="village"
                                variant="outlined"
                                label="Village"
                                style={{
                                  width: "75%",
                                  margin: "20px",
                                }}
                              />
                              <TextField
                                name="tribe"
                                variant="outlined"
                                label="Tribe"
                                style={{
                                  width: "75%",
                                  margin: "20px",
                                }}
                              />
                              <TextField
                                name="address"
                                variant="outlined"
                                label="Address"
                                style={{
                                  width: "75%",
                                  margin: "20px",
                                }}
                              />
                            </div>
                            <div className="inpts_on_right">
                              <TextField
                                name="nk_surname"
                                variant="outlined"
                                label="Next Of Kin Surname"
                                style={{
                                  width: "75%",
                                  margin: "20px",
                                }}
                              />
                              <TextField
                                name="nk_first_name"
                                variant="outlined"
                                label="Next Of Kin Firstname"
                                style={{
                                  width: "75%",
                                  margin: "20px",
                                }}
                              />
                              <TextField
                                name="nk_relationship"
                                variant="outlined"
                                label="Relationship With Patient"
                                style={{
                                  width: "75%",
                                  margin: "20px",
                                }}
                              />
                              <TextField
                                name="nk_telephone"
                                variant="outlined"
                                label="Phone Number"
                                style={{
                                  width: "75%",
                                  margin: "20px",
                                }}
                              />
                            </div>
                          </div>
                          <div
                            className=""
                            style={{
                              display: "flex",
                              justifyContent: "flex-end",
                            }}
                          >
                            <Button
                              variant="contained"
                              color="primary"
                              style={{ marginRight: 10 }}
                              onClick={this.handleSlideBack}
                            >
                              Back
                            </Button>
                            <Button
                              variant="contained"
                              color="primary"
                              style={{ marginLeft: 10 }}
                              onClick={this.handleSlideForward}
                              disabled
                            >
                              Next
                            </Button>
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
  input_ctr: {
    width: "75%",
    margin: "auto",
  },
  input_group: {
    width: "100%",
    border: "1px solid rgba(0,0,0,0.1)",
    borderRadius: "5px",
    margin: "15px auto",
    display: "flex",
    justifyContent: "space-around",
  },
};
