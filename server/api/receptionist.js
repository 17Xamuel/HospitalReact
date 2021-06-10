const router = require("express").Router();
const conn = require("../database/db");
const uuid = require("uuid");

router.post("/new_patient", async (req, res) => {
  console.log(req.body);
  setTimeout(() => {
    res.send({ data: "Patient Added", status: true });
  }, 3000);
});
router.post("/new_patient/test", async (req, res) => {
  console.log(req.body);
  let {
    surname,
    first_name,
    dob,
    gender,
    phone_contact,
    email_address,
    pt_occupation,
    education_level,
    marital_status,
    religion,
    tribe,
  } = req.body;
  let patientId = uuid.v4();
  conn.query(
    `SELECT * FROM patient_details_tbl WHERE patient_details_id = '${patientId}'`,
    (err1, res1) => {
      if (err1) throw err1;
      if (res1.length == 0) {
        conn.query(
          `INSERT INTO patient_details_tbl SET ?`,
          {
            patient_details_id: patientId,
            first_name: first_name,
            sur_name: surname,
            phone_number: phone_contact,
            DOB: dob,
            gender: gender,
            patient_email: email_address,
            marital_status: marital_status,
            occupation: pt_occupation,
            education_level: education_level,
          },
          (err_inserting, res_inserting) => {
            if (err_inserting) throw err_inserting;
            res.send({ data: "Patient Added", status: true });
          }
        );
      } else {
        res.send({ data: "Patient Already Exists" });
      }
    }
  );
});

module.exports = router;
