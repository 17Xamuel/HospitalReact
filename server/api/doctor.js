const router = require("express").Router();
const conn = require("../database/db");

router.post("/new_clinical_info", async (req, res) => {
  let { patient_number, clinical_notes, therapy } = req.body;
  conn.query(
    `INSERT INTO clinical_tbl SET ?`,
    {
      patient_id: patient_number,
      clinical_notes: clinical_notes,
      therapy: therapy,
      user_id: 1,
      date: new Date(),
    },
    (err1, res1) => {
      if (err1) {
        console.log(err1);
        res.send({ data: "An Error Occured. Try Again", status: false });
      } else {
        res.send({ data: "Clinical Notes Added.", status: true });
      }
    }
  );
});

router.post("/new_diagnosis", async (req, res) => {
  let { patient_number, diagnosis, treatment_notes } = req.body;
  conn.query(
    `INSERT INTO diagnosis_tbl SET ?`,
    {
      patient_id: patient_number,
      treatment_notes: treatment_notes,
      diagnosis: diagnosis,
      user_id: 1,
      date: new Date(),
    },
    (err1, res1) => {
      if (err1) {
        console.log(err1);
        res.send({ data: "An Error Occured. Try Again", status: false });
      } else {
        res.send({ data: "Diagnosis Added.", status: true });
      }
    }
  );
});

router.post("/new_lab_request", async (req, res) => {
  let { patient_number, tests_required, specimens } = req.body;
  conn.query(
    `INSERT INTO lab_requests SET ?`,
    {
      patient_id: patient_number,
      test_required: tests_required,
      type_of_specimen: specimens,
      user_id: 1,
      date: new Date(),
    },
    (err1, res1) => {
      if (err1) {
        console.log(err1);
        res.send({ data: "An Error Occured. Try Again", status: false });
      } else {
        res.send({ data: "Lab Request Sent", status: true });
      }
    }
  );
});

router.post("/new_referral", async (req, res) => {
  let { patient_number, refer_to, reason } = req.body;
  conn.query(
    `INSERT INTO referrals_tbl SET ?`,
    {
      patient_id: patient_number,
      refer_to: refer_to,
      reason_for: reason,
      user_id: 1,
      refer_date: new Date(),
    },
    (err1, res1) => {
      if (err1) {
        console.log(err1);
        res.send({ data: "An Error Occured. Try Again", status: false });
      } else {
        res.send({ data: "Referral Submitted", status: true });
      }
    }
  );
});

module.exports = router;
