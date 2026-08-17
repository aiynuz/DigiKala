const express = require("express");

const router = express.Router();

const footerData = require("../data/footer.json");


router.get("/", (req, res) => {
  res.json(footerData);
});


module.exports = router;