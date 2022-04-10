const { expect } = require('chai');
const sinon = require('sinon');

const sales = require('../../../controllers/salesController')

describe('Sales Controller', () => {
  describe('getAllSalesController', () => {
    const req = {};
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });

    it('deve chamar a função `res.status`', async () => {
      await sales.getAllSalesController(req, res);
      expect(res.status.calledWith(200)).to.be.true;
    });

    it('deve chamar a função `res.json`', async () => {
      await sales.getAllSalesController(req, res);
      expect(res.json.called).to.be.true;
    });
  });

  describe('getOneSaleController', () => {
    const req = {
      params: { id: 1 }
    };
    const res = {};
    const reqNull = {
      params: { id: 0 }
    }

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
    });

    it('deve chamar a função `res.status` com o valor 200', async () => {
      await sales.getOneSaleController(req, res);
      expect(res.status.called).to.be.true;
    });

    it('Não deve retornar nenhum produto', async () => {
      await sales.getOneSaleController(reqNull, res);
      expect(res.status.calledWith(404)).to.be.true;
    });
  });

  describe('newSalesController', () => {
    const req = {
      body: [{
        productId: 1,
        quantity: 10,
      }]
    };
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
    });

    it('deve chamar a função `res.status` com o valor 201', async () => {
      await sales.newSalesController(req, res);
      expect(res.status.calledWith(201)).to.be.true;
    });
  });

  describe('editSaleController', () => {
    const req = {
      params: { id: 1 },
      body: [{
        productId: 1,
        quantity: 10,
      }]
    };
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
    });

    it('deve chamar a função `res.status` com o valor 200', async () => {
      await sales.editSaleController(req, res);
      expect(res.status.calledWith(200)).to.be.true;
    });

    it('deve chamar a função `res.json`', async () => {
      await sales.editSaleController(req, res);
      expect(res.json.called).to.be.true;
    });
  });
});
