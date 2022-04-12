const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');

const model = require('../../../models/products');
const products = require('../dubles/products');

describe('Model Products', () => {
  describe('1 - getAll', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves(products.allProducts)
    });

    after(() => {
      connection.execute.restore();
    });

    it('A query retorna todos os produtos', async () => {
      const teste = await model.getAll();
      expect(connection.execute.calledOnce).to.be.true;

      // ref ---> https://sinonjs.org/releases/latest/assertions/
    })
  });

  describe('2 - getById', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([products.productSolo])
    });

    after(() => {
      connection.execute.restore();
    });

    it('A query retorna todos os produtos', async () => {
      await model.getById();
      expect(connection.execute.calledOnce).to.be.true;
    })
  });

  describe('3 - getByName', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([products.productSolo])
    });

    after(() => {
      connection.execute.restore();
    });

    it('A query retorna todos os produtos', async () => {
      const teste = await model.getByName();
      expect(connection.execute.calledOnce).to.be.true;
    })
  });

  describe('4 - create', () => {
    describe('A query adiciona um novo produto', () => {
      before(() => {
        sinon.stub(connection, 'execute').resolves(products.oneProduct)
      });

      after(() => {
        connection.execute.restore();
      })

      it('Adiciona um novo produto', async () => {
        await model.create(products.oneProduct);
        expect(connection.execute.calledOnce).to.be.true;
      })
    });
  });

  describe('5 - editProductModel', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([products.productSolo])
    });

    after(() => {
      connection.execute.restore();
    });

    it('A query edita um produto', async () => {
      await model.edit(products.productSolo);
      expect(connection.execute.calledOnce).to.be.true;
    })
  });

  describe('6 - deleteProductModel', async () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([products.productSolo])
    });

    after(() => {
      connection.execute.restore();
    });

    it('A query deleta um produto existente', async () => {
      await model.deleteItem(products.productSolo.id);
      expect(connection.execute.calledOnce).to.be.true;
    })
  });
})
