import React, { Component } from "react";
import { TextField, Snackbar, Button, IconButton } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import Nav from "./components/Nav";
import Header from "./components/Header";
import FormsApi from "../../api/forms";

import "../../design/main.css";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class SampleCollection extends Component {
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
    let res = await api.post("/user/lab/new_lab_report", _fcontent);
    console.log(res);
    if (res.status === true) {
      this.setState({
        ...this.state,
        message: res.data,
        messageState: "success",
      });
    } else {
      this.setState({
        ...this.state,
        message: res.data,
        messageState: "error",
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
        <input type="checkbox" id="nav-toggle" defaultChecked />
        <Nav active="samples" />
        <div className="main-content">
          <Header />
          <main>
            <div className="recent-grid-left">
              <div className="projects">
                <form
                  className="card"
                  autoComplete="off"
                  onSubmit={this.handleSubmit}
                >
                  <div className="card-header">
                    <h3>Lab Sample Collection &amp; Recieving</h3>
                    <div className="">
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{ marginRight: 10 }}
                      >
                        <span
                          style={{ fontSize: "17.5px", marginRight: "10px" }}
                        >
                          <i className="las la-print"></i>
                        </span>
                        Print Request
                      </Button>
                      <Button
                        type="submit"
                        aria-describedby={this.id}
                        variant="contained"
                        color="primary"
                        style={{ marginLeft: "10px" }}
                      >
                        <span
                          style={{ fontSize: "17.5px", marginRight: "10px" }}
                        >
                          <i className="las la-save"></i>
                        </span>
                        Save
                      </Button>
                    </div>
                  </div>
                  <div className="card-body">
                    <div>
                      <SampleCollectionDetails />
                    </div>
                  </div>
                </form>
              </div>
              <div className="card">
                <div className="card-header">
                  <h3>Sample Collection Details</h3>
                  <Button variant="contained" color="primary">
                    <span style={{ fontSize: "17.5px", marginRight: "10px" }}>
                      <i className="las la-print"></i>
                    </span>
                    Print
                  </Button>
                </div>
                <div className="card-body">
                  <table width="100%">
                    <thead>
                      <tr>
                        <td>Details</td>
                        <td>Qty</td>
                        <td>Unit(Shs)</td>
                        <td>Total(Shs)</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>CBC Test</td>
                        <td>1</td>
                        <td>3000</td>
                        <td>3000</td>
                      </tr>
                      <tr>
                        <td>CBC Test</td>
                        <td>1</td>
                        <td>3000</td>
                        <td>3000</td>
                      </tr>
                      <tr>
                        <td>CBC Test</td>
                        <td>1</td>
                        <td>3000</td>
                        <td>3000</td>
                      </tr>
                      <tr>
                        <td>CBC Test</td>
                        <td>1</td>
                        <td>3000</td>
                        <td>3000</td>
                      </tr>
                    </tbody>
                    <thead>
                      <tr>
                        <td></td>
                        <td></td>
                        <td>Total</td>
                        <td>12000</td>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default SampleCollection;

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

function SampleCollectionDetails() {
  return (
    <div className="inputCtr" style={styles.input_ctr}>
      <h4>Sample Collection</h4>
      <div className="inputs_ctr" style={styles.input_group}>
        <TextField
          name="patient_number"
          variant="outlined"
          label="Patient Number"
          style={{
            width: "320px",
            margin: "20px",
            display: "block",
          }}
        />
        <TextField
          name="patient_name"
          variant="outlined"
          label="Patient Name"
          style={{
            width: "320px",
            margin: "20px",
            display: "block",
          }}
        />
        <TextField
          name="specimens"
          variant="outlined"
          multiline
          label="Specimens Taken"
          style={{
            width: "320px",
            margin: "20px",
            display: "block",
          }}
        />
        <TextField
          name="reason"
          variant="outlined"
          label="Reason"
          multiline
          style={{
            width: "320px",
            margin: "20px",
            display: "block",
          }}
        />
      </div>
    </div>
  );
}
