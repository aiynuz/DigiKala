const express = require("express");
const router = express.Router();

const brands = require("../data/brands.json");

router.get("/", (req, res) => {
  try {
    res.json(brands);
  } catch (error) {
    res.status(500).json({
      message: "Brands Error"
    });
  }
});

module.exports = router;