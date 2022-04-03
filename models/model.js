const connection = require('./connection');

async function getAllProductsModel() {
  const [products] = await connection.query(
    'SELECT * FROM StoreManager.products;',
  );
  return products;
}

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

module.exports = {
  getAllProductsModel,
  getAllSalesModel,
  getSaleByIdModel,
  createNewProductModel,
  editProductModel,
};
