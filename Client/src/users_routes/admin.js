import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "../app.css";
import "line-awesome/dist/line-awesome/css/line-awesome.css";
import Dashboard from "../Routes/admin/Dashboard";
import Tests from "../Routes/admin/tests";
import Depart from "../Routes/admin/departments";
import Patients from "../Routes/admin/patients";
import Users from "../Routes/admin/users";
import Register from "../Routes/admin/New_user";
import Patient from "../Routes/admin/patient";
import Payments from "../Routes/admin/payments";
import Addresses from "../Routes/admin/addresses";
import User from "../Routes/admin/user";
import NotFound from "../components/404";

class Admin extends Component {
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
            <Route path="/tests" exact component={Tests} />
            <Route path="/departments" exact component={Depart} />
            <Route path="/patients" exact component={Patients} />
            <Route path="/users" exact component={Users} />
            <Route path="/register" exact component={Register} />
            <Route path="/payments" exact component={Payments} />
            <Route path="/patient_details" exact component={Patient} />
            <Route path="/addresses" exact component={Addresses} />
            <Route path="/user_details" exact component={User} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Admin;
