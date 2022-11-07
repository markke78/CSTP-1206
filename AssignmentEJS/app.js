const express = require('express')
const bodyParser = require('body-parser');
const { json } = require('body-parser');
const app = express();
const PORT = 5000;

app.set("view engine", "ejs");

const urlencodedParser = bodyParser.urlencoded({extend:false})

app.use(express.static(__dirname + '/views'));


let today = new Date().toISOString().slice(0, 10)
const members = {name: "Mark", email: "mark@gmail.com", phone: "604-123-1234", joinDate: today};
const socialMedia =[
  {name: "facebook", img: "./pictures/socialMedia/facebook.png", href :"http://www.facebook.com"},
  {name: "instagram", img: "./pictures/socialMedia/instagram.png", href :"http://www.instagram.com"},
  {name: "twitter", img: "./pictures/socialMedia/twitter-icon-12.png", href :"http://www.twitter.com"},
  {name: "youtube", img: "./pictures/socialMedia/YouTube.png", href :"http://www.youtube.com"}
];


app.get("/", (req, res)=>{
  res.render("index", {members, socialMedia})
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