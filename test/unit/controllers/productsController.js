const { expect } = require('chai');
const sinon = require('sinon');

const products = require('../dubles/products');

const controller = require('../../../controllers/productsController');
const model = require('../../../models/productsModel');

describe('Products Controllers', () => {
  describe('getAllProductsController', () => {
    const req = {};
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      sinon.stub(model, 'getAllProductsModel').resolves(products.allProducts);
    });

    after(() => {
      model.getAllProductsModel.restore();
    })

    it('Retorna `res.status(200)`', async () => {
      await controller.getAllProductsController(req, res);
      expect(res.status.calledWith(200)).to.be.true;
    });

    it('`res.json` é chamado', async () => {
      await controller.getAllProductsController(req, res);
      expect(res.json.called).to.be.true;
    });
  })

  describe('getProductByIdController', () => {
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

      sinon.stub(model, 'getProductByIdModel').resolves(1);
    });

    after(() => {
      model.getProductByIdModel.restore();
    })

    it('Retorna `res.status(200)`', async () => {
      await controller.getProductByIdController(req, res);
      expect(res.status.calledWith(200)).to.be.true;
    });

    it('Retorna `res.status(404)`', async () => {
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

      sinon.stub(model, 'getAllProductsModel').resolves(products.allProducts);
      sinon.stub(model, 'getProductByNameModel').resolves(products.oneProduct)
      sinon.stub(model, 'createNewProductModel').resolves(products.oneProduct)
    });

    it('Retorna `res.status(201)`', async () => {
      await controller.newProductController(req, res);
      expect(res.status.calledWith(201)).to.be.true;
    });
  });

  describe('editProductController', () => {
    const req = {
      params: { id: 1 },
      body: {
        name: 'Machado de Odin',
        quantity: 2,
      }
    };
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      sinon.stub(model , 'editProductModel').resolves(products.editProduc);
    });

    it('Retorna `res.status(200)', async () => {
      await controller.editProductController(req, res);
      expect(res.status.calledWith(200)).to.be.true;
    });
  });
});
