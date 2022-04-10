const { expect } = require('chai');
const sinon = require('sinon');

const validate = require('../../../services/validateProducts');

describe('Validates Products', () => {
  describe('validateProductName', async () => {
    const req = {
      body: { name: 'Bob'}
    };
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
    });

    it('deve chamar a função `res.status` com o status 422', async () => {
      await validate.validateProductName(req, res);
      expect(res.status.calledWith(422)).to.be.true;
    });
  })

  describe('validateQuantityProduct', async () => {
    const req = {
      body: { quantity: -1 }
    };
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
    });

    it('deve chamar a função `res.status` com o status 422', async () => {
      await validate.validateQuantityProduct(req, res);
      expect(res.status.calledWith(422)).to.be.true;
    });
  })

  describe('checkProductNotExist', async () => {
    const req = {
      params: { id: 55 }
    };
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
    });

    it('deve chamar a função `res.status` com o status 404', async () => {
      await validate.checkProductNotExist(req, res);
      expect(res.status.calledWith(404)).to.be.true;
    });
  })
});
