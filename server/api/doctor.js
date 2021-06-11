const router = require("express").Router();
const conn = require("../database/db");

router.post("/new_clinical_info", async (req, res) => {
  console.log(req.body);
});

module.exports = router;
