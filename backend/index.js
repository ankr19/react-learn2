const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const { connectionDB } = require("./database/db");
const apiRoutes = require('./routes/apiRoutes');
let app = express();

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("dotenv").config({
    path: "./config/config.env",
  });
let port = 5000 || process.env.PORT;
connectionDB()

app.use("/v1/api", apiRoutes);


app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
