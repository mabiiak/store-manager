const connection = require('./connection');

async function getAllSalesModel() {
  const [sales] = await connection.execute(
    `SELECT sp.sale_id AS saleId, sp.product_id AS productId, sp.quantity, s.date
    FROM sales_products AS sp
    INNER JOIN sales AS s
    ON s.id = sp.sale_id;`,
  );
  return sales;
}

async function getSaleByIdModel(n) {
  const [sales] = await connection.execute(
    `SELECT s.date, sp.product_id AS productId, sp.quantity
    FROM sales_products AS sp
    INNER JOIN sales AS s
    ON s.id = sp.sale_id
    WHERE s.id = ${n};`,
  );
  return sales;
}

async function newSalesModel(newSales) {
  await connection.execute('INSERT INTO sales (date) VALUES (NOW());');

  const { id, itemsSold } = newSales;

  const query = `INSERT INTO sales_products (sale_id, product_id, quantity)
  VALUES (?, ?, ?)`;

  Promise.all(itemsSold.map(async (item) => {
    const [salesProduct] = await connection.execute(query, [id, item.productId, item.quantity]);

    return salesProduct;
  }));
}

module.exports = {
  getAllSalesModel,
  getSaleByIdModel,
  newSalesModel,
};
