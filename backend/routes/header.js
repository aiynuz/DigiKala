const express = require("express");
const router = express.Router();

const headerData = require("../data/header.json");

router.get("/", (req, res) => {
  res.status(200).json(headerData);
});

module.exports = router;