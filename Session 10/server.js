const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, (error) => {
  if (error) {
    console.log("Error connecting to database");
  } else {
    console.log("Connected to database");
  }
})

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, ()=>{
  console.log(`Sever is running on port ${PORT}`);
})