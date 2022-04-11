const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');

const {
  getAllProductsModel,
  createNewProductModel,
  editProductModel,
  deleteProductModel,
} = require('../../../models/productsModel');
const model = require('../../../models/productsModel');
const mocha = require('../mocha');

describe('Model Products', () => {
  describe('getAllProducts', () => {
    before(() => {
      sinon.stub(connection, 'query').resolves(mocha.produtosDuble)
    });

    after(() => {
      connection.query.restore();
    });

    it('retorna todos os produtos', async () => {
      const allProducts = await model.getAllProductsModel();

      expect(allProducts).to.be.deep.equal([mocha.produtosDuble]);
    })
  });

  describe('createNewProduct', () => {
    describe('adiciona novos dados', () => {
      before(() => {
        sinon.stub(connection, 'execute').resolves(mocha.oneProduct)
      });

      after(() => {
        connection.execute.restore();
      })

      it('retorna o dado inserido', async () => {
        const testFunc = await createNewProductModel(mocha.oneProduct);
        expect(testFunc.quantity).to.be.equals(2);
      })
    });
  });

  describe('editProductModel', async () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves(mocha.newProduct)
    });

    after(() => {
      connection.execute.restore();
    });
    const testFunc = await editProductModel(mocha.newProduct);
    expect(testFunc.name).to.be.deep.equals(mocha.newProduct.name)
  });

  describe('deleteProductModel', async () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves(mocha.productsolo)
    });

    after(() => {
      connection.execute.restore();
    });
    const testFunc = await deleteProductModel(mocha.newProduct);
    const allProducts = await getAllProductsModel();
    expect(testFunc).to.be.eql(mocha.newProduct)
    expect(allProducts).to.be.not.include(mocha.productsolo)
  });
})
