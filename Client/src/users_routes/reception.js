import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "../app.css";
import "line-awesome/dist/line-awesome/css/line-awesome.css";
import Dashboard from "../Routes/receptionist/Dashboard";
import NewPatient from "../Routes/receptionist/NewPatient";
import Triage from "../Routes/receptionist/Registered";
import AllPatients from "../Routes/receptionist/all_patients";
import NotFound from "../components/404";

class Receptionist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/new" exact component={NewPatient} />
            <Route path="/triage" exact component={Triage} />
            <Route path="/all_patients" exact component={AllPatients} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Receptionist;
