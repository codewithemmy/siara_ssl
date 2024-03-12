const Incident = require("../../models/Incident");

//update incident
const updateIncident = async (req, res) => {
  const { status } = req.body;

  const { id: incidentId } = req.params;
  const incidentExist = await Incident.findOne({ _id: incidentId });
  if (!incidentExist) {
    return res
      .status(404)
      .json({ msg: `Incident with id: ${incidentId} not found` });
  }

  incidentExist.status = status;

  const user = await incidentExist.save();

  return res.status(200).json({ msg: `Incident update successful`, user });
};

//get single incident
const getSingleIncident = async (req, res) => {
  const { id: incidentId } = req.params;
  const incident = await Incident.find({ _id: incidentId }).populate("user");
  if (!incident) {
    return res
      .status(404)
      .json({ msg: `Incident with id: ${incidentId} not found` });
  }

  return res.status(200).json({ msg: incident });
};

//get incident
const getIncident = async (req, res) => {
  const incident = await Incident.find().populate("user");
  if (!incident) {
    return res.status(404).json({ msg: `Incident not found` });
  }

  return res.status(200).json({ msg: incident });
};

//delete incident
const deleteIncident = async (req, res) => {
  const { id: incidentId } = req.params;
  const incidentExist = await Incident.findOne({ _id: incidentId });
  if (!incidentExist) {
    return res
      .status(404)
      .json({ msg: `incident with id: ${incidentId} not found` });
  }

  await Incident.findByIdAndDelete({ _id: incidentId });

  return res.status(200).json({ msg: `Successfully deleted` });
};

const incidentStatus = async (req, res) => {
  const statusId = req.params.id;
  const status = await Incident.findByIdAndUpdate(statusId, req.body, {
    new: true,
    runValidators: true,
  });

  if (!status) {
    return res.status(400).json({ msg: `unable to update status` });
  }
  return res.status(200).json({ msg: "updated successful", status });
};

module.exports = {
  updateIncident,
  getSingleIncident,
  getIncident,
  deleteIncident,
  incidentStatus,
};
