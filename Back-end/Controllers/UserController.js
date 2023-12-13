// UserController.js
import { db } from "../Models/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
const User = db.Users;

dotenv.config();

const addUser = async (req, res) => {
  let info = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    role: req.body.password,
  };

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(info.password, 10);
    info.password = hashedPassword;

    const user = await User.create(info);
    const token = jwt.sign({ id: user.id }, process.env.SECRET_STRING, {
      expiresIn: process.env.LOGIN_EXPIRES,
    });
    res.status(200).json({
      status: "success",
      token: token,
      data: user,
    });
  } catch (error) {
    console.error("Error creating User:", error);
    res.status(500).json(error.message);
  }
};

// 2. get all Users
const getAllUser = async (req, res) => {
  try {
    // Fetch all users
    let users = await User.findAll();

    // Check if there are no users
    if (users.length === 0) {
      res.status(404).json({ message: "No users in the database" });
      return;
    }

    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send(error.message);
  }
};

// 3. get single User
const getOneUser = async (req, res) => {
  let id = req.params.id;
  let user = await User.findOne({
    where: { id: id },
  });
  res.status(200).json(user);
};

// 4. update User
const updateUser = async (req, res) => {
  let id = req.params.id;
  const user = await User.update(req.body, { where: { id: id } });
  res.status(200).json(user);
};

// 5. delete User
const deleteUser = async (req, res) => {
  let id = req.params.id;
  await User.destroy({ where: { id: id } });
  res.status(200).jso("User deleted");
};

// const login = async (req, res, next) => {
//   const username = req.body.username;
//   const password = req.body.password; 
 
//   const user = await User.findOne({ where: { username: username } });
  
  
//   if (!user || !(await User.comparePassword(password, user.password))) {
//     const error = res
//       .status(401)
//       .json({ message: "please enter a correct username or password" });
//     return next(error);
//   }
//   const token = jwt.sign({ id: user.id,  username: user.username}, process.env.SECRET_STRING, {
//     expiresIn: process.env.LOGIN_EXPIRES,
//   });
//   res.status(200).json({ message: "success", token });
// };
export { addUser, getAllUser, getOneUser, updateUser, deleteUser };
