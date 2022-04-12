const servicesProducts = require('../services/products');

const checkNameExist = async (req, res, next) => {
  const { name } = req.body;
  const filter = await servicesProducts.getByName(name);

  if (filter.length >= 1) return res.status(409).json({ message: 'Product already exists' });

  next();
};

const validateProductName = async (req, res, next) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: '"name" is required' });

  if (name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }

  next();
};

const validateQuantityProduct = async (req, res, next) => {
  const { quantity } = req.body;

  if (quantity === undefined) return res.status(400).json({ message: '"quantity" is required' });

  if (quantity < 1) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};

const checkProductNotExist = async (req, res, next) => {
  const { id } = req.params;
  const data = await servicesProducts.getAll();

  const findProduct = data.find((product) => product.id === Number(id));

  if (!findProduct) {
    return res.status(404).json({ message: 'Product not found' });
  }

  next();
};

module.exports = {
  validateProductName,
  validateQuantityProduct,
  checkProductNotExist,
  checkNameExist,
};
