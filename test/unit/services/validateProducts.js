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
});
