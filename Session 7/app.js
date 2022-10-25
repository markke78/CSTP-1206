const express = require("express");
const app = express();
const PORT = 4000;
const path = require('path');

const logger = (req, res, next)=>{
  console.log("I am inside this middleware!");
  next();
}

app.use((logger));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res)=>{
  res.send("Hello");
})

app.listen(PORT, ()=>{
  console.log(`Sever is running on port ${PORT}`)})