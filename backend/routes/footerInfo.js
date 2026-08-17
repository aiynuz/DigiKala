const express = require("express");
const router = express.Router();

const footerInfo = require("../data/footerInfo.json");


router.get("/", (req,res)=>{

    res.json(footerInfo);

});


module.exports = router;