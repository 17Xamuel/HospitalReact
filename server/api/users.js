const router = require("express").Router();
const conn = require("../database/db");

router.get("/patients", async (req, res) => {
  setTimeout(() => {
    res.send([1, 2, 3, 4, 5, 6]);
  }, 4000);
});
router.get("/patients_this_month", async (req, res) => {
  setTimeout(() => {
    res.send([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  }, 4000);
});
router.get("/doctors_today", async (req, res) => {
  setTimeout(() => {
    res.send([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  }, 4000);
});
router.get("/pending_consultions", async (req, res) => {
  setTimeout(() => {
    res.send([1, 2, 3, 4]);
  }, 4000);
});

module.exports = router;
