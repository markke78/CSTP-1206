const express = require("express");
const router = express.Router();
const UserController = require("../controller/user");

router.get("/", UserController.getAllUsers);

router.post("/register", UserController.registerUser);

router.post("/login", UserController.loginUser);

router.get("/:id", UserController.getUserById);

router.put("/:id", UserController.updateUser);

router.delete("/:id", UserController.deleteUser);

module.exports = router;



