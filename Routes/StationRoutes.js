const express = require("express");
const router = express.Router();
const fs = require("fs");
const axios = require('axios');

let key;
// unsafe - normally would not include a secret key within the code
fs.readFile("secrets.json", (err, data) => {
    if(err) throw err;
    // this takes the binary and converts
    console.log(data.toString());
    key = JSON.parse(data.toString());
});

router.get("/", (req, res) => {
    // res.json(key.APIKey);
    const header = `Authorization: Bearer ${key.APIKey}`;
    axios.get('https://wx.wearebraid.com/stations', { headers: { header } }).then(ret => {
        console.log(ret);
        res.json(ret.data);
    })
   }
);

module.exports = router;

