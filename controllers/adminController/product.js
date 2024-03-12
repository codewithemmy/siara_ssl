const Product = require("../../models/Product");

//update Product
const updateProduct = async (req, res) => {
  const { status } = req.body;

  const { id: productId } = req.params;
  const productExist = await Product.findOne({ _id: productId });
  if (!productExist) {
    return res
      .status(404)
      .json({ msg: `Product with id: ${productId} not found` });
  }

  productExist.status = status;

  const user = await productExist.save();

  return res.status(200).json({ msg: `Product update successful`, user });
};

//get single Product
const getSingleProduct = async (req, res) => {
  const { id: productId } = req.params;
  const product = await Product.find({ _id: productId }).populate("user");
  if (!product) {
    return res
      .status(404)
      .json({ msg: `Product with id: ${productId} not found` });
  }

  return res.status(200).json({ msg: product });
};

//get Product
const getProduct = async (req, res) => {
  const product = await Product.find().populate("user");
  if (!product) {
    return res.status(404).json({ msg: `Product not found` });
  }

  return res.status(200).json({ msg: product });
};

//delete Product
const deleteProduct = async (req, res) => {
  const { id: productId } = req.params;
  const productExist = await Product.findOne({ _id: productId });
  if (!productExist) {
    return res
      .status(404)
      .json({ msg: `Product with id: ${productId} not found` });
  }

  await Product.findByIdAndDelete({ _id: productId });

  return res.status(200).json({ msg: `Successfully deleted` });
};

const productStatus = async (req, res) => {
  const statusId = req.params.id;
  const status = await Product.findByIdAndUpdate(statusId, req.body, {
    new: true,
    runValidators: true,
  });

  if (!status) {
    return res.status(400).json({ msg: `unable to update status` });
  }
  return res.status(200).json({ msg: "updated successful", status });
};

module.exports = {
  updateProduct,
  getSingleProduct,
  getProduct,
  deleteProduct,
  productStatus,
};
