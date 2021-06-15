import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import UsersApi from "../api/users";
import Image from "../assets/doctor.png";
import Logo from "../assets/logo_hospital.png";
import { Base64 } from "js-base64";
//design
import "./login.css";

function Login() {
  const [user, setUser] = useState({ username: "", password: "", _cp: true });
  const handleClick = async (e) => {
    const res = await UsersApi.login({
      username: user.username,
      password: user.password,
    });
    if (res.status === false) {
      setUser({ ...user, _cp: false });
      return;
    } else {
      const data = Base64.encode(JSON.stringify(res.user));
      localStorage.setItem("token", data);
      window.location.replace("/");
    }
  };
  return (
    <div
      style={{ width: "100%", height: "100%", backgroundColor: "white" }}
      className="m-ctr"
    >
      <div className="ctr">
        <img
          alt="Hospital"
          src={Logo}
          height="120px"
          width="150px"
          style={{ objectFit: "cover" }}
        />
        <div
          className="header"
          style={{
            margin: "15px 0px",
          }}
        >
          Teaching Hospital
        </div>
        <div className="loginCtr">
          <TextField
            name="username"
            variant="standard"
            label="Username"
            helperText={!user._cp ? "Incorrect Username Or Password" : ""}
            error={!user._cp}
            onChange={(e) => {
              setUser({ ...user, username: e.target.value });
            }}
            fullWidth
            required
            style={{
              width: "250px",
              display: "block",
              margin: "15px 0px",
            }}
          />
          <TextField
            name="password"
            variant="standard"
            helperText={!user._cp ? "Incorrect Username Or Password" : ""}
            label="Password"
            required
            error={!user._cp}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
            fullWidth
            style={{
              display: "block",
              margin: "50px 0px",
            }}
          />
        </div>
        <div className="submitCtr">
          <Button
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginRight: 10 }}
            onClick={handleClick}
          >
            Login
            <span style={{ fontSize: "17.5px", marginLeft: "10px" }}>
              <i className="las la-sign-in-alt"></i>
            </span>
          </Button>
        </div>
      </div>
      <img src={Image} className="img" alt="Hospital" />
    </div>
  );
}

export default Login;
