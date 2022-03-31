const connection = require('./connection');

async function getAllProducts() {
  const [products] = await connection.query(
    'SELECT * FROM StoreManager.products;',
  );
  console.log(products);
  return products;
}

module.exports = { getAllProducts };
