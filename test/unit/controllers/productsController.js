const { expect } = require('chai');
const sinon = require('sinon');

const { getAllProductsController } = require('../../../controllers/productsController');

describe('Products Controllers', () => {
  describe('getAllProductsController', () => {
    describe('quando a tabela `products` tiver dados', () => {
      const req = {};
        const res = {};

        before(() => {
          res.status = sinon.stub().returns(res);
          res.json = sinon.stub().returns(res);
        });

      it('deve chamar a função `res.status`', async () => {
        await getAllProductsController(req, res);
        expect(res.status.called).to.be.true;
      });

      it('deve chamar a função `res.json`', async () => {
        await getAllProductsController(req, res);
        expect(res.json.called).to.be.true;
      });
    })
  });
});
