const ServiceComplaints = require("../../models/ServiceComplaints");

//update ServiceComplaints
const updateServiceComplaints = async (req, res) => {
  const { status } = req.body;

  const { id: complaintsId } = req.params;
  const complaintExist = await ServiceComplaints.findOne({ _id: complaintsId });
  if (!complaintExist) {
    return res
      .status(404)
      .json({ msg: `ServiceComplaints with id: ${complaintsId} not found` });
  }

  complaintExist.status = status;

  const user = await complaintExist.save();

  return res
    .status(200)
    .json({ msg: `Service Complaints update successful`, user });
};

//get single ServiceComplaints
const getSingleServiceComplaints = async (req, res) => {
  const { id: complaintsId } = req.params;
  const complaints = await ServiceComplaints.find({ _id: complaintsId }).populate("user");
  if (!complaints) {
    return res
      .status(404)
      .json({ msg: `ServiceComplaints with id: ${complaintsId} not found` });
  }

  return res.status(200).json({ msg: complaints });
};

//get ServiceComplaints
const getServiceComplaints = async (req, res) => {
  const complaints = await ServiceComplaints.find().populate("user")
  if (!complaints) {
    return res.status(404).json({ msg: `Service Complaints not found` });
  }

  return res.status(200).json({ msg: complaints });
};

//delete ServiceComplaints
const deleteServiceComplaints = async (req, res) => {
  const { id: complaintsId } = req.params;
  const complaintExist = await ServiceComplaints.findOne({ _id: complaintsId });
  if (!complaintExist) {
    return res
      .status(404)
      .json({ msg: `ServiceComplaints with id: ${complaintsId} not found` });
  }

  await ServiceComplaints.findByIdAndDelete({ _id: complaintsId });

  return res.status(200).json({ msg: `Successfully deleted` });
};

const serviceComplaintsStatus = async (req, res) => {
  const statusId = req.params.id;
  const status = await ServiceComplaints.findByIdAndUpdate(statusId, req.body, {
    new: true,
    runValidators: true,
  });

  if (!status) {
    return res.status(400).json({ msg: `unable to update status` });
  }
  return res.status(200).json({ msg: "updated successful", status });
};

module.exports = {
  updateServiceComplaints,
  getSingleServiceComplaints,
  getServiceComplaints,
  deleteServiceComplaints,
  serviceComplaintsStatus,
};
