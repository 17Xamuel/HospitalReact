import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "../app.css";
import "line-awesome/dist/line-awesome/css/line-awesome.css";
import Dashboard from "../Routes/doctor/Dashboard";
import LabRequest from "../Routes/doctor/Lab_request";
import Diagnosis from "../Routes/doctor/Diagnosis";
import Referral from "../Routes/doctor/Referral";
import ClinicalInformation from "../Routes/doctor/Clinical_information";
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
            <Route path="/lab_request" exact component={LabRequest} />
            <Route path="/diagnosis" exact component={Diagnosis} />
            <Route path="/referral" exact component={Referral} />
            <Route
              path="/clinical_information"
              exact
              component={ClinicalInformation}
            />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Receptionist;
