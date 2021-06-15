const router = require("express").Router();
const conn = require("../database/db");

router.post("/login", async (req, res) => {
  conn.query(
    `SELECT * FROM system_users WHERE user_name = ? AND password = ?`,
    [req.body.username, req.body.password],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ status: false });
      } else {
        result.length == 0
          ? res.send({ status: false })
          : res.send({ status: true, user: result[0] });
      }
    }
  );
});

module.exports = router;
