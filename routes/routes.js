const express = require('express');

const app = express.Router();

const controllerSales = require('../controllers/sales');
const controllerProducts = require('../controllers/products');

const validateProducts = require('../middlewares/validateProducts');
const validateSales = require('../middlewares/validateSales');

app.get('/products', controllerProducts.getAll);
app.get('/products/:id', controllerProducts.getById);

app.get('/sales', controllerSales.getAll);
app.get('/sales/:id', controllerSales.getById);

app.post('/products',
  validateProducts.validateProductName,
  validateProducts.validateQuantityProduct,
  validateProducts.checkNameExist,
  controllerProducts.create);

app.post('/sales',
  validateSales.validateQuantitySales,
  validateSales.validateProductIdSale,
  controllerSales.create);

app.put('/products/:id',
  validateProducts.validateProductName,
  validateProducts.validateQuantityProduct,
  validateProducts.checkProductNotExist,
  controllerProducts.edit);

app.put('/sales/:id',
  validateSales.validateQuantitySales,
  validateSales.validateProductIdSale,
  controllerSales.edit);

app.delete('/products/:id',
  validateProducts.checkProductNotExist,
  controllerProducts.deleteItem);
app.delete('/sales/:id', validateSales.checkSaleExist, controllerSales.deleteItem);

module.exports = app;
