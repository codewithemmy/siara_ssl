const User = require("../../models/User");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

const userImageUpload = async (req, res) => {
  const profileId = req.params.id;

  if (!profileId) {
    return res.status(400).json({ msg: `input id for params` });
  }

  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: "file-upload",
    }
  );

  fs.unlinkSync(req.files.image.tempFilePath);

  const user = await User.findByIdAndUpdate(
    { _id: profileId },
    {
      profileImage: result.secure_url,
    },
    { new: true }
  );

  if (!user) {
    return res.status(400).json({ msg: `unable to upload image` });
  }

  return res.status(201).json({ msg: `image upload successful` });
};

//get user profile
const getProfile = async (req, res) => {
  const profile = await User.find({ _id: req.user.userId });
  return res.status(200).json(profile);
};

//update user profile
const updateProfile = async (req, res) => {
  const profileId = req.user.userId;
  const profile = await User.find({ _id: profileId });
  if (!profile) {
    return res.status(404).json({ msg: `id not found` });
  }

  const update = await User.findByIdAndUpdate({ _id: profileId }, req.body, {
    new: true,
    runValidators: true,
  });

  return res.status(200).json(update);
};

module.exports = { getProfile, updateProfile, userImageUpload };
