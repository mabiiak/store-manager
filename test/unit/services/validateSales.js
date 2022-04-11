const { expect } = require('chai');
const sinon = require('sinon');

const validate = require('../../../services/validateSales');
const model = require('../../../models/salesModel');
const sales = require('../dubles/sales');

describe('validate Sales', () => {
  describe('validateQuantitySales', () => {
    const req = {
      body: [{ quantity: -14 }]
    };
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
    });

    it('Deve retornar status(422) ao passar nome inválido', async () => {
      await validate.validateQuantitySales(req, res);
      expect(res.status.calledWith(422)).to.be.true;
    });
  })
})
