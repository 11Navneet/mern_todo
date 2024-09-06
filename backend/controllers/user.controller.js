const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = mongoose.model("User");
require("dotenv").config();

const signupUser = async (req, res) => {
  let { name, mail, password, mobileNo, role } = req.body;

  if (!name || !mail || !password) {
    return res.status(500).send({
      message: "Please enter the required user details !!",
    });
  }

  let isUserExist = await User.findOne({ mail: mail });

  if (isUserExist) {
    return res.status(500).send({
      message: "User already exist !!",
    });
  }

  password = await bcrypt.hash(password, 10);
  if (!password) {
    return res.status(500).send({
      message: "password not encrypted!!",
    });
  }

  let newUser = { name, mail, password, mobileNo, role };

  let user = new User(newUser);
  let userData = await user.save();

  if (!userData) {
    return res.status(500).send({
      message: "Error while adding a User !!",
    });
  }

  res.status(200).send({
    message: "User created successfully !!",
    data: userData,
  });
};

const loginUser = async (req, res) => {
  let { mail, password } = req.body;

  if (!mail || !password) {
    return res.send("please enter the required user details !!");
  }

  const userData = await User.findOne({ mail: mail });

  if (!userData) {
    return res.status(401).send({
      message: "Invalid Email or Password !!",
    });
  }

  const isValid = await bcrypt.compare(password, userData.password);

  if (!isValid) {
    return res.status(401).send({
      message: "Invalid Email or Password !!",
    });
  }

  const token = jwt.sign(
    {
      id: userData._id,
      name: userData.name,
      mail: userData.mail,
      role: userData.role,
    },
    process.env.JWT_SECRET_KEY
  );

  if (!token) {
    return res.status(500).send({
      message: "Token not generated !!",
    });
  }

  res.status(200).send({
    message: "User logged in successfully !!",
    token: token,
  });
};

module.exports = {
  loginUser,
  signupUser,
  getAllUser,
  getUser,
  updateUser,
  deleteUser,
};
