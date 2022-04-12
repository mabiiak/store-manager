const servicesSales = require('../services/sales');

const getAll = async (req, res) => {
  const sales = await servicesSales.getAll();
  res.status(200).json(sales);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const findSale = await servicesSales.getById(id);
  
  if (!findSale || findSale.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
  }

  res.status(200).json(findSale);
};

const create = async (req, res) => {
  const allSale = await servicesSales.getAll();

  const newSale = {
    id: allSale.length,
    itemsSold: req.body,
  };
 
  servicesSales.create(newSale);
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

  servicesSales.deleteItem(Number(id));
  servicesSales.create(reAdd);

  res.status(200).json(itemEdit);
};

const deleteItem = async (req, res) => {
  const { id } = req.params;

  try {
    await servicesSales.deleteItem(Number(id));
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
