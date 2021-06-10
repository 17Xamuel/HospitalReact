const router = require("express").Router();
const conn = require("../database/db");

router.post("/new_payment", async (req, res) => {
  let { patient_number, amount, balance, payment_for } = req.body;
  conn.query(
    "INSERT INTO payments_tbl SET ?",
    {
      patient_id: patient_number,
      amount: parseFloat(amount),
      balance: parseFloat(balance),
      payment_for: "Tests and Consultation",
    },
    (err1, res1) => {
      if (err1) {
        console.log(err1);
        res.send({ data: "An Error Occured. Try Again", status: false });
      } else {
        res.send({ data: "Payment Added Successfully", status: true });
      }
    }
  );
});

module.exports = router;
