const servicesSales = require('../services/sales');

const validateQuantitySales = async (req, res, next) => {
  const [{ quantity }] = req.body;

  if (quantity === undefined) return res.status(400).json({ message: '"quantity" is required' });

  if (quantity < 1) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};

const validateProductIdSale = async (req, res, next) => {
  const [{ productId }] = req.body;

  if (!productId) return res.status(400).json({ message: '"productId" is required' });

  next();
};

const checkSaleExist = async (req, res, next) => {
  const { id } = req.params;
  
  const findId = await servicesSales.find(id);

  if (findId === false) return res.status(404).json({ message: 'Sale not found' });
  next();
};

module.exports = {
  validateQuantitySales,
  validateProductIdSale,
  checkSaleExist,
};
