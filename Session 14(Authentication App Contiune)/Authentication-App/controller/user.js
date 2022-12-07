const User = require("../model/user");
const bcrypt = require("bcryptjs");// This library is used to hash the password
const jwt = require("jsonwebtoken");// This library will help us give and verify access toker

const registerUser = async(request, response) => {
    const data = request.body;

    // We are hashing/encrypting the password base the data.password string and the number of rounds
    const encryptPassword = await bcrypt.hash(data.password, 10);

    const newUser = new User({
        name: data.name,
        email: data.email,
        password: encryptPassword
    });

    try{
        const output = await newUser.save();
        return response.status(201).json({
            message: "User created successfully",
            data: output
        });
    }catch(error){
        return response.status(500).json({
            message: "Error creating user",
            error
        });
    }
    
};

const loginUser = async(request, response) => {
    const data = request.body;

    let foundUser = await User.findOne({email: data.email});

    if(foundUser){
        // Then we will check for password

        // This will be either true or false
        const matchPassword = await bcrypt.compare(data.password, foundUser.password);

        if(matchPassword){

            //We are trying to create a token base on whcih the user will be able to interact with the app
            const accessToken = jwt.sign({
                email: foundUser.email,
                name: foundUser.name,
            },
            process.env.SECRET_KEY
            );
            // if password is correct
            return response.status(200).json({
                message: "User logged in successfully",
                accessToken
            });
        }else{
            // if password is incorrect
            return response.status(401).json({
                message: "Password is incorrect",
                data: null
            });
        }
    }else{
        // if user does not exist
        return response.status(401).json({
            message: "User donst not exist, please register",
            data: null
        });
    }
}

const getAllUsers = async (request, response) => {
    try{
        const data = await User.find();

        const filteredData = data.map((user) => {
            return {
                name: user.name,
                email: user.email,
                id: user._id,
                createdAt: user.createdAt
            }
        });

        return response.status(200).json({
            message: "User found successfully",
            filteredData
        });
        
    }catch(error){
        return response.status(500).json({
            message: "Error finding user",
            error
        });
    }
};



module.exports = {
    registerUser,
     loginUser, 
     getAllUsers
}
                        