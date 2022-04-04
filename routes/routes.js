const express = require('express');

const app = express.Router();

const { 
  getAllProductsMiddleware,
  getProductByIdMiddleware,
  newProductMiddleware,
  editProduct,
  deleteProduct,
} = require('../middlewares/productsMiddle');

const {
  getAllSalesMiddlewares,
  getOneSaleMiddlewares,
  newSalesMiddleware,
} = require('../middlewares/salesMiddle');

const {
  validateProductName,
  validateQuantityProduct,
  validateProductId,
  checkProductNotExist,
} = require('../services/validateProducts');

const {
  validateQuantitySales,
  validateProductIdSale,
} = require('../services/validateSales');

app.get('/products', getAllProductsMiddleware);
app.get('/products/:id', getProductByIdMiddleware);

app.get('/sales', getAllSalesMiddlewares);
app.get('/sales/:id', getOneSaleMiddlewares);

app.post('/products', validateProductName, validateQuantityProduct, newProductMiddleware);
app.post('/sales',
// validateQuantitySales, validateProductId,
newSalesMiddleware);

app.put('/products/:id',
  validateProductName,
  validateQuantityProduct,
  checkProductNotExist,
  editProduct);
app.put('/sales/:id', validateQuantitySales, validateProductIdSale);

app.delete('/products/:id', checkProductNotExist, deleteProduct);
app.delete('/sales/:id');

module.exports = app;
