const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    console.debug(req.body)
    const user = await User.create({
      age: req.body.age,
      name: req.body.name,
      email: req.body.email,
    });
    res.status(201).json({
      user,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.getAllUser = async (req, res) => {
  const users = await User.find();

  res.status(200).json({
    users,
  });
};
