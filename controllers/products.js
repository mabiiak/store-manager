const servicesProducts = require('../services/products');

const getAll = async (req, res) => {
  const products = await servicesProducts.getAll();
  res.status(200).json(products);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const [data] = await servicesProducts.getById(Number(id));

  if (!data) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.status(200).json(data);
};

const create = async (req, res) => {
  const { name, quantity } = req.body;

  const allProducts = await servicesProducts.getAll();

  const newProduct = {
    id: allProducts.length,
    name,
    quantity,
  };
  await servicesProducts.create(name, quantity);
  res.status(201).json(newProduct);
};

const edit = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;

  await servicesProducts.edit(Number(id), name, quantity);

  const productEdit = {
    id,
    name,
    quantity,
  };

  res.status(200).json(productEdit);
};

const deleteItem = async (req, res) => {
  const { id } = req.params;

  await servicesProducts.deleteItem(Number(id));

  res.status(204).end();
};

module.exports = {
  getAll,
  getById,
  create,
  edit,
  deleteItem,
};
