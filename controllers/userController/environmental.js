const Environmental = require("../../models/Environmental");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

//post Environment
const postEnvironment = async (req, res) => {
  const {
    state,
    localGovernmentArea,
    street,
    date,
    time,
    reportDetails,
    previousOccurence,
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

  const user = await Environmental.create({
    user: req.user.userId,
    state,
    localGovernmentArea,
    street,
    date,
    time,
    reportDetails,
    image: result.secure_url,
    previousOccurence,
    emergencyResponseNeeded,
    reportersDetails,
    phoneNumber,
  });

  return res.status(201).json({ msg: `environmental post successful` });
};

//export modules
module.exports = {
  postEnvironment,
};
