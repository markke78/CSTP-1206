const express = require("express");
const app = express();
const PORT = 4000;
const mongoose = require("mongoose");

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, (error) => {
    if (error) {
        console.error(`There was an error : ${error}` );
    } else {
        console.log("Connected to the database");
    }
})

app.get("/", (req, res) => {
    return res.send("ENDPOINTS are here!");
})

app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`);
})