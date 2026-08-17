const express = require("express");

const router = express.Router();

const bannersGrid = require("../data/bannersGrid.json");


router.get("/", (req, res) => {
    res.json(bannersGrid);
});


module.exports = router;