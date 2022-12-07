const User = require("../model/user");
const bcrypt = require("bcryptjs");// This library is used to hash the password

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
            // if password is correct
            return response.status(200).json({
                message: "User logged in successfully",
                data: foundUser
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

// const getAllUsers = (request, response) => {
// };

module.exports = {
    registerUser,
     loginUser, 
    //  getAllUsers
}
                        