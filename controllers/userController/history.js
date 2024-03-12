const {
  Accident,
  Security,
  Incident,
  Health,
  Product,
  EmergencyResponse,
  Environmental,
  ServiceComplaints,
} = require("../../models/index");

const history = async (req, res) => {
  const accident = await Accident.find({ user: req.user.userId });
  const security = await Security.find({ user: req.user.userId });
  const incident = await Incident.find({ user: req.user.userId });
  const health = await Health.find({ user: req.user.userId });
  const product = await Product.find({ user: req.user.userId });
  const emergencyResponse = await EmergencyResponse.find({
    user: req.user.userId,
  });
  const environmental = await Environmental.find({ user: req.user.userId });
  const serviceComplaints = await ServiceComplaints.find({
    user: req.user.userId,
  });
  res.status(200).json({
    accident,
    security,
    incident,
    health,
    product,
    emergencyResponse,
    environmental,
    serviceComplaints,
  });
};

module.exports = { history };
