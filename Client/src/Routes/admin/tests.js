import React, { Component } from "react";
import { TextField, Snackbar, Button, IconButton } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import Nav from "./components/Nav";
import Header from "./components/Header";
import FormsApi from "../../api/forms";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class Tests extends Component {
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
    let form_content = {};
    fd.forEach((value, key) => {
      form_content[key] = value;
    });
    let api = new FormsApi();
    let res = await api.post("/user/admin/new_test", form_content);
    if (res.status === true) {
      this.setState({
        ...this.state,
        message: res.data,
        messageState: "success",
      });
    } else {
      this.setState({
        ...this.state,
        messageState: "error",
        message: res.data,
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
        <Nav active="tests" />
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
                    <h3>New Test</h3>
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
                        Cancel
                      </Button>

                      <Button
                        type="submit"
                        aria-describedby={this.id}
                        variant="contained"
                        color="primary"
                        style={{ marginInline: 10 }}
                      >
                        <span
                          style={{ fontSize: "17.5px", marginInline: "10px" }}
                        >
                          <i className="las la-save"></i>
                        </span>
                        Save
                      </Button>
                    </div>
                  </div>
                  <div className="card-body">
                    <div>
                      <TestDetails />
                    </div>
                  </div>
                </form>
              </div>
              <div className="card">
                <div className="card-header">
                  <h3>Test Details</h3>
                  <Button variant="contained" color="primary">
                    <span style={{ fontSize: "17.5px", marginInline: "10px" }}>
                      <i className="las la-print"></i>
                    </span>
                    Print
                  </Button>
                </div>
                <div className="card-body">
                  <table width="100%">
                    <thead>
                      <tr>
                        <td>Name</td>
                        <td>Qty</td>
                        <td>Amount(Shs)</td>
                        <td>Details</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>CBC Test</td>
                        <td>1</td>
                        <td>3000</td>
                        <td>
                          <Button variant="contained" color="primary">
                            <span
                              style={{
                                fontSize: "10px",
                                marginInline: "3px",
                              }}
                            ></span>
                            Details
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>AIDS Test</td>
                        <td>5</td>
                        <td>3000</td>
                        <td>
                          <Button variant="contained" color="primary">
                            <span
                              style={{
                                fontSize: "10px",
                                marginInline: "3px",
                              }}
                            ></span>
                            Details
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>CBC Test</td>
                        <td>4</td>
                        <td>3000</td>
                        <td>
                          <Button variant="contained" color="primary">
                            <span
                              style={{
                                fontSize: "10px",
                                marginInline: "3px",
                              }}
                            ></span>
                            Details
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>CBC Test</td>
                        <td>3</td>
                        <td>3000</td>
                        <td>
                          <Button variant="contained" color="primary">
                            <span
                              style={{
                                fontSize: "10px",
                                marginInline: "3px",
                              }}
                            ></span>
                            Details
                          </Button>
                        </td>
                      </tr>
                    </tbody>
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

export default Tests;

const styles = {
  input_ctr: {
    width: "70%",
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

function TestDetails() {
  return (
    <div className="inputCtr" style={styles.input_ctr}>
      <h4>Add Test</h4>
      <div className="inputs_ctr" style={styles.input_group}>
        <TextField
          name="test_name"
          variant="outlined"
          label="Test Name"
          style={{
            width: "320px",
            margin: "20px",
            display: "block",
          }}
        />
        <TextField
          name="test_description"
          variant="outlined"
          label="Test Description"
          style={{
            width: "320px",
            margin: "20px",
            display: "block",
          }}
        />

        <TextField
          name="amount"
          variant="outlined"
          label="Amount(Shs)"
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
