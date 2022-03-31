const { getAllProductsModel } = require('../models/model');

const getAllProductsMiddleware = async (req, res) => {
  const products = await getAllProductsModel();
  res.status(200).json(products);
};

module.exports = { getAllProductsMiddleware };
