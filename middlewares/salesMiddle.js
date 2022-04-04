const { getAllSalesModel, getSaleByIdModel, newSalesModel } = require('../models/salesModel');

const getAllSalesMiddlewares = async (req, res) => {
  const sales = await getAllSalesModel();
  res.status(200).json(sales);
};

const getOneSaleMiddlewares = async (req, res) => {
  const { id } = req.params;
  const findSale = await getSaleByIdModel(id);
  
  if (!findSale || findSale.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
  }

  res.status(200).json(findSale);
};

const newSalesMiddleware = async (req, res) => {
  const allSale = await getAllSalesModel();

  const newSale = {
    id: allSale.length,
    itemsSold: req.body,
  };
 
  newSalesModel(newSale);
  console.log(newSale);
  res.status(201).json(newSale);
};

module.exports = {
  getAllSalesMiddlewares,
  getOneSaleMiddlewares,
  newSalesMiddleware,
};
