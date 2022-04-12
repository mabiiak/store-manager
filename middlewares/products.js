const modelProducts = require('../models/productsModel');

const getAll = async () => {
  const result = await modelProducts.getAll();
  return result;
};

const getById = async (id) => {
  const result = await modelProducts.getById(id);
  return result;
};

const getByName = async (name) => {
  const result = await modelProducts.getByName(name);
  return result;
};

const create = async (name, quantity) => {
  const result = await modelProducts.create(name, quantity);
  return result;
};

const edit = async (id, name, quantity) => {
  const result = await modelProducts.edit(id, name, quantity);
  return result;
};

const deleteItem = async (id) => {
  const result = await modelProducts.deleteItem(id);
  return result;
};

module.exports = {
  getAll,
  getById,
  getByName,
  create,
  edit,
  deleteItem,
};