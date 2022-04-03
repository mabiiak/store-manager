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
  const allProducts = await getAllProductsModel();
  const filter = allProducts.filter((p) => p.name === name);

  if (filter.length >= 1) return res.status(409).json({ message: 'Product already exists' });

  const newProduct = {
    id: allProducts.length,
    name,
    quantity,
  };
  createNewProductModel(name, quantity);
  res.status(201).json(newProduct);
};

const editProduct = async (req, res) => {
  const { id } = req.body;
};

module.exports = {
  getAllProductsMiddleware,
  getProductByIdMiddleware,
  newProductMiddleware,
  editProduct,
};
