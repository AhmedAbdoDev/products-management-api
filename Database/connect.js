const mongoose = require("mongoose");

mongoose
  .connect(process.env.mongoose)
  .then((c) => {
    console.log("DataBase connected");
  })
  .catch((e) => {
    console.log(e);
  });
