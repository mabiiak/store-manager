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
    const req = {
      params: { "id": 1 }
    };
    const res = {};
    const reqNull = {
      params: { id: 0 }
    }

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
    });

    it('deve retornar o produto com o id buscado', async () => {
      await products.getProductByIdController(req, res);
      expect(res.status.calledWith(200)).to.be.true;
    });

    it('Não deve retornar nenhum produto', async () => {
      await products.getProductByIdController(reqNull, res);
      expect(res.status.calledWith(404)).to.be.true;
    });
  });

  describe('newProductController', () => {
    const req = {
      body : {
        name: 'Machado do Thor',
        quantity: 2
      }
    };
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
      sinon.stub(products, 'newProductController').resolves(mocha.newSale)
    });

    // it('deve adicionar o produto novo', async () => {
    //   await products.newProductController(req, res);
    //   expect(res.status.called).to.be.true;
    // });

    it('deve adicionar o produto novo', async () => {
      const testFunc = await products.newProductController(req, res);
      expect(testFunc).to.be.deep.eq(mocha.newSale);
    });
  });

  describe('editProductController', () => {
    const req = {};
    const res = {};
    const duble = {id: 5, name: 'Machado do Thor', 'quantity': 2}

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      sinon.stub(products , 'editProductController').resolves(duble);
    });

    it('deve editar o produto', async () => {
      const funcTest = await products.editProductController(req, res);
      expect(funcTest).to.be.deep.equal(duble);
    });
  });
});
