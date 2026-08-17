const express = require("express");
const router = express.Router();

const bottomBanners = require("../data/bottomBanners.json");

router.get("/", (req, res) => {
  try {
    res.json(bottomBanners);
  } catch (error) {
    res.status(500).json({
      message: "Bottom Banners Error"
    });
  }
});

module.exports = router;