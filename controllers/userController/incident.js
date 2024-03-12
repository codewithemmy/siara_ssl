const Incident = require("../../models/Incident");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

//post incident
const postIncident = async (req, res) => {
  const {
    state,
    localGovernmentArea,
    street,
    date,
    time,
    reportDetails,
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

  const user = await Incident.create({
    user: req.user.userId,
    state,
    localGovernmentArea,
    street,
    date,
    time,
    reportDetails,
    image: result.secure_url,
    emergencyResponse,
    emergencyResponseNeeded,
    reportersDetails,
    phoneNumber,
  });

  return res.status(201).json({ msg: `Incident post successful` });
};
//export modules
module.exports = {
  postIncident,
};
