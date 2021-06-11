import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "../app.css";
import "line-awesome/dist/line-awesome/css/line-awesome.css";
import Dashboard from "../Routes/receptionist/Dashboard";
import NewPatient from "../Routes/receptionist/NewPatient";
import Screening from "../Routes/receptionist/Registered";
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
            <Route path="/screening" exact component={Screening} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Receptionist;
