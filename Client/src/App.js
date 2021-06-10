import React, { Component } from "react";
import user_logged_in from "./app_config";
import Receptionist from "./users_routes/reception";
import Accounts from "./users_routes/accounts";

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
    } else if (user_logged_in.user === "receptionist") {
      return <Accounts />;
    }
  }
}

export default App;
