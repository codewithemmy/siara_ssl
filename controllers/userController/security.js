const Security = require("../../models/Security");

//post complaints
const postSecurity = async (req, res) => {
  const { state, localGovernmentArea, street, date, time, reportDetails } =
    req.body;
  const user = await Security.create({
    user: req.user.userId,
    state,
    localGovernmentArea,
    street,
    date,
    time,
    reportDetails,
  });

  return res.status(201).json({ msg: `Security Incident successfully post` });
};

//export modules
module.exports = {
  postSecurity,
};
