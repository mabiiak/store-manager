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
  getAllSalesMiddlewares,
  getOneSaleMiddlewares,
  newSalesMiddleware,
  editSale,
  deleteSale,
} = require('../middlewares/salesMiddle');

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

app.get('/sales', getAllSalesMiddlewares);
app.get('/sales/:id', getOneSaleMiddlewares);

app.post('/products', validateProductName, validateQuantityProduct, newProductController);
app.post('/sales',
  validateQuantitySales,
  validateProductIdSale,
  newSalesMiddleware);

app.put('/products/:id',
  validateProductName,
  validateQuantityProduct,
  checkProductNotExist,
  editProductController);
app.put('/sales/:id',
  validateQuantitySales,
  validateProductIdSale,
  editSale);

app.delete('/products/:id', checkProductNotExist, deleteProductController);
app.delete('/sales/:id', checkSaleExist, deleteSale);

module.exports = app;
