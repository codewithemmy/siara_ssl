const Accident = require("../../models/Accident");

//update Accident
const adminEditAccident = async (req, res) => {
  const { status } = req.body;

  const { id: accidentId } = req.params;
  const accidentExist = await Accident.findOne({ _id: accidentId }).populate(
    "user"
  );
  if (!accidentExist) {
    return res
      .status(404)
      .json({ msg: `Accident with id: ${accidentId} not found` });
  }

  accidentExist.status = status;

  const user = await accidentExist.save();

  return res
    .status(201)
    .json({ msg: `accident Incident update successful`, user });
};

//get single Accident
const singleAccident = async (req, res) => {
  const { id: accidentId } = req.params;
  const accidentExist = await Accident.findOne({ _id: accidentId }).populate(
    "user"
  );
  if (!accidentExist) {
    return res
      .status(404)
      .json({ msg: `Accident with id: ${accidentId} not found` });
  }

  const getAccident = await Accident.find({ _id: accidentId });

  return res.status(201).json({ msg: `Successfully updated`, getAccident });
};

//get Accident
const getAccident = async (req, res) => {
  const accident = await Accident.find({}).populate("user");
  return res.status(201).json({ accident, length: accident.length });
};

//delete accident
const deleteAccident = async (req, res) => {
  const { id: accidentId } = req.params;
  const accidentExist = await Accident.findOne({ _id: accidentId });
  if (!accidentExist) {
    return res
      .status(404)
      .json({ msg: `Environment with id: ${accidentId} not found` });
  }

  await Accident.findByIdAndDelete({ _id: accidentId });

  return res.status(201).json({ msg: `Successfully deleted` });
};

const accidentStatus = async (req, res) => {
  const statusId = req.params.id;
  const status = await Accident.findByIdAndUpdate(statusId, req.body, {
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
  adminEditAccident,
  singleAccident,
  getAccident,
  deleteAccident,
  accidentStatus,
};
