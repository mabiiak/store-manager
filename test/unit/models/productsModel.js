const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');

const model = require('../../../models/productsModel');
const products = require('../dubles/products');

describe('Model Products', () => {
  // describe('getAllProducts', () => {
  //   before(() => {
  //     sinon.stub(connection, 'execute').resolves(products.allProducts)
  //   });

  //   // after(() => {
  //   //   connection.query.restore();
  //   // });

  //   it('A query retorna todos os produtos', async () => {
  //     await model.getAllProductsModel();
  //     expect(connection.query.calledOnce).to.be.true;

  //     // ref ---> https://sinonjs.org/releases/latest/assertions/
  //   })
  // });

  // describe('createNewProduct', () => {
  //   describe('A query adiciona um novo produto', () => {
  //     before(() => {
  //       sinon.stub(connection, 'execute').resolves(products.oneProduct)
  //     });

  //     after(() => {
  //       connection.execute.restore();
  //     })

  //     it('retorna o dado inserido', async () => {
  //       await model.createNewProductModel(products.oneProduct);
  //       expect(connection.execute.calledOnce).to.be.true;
  //     })
  //   });
  // });

  // describe('editProductModel', () => {
  //   before(() => {
  //     sinon.stub(connection, 'execute').resolves([products.productSolo])
  //   });

  //   after(() => {
  //     connection.execute.restore();
  //   });

  //   it('A query edita um produto já existente', async () => {
  //     await model.editProductModel(products.productSolo);
  //     expect(connection.execute.calledOnce).to.be.true;
  //   })
  // });

  describe('deleteProductModel', async () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([products.productSolo.id])
    });

    after(() => {
      connection.execute.restore();
    });

    it('A query deleta um produto existente', async () => {
      await model.deleteProductModel(products.productSolo.id);
      expect(connection.execute.calledOnce).to.be.true;
    })
  });
})
