const { expect } = require('chai');
const sinon = require('sinon');
const { execute } = require('../../../models/connection');

const connection = require('../../../models/connection');

const { getAllProductsModel } = require('../../../models/productsModel');

after(async () => {
  connection.execute.restore();
});

describe('Testa Model Products', () => {
  it('A rota "get/products" retorna um array', async () => {
    const produtos = [
      { id: 1, 'name': 'Martelo de Thor', 'quantity': 10 },
      { id: 2, 'name': 'Traje de encolhimento', 'quantity': 20 },
      { id: 3, 'name': 'Escudo do Capitão América', 'quantity': 30 }, 
    ];

    sinon.stub(connection, 'execute').resolves(produtos);

    const allProducts = await getAllProductsModel();

    expect(allProducts).to.be.deep.eq(produtos)
  })
})
