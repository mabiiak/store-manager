const { getAllProductsModel } = require('../models/model');

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

module.exports = {
  getAllProductsMiddleware,
  getProductByIdMiddleware,
};
