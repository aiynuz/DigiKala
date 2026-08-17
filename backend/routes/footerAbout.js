const express = require("express");
const router = express.Router();

const footerAbout = require("../data/footerAbout.json");

router.get("/", (req, res) => {
  res.json(footerAbout);
});

module.exports = router;