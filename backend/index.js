const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

let app = express();

require("dotenv").config({
    path: "./config/config.env",
  });
let port = 5000 || process.env.PORT;
app.listen(port, () => {
  console.log(`http:\\localhost:${port}`);
});
