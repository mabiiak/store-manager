const { getAllProductsModel, getAllSalesModel, getSaleByIdModel } = require('../models/model');

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

const getAllSales = async (req, res) => {
  const sales = await getAllSalesModel();
  res.status(200).json(sales);
};

const getOneSale = async (req, res) => {
  const { id } = req.params;
  const findSale = await getSaleByIdModel(id);
  
  if (!findSale || findSale.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
  }

  res.status(200).json(findSale);
};

module.exports = {
  getAllProductsMiddleware,
  getProductByIdMiddleware,
  getAllSales,
  getOneSale,
};
