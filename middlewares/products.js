const model = require('../models/productsModel');

async function getAll() {
  const result = await model.getAllProductsModel();

  return result;
}

module.exports = getAll;