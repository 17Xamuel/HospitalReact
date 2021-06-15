const router = require("express").Router();
const conn = require("../database/db");

router.post("/login", async (req, res) => {
  conn.query(
    `SELECT * FROM system_users WHERE user_name=? AND password=?`,
    [req.body.username, req.body.password],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ status: false });
      } else {
        result.length == 0
          ? res.send({})
          : res.send({ status: true, user: result[0] });
      }
    }
  );
});

router.post("/new_test", async (req, res) => {
  let { test_name, test_description, qty, amount } = req.body;

  conn.query(
    `SELECT * FROM tests_tbl WHERE test_name=?`,
    [test_name],
    (error, results) => {
      if (error) {
        console.log(error);
        res.send({ status: false });
      } else {
        results.length > 0
          ? res.send({ data: "Department Exists..." })
          : conn.query(
              `INSERT INTO tests_tbl SET ?`,
              {
                test_name: test_name,
                test_description: test_description,
                test_qty: parseInt(qty),
                test_amount: parseFloat(amount),
              },
              (err, result) => {
                if (err) {
                  console.log(err);
                  res.send({ status: false });
                } else {
                  res.send({ data: "Test Added Successfully", status: true });
                }
              }
            );
      }
    }
  );
});

router.post("/new_department", async (req, res) => {
  let { depart_name, department_description } = req.body;
  conn.query(
    `SELECT * FROM department_tbl WHERE department_name=?`,
    [depart_name],
    (err1, res1) => {
      if (err1) {
        console.log(err1);
        res.send({ data: "An Error Occured", status: false });
      } else {
        res1.length > 0
          ? res.send({ data: "Department Exists" })
          : conn.query(
              `INSERT INTO department_tbl SET ?`,
              {
                department_name: depart_name,
                department_description: department_description,
              },
              (err2, res2) => {
                if (err2) {
                  console.log(err2);
                  res.send({ status: false });
                } else {
                  res.send({ data: "Department Already Exists", status: true });
                }
              }
            );
      }
    }
  );
});

router.post("/new_user", async (req, res) => {
  let {
    surname,
    other_name,
    username,
    gender,
    phone_contact,
    email_address,
    role,
    department,
    password,
    confirm_password,
  } = req.body;
  conn.query(
    `SELECT * FROM system_users WHERE user_name = ?`,
    [username],
    (err1, res1) => {
      if (err1) {
        console.log(err1);
        res.send({ data: "An Error Occurred", status: false });
      } else {
        if (res1.length > 0) {
          res.send({ data: "Username Already Taken", status: false });
        } else {
          if (password !== confirm_password) {
            res.send({ data: "Passwords Do not Match", status: false });
          } else {
            if (password.length < 5) {
              res.send({
                data: "Password Should be atleast 5 characters",
                status: false,
              });
            } else {
              conn.query(
                `INSERT INTO system_users SET ?`,
                {
                  sur_name: surname,
                  other_name: other_name,
                  phone_number: phone_contact,
                  user_name: username,
                  email: email_address,
                  user_role: role,
                  department_id: parseInt(department),
                  gender: gender,
                  password: password,
                },
                (err2, res2) => {
                  if (err2) {
                    console.log(err2);
                    res.send({ status: false });
                  } else {
                    res.send({ data: "User Added Successfully", status: true });
                  }
                }
              );
            }
          }
        }
      }
    }
  );
});

module.exports = router;
