const connection = require('./connection');

async function getAllProductsModel() {
  const [products] = await connection.query(
    'SELECT * FROM StoreManager.products;',
  );
  // console.log(products);
  return products;
}

async function getAllSalesModel() {
  const [sales] = await connection.query(
    'SELECT * FROM StoreManager.sales;',
  );
  console.log(`sales, ${sales}`);
  return sales;
}

module.exports = { getAllProductsModel, getAllSalesModel };
