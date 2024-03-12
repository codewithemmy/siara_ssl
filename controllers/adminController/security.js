const Security = require("../../models/Security");

//update Security
const updateSecurity = async (req, res) => {
  const { status } = req.body;

  const { id: securityId } = req.params;
  const securityExist = await Security.findOne({ _id: securityId });
  if (!securityExist) {
    return res
      .status(404)
      .json({ msg: `Security with id: ${securityId} not found` });
  }

  securityExist.status = status;

  const user = await securityExist.save();

  return res.status(200).json({ msg: `Security update successful`, user });
};

//get single Security
const getSingleSecurity = async (req, res) => {
  const { id: securityId } = req.params;
  const security = await Security.find({ _id: securityId }).populate("user");
  if (!security) {
    return res
      .status(404)
      .json({ msg: `Security with id: ${securityId} not found` });
  }

  return res.status(200).json({ msg: security });
};

//get Security
const getSecurity = async (req, res) => {
  const security = await Security.find().populate("user");
  if (!security) {
    return res.status(404).json({ msg: `Security not found` });
  }

  return res.status(200).json({ msg: security });
};

//delete Security
const deleteSecurity = async (req, res) => {
  const { id: securityId } = req.params;
  const securityExist = await Security.findOne({ _id: securityId });
  if (!securityExist) {
    return res
      .status(404)
      .json({ msg: `Security with id: ${securityId} not found` });
  }

  await Security.findByIdAndDelete({ _id: securityId });

  return res.status(200).json({ msg: `Successfully deleted` });
};

const securityStatus = async (req, res) => {
  const statusId = req.params.id;
  const status = await Security.findByIdAndUpdate(statusId, req.body, {
    new: true,
    runValidators: true,
  });

  if (!status) {
    return res.status(400).json({ msg: `unable to update status` });
  }
  return res.status(200).json({ msg: "updated successful", status });
};

module.exports = {
  updateSecurity,
  getSingleSecurity,
  getSecurity,
  deleteSecurity,
  securityStatus,
};
