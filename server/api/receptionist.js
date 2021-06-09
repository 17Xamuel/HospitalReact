const router = require("express").Router();
const conn = require("../database/db");

router.post("/new_patient", (req, res) => {
  console.log(req.body);
  res.send({ data: "got" });
});

module.exports = router;
