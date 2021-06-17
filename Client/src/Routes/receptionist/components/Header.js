import React, { Component } from "react";
import Avatar from "../../../assets/africa.jpg";
import { Menu, MenuItem } from "@material-ui/core";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AnchorEl: null,
    };
  }
  handleOpenActions = (e) => {
    this.setState({ ...this.state, AnchorEl: e.currentTarget });
  };
  handleCloseActions = () => {
    this.setState({ ...this.state, AnchorEl: null });
  };
  render() {
    return (
      <>
        <header>
          <h2>
            <label htmlFor="nav-toggle">
              <span className="las la-bars"></span>
            </label>
            <span className="health_unit_name">Hospital Name</span>
          </h2>
          <div className="search-wrapper">
            <span className="las la-search"></span>
            <input type="search" name="" id="" placeholder="Search here" />
          </div>
          <div className="" style={{ display: "flex", alignItems: "center" }}>
            <div className="" style={{ fontSize: "42px", marginRight: 20 }}>
              <i className="las la-bell"></i>
            </div>
            <div
              className="user-wrapper"
              aria-controls="reception-actions"
              aria-haspopup="true"
              onClick={this.handleOpenActions}
              style={{ cursor: "pointer" }}
            >
              <img src={Avatar} alt="" width="40px" height="40px" />
              <div className="">
                <h4>John Doe</h4>
                <small>Doctor</small>
              </div>
            </div>
          </div>
        </header>

        <Menu
          id="reception-actions"
          anchorEl={this.state.AnchorEl}
          keepMounted
          open={Boolean(this.state.AnchorEl)}
          onClose={this.handleCloseActions}
        >
          <MenuItem onClick={this.handleCloseActions}>Profile</MenuItem>
          <MenuItem onClick={this.handleCloseActions}>Log Out</MenuItem>
        </Menu>
      </>
    );
  }
}

export default Header;
