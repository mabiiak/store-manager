const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');

const { getAllProductsModel, createNewProductModel, deleteProductModel } = require('../../../models/productsModel');
const mocha = require('../mocha');

describe('Model Products', () => {
  describe('getAllProducts', () => {
    describe('quando a tabela `products` tiver dados', () => {
      before(() => {
        sinon.stub(connection, 'execute').resolves(mocha.produtosDuble)
      });

      after(() => {
        connection.execute.restore();
      });

      it('retorna todos os dados', async () => {
        const allProducts = await getAllProductsModel();
        expect(allProducts).to.be.deep.eq(mocha.produtosDuble);
      })
    });
  });

  describe('createNewProduct', () => {
    describe('adiciona novos dados', () => {
      before(() => {
        sinon.stub(connection, 'execute').resolves(mocha.oneProduct)
      });

      after(() => {
        connection.execute.restore();
      })

      it('retorna todos os dados', async () => {
        const allProducts = await createNewProductModel(mocha.oneProduct);
        expect(allProducts.quantity).to.be.equals(2);
      })
    });
  });  
})
