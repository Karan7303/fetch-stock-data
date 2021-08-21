const express = require("express");
const User = require("../../model/users.js");

const router = express.Router();

router.post("/", (req, res) => {
  User.find(
    { firstname: req.body.firstname },
    "password",
    function (err, result) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      let msg;
      if (result.length > 0) {
        if (result[0].password === req.body.pass) {
          msg = "Login Successfull";
        } else {
          msg = "Username and/or Password worng!!";
        }
      } else msg = req.body.firstname + " does not exist";
      res.json(msg);
    }
  );
});
module.exports = router;
