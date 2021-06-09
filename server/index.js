const express = require("express");
// const conn = require("./db/db");
// const uuid = require("uuid");
const cors = require("cors");
// const bcrypt = require("bcryptjs");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.post("/api/user/receptionist/new_patient", (req, res) => {
  console.log(req.body);
  res.send({ data: "got" });
});
app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}.....`);
});
