const { expect } = require('chai');
const res = require('express/lib/response');
const sinon = require('sinon');
const connection = require('../../../models/connection');

const { getAllSalesModel } = require('../../../models/salesModel');

describe('Model Sales', () => {
  describe('getAllSalesModel', () => {
    describe('retorna todas as vendas', async () => {
      const duble = {saleId: 1, productId:2, quantity:10, date: '2020/12/11' }

      before(() => {
        sinon.stub(connection, 'execute').resolves(duble);
      });

      after(() => {
        connection.execute.restore();
      })

      const result = await getAllSalesModel();
      expect(result).to.be.deep.eq(duble);
    });
  });
});
