import React, { Component } from "react";
import user_logged_in from "./app_config";
import Receptionist from "./users_routes/reception";
import Accounts from "./users_routes/accounts";
import Doctor from "./users_routes/doctor";
import Lab from "./users_routes/lab";
import Login from "./components/Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: user_logged_in.user,
    };
  }
  render() {
    if (user_logged_in.user === "receptionist") {
      return <Receptionist />;
    } else if (user_logged_in.user === "accounts") {
      return <Accounts />;
    } else if (user_logged_in.user === "doctor") {
      return <Doctor />;
    } else if (user_logged_in.user === "lab") {
      return <Lab />;
    } else {
      return <Login />;
    }
  }
}

export default App;
