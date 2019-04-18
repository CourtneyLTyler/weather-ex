const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.json({ Court: 'Unicourt'});
   }
);

module.exports = router;