const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');

const model = require('../../../models/salesModel');
const sales = require('../dubles/sales');
const products = require('../dubles/products');

describe('Model Sales', () => {
  describe('getAllSalesModel', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves(sales.allSales);
    });

    after(() => {
      connection.execute.restore();
    });

    it('A query retorna todas as vendas', async () => {
      await model.getAllSalesModel();
      expect(connection.execute.calledOnce).to.be.true;
    });
  });

  describe('getSaleByIdModel', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([products.saleSolo]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('A query retorna uma venda especifica', async () => {
      await model.getSaleByIdModel(2);
      expect(connection.execute.calledOnce).to.be.true;
    });
  });

  // describe('newSalesModel', () => {
  //   before(() => {
  //     sinon.stub(connection, 'execute').resolves(sales.newSale);
  //   });
    
  //   after(() => {
  //     connection.execute.restore();
  //   });

  //   it('A query cria uma nova venda', async () => {
  //     await model.newSalesModel(sales.newSale);
  //     expect(connection.execute.calledOnce).to.be.true;
  //   });
  // });

  describe('deleteSalesModel', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([products.id]);
    });
    
    after(() => {
      connection.execute.restore();
    });

    it('A query deleta uma venda', async () => {
      await model.deleteSalesModel(products.id);
      expect(connection.execute.calledOnce).to.be.true;
    });
  });

  describe('findSales', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([sales.idSales]);
    });

    after(() => {
      connection.execute.restore();
    });

    it('A query checa se uma venda existe', async () => {
      await model.findSales(sales.idSales);
      expect(connection.execute.calledOnce).to.be.true;
    });
  });
});
