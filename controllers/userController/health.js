const Health = require("../../models/Health");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

//post Health
const postHealth = async (req, res) => {
  const {
    state,
    localGovernmentArea,
    street,
    date,
    time,
    reportDetails,
    previousOccurence,
    details,
    age,
    sex,
    emergencyResponse,
    emergencyResponseNeeded,
    reportersDetails,
    phoneNumber,
  } = req.body;

  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: "file-upload",
    }
  );
  fs.unlinkSync(req.files.image.tempFilePath);

  const user = await Health.create({
    user: req.user.userId,
    state,
    localGovernmentArea,
    street,
    date,
    time,
    reportDetails,
    image: result.secure_url,
    previousOccurence,
    details,
    age,
    sex,
    emergencyResponse,
    emergencyResponseNeeded,
    reportersDetails,
    phoneNumber,
  });

  return res.status(201).json({ msg: `Health post successful` });
};

//export modules
module.exports = {
  postHealth,
};
