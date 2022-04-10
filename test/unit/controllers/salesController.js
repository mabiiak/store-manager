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
    const req = {};
    const res = {};
    req.params = {
      "id": 1,
    }

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
    });

    it('deve chamar a função `res.status` com o valor 200', async () => {
      await sales.getOneSaleController(req, res);
      expect(res.status.calledWith(200)).to.be.true;
    });

    it('deve chamar a função `res.json`', async () => {
      await sales.getOneSaleController(req, res);
      expect(res.json.called).to.be.true;
    });
  });
});
