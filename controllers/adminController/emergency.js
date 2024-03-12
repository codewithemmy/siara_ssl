const Emergency = require("../../models/emergencyReponse");

//update Emergency
const adminEditEmergency = async (req, res) => {
  const { status } = req.body;

  const { id: emergencyId } = req.params;
  const emergencyExist = await Emergency.findOne({ _id: emergencyId });
  if (!emergencyExist) {
    return res
      .status(404)
      .json({ msg: `Emergency with id: ${emergencyId} not found` });
  }

  emergencyExist.status = status;

  const user = await emergencyExist.save();

  return res
    .status(201)
    .json({ msg: `Emergency Incident update successful`, user });
};

//get single emergency
const singleEmergency = async (req, res) => {
  const { id: emergencyId } = req.params;
  const emergencyExist = await Emergency.findOne({ _id: emergencyId }).populate(
    "user"
  );
  if (!emergencyExist) {
    return res
      .status(404)
      .json({ msg: `Emergency with id: ${emergencyId} not found` });
  }

  const getEmergency = await Emergency.find({ _id: emergencyId });

  return res.status(201).json({ msg: `Successfully updated`, getEmergency });
};

//get Emergency
const getEmergency = async (req, res) => {
  const emergency = await Emergency.find().populate("user");
  return res.status(201).json({ emergency, length: emergency.length });
};

//delete environment incident
const deleteEmergency = async (req, res) => {
  const { id: emergencyId } = req.params;
  const emergencyExist = await Emergency.findOne({ _id: emergencyId });
  if (!emergencyExist) {
    return res
      .status(404)
      .json({ msg: `Environment with id: ${emergencyId} not found` });
  }

  await Emergency.findByIdAndDelete({ _id: emergencyId });

  return res.status(201).json({ msg: `Successfully deleted` });
};

const emergencyStatus = async (req, res) => {
  const statusId = req.params.id;
  const status = await Emergency.findByIdAndUpdate(statusId, req.body, {
    new: true,
    runValidators: true,
  });

  if (!status) {
    return res.status(400).json({ msg: `unable to update status` });
  }
  return res.status(200).json({ msg: "updated successful", status });
};

//export modules
module.exports = {
  adminEditEmergency,
  deleteEmergency,
  singleEmergency,
  getEmergency,
  emergencyStatus,
};
