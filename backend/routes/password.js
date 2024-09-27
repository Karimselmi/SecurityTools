const express = require("express");
const zxcvbn = require("zxcvbn");

const router = express.Router();

router.post("/check", (req, res) => {
  const { password } = req.body;
  const result = zxcvbn(password);
  res.json(result);
});

module.exports = router;
