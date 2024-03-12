const Health = require("../../models/Health");

//update Health
const adminEditHealth = async (req, res) => {
  const { status } = req.body;

  const { id: healthId } = req.params;
  const healthExist = await Health.findOne({ _id: healthId });
  if (!healthExist) {
    return res
      .status(404)
      .json({ msg: `Health with id: ${healthId} not found` });
  }

  healthExist.status = status;

  const user = await healthExist.save();

  return res
    .status(201)
    .json({ msg: `Health Incident update successful`, user });
};

//get single Health
const singleHealth = async (req, res) => {
  const { id: healthId } = req.params;
  const healthExist = await Health.findOne({ _id: healthId }).populate("user");
  if (!healthExist) {
    return res
      .status(404)
      .json({ msg: `Health with id: ${healthId} not found` });
  }

  const getHealth = await Health.find({ _id: healthId });

  return res.status(201).json({ msg: `Successfully updated`, getHealth });
};

//get Health
const getHealth = async (req, res) => {
  const health = await Health.find().populate("user");
  return res.status(201).json({ health, length: health.length });
};

//delete environment incident
const deleteHealth = async (req, res) => {
  const { id: healthId } = req.params;
  const healthExist = await Health.findOne({ _id: healthId });
  if (!healthExist) {
    return res
      .status(404)
      .json({ msg: `Environment with id: ${healthId} not found` });
  }

  await Health.findByIdAndDelete({ _id: healthId });

  return res.status(201).json({ msg: `Successfully deleted` });
};

const healthStatus = async (req, res) => {
  const statusId = req.params.id;
  const status = await Health.findByIdAndUpdate(statusId, req.body, {
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
  adminEditHealth,
  deleteHealth,
  singleHealth,
  getHealth,
  healthStatus,
};
