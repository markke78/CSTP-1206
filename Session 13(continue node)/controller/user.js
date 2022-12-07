const User = require("../model/user");
const bcrypt = require("bcryptjs");

const registerUser = async(request, response) =>{
    const data = request.body;

    const encryptedPassword = await bcrypt.hash(data.password, 10);

    const newUser = new User({
        name: data.name,
        email: data.email,
        password: data.password
})

try{
  const output = await newUser.save();
  return response.status(201).json({
    message: "Succesfully created user",
    data: output
})

}catch(error){
  return response.status(500).json({
    message: "There was an error",
    error
})
}
}

const loginUser = async(request, response) =>{
  const data = request.body;

  let foundUser = await User.findOne({email: data.email});
  if(foundUser){
    const matchPassword = await bcrypt.compare(data.password, foundUser.password);
    if(matchPassword){
      return response.status(200).json({
        message: "Succesfully logged in",
        data: foundUser
      })
    }else{
      return response.status(401).json({
        message: "Invalid password"
      })
    }
  }else{
    return response.status(404).json({
      message: "User not found"
    })
  }
}



const getAllUsers = () =>{}

module.exports = {
    registerUser,
    loginUser,
    getAllUsers
}


