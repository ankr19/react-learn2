const mongoose = require("mongoose");
let mongodb_url =
  "mongodb://localhost:27017?directConnection=true&retryWrites=true";
exports.connectionDB = async () => {
  let connect = await mongoose.connect(mongodb_url, {
    autoIndex: true,
  });
  console.log(`connected to db ${connect.connection.host}`);
};
