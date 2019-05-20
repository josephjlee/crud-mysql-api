const express = require("express");

const router = express.Router();

// @route   GET api/users/test
// @desc    Test the api
// @access  Public
router.get("/test", (req, res) => {
  res.status(200).json({ msg: "Working fine..." });
});

// @route   GET api/users
// @desc    Show all the users
// @access  Public
router.get("/", (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM users", (err, users) => {
      // Case any exception return error
      if (err) return res.status(400).json(err);

      // Show JSON list of users
      res.json(users);
    });
  });
});

// @route   POST api/users
// @desc    Insert new user
// @access  Public
router.post("/", (req, res) => {
  const newUser = req.body;

  if (!newUser.name || !newUser.age || !newUser.email)
    return res.status(400).json({ error: "All the fields are required." });

  req.getConnection((err, conn) => {
    conn.query("INSERT INTO users SET ?", newUser, (err, result) => {
      // Case any exception return error
      if (err) return res.status(400).json(err);

      // Show JSON user inserted
      res.json(newUser);
    });
  });
});

module.exports = router;
