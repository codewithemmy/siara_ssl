const User = require("../../models/User");

//get user profile
const getProfile = async (req, res) => {
  const profile = await User.find();
  return res.status(200).json(profile);
};

//single profile
const getSingleProfile = async (req, res) => {
  const profile = await User.find({ _id: req.params.id });
  if (!profile) {
    return res.status(404).json({ msg: `user not found` });
  }
  res.status(200).json({ msg: `success`, profile });
};

module.exports = { getProfile, getSingleProfile };
