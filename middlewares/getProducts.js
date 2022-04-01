const { getAllProductsModel, createNewProductModel } = require('../models/model');

const getAllProductsMiddleware = async (req, res) => {
  const products = await getAllProductsModel();
  res.status(200).json(products);
};

const getProductByIdMiddleware = async (req, res) => {
  const { id } = req.params;
  const data = await getAllProductsModel();

  const findProduct = data.find((product) => product.id === Number(id));

  if (!findProduct) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.status(200).json(findProduct);
};

const newProductMiddleware = async (req, res) => {
  const { name, quantity } = req.body;
  const newProduct = {
    name,
    quantity,
  };
  createNewProductModel(name, quantity);
  res.status(201).json(newProduct);
};

module.exports = {
  getAllProductsMiddleware,
  getProductByIdMiddleware,
  newProductMiddleware,
};
