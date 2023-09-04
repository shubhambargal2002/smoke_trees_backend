const express = require("express");
const router = express.Router();
require("../db");
const User = require("../models/userSchema");

// register router
router.post("/user", async (req, res) => {
  const { userName, address } = req.body;

  if (!userName || !address) {
    return res
      .status(400)
      .json({ success, error: "Please filled the all fields" });
  }

  try {
    // create a new user
    let user = await User.create({
      userName: req.body.userName,
      address: req.body.address,
    });

    res.json({ user });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
