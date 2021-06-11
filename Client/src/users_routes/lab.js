import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "../app.css";
import "line-awesome/dist/line-awesome/css/line-awesome.css";
import Dashboard from "../Routes/lab/Dashboard";
import LabReport from "../Routes/lab/lab_report";
import SampleCollection from "../Routes/lab/Samples_collection";
import NotFound from "../components/404";

class Lab extends Component {
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
            <Route path="/lab_report" exact component={LabReport} />
            <Route
              path="/sample_collection"
              exact
              component={SampleCollection}
            />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Lab;
