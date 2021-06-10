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

class Screening extends Component {
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
    let res = await api.postPatientUnit(_fcontent);
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
        <Nav active="screening" />
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
                      <BioData />
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

export default Screening;

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

function BioData() {
  return (
    <div className="inputCtr" style={styles.input_ctr}>
      <h4>Patient Screening Data</h4>
      <div className="inputs_ctr" style={styles.input_group}>
        <div className="inpts_on_left">
          <TextField
            name="muac"
            variant="outlined"
            label="Muac"
            style={{
              width: "75%",
              margin: "20px",
            }}
          />
          <TextField
            name="weight"
            variant="outlined"
            label="Weight(KG)"
            style={{
              width: "240px",
              margin: "20px",
            }}
          />
          <TextField
            name="height"
            variant="outlined"
            label="Height"
            style={{
              width: "240px",
              margin: "20px",
            }}
          />
          <TextField
            name="bmi"
            variant="outlined"
            label="BMI"
            style={{
              width: "240px",
              margin: "20px",
            }}
          />
          <TextField
            name="z_score_weight"
            variant="outlined"
            label="Z Score Weight"
            style={{
              width: "240px",
              margin: "20px",
            }}
          />
        </div>
        <div className="inpts_center">
          <TextField
            name="z_score_height"
            variant="outlined"
            label="Z Score height"
            style={{
              width: "240px",
              margin: "20px",
            }}
          />
          <TextField
            name="blood_pressure"
            variant="outlined"
            label="Blood Pressure"
            style={{
              width: "240px",
              margin: "20px",
            }}
          />
          <TextField
            name="blood_sugar"
            variant="outlined"
            label="Blood Sugar"
            style={{
              width: "240px",
              margin: "20px",
            }}
          />
        </div>
        <div className="inpts_on_right">
          <TextField
            name="palliative_care"
            variant="outlined"
            label="Palliative Care"
            style={{
              width: "240px",
              margin: "20px",
            }}
          />
          <TextField
            name="patient_classification"
            variant="outlined"
            label="Patient Classification"
            style={{
              width: "240px",
              margin: "20px",
            }}
          />
          <TextField
            name="tobacco_use"
            variant="outlined"
            label="Tobacco Use"
            style={{
              width: "240px",
              margin: "20px",
            }}
          />
          <TextField
            name="created_at_date"
            variant="outlined"
            label="Date"
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
