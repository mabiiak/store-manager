const modelsSales = require('../models/sales');

const getAll = async (req, res) => {
  const sales = await modelsSales.getAll();
  res.status(200).json(sales);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const findSale = await modelsSales.getById(id);
  
  if (!findSale || findSale.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
  }

  res.status(200).json(findSale);
};

const create = async (req, res) => {
  const allSale = await modelsSales.getAll();

  const newSale = {
    id: allSale.length,
    itemsSold: req.body,
  };
 
  modelsSales.create(newSale);
  res.status(201).json(newSale);
};

const edit = async (req, res) => {
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

  modelsSales.deleteItem(Number(id));
  modelsSales.create(reAdd);

  res.status(200).json(itemEdit);
};

const deleteItem = async (req, res) => {
  const { id } = req.params;

  try {
    await modelsSales.deleteItem(Number(id));
    res.status(204).end();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  edit,
  deleteItem,
};
