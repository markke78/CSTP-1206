const express = require("express");
const app = express();
const PORT = 5000;

let employeeList = [
{
id: 1,
name: "Mike",
email: "mike@company.ca",
employeeID: 100,
department: "IT",
Salary: 100000
},
{
id: 2,
name: "Daniel",
email: "daniel@company.ca",
employeeID: 101,
department: "HR",
Salary: 50000000
}
]


app.use(express.json());

app.get("/", (req, res) => {
  res.send("Working")
})

app.get("/employees", (req, res) => {
  return res.status(200).json({
    message:"Succesfully fetched the details",
    data: employeeList
  })
})

app.get("/employees/:department", (req, res) => {
  const departmentID = req.params.department;
  const department = employeeList.filter((employee) => employee.department === departmentID);

    if(department){
    return res.status(200).json({
      message: "Succesfully fetched the employeeList",
      data: department
    })
  }else{
    return res.status(404).json({
      message: "Department Doesn't Exist"
    })
  }
},)

app.get("/employees/id/:employeeID", (req, res) => {
  const id = +req.params.employeeID;
  const findPerson = employeeList.filter((employee) => employee.employeeID === id);

    if(findPerson){
    return res.status(200).json({
      message: "Succesfully fetched the article",
      data: findPerson
    })
  }else{
    return res.status(404).json({
      message: "Department Doesn't Exist"
    })
  }
},)


app.post("/employees", (req,res) => {
  const data =req.body;
  
  if(!data.name || !data.email || !data.employeeID || !data.department || !data.Salary){
    return res.status(500).json({
      message: "One of the parameters is missing"
    })
  }

  data.id = employeeList.length + 1;

  employeeList.push(data);

  return res.status(201).json({
    message:"Succesfully fetched the details",
    data: employeeList
  })

})

app.put("/employees/id/:employeeID", (req, res) => {
    const id = +req.params.employeeID;
    const postToUpdate = req.body;
    if(!postToUpdate.name || !postToUpdate.email || !postToUpdate.employeeID || !postToUpdate.department || !postToUpdate.Salary){
    return res.status(500).json({
      message: "One of the parameters is missing"
    })
  }
    employeeList = employeeList.map((post) => {
        if (post.employeeID == id) {
            post = postToUpdate;
        }

        return post;
    })



    return res.status(200).json({
        message: "Succesfully updated the article",
        data: employeeList
    })

})


app.delete("/employees/id/:employeeID", (req,res) => {

    const id = +req.params.employeeID;    
    const index = employeeList.findIndex((employee) => {
        if (employee.employeeID == id) {
            return true;
        }
    })

    if (index !== -1) {
        employeeList.splice(index, 1);

        return res.status(200).json({
            message: "Succesfully deleted the employee",
            data: employeeList
        })
    
    } else {
        return res.status(404).json({
            message: "Element you are trying to delete doesn't exist"
        })
    }

})

app.get("/employees/salaries/highest", (req,res) => {

  employeeList.sort((a,b) => {
    return b.Salary - a.Salary;
  })
 

    return res.status(201).json({
    message:"The employee list sorted by salary",
    data: employeeList})

})


app.listen(PORT, ()=>{
  console.log(`Server running at port ${PORT}`);
})