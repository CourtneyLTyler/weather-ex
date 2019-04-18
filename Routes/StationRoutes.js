const express = require("express");
const router = express.Router();
const fs = require("fs");

let key
// unsafe - normally would not include a secret key within the code
fs.readFile("secrets.json", (err, data) => {
    if(err) throw err;
    // this takes the binary and converts
    console.log(data.toString());
    key = JSON.parse(data.toString());
});


// curl "https://wx.wearebraid.com/{path}"
//   -H "Authorization: Bearer your_secret_key"

//   componentDidMount() {
//     axios.get('https://wx.wearebraid.com/stations').then(res => {
//       this.setState({ stations:
//       res })
//       console.log(this.state.stations)
//     })
//   }

  

router.get("/", (req, res) => {
    res.json(key.APIKey);
    

   }
);

module.exports = router;