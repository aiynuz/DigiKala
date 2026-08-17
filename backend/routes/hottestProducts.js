const express = require("express");
const router = express.Router();

const hottestProducts = require("../data/hottestProducts.json");

router.get("/", (req, res) => {
  res.json(hottestProducts);
});

module.exports = router;