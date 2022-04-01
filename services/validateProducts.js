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

const validateProductId = async (req, res, next) => {
  const { productId } = req.body;

  if (!productId) return res.status(400).json({ message: '"productId" is required' });

  next();
};

module.exports = {
  validateProductName,
  validateQuantityProduct,
  validateProductId,
};
