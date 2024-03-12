const Admin = require("../../models/Admin");

//register admin
const registerAdmin = async (req, res) => {
  const { email, password } = req.body;

  const emailAlreadyExists = await Admin.findOne({ email });

  if (emailAlreadyExists) {
    return res.status(400).json({ msg: `email already exist` });
  }

  const admin = await Admin.create({ email, password });

  res.status(201).json({
    msg: "Admin Successfully Created",
    admin,
  });
};

//login Admin
const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: `email or password cannot be empty` });
  }

  const admin = await Admin.findOne({ email });

  if (!admin) {
    return res.status(400).json({ msg: `Only Admin can login` });
  }

  const isPasswordCorrect = await admin.comparePassword(password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ msg: "Password is not valid" });
  }

  let token = admin.createJWT();

  res.status(200).json({
    msg: "Login Successful",
    token,
  });
};

//export modules
module.exports = {
  registerAdmin,
  loginAdmin,
};
