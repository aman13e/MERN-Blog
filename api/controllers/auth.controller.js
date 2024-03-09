import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/err.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    password === "" ||
    username === "" ||
    email === ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || password === "" || email === "") {
    next(errorHandler(400, "All fields are required"));
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return next(errorHandler(404, "User not found"));
    }

    const isMatch = bcryptjs.compareSync(password, user.password);

    if (!isMatch) {
      return next(errorHandler(401, "Invalid Password"));
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    const { password: pwd, ...others } = user._doc;
    res
      .status(200)
      .cookie("access_token", token, { httpOnly: true })
      .json({ ...others });
  } catch (error) {
    next(error);
  }
};
