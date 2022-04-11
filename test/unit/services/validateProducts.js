const { expect } = require('chai');
const sinon = require('sinon');

const validate = require('../../../services/validateProducts');
const model = require('../../../models/productsModel');
const products = require('../dubles/products');

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

    it('Deve retornar status(422) ao passar nome inválido', async () => {
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

    it('Deve retornar status(422) ao passar quantity inválido', async () => {
      await validate.validateQuantityProduct(req, res);
      expect(res.status.calledWith(422)).to.be.true;
    });
  })

  // describe('checkProductNotExist', async () => {
  //   const req = {
  //     params: { id: 55 }
  //   };
  //   const res = {};

  //   before(() => {
  //     res.status = sinon.stub().returns(res);
  //     res.json = sinon.stub();

  //     sinon.stub(model, 'getProductByIdModel').resolves([])
  //   });

  //   it('Deve retornar status(422) ao passar id de um produto inexistente', async () => {
  //     await validate.checkProductNotExist(req, res);
  //     expect(res.status.calledWith(404)).to.be.true;
  //   });
  // })
});
