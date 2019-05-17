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
  req.getConnection((error, conn) => {
    conn.query("SELECT * FROM users", (err, rows, fields) => {
      if (err) return res.status(400).json({ msg: "Something goes wrong" });
      else res.json(rows);
    });
  });
});

module.exports = router;
