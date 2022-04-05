const {
  getAllSalesModel,
  getSaleByIdModel,
  newSalesModel,
  deleteSalesModel,
} = require('../models/salesModel');

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
  res.status(201).json(newSale);
};

const editSale = async (req, res) => {
  const { id } = req.params;
  const [{ productId, quantity }] = req.body;

  const itemEdit = {
    saleId: Number(id),
    itemUpdated: [{
      productId,
      quantity,
    }],
  };

  const reAdd = {
    id: Number(id),
    itemsSold: req.body,
  };

  console.log(itemEdit);

  deleteSalesModel(Number(id));
  newSalesModel(reAdd);

  res.status(200).json(itemEdit);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;

  try {
    await deleteSalesModel(Number(id));
    res.status(204).end();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllSalesMiddlewares,
  getOneSaleMiddlewares,
  newSalesMiddleware,
  editSale,
  deleteSale,
};
