const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

app.set("view engine", "ejs");

const urlencodedParser = bodyParser.urlencoded({extend:false})

app.use(express.static(__dirname + '/views'));

app.get("/", (req, res)=>{
  res.render("index", {name: "Mark"})
})

app.get("/register", (req, res)=>{
    res.render("register")
})

let userInfo = [];
app.post("/register", urlencodedParser, (req, res)=>{
    userInfo.push(req.body);
    return res.status(201).json({
    message:"Succesfully fetched the details",
    data: userInfo
  })
})



app.listen(PORT, ()=>{
  console.log(`Server Running at port ${PORT}`);
})