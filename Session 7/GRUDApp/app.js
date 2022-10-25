const express = require("express");
const app = express();
const PORT = 5000;




const articles = [
  {
    // id: Math.random().toFixed(2),
    id:1,
    title: "Latest Technogies",
    author: "Mark",
    timeRequired: "2 minutes",
    description: "This is an article for latest technologies for example - BlockChin, IOT"
  },
    {
    // id: Math.random().toFixed(2),
    id:2,
    title: "Latest Technogies",
    author: "Mark",
    timeRequired: "2 minutes",
    description: "This is an article for latest technologies for example - BlockChin, IOT"
  }
]

app.get("/", (req, res)=>{
  res.redirect("/api/vi/");
})


app.get("/api/vi/", (req,res) =>{
  res.send("ENDPOINTS");
})

app.get("/api/vi/posts", (req, res)=>{
  return res.status(200).json({
    message: "",
    data: articles
  })
})

app.get("/api/v1/posts/:postId", (req, res)=>{
  const id = req.params.postId;
  console.log(id, "ID")
})

app.listen(PORT, () => {
  console.log(`Sever running at port ${PORT}`);
})