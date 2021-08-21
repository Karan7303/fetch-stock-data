const express = require("express");
const User = require("../../model/users.js");

const router = express.Router();

router.post("/", (req, res) => {
  const user = new User({
    firstname: req.body.firstname,
    password: req.body.pass,
    age: req.body.Age,
    email: req.body.email,
  });
  user.save();
});
module.exports = router;
