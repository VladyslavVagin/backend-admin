const { ctrlWrapper } = require("../helpers");
const { Product } = require("../models/product.js");

const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

const addProduct = async (req, res) => {
  const { name } = req.body;
  const existingProduct = await Product.findOne({ name });
  if (existingProduct) {
    res.status(400).json({ message: "Product with this name already exists" });
  } else {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
  }
};

const updateProduct = async (req, res) => {
  const { _id } = req.params;
  const { name } = req.body;
  const product = await Product.findById(_id);
  if (!product) {
    res.status(404).json({ message: "Product not found" });
  } else {
    const existingProduct = await Product.findOne({ name });
    if (existingProduct && existingProduct._id.toString() !== _id) {
      res
        .status(400)
        .json({ message: "Product with this name already exists" });
    } else {
      const updatedProduct = await Product.findByIdAndUpdate(_id, req.body, {
        new: true,
      });
      res.json(updatedProduct);
    }
  }
};

module.exports = {
  getAllProducts: ctrlWrapper(getAllProducts),
  addProduct: ctrlWrapper(addProduct),
  updateProduct: ctrlWrapper(updateProduct),
};
