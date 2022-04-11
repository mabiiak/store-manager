const {
  getAllProductsModel,
  getProductByIdModel,
  getProductByNameModel,
  createNewProductModel,
  editProductModel,
  deleteProductModel,
} = require('../models/productsModel');

// const middleware = require('../middlewares/products');

const getAllProductsController = async (req, res) => {
  const products = await getAllProductsModel();

  res.status(200).json(products);
};

const getProductByIdController = async (req, res) => {
  const { id } = req.params;
  const [data] = await getProductByIdModel(Number(id));

  if (!data) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.status(200).json(data);
};

const newProductController = async (req, res) => {
  const { name, quantity } = req.body;
  const allProducts = await getAllProductsModel();

  const filter = await getProductByNameModel(name);

  if (filter.length >= 1) return res.status(409).json({ message: 'Product already exists' });

  const newProduct = {
    id: allProducts.length,
    name,
    quantity,
  };
  createNewProductModel(name, quantity);
  res.status(201).json(newProduct);
};

const editProductController = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;

  editProductModel(Number(id), name, quantity);

  const productEdit = {
    id,
    name,
    quantity,
  };

  res.status(200).json(productEdit);
};

const deleteProductController = async (req, res) => {
  const { id } = req.params;

  deleteProductModel(Number(id));

  res.status(204).end();
};

module.exports = {
  getAllProductsController,
  getProductByIdController,
  newProductController,
  editProductController,
  deleteProductController,
};
