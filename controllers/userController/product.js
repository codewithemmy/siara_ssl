const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const Product = require("../../models/Product");

//post Productd
const postProduct = async (req, res) => {
  const {
    state,
    localGovernmentArea,
    street,
    date,
    time,
    productType,
    brand,
    batchModelNumber,
    complaint,
    supplierPurchasedShop,
    dateOfPuchase,
    expiryDate,
    anonymous,
    phoneNumber,
  } = req.body;

  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: "file-upload",
    }
  );
  fs.unlinkSync(req.files.image.tempFilePath);

  const user = await Product.create({
    user: req.user.userId,
    state,
    localGovernmentArea,
    street,
    date,
    time,
    productType,
    brand,
    batchModelNumber,
    complaint,
    supplierPurchasedShop,
    dateOfPuchase,
    expiryDate,
    anonymous,
    phoneNumber,
    image: result.secure_url,
  });

  return res.status(201).json({ msg: `Productd post successful` });
};

//export modules
module.exports = {
  postProduct,
};
