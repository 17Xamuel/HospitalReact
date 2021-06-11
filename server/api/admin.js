const router = require("express").Router();
const conn = require("../database/db");

router.post("/login", (req, res) => {
  console.log("Req", req.body);
  res.send({ data: false });
});

module.exports = router;
