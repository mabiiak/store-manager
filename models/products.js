const connection = require('./connection');

async function getAll() {
  const query = 'SELECT * FROM StoreManager.products;';
  const products = await connection.execute(query);
  return products;
}

async function getById(id) {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?;';
  const [product] = await connection.execute(query, [id]);
  return product;
}

async function getByName(name) {
  const query = 'SELECT * FROM StoreManager.products WHERE name = ?;';
  const [product] = await connection.execute(query, [name]);
  return product;
}

async function create(name, quantity) {
  const [products] = await connection.execute(`
    INSERT INTO products (name, quantity) VALUES
    ("${name}", ${quantity})
  `);
  return products;
}

async function edit(id, name, quantity) {
  const query = `UPDATE products SET name = ?, quantity = ?
  WHERE id = ?;`;

  const [products] = await connection.execute(query, [name, quantity, id]);
  return products;
}

async function deleteItem(id) {
  const query = 'DELETE FROM StoreManager.products WHERE id = ?';
  const [products] = await connection.execute(query, [id]);
  return products;
}

module.exports = {
  getAll,
  getById,
  getByName,
  create,
  edit,
  deleteItem,
};
