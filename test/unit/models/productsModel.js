const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');

const { getAllProductsModel, createNewProductModel, deleteProductModel } = require('../../../models/productsModel');

describe('Model Products', () => {
  describe('getAllProducts', () => {
    describe('quando a tabela `products` tiver dados', () => {
      const produtosDuble = [
        { id: 1, 'name': 'Martelo de Thor', 'quantity': 10 },
        { id: 2, 'name': 'Traje de encolhimento', 'quantity': 20 },
        { id: 3, 'name': 'Escudo do Capitão América', 'quantity': 30 }, 
      ];

      before(() => {
        sinon.stub(connection, 'execute').resolves(produtosDuble)
      });

      after(() => {
        connection.execute.restore();
      })

      it('retorna todos os dados', async () => {
        const allProducts = await getAllProductsModel();
        expect(allProducts).to.be.deep.eq(produtosDuble);
      })
    });
  });

  describe('createNewProduct', () => {
    describe('adiciona novos dados', () => {
      const produtosDuble = [
        { name: 'Óculos do Homem de Ferro', quantity: 2 }, 
      ];

      before(() => {
        sinon.stub(connection, 'execute').resolves(produtosDuble)
      });

      after(() => {
        connection.execute.restore();
      })

      it('retorna todos os dados', async () => {
        const allProducts = await createNewProductModel(produtosDuble);
        expect(allProducts.quantity).to.be.equals(2);
      })
    });
  });  
})
