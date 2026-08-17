const express = require("express");
const router = express.Router();

const topBanners = require("../data/topBanners.json");

router.get("/", (req, res) => {
  try {
    res.json(topBanners);
  } catch (error) {
    res.status(500).json({
      message: "Top Banners Error"
    });
  }
});

module.exports = router;