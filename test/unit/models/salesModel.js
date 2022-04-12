const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');

const model = require('../../../models/sales');
const sales = require('../dubles/sales');
const products = require('../dubles/products');

describe('Model Sales', () => {
  describe('1 - getAll', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves(sales.allSales);
    });

    after(() => {
      connection.execute.restore();
    });

    it('A query retorna todas as vendas', async () => {
      await model.getAll();
      expect(connection.execute.calledOnce).to.be.true;
    });
  });

  describe('2 - getById', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([products.saleSolo]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('A query retorna uma venda especifica', async () => {
      await model.getById(2);
      expect(connection.execute.calledOnce).to.be.true;
    });
  });

  describe(' 3 - create', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves(sales.newSale);
    });
    
    after(() => {
      connection.execute.restore();
    });

    it('A query cria uma nova venda', async () => {
      await model.create(sales.newSale);
      expect(connection.execute.calledOnce).to.be.true;
    });
  });

  describe('4 - deleteItem', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([products.id]);
    });
    
    after(() => {
      connection.execute.restore();
    });

    it('A query deleta uma venda', async () => {
      await model.deleteItem(products.id);
      expect(connection.execute.calledOnce).to.be.true;
    });
  });

  describe('5 - find', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([sales.idSales]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('A query checa se uma venda existe', async () => {
      await model.find(sales.idSales);
      expect(connection.execute.calledOnce).to.be.true;
    });
  });
});
