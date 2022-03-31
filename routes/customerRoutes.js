const express = require('express');

const app = express.Router();
const model = require('../models/model');

// Requisito 2
app.get('/products', async (req, res) => {
  const products = await model.getAllProducts();
  res.status(200).json(products);
});

module.exports = app;
