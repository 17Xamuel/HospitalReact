import React, { Component } from "react";
import { TextField, Snackbar, Button, IconButton } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import Nav from "./components/Nav";
import Header from "./components/Header";
import FormsApi from "../../api/forms";

import "../../design/main.css";
import "../../design/forms.css";

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
    let res = await api.post("/user/accounts/new_payment", _fcontent);
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
        <input type="checkbox" id="nav-toggle" defaultChecked />
        <Nav active="payments" />
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
                  <div className="card-header card-header-payments">
                    <h3 className="class_payment_header">New Payment</h3>
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
                        Print Receipt
                      </Button>
                      <Button
                        type="submit"
                        aria-describedby={this.id}
                        variant="contained"
                        color="primary"
                        style={{ marginLeft: 10 }}
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
                      <PaymentDetails />
                    </div>
                  </div>
                </form>
              </div>
              <div className="card">
                <div className="card-header">
                  <h3>Payment Details</h3>
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

export default Payments;

function PaymentDetails() {
  return (
    <div className="inputCtrPaymentsDepart">
      <h4>Payment</h4>
      <div
        className="inputs_ctr"
        style={{ alignItems: "center", flexDirection: "column" }}
      >
        <TextField
          name="patient_number"
          variant="outlined"
          label="Patient Number"
          style={{
            width: "75%",
            margin: "20px",
          }}
        />
        <TextField
          name="patient_name"
          variant="outlined"
          label="Patient Name"
          style={{
            width: "75%",
            margin: "20px",
          }}
        />
        <TextField
          name="amount"
          variant="outlined"
          label="Amount(Shs)"
          style={{
            width: "75%",
            margin: "20px",
          }}
        />
        <TextField
          name="balance"
          variant="outlined"
          label="Balance(Shs)"
          style={{
            width: "75%",
            margin: "20px",
          }}
        />
      </div>
    </div>
  );
}
