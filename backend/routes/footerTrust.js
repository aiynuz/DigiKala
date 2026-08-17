const express = require("express");
const router = express.Router();

const footerTrust = require("../data/footerTrust.json");

router.get("/", (req, res) => {
  res.json(footerTrust);
});

module.exports = router;