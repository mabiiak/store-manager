const connection = require('./connection');

async function getAllProductsModel() {
  const [products] = await connection.query(
    'SELECT * FROM StoreManager.products;',
  );
  // console.log(products);
  return products;
}

async function getAllSalesModel() {
  const [sales] = await connection.execute(
    `SELECT sp.sale_id AS saleId, sp.product_id AS productId, sp.quantity, s.date
    FROM sales_products AS sp
    INNER JOIN sales AS s
    ON s.id = sp.sale_id;`,
  );
  console.log(`sales, ${sales}`);
  return sales;
}

module.exports = { getAllProductsModel, getAllSalesModel };
