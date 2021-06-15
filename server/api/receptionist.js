const router = require("express").Router();
const conn = require("../database/db");

function num(l) {
  var rc = "ABCDEF1234";
  var r = "";
  for (var i = 0; i < l; i++) {
    r += rc.charAt(Math.floor(Math.random() * rc.length));
  }
  let date = new Date();
  return (
    (date.getDate() < 10
      ? "0" + date.getDate().toString()
      : date.getDate().toString()) +
    (date.getMonth() < 10
      ? "0" + (date.getMonth() + 1).toString()
      : (date.getMonth() + 1).toString()) +
    r
  );
}

router.post("/new_patient", async (req, res) => {
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
    nk_surname,
    nk_first_name,
    nk_relationship,
    nk_address,
    nk_telephone,
    nk_occupation,
  } = req.body;

  let patient_num = num(3);

  conn.query(
    `INSERT INTO patient_details_tbl SET ?`,
    {
      first_name: first_name,
      sur_name: surname,
      phone_number: phone_contact,
      DOB: dob,
      gender: gender,
      patient_email: email_address,
      marital_status: marital_status,
      occupation: pt_occupation,
      education_level: education_level,
      religion: religion,
      tribe: tribe,
      village_id: village_id,
      patient_details_id: patient_num,
      date: new Date(),
    },
    (err2, res2) => {
      if (err2) {
        console.log(err2);
        res.send({
          data: "An Error Occurred. Try Again",
          status: false,
        });
      } else {
        conn.query(
          `INSERT INTO next_of_kin_tbl SET ?`,
          {
            next_of_kin_first_name: nk_first_name,
            next_of_kin_surname: nk_surname,
            next_of_kin_relationship: nk_relationship,
            next_of_kin_address: nk_address,
            next_of_kin_occupation: nk_occupation,
            next_of_kin_phone: nk_telephone,
            patient_id: patient_num,
          },
          (err3, res3) => {
            if (err3) {
              console.log(err3);
              res.send({
                data: "An Error Occurred. Try Again",
                status: false,
              });
            } else {
              res.send({
                data: "Patient Added Successfully",
                status: true,
              });
            }
          }
        );
      }
    }
  );
});

router.post("/new_patient_unit", async (req, res) => {
  let {
    muac,
    height,
    weight,
    bmi,
    z_score_weight,
    z_score_height,
    blood_pressure,
    blood_sugar,
    palliative_care,
    patient_classification,
    tobacco_use,
  } = req.body;

  conn.query(
    "INSERT INTO patient_units SET ?",
    {
      patient_id: 1,
      user_id: 2,
      muac: muac,
      weight: weight,
      height: height,
      bmi: bmi,
      z_score_height: z_score_height,
      z_score_weight: z_score_weight,
      blood_pressure: blood_pressure,
      blood_sugar: blood_sugar,
      palliative_care: palliative_care,
      tobacco_use: tobacco_use,
      patient_classification: patient_classification,
      created_at: new Date(),
    },
    (err1, res1) => {
      if (err1) {
        console.log(err1);
        res.send({ data: "An Error Occurred. Try Again", status: false });
      } else {
        res.send({ data: "Patient Units Added", status: true });
      }
    }
  );
});

module.exports = router;
