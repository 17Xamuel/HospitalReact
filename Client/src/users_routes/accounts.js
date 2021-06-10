import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "../app.css";
import "line-awesome/dist/line-awesome/css/line-awesome.css";

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
            {/* <Route path="/" exact component={Dashboard} /> */}
            {/* <Route path="/new" exact component={NewPatient} /> */}
            {/* <Route path="/registered" exact component={Registered} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Accounts;
