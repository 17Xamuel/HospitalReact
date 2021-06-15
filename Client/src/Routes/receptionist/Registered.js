import React, { Component } from "react";
import MuiAlert from "@material-ui/lab/Alert";
import Nav from "./components/Nav";
import Header from "./components/Header";
import FormsApi from "../../api/forms";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";

import {
  TextField,
  Snackbar,
  Button,
  IconButton,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
  Chip,
  Checkbox,
} from "@material-ui/core";

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
    let res = await api.post("/user/receptionist/new_patient_unit", _fcontent);
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
                  <div
                    className=""
                    style={{
                      borderBottom: "1px solid #f0f0f0",
                      padding: "1rem",
                    }}
                  >
                    <div className="form-header-ctr">
                      <div className="">
                        <h3>Triage</h3>
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
                        >
                          Save
                        </Button>
                      </div>
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

//chip

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
  },
  chip: {
    margin: 10,
  },
  chip: {
    maxWidth: 100,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["Tobacco Use", "Alcohol", "Cigarates"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

//chip
function BioData() {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };
  return (
    <div className="inputCtr" style={styles.input_ctr}>
      <TextField
        name="patient_number"
        variant="outlined"
        label="Patient Number"
        style={{
          width: "200px",
          margin: "20px 0px",
        }}
      />
      <div className="inputs_ctr" style={styles.input_group}>
        <div className="inpts_on_left" style={{ flex: 1 }}>
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
              width: "75%",
              margin: "20px",
            }}
          />
          <TextField
            name="height"
            variant="outlined"
            label="Height"
            style={{
              width: "75%",
              margin: "20px",
            }}
          />
          <TextField
            name="bmi"
            variant="outlined"
            label="BMI"
            style={{
              width: "75%",
              margin: "20px",
            }}
          />
        </div>
        <div className="inpts_center" style={{ flex: 1 }}>
          <TextField
            name="blood_pressure"
            variant="outlined"
            label="Blood Pressure"
            style={{
              width: "75%",
              margin: "20px",
            }}
          />
          <TextField
            name="blood_sugar"
            variant="outlined"
            label="Blood Sugar"
            style={{
              width: "75%",
              margin: "20px",
            }}
          />
          <TextField
            name="palliative_care"
            variant="outlined"
            label="Palliative Care"
            style={{
              width: "75%",
              margin: "20px",
            }}
          />
        </div>
        <div className="inpts_on_right" style={{ flex: 1 }}>
          <TextField
            name="patient_classification"
            variant="outlined"
            label="Patient Classification"
            style={{
              width: "75%",
              margin: "20px",
            }}
          />
          <FormControl
            variant="outlined"
            style={{
              width: "75%",
              margin: "20px",
            }}
          >
            <InputLabel id="demo-mutiple-chip-label">Chip</InputLabel>
            <Select
              labelId="demo-mutiple-chip-label"
              id="demo-mutiple-chip"
              multiple
              multiline
              value={personName}
              onChange={handleChange}
              input={<Input id="select-multiple-chip" />}
              renderValue={(selected) => (
                <div>
                  {selected.map((value) => (
                    // <div>
                    <Chip key={value} label={value} />
                    // </div>
                  ))}
                </div>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}
