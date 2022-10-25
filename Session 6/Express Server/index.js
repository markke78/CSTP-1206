const express = require('express');

const app = express();
const PORT = 4000;
const student = [];

app.get('/', (req, res)=>{
    res.send("Welcome to student APIs!");
})

app.get('/students', (req, res)=>{
    // For get requests we give 200 success response
    // const data = res.status(200);
    // return data.json(student);
    return res.status(200).json(student);

})

// We are trying to post students data to the server
app.post('/students', (req, res) => {
    const studentData = req.body;
    student.push(studentData);

    // 201 is used when you are trying to create a resource and send sucess response
    return res.status(201).json(student);
})



app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})