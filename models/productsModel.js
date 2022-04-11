const connection = require('./connection');

async function getAllProductsModel() {
  const query = 'SELECT * FROM StoreManager.products;';
  const [products] = await connection.execute(query);
  console.log(products);
  return products;
}

async function getProductByIdModel(id) {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?;';
  const [product] = await connection.execute(query, [id]);
  console.log(product);
  return product;
}

async function getProductByNameModel(name) {
  const query = 'SELECT * FROM StoreManager.products WHERE name = ?;';
  const [product] = await connection.execute(query, [name]);
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
  const query = `UPDATE products SET name = ?, quantity = ?
  WHERE id = ?;`;

  const [products] = await connection.execute(query, [name, quantity, id]);
  return products;
}

async function deleteProductModel(id) {
  const query = 'DELETE FROM StoreManager.products WHERE id = ?';
  const [products] = await connection.execute(query, [id]);
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
