const { json } = require("express");
const express = require("express");
const app = express();
const PORT = 4000;

employees = [
  {
    name: "Daniel",
    employeeId: 100,
    email: "daniel@gmail.com",
    department:"IT"
  },
]

app.use(express.json());

app.get("/", (req, res)=>{
  res.redirect("/api/employee/")
})
app.get("/", (req, res) =>{
  res.send("Hello");
})

app.get("/api/employee/", (req, res)=>{
  res.send("employee information")
})

app.get("/api/employee/posts", (req, res)=>{
  return res.status(200).json({
    message:"Succesfully fetched the details",
    data:employees
  })
})

app.post("/api/employee/posts", (req, res) =>{
  const data = req.body;
  
  if(!data.name || !data.employeeId || !data.email || !data.department){
    return res.status(500).json({
      message: "One of the paramenters is missiong"
    })
  }

  employees.push(data);
  return res.status(201).json({
    message:"Succesfully created the employee",
    data:employees
  })
  
})

app.listen(PORT, ()=>{
  console.log(`Sever is running on port ${PORT}`);
})