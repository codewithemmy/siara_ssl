const ServiceComplaints = require("../../models/ServiceComplaints");

//post complaints
const postServiceComplaints = async (req, res) => {
  const {
    state,
    localGovernmentArea,
    street,
    date,
    time,
    serviceDescription,
    narrateComplaints,
    serviceProvider,
    agreementServiceActivation,
    evidenceOfService,
    feedback,
    reportersDetails,
    phoneNumber,
  } = req.body;
  const user = await ServiceComplaints.create({
    user: req.user.userId,
    state,
    localGovernmentArea,
    street,
    date,
    time,
    serviceDescription,
    narrateComplaints,
    serviceProvider,
    agreementServiceActivation,
    evidenceOfService,
    feedback,
    reportersDetails,
    phoneNumber,
  });

  return res.status(201).json({ msg: `Service Complaints post successful` });
};

//export modules
module.exports = {
  postServiceComplaints,
};
