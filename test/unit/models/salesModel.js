const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');

const SalesModel = require('../../../models/salesModel');
const mocha = require('../mocha');

describe('Model Sales', () => {
  describe('getAllSalesModel', () => {
    const duble = [{ saleId: 1, productId: 2, quantity: 10, date: '2020/12/11' }]

    before(() => {
      sinon.stub(connection, 'execute').resolves(duble);
    });

    after(() => {
      connection.execute.restore();
    });

    it('retorna todas as vendas', async () => {
      const result = await SalesModel.getAllSalesModel();
      expect(result.saleId).to.be.deep.equal(1);
      expect(result.productId).to.be.deep.equal(2);
      expect(result.quantity).to.be.deep.equal(10);
      expect(result.date).to.be.deep.equal('2020/12/11');
    });
  });

  describe('getSaleByIdModel', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves(mocha.saleSolo);
    });

    it('Checa se retorna a venda com o `id` buscado', async () => {
      const testFunc = await SalesModel.getSaleByIdModel(2);
      expect(testFunc.date).to.be.deep.equal('2021/11/12')
    });
  });
});
