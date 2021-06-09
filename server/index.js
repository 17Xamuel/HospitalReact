const express = require("express");
const conn = require("./database/db");
const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.static("public", { extensions: ["html", "htm"] }));
app.use("api/user/doctor/", require("./api/doctor"));
app.use("/api/user/receptionist/", require("./api/receptionist"));

app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}....`);
});
