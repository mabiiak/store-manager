const connection = require('./connection');

async function getAllProductsModel() {
  const [products] = await connection.query(
    'SELECT * FROM StoreManager.products;',
  );

  return products;
}

async function getProductByIdModel(n) {
  const [product] = await connection.execute(
    `SELECT * FROM StoreManager.products WHERE id = ${n};`,
  );
  return product;
}

async function getProductByNameModel(n) {
  const [product] = await connection.execute(
    `SELECT * FROM StoreManager.products WHERE name = ${n};`,
  );
  return product;
}

async function createNewProductModel(name, quantity) {
  const [products] = await connection.execute(`
    INSERT INTO products (name, quantity) VALUES
    ("${name}", ${quantity})
  `);
  return products;
}

async function editProductModel(id, name, quantity) {
  const [products] = await connection.execute(`
    UPDATE products SET name = "${name}", quantity = "${quantity}"
    WHERE id = ${id};
  `);
  return products;
}

async function deleteProductModel(id) {
  const [products] = await connection.execute(`
  DELETE FROM StoreManager.products WHERE id = ${id};
`);
  return products;
}

module.exports = {
  getAllProductsModel,
  getProductByIdModel,
  getProductByNameModel,
  createNewProductModel,
  editProductModel,
  deleteProductModel,
};
