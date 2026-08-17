const express = require("express");
const router = express.Router();


const footerBrands = require("../data/footerBrands.json");


router.get("/", (req,res)=>{

    res.json(footerBrands);

});


module.exports = router;