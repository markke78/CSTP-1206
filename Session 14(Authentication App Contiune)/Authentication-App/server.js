const express = require("express");
const app = express();
const PORT = 4000;
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");

//We are using this so that we can use .env file because we want certain data to be confidential
require('dotenv').config();

//Parsing incoming values
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, (error) => {
    if (error) {
        console.error("There was an error", error);
    }else {
        console.log("Connected to the database");
    }
})

app.get("/", (req, res) => {
    return res.send("Endopoint are here!");
})

app.use('/api/v1/users', userRoutes)

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
})

