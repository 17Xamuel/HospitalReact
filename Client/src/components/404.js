import React, { Component } from "react";

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <h1>404</h1>
        <span>This Page Was Not Found On The Server</span>
      </>
    );
  }
}

export default NotFound;
