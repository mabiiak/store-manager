const { getAllSalesModel, getSaleByIdModel } = require('../models/salesModel');

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

// deve ser possivel cadastrar uma ou mais vendas

module.exports = { getAllSalesMiddlewares, getOneSaleMiddlewares };
