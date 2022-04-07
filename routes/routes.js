const express = require('express');

const app = express.Router();

const { 
  getAllProductsController,
  getProductByIdController,
  newProductController,
  editProductController,
  deleteProductController,
} = require('../controllers/productsController');

const {
  getAllSalesController,
  getOneSaleController,
  newSalesController,
  editSaleController,
  deleteSaleController,
} = require('../controllers/salesController');

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

app.get('/products', getAllProductsController);
app.get('/products/:id', getProductByIdController);

app.get('/sales', getAllSalesController);
app.get('/sales/:id', getOneSaleController);

app.post('/products', validateProductName, validateQuantityProduct, newProductController);
app.post('/sales',
  validateQuantitySales,
  validateProductIdSale,
  newSalesController);

app.put('/products/:id',
  validateProductName,
  validateQuantityProduct,
  checkProductNotExist,
  editProductController);
app.put('/sales/:id',
  validateQuantitySales,
  validateProductIdSale,
  editSaleController);

app.delete('/products/:id', checkProductNotExist, deleteProductController);
app.delete('/sales/:id', checkSaleExist, deleteSaleController);

module.exports = app;
