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
    conn.query("SELECT * FROM crud_users", (err, users) => {
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
    conn.query("INSERT INTO crud_users SET ?", newUser, (err, result) => {
      // Case any exception return error
      if (err) return res.status(400).json(err);

      // Show JSON user inserted
      res.json(newUser);
    });
  });
});

// @route   PUT api/users/:id
// @desc    Edit user
// @access  Public
router.put("/:id", (req, res) => {
  const user = {
    id: req.params.id,
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
  };

  req.getConnection((err, conn) => {
    conn.query(
      "UPDATE crud_users SET ? WHERE id = " + req.params.id,
      user,
      (err, result) => {
        // Case any exception return error
        if (err) return res.status(400).json(err);

        // Show JSON user inserted
        res.json(user);
      }
    );
  });
});

// @route   DELETE api/users/:id
// @desc    Delete user
// @access  Public
router.delete("/:id", (req, res) => {
  const user = { id: req.params.id };

  req.getConnection((err, conn) => {
    conn.query(
      "DELETE FROM crud_users WHERE id = " + req.params.id,
      user,
      (err, result) => {
        // Case any exception return error
        if (err) return res.status(400).json(err);

        // Show JSON user inserted
        res.json({ msg: `User ID: ${user.id} deleted with success!` });
      }
    );
  });
});

module.exports = router;
