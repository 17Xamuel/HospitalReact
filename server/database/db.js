const mysql = require("mysql8");

const config = {
  host: "localhost",
  user: "root",
  password: "",
  database: "hospital_db_secure",
};

const conn = mysql.createConnection(config);
conn.connect((err) => {
  if (err) throw err;
  console.log("Database Connected....");
});

module.exports = conn;
