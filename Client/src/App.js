import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./app.css";
import "line-awesome/dist/line-awesome/css/line-awesome.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Dashboard from "./Routes/Dashboard";
import NewPatient from "./Routes/NewPatient";
import Registered from "./Routes/Registered";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <input type="checkbox" id="nav-toggle" />
          <Nav />
          <div className="main-content">
            <Header />
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/new" exact component={NewPatient} />
              <Route path="/registered" exact component={Registered} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
