const modelSales = require('../models/sales');

const getAll = async () => {
  const result = await modelSales.getAll();
  return result;
};

const getById = async (id) => {
const result = await modelSales.getById(id);
return result;
};

const create = async (newSales) => {
const result = await modelSales.create(newSales);
return result;
};

const deleteItem = async (id) => {
const result = await modelSales.deleteItem(id);
return result;
};
const find = async (id) => {
const result = await modelSales.find(id);
return result;
};

module.exports = {
  getAll,
  getById,
  create,
  deleteItem,
  find,
};
