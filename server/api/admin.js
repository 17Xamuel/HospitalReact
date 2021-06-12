const router = require("express").Router();
const conn = require("../database/db");

router.post("/login", (req, res) => {
  console.log("Req", req.body);
  res.send({ status: false });
});

module.exports = router;
