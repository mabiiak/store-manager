const connection = require('./connection');

async function getAll() {
  const [sales] = await connection.execute(
    `SELECT sp.sale_id AS saleId, sp.product_id AS productId, sp.quantity, s.date
    FROM sales_products AS sp
    INNER JOIN sales AS s
    ON s.id = sp.sale_id;`,
  );
  return sales;
}

async function getById(n) {
  const [sales] = await connection.execute(
    `SELECT s.date, sp.product_id AS productId, sp.quantity
    FROM sales_products AS sp
    INNER JOIN sales AS s
    ON s.id = sp.sale_id
    WHERE s.id = ${n};`,
  );
  return sales;
}

async function create(newSales) {
  const { id, itemsSold } = newSales;
  await connection.execute('INSERT INTO sales (date) VALUES (NOW());');
  const query = `INSERT INTO sales_products (sale_id, product_id, quantity)
  VALUES (?, ?, ?)`;

  Promise.all(itemsSold.map(async (item) => {
    const [salesProduct] = await connection.execute(query, [id, item.productId, item.quantity]);

    return salesProduct;
  }));
}

async function deleteItem(saleId) {
  const query = 'DELETE from sales_products WHERE sale_id = ?';

  const [sales] = await connection.execute(query, [saleId]);
  return sales;
}

async function find(id) {
  const query = 'SELECT * FROM sales_products WHERE sale_id = ?';

  const [sales] = await connection.execute(query, [id]);
  if (sales.length >= 1) return true;
  
  return false;
}

module.exports = {
  getAll,
  getById,
  create,
  deleteItem,
  find,
};
