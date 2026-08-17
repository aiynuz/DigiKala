const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();


router.get("/", (req, res) => {

  const filePath = path.join(
    __dirname,
    "..",
    "data",
    "amazing.json"
  );


  fs.readFile(filePath, "utf8", (err, data) => {

    if (err) {

      return res.status(500).json({
        message: "Amazing Offers Error"
      });

    }


    res.json(JSON.parse(data));

  });


});


module.exports = router;