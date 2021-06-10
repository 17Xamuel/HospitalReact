import React, { Component } from "react";
import { TextField, Snackbar, Button, IconButton } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import FormsApi from "../../api/forms";

import "../../design/main.css";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class Payments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      message: "Please Wait...",
      messageState: "",
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
    let res = await api.postPatient(_fcontent);
    console.log(res);
    if (res.status === true) {
      this.setState({
        ...this.state,
        message: "Patient Registered SuccessFully...",
        messageState: "success",
      });
    }
  };

  closePopUp = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ ...this.state, open: false });
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
        <input type="checkbox" id="nav-toggle" />
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
                  <div className="card-header">
                    <h3>New Patient</h3>
                    <div className="">
                      <Button
                        type="submit"
                        aria-describedby={this.id}
                        variant="contained"
                        color="primary"
                        style={{ marginInline: 10 }}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        aria-describedby={this.id}
                        variant="contained"
                        color="primary"
                        style={{ marginInline: 10 }}
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                  <div className="card-body">
                    <div>
                      <PaymentDetails />
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

export default Payments;

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

function PaymentDetails() {
  return (
    <div className="inputCtr" style={styles.input_ctr}>
      <h4>Patient Bio Data</h4>
      <div className="inputs_ctr" style={styles.input_group}>
        <div className="inpts_on_left">
          <TextField
            name="surname"
            variant="outlined"
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
  );
}
