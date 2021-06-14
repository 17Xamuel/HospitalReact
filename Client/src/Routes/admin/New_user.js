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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class New_user extends Component {
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
    let res = await api.postUser(_fcontent);
    console.log(res);
    if (res.status === true) {
      this.setState({
        ...this.state,
        message: "User Registered SuccessFully...",
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
        <Nav active="users" />
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
                    <h3>New User</h3>
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
                      <UserDetails />
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

export default New_user;

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

function UserDetails() {
  return (
    <div className="inputCtr" style={styles.input_ctr}>
      <h4>User Details</h4>
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
            name="other_name"
            variant="outlined"
            label="Other Name"
            style={{
              width: "240px",
              margin: "20px",
            }}
          />
          <TextField
            name="username"
            variant="outlined"
            label="Username"
            style={{
              width: "240px",
              margin: "20px",
            }}
          />
          <FormControl
            variant="outlined"
            label="Gender"
            style={{
              width: "240px",
              margin: "20px",
            }}
          >
            <InputLabel id="gender">Gender</InputLabel>
            <Select
              inputProps={{ name: "gender" }}
              id="select_gender"
              label="Gender"
            >
              <MenuItem value="M">Male</MenuItem>
              <MenuItem value="F">Female</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="inpts_center">
          <FormControl
            variant="outlined"
            label="Department"
            style={{
              width: "240px",
              margin: "20px",
            }}
          >
            <InputLabel id="department">Department</InputLabel>
            <Select
              inputProps={{ name: "department" }}
              label="Department"
              id="select_department"
            >
              <MenuItem value="1">Labaratory</MenuItem>
              <MenuItem value="2">OPD</MenuItem>
              <MenuItem value="3">Accounts</MenuItem>
              <MenuItem value="4">Martenity</MenuItem>
            </Select>
          </FormControl>
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
            name="role"
            variant="outlined"
            label="Role"
            style={{
              width: "240px",
              margin: "20px",
            }}
          />
        </div>
        <div className="inpts_on_right">
          <TextField
            name="password"
            variant="outlined"
            label="Password"
            style={{
              width: "240px",
              margin: "20px",
            }}
          />
          <TextField
            name="confirm_password"
            variant="outlined"
            label="Confirm Password"
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
