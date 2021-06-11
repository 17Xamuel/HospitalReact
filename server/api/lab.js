const router = require("express").Router();
const conn = require("../database/db");

router.post("/new_sample_collection", async (req, res) => {
  let { patient_number, specimens, reason } = req.body;
  conn.query(
    `INSERT INTO lab_sample_collection SET ?`,
    {
      user_id: 1,
      patient_id: patient_number,
      specimen_taken: specimens,
      reason: reason,
      date: new Date(),
    },
    (err1, res1) => {
      if (err1) {
        console.log(err1);
        res.send({ data: "An Error Occured.Try Again", status: false });
      } else {
        res.send({ data: "Sample Collection Added.", status: true });
      }
    }
  );
});

router.post("/new_lab_report", async (req, res) => {
  let { patient_number, tests_made, results } = req.body;
  conn.query(
    `INSERT INTO lab_results SET ?`,
    {
      result_description: results,
      patient_id: patient_number,
      tests_made: tests_made,
      user_id: 1,
      date: new Date(),
    },
    (err1, res1) => {
      if (err1) {
        console.log(err1);
        res.send({ data: "An Error Occured. Try Again", status: false });
      } else {
        res.send({ data: "Lab Results Sent", status: true });
      }
    }
  );
});

module.exports = router;
