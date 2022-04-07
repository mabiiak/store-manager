const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');

const SalesModel = require('../../../models/salesModel');

describe('Model Sales', () => {
  describe('getAllSalesModel', () => {
   
      const duble = [{saleId: 1, productId:2, quantity:10, date: '2020/12/11' }]

      before(() => {
        sinon.stub(SalesModel, 'getAllSalesModel').resolves(duble);
      });

      it('retorna todas as vendas', async () => {
        const result = await SalesModel.getAllSalesModel();
        expect(result).to.be.deep.eq(duble);
      });
  });
});
