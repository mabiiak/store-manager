const { expect } = require('chai');
const sinon = require('sinon');

const { getAllProductsController } = require('../../../controllers/productsController');
const products = require('../../../controllers/productsController');
const mocha = require('../mocha');

describe('Products Controllers', () => {
  describe('getAllProductsController', () => {
    const req = {};
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });

    it('deve chamar a função `res.status`', async () => {
      await getAllProductsController(req, res);
      expect(res.status.calledWith(200)).to.be.true;
    });

    it('deve chamar a função `res.json`', async () => {
      await getAllProductsController(req, res);
      expect(res.json.called).to.be.true;
    });
  })

  describe('getProductByIdController', () => {
    before(() => {
      sinon.stub(products , 'getProductByIdController')
        .resolves({ id: 1, 'name': 'Martelo de Thor', 'quantity': 10 });
    });

    it('deve retornar o produto com o id buscado', async () => {
      const testFunc = await products.getProductByIdController(1);
      expect(testFunc).to.be.deep.equal(mocha.id);
    });
  });

  describe('newProductController', () => {
    const req = {id: 5, name: 'Machado do Thor', 'quantity': 2};
    const res = {};

    before(() => {
      sinon.stub(products , 'newProductController').resolves(req);
    });

    it('deve adicionar o produto novo', async () => {
      const testFunc = await products.newProductController(req, res);
      expect(testFunc.id).to.be.deep.equal(5);
    });

  });
});
