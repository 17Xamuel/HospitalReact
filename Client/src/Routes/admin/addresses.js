import React, { Component } from "react";
import {
  Button,
  TextField,
  Snackbar,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  IconButton,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import Nav from "./components/Nav";
import Header from "./components/Header";
import FormsApi from "../../api/forms";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class Addresses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      message: "Please Wait...",
      messageState: "",
      value: "",
    };
  }

  handleChange = (e) => {
    this.setState({ ...this.state, value: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ ...this.state, open: true, messageState: "info" });
    const fd = new FormData(e.target);
    let _fcontent = {};
    fd.forEach((value, key) => {
      _fcontent[key] = value;
    });
    let api = new FormsApi();
    let res = await api.post("/user/admin/new_address", _fcontent);
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
        <Nav active="addresses" />
        <div className="main-content">
          <Header />
          <main>
            <div className="recent-grid-left">
              <div className="projects">
                <form
                  className="card"
                  onSubmit={this.handleSubmit}
                  autoComplete="off"
                >
                  <div className="card-header">
                    <h3>New Address</h3>
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
                  <div class="card-body">
                    <div className="inputCtr" style={styles.input_ctr}>
                      <div className="inputs_ctr" style={styles.input_group}>
                        <FormControl
                          variant="outlined"
                          label="Address"
                          style={{
                            width: "240px",
                            margin: "20px",
                          }}
                        >
                          <InputLabel id="address">Select Address</InputLabel>
                          <Select
                            inputProps={{ name: "address" }}
                            label="Address"
                            id="select_address"
                            onChange={this.handleChange}
                          >
                            <MenuItem value="1">District</MenuItem>
                            <MenuItem value="2">Sub County</MenuItem>
                            <MenuItem value="3">Parish</MenuItem>
                            <MenuItem value="4">Village</MenuItem>
                          </Select>
                        </FormControl>
                        {this.state.value === "1" ? (
                          <District />
                        ) : this.state.value === "2" ? (
                          <SubCounty />
                        ) : this.state.value === "3" ? (
                          <Parish />
                        ) : this.state.value === "4" ? (
                          <Village />
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="projects">
                <div className="card">
                  <div className="card-header">
                    <h3>Locations Summary</h3>
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
                    <h5>Location</h5>
                    <div className="inputCtr" style={styles.input_ctr}>
                      <div className="inputs_ctr" style={styles.input_group}>
                        <table width="100%">
                          <thead>
                            <tr>
                              <td>Location</td>
                              <td>Number</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Districts</td>
                              <td>23</td>
                            </tr>
                            <tr>
                              <td>Sub Counties</td>
                              <td>45</td>
                            </tr>
                            <tr>
                              <td>Parishes</td>
                              <td>25</td>
                            </tr>
                            <tr>
                              <td>Villages</td>
                              <td>2</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
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

export default Addresses;

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

function District() {
  return (
    <>
      <TextField
        name="district_name"
        variant="outlined"
        label="District Name"
        style={{
          width: "240px",
          margin: "20px",
        }}
      />
      <TextField
        name="district_description"
        variant="outlined"
        label="District Description"
        style={{
          width: "240px",
          margin: "20px",
        }}
      />
    </>
  );
}

function SubCounty() {
  return (
    <>
      <FormControl
        variant="outlined"
        label="District"
        style={{
          width: "240px",
          margin: "20px",
        }}
      >
        <InputLabel id="district">District</InputLabel>
        <Select
          inputProps={{ name: "district" }}
          id="select_district"
          label="District"
        >
          <MenuItem value="1">Masaka</MenuItem>
          <MenuItem value="2">Mbale</MenuItem>
        </Select>
      </FormControl>
      <TextField
        name="subcounty_name"
        variant="outlined"
        label="Subcounty Name"
        style={{
          width: "240px",
          margin: "20px",
        }}
      />
      <TextField
        name="description"
        variant="outlined"
        label="Description"
        style={{
          width: "240px",
          margin: "20px",
        }}
      />
    </>
  );
}

function Parish() {
  return (
    <>
      <FormControl
        variant="outlined"
        label="Sub County"
        style={{
          width: "240px",
          margin: "20px",
        }}
      >
        <InputLabel id="parish">Sub County</InputLabel>
        <Select
          inputProps={{ name: "sub_county" }}
          id="select_subcounty"
          label="SubCounty"
        >
          <MenuItem value="1">Barapwo</MenuItem>
          <MenuItem value="2">Ayere</MenuItem>
        </Select>
      </FormControl>
      <TextField
        name="parish_name"
        variant="outlined"
        label="Parish Name"
        style={{
          width: "240px",
          margin: "20px",
        }}
      />
      <TextField
        name="description"
        variant="outlined"
        label="Description"
        style={{
          width: "240px",
          margin: "20px",
        }}
      />
    </>
  );
}

function Village() {
  return (
    <>
      <FormControl
        variant="outlined"
        label="Parish"
        style={{
          width: "240px",
          margin: "20px",
        }}
      >
        <InputLabel id="gender">Parish</InputLabel>
        <Select
          inputProps={{ name: "parish" }}
          id="select_parish"
          label="District"
        >
          <MenuItem value="1">Masaka</MenuItem>
          <MenuItem value="2">Mbale</MenuItem>
        </Select>
      </FormControl>
      <TextField
        name="village_name"
        variant="outlined"
        label="Village Name"
        style={{
          width: "240px",
          margin: "20px",
        }}
      />
      <TextField
        name="description"
        variant="outlined"
        label="Description"
        style={{
          width: "240px",
          margin: "20px",
        }}
      />
    </>
  );
}
