const Environmental = require("../../models/Environmental");

//update environment
const adminEditEnvironment = async (req, res) => {
  const { status } = req.body;

  const { id: environmentId } = req.params;
  const environmentExist = await Environmental.findOne({ _id: environmentId });
  if (!environmentExist) {
    return res
      .status(404)
      .json({ msg: `Accident with id: ${environmentId} not found` });
  }

  environmentExist.status = status;

  const user = await environmentExist.save();

  return res
    .status(201)
    .json({ msg: `Environment Incident update successful`, user });
};

//get single environment
const singleEnvironment = async (req, res) => {
  const { id: environmentId } = req.params;
  const environmentExist = await Environmental.findOne({
    _id: environmentId,
  }).populate("user");
  if (!environmentExist) {
    return res
      .status(404)
      .json({ msg: `Accident with id: ${environmentId} not found` });
  }

  const getEnvironment = await Environmental.find({ _id: environmentId });

  return res.status(201).json({ msg: `Successfully updated`, getEnvironment });
};

//get Environment
const getEnvironment = async (req, res) => {
  const environment = await Environmental.find().populate("user");
  return res.status(201).json({ environment, length: environment.length });
};

//delete environment incident
const deleteEnvironment = async (req, res) => {
  const { id: environmentId } = req.params;
  const environmentExist = await Environmental.findOne({ _id: environmentId });
  if (!environmentExist) {
    return res
      .status(404)
      .json({ msg: `Environment with id: ${environmentId} not found` });
  }

  await Environmental.findByIdAndDelete({ _id: environmentId });

  return res.status(201).json({ msg: `Successfully deleted` });
};

const environmentStatus = async (req, res) => {
  const statusId = req.params.id;
  const status = await Environmental.findByIdAndUpdate(statusId, req.body, {
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
  adminEditEnvironment,
  deleteEnvironment,
  singleEnvironment,
  getEnvironment,
  environmentStatus,
};
