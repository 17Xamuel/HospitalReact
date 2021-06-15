import React, { Component } from "react";
import user from "./app_config";
import Receptionist from "./users_routes/reception";
import Accounts from "./users_routes/accounts";
import Doctor from "./users_routes/doctor";
import Lab from "./users_routes/lab";
import Admin from "./users_routes/admin";
import Login from "./components/Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user,
    };
  }

  render() {
    if (user.user.user_role === "receptionist") {
      return <Receptionist />;
    } else if (user.user.user_role === "accounts") {
      return <Accounts />;
    } else if (user.user.user_role === "doctor") {
      return <Doctor />;
    } else if (user.user.user_role === "lab") {
      return <Lab />;
    } else if (user.user.user_role === "admin") {
      return <Admin />;
    } else {
      return <Login />;
    }
  }
}

export default App;
