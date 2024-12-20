import User from "../models/user.js";
export const register = async (req, res) => {
  const newUser = req.body({
    name,
    email,
    password,
  });
  if (newUser) {
    if (req.email === email) {
      res.status(401).json({
        message: "Email Id already exists",
      });
    } else {
      const user = await User.create({
        name,
        email,
        password,
      });
      await user.save();
      res.status(201).json({
        message: "user created successfully!!",
      });
    }
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email !== NULL && password !== NULL) {
      if (req.email === email && req.password === password) {
        res.status(200).json({
          message: "successfully login",
        });
      } else {
        res.status(501).json({
          message: "Invalid Information!!",
        });
      }
    }
  } catch (err) {
    res.status(409).json({
      message: "Server Error!!",
    });
  }
};
