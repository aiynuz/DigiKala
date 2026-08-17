const express = require("express");

const router = express.Router();

const flashSale = require("../data/flashSale.json");


router.get("/",(req,res)=>{

    res.json(flashSale);

});


module.exports = router;