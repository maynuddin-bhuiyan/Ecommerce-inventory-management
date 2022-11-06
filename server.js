const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");

// database connection
mongoose.connect(process.env.DATABESE).then( () => {
    console.log("Database connection is successfu".red.bold)
})


// server
const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});