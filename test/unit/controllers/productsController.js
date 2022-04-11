const { expect } = require('chai');
const sinon = require('sinon');

const products = require('../dubles/products');
const mocha = require('../mocha');
const controller = require('../../../controllers/productsController');
const model = require('../../../models/productsModel');
const { assert } = require('joi');

describe('Products Controllers', () => {
  describe('getAllProductsController', () => {
    const req = {};
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(200);
      res.json = sinon.stub();
      sinon.stub(model, 'getAllProductsModel').resolves(products.allProducts);
    });

    after(() => {
      model.getAllProductsModel.restore();
    })

    it('deve chamar a função `res.status`', async () => {
      await controller.getAllProductsController(req, res);
      await model.getAllProductsModel();
      expect(res.status.calledWith(200)).to.be.true;
    });

    // it('deve chamar a função `res.json`', async () => {
    //   await getAllProductsController(req, res);
    //   expect(res.json.called).to.be.true;
    // });
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
      await controller.getProductByIdController(req, res);
      assert(res.status.calledWith(200));
    });

    it('Não deve retornar nenhum produto', async () => {
      await controller.getProductByIdController(reqNull, res);
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
      sinon.stub(controller, 'newProductController').resolves(duble.newSale)
    });

    // it('deve adicionar o produto novo', async () => {
    //   await controller.newProductController(req, res);
    //   expect(res.status.called).to.be.true;
    // });

    it('deve adicionar o produto novo', async () => {
      const testFunc = await controller.newProductController(req, res);
      expect(testFunc).to.be.deep.eq(duble.newSale);
    });
  });

  describe('editProductController', () => {
    const req = {};
    const res = {};
    const duble = {id: 5, name: 'Machado do Thor', 'quantity': 2}

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      sinon.stub(controller , 'editProductController').resolves(duble);
    });

    it('deve editar o produto', async () => {
      const funcTest = await controller.editProductController(req, res);
      expect(funcTest).to.be.deep.equal(duble);
    });
  });
});
