import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "../app.css";
import "line-awesome/dist/line-awesome/css/line-awesome.css";
import Dashboard from "../Routes/accounts/Dashboard";
import Payments from "../Routes/accounts/Payments";

class Accounts extends Component {
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
            <Route path="/payments" exact component={Payments} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Accounts;
