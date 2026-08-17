const express = require("express");
const router = express.Router();

const bestSellingProducts = require("../data/bestSellingProducts.json");

router.get("/", (req, res) => {
  res.json(bestSellingProducts);
});

module.exports = router;