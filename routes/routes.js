const express = require('express');

const app = express.Router();

const controllerSales = require('../controllers/sales');
const controllerProducts = require('../controllers/productsController');

const {
  validateProductName,
  validateQuantityProduct,
  checkProductNotExist,
} = require('../services/validateProducts');

const {
  validateQuantitySales,
  validateProductIdSale,
  checkSaleExist,
} = require('../services/validateSales');

app.get('/products', controllerProducts.getAll);
app.get('/products/:id', controllerProducts.getById);

app.get('/sales', controllerSales.getAll);
app.get('/sales/:id', controllerSales.getById);

app.post('/products', validateProductName, validateQuantityProduct, controllerProducts.create);
app.post('/sales', validateQuantitySales, validateProductIdSale, controllerSales.create);

app.put('/products/:id',
  validateProductName,
  validateQuantityProduct,
  checkProductNotExist,
  controllerProducts.edit);

app.put('/sales/:id', validateQuantitySales, validateProductIdSale, controllerSales.edit);

app.delete('/products/:id', checkProductNotExist, controllerProducts.deleteItem);
app.delete('/sales/:id', checkSaleExist, controllerSales.deleteItem);

module.exports = app;
