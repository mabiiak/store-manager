const middlewareProducts = require('../middlewares/products');

const getAllProductsController = async (req, res) => {
  const products = await middlewareProducts.getAll();
  res.status(200).json(products);
};

const getProductByIdController = async (req, res) => {
  const { id } = req.params;
  const [data] = await middlewareProducts.getById(Number(id));

  if (!data) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.status(200).json(data);
};

const newProductController = async (req, res) => {
  const { name, quantity } = req.body;

  const allProducts = await middlewareProducts.getAll();

  const filter = await middlewareProducts.getByName(name);
  console.log(filter);
  if (filter.length >= 1) return res.status(409).json({ message: 'Product already exists' });

  const newProduct = {
    id: allProducts.length,
    name,
    quantity,
  };
  await middlewareProducts.create(name, quantity);
  res.status(201).json(newProduct);
};

const editProductController = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;

  await middlewareProducts.edit(Number(id), name, quantity);

  const productEdit = {
    id,
    name,
    quantity,
  };

  res.status(200).json(productEdit);
};

const deleteProductController = async (req, res) => {
  const { id } = req.params;

  await middlewareProducts.deleteItem(Number(id));

  res.status(204).end();
};

module.exports = {
  getAllProductsController,
  getProductByIdController,
  newProductController,
  editProductController,
  deleteProductController,
};
