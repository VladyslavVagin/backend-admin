const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  stock: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  suppliers: {
    type: String,
    required: true,
  }
}, { _id: true, versionKey: false });

const addProductSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.string().required(),
    stock: Joi.string().required(),
    category: Joi.string().required(),
    suppliers: Joi.string().required()
});

const editProductSchema = Joi.object({
    name: Joi.string(),
    price: Joi.string(),
    stock: Joi.string(),
    category: Joi.string(),
    suppliers: Joi.string()
});

productSchema.post("save", handleMongooseError);

const Product = model("product", productSchema);

const schemas = { addProductSchema, editProductSchema };

module.exports = { Product, schemas };
