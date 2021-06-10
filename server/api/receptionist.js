const router = require("express").Router();
const conn = require("../database/db");
const uuid = require("uuid");

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
    district,
    sub_county,
    parish,
    village,
    nk_surname,
    nk_first_name,
    nk_relationship,
    nk_address,
    nk_telephone,
    nk_occupation,
  } = req.body;

  let patientId = uuid.v4();
  conn.query(
    `SELECT * FROM patient_details_tbl WHERE patient_details_id = '${patientId}'`,
    (err1, res1) => {
      if (err1) {
        console.log(err1);
        res.send({ data: "An Error Occurred. Try Again", status: false });
      } else {
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
              religion: religion,
              tribe: tribe,
              district: district,
              subcounty: sub_county,
              village: village,
              parish: parish,
              patient_number: num(3),
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
                    patient_id: patientId,
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
        } else {
          res.send({ data: "Patient Already Exists" });
        }
      }
    }
  );
});

module.exports = router;
