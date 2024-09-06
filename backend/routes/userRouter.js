const {
  signupUser,
  loginUser,
 
} = require("../controllers/user.controller");

const express = require("express");
const userRouter = express.Router();

userRouter.post("/login", loginUser); // login User
userRouter.post("/signup", signupUser); // signup User

module.exports = userRouter;