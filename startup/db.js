const mongoose = require("mongoose");

module.exports = function () {
  const DB_URL = "mongodb+srv://mfs:mfs@cluster0.vm6sf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; 

  mongoose
    .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() => {
      console.log("Connected to DataBase...");
    })
    .catch((e) => {
      console.log("Unable to connect to DataBase");
    });
};
