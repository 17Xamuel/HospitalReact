const express = require("express");
const conn = require("./db/db");
const uuid = require("uuid");
const bcrypt = require("bcryptjs");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());

app.post("/api/user/new", (req, res) => {
  console.log(req.body);
});
app.post("/api/user/login", (req, res) => {});
app.get("/api/users", (req, res) => {
  conn.query("select * from users_table", (err, result) => {
    if (err) {
    } else {
      res.send(result);
    }
  });
});
app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}.....`);
});
