const userModel = require("../models/userModel");

module.exports.register = async (req, res) => {
  const { name } = req.query;

  try {
    if (!name) {
      return res.status(401).json({success:false,error: "Name is required" });
    }

    const newUser = new userModel({
      name,
    });

    console.log(newUser)

    await newUser.save();
    res.status(201).json({ success: true, message: `Hello, ${newUser.name} Welcome to Younglabs` });
  } catch (error) {
    res.status(400).json({ success: false, message: "Error to receive name", error: error.message });
  }
};
