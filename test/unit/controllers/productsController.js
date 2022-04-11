const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../models/connection');

const products = require('../dubles/products');
const controller = require('../../../controllers/productsController');
const model = require('../../../models/productsModel');

describe.only('Products Controllers', () => {
  describe('getAllProductsController', () => {
    const req = {};
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      sinon.stub(connection, 'execute').resolves(products.allProducts)

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

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      sinon.stub(connection, 'execute').resolves([products.product]);
      sinon.stub(model, 'getProductByIdModel').resolves(products.product);

      console.log('id' ,model.getProductByIdModel);
    });

    after(() => {
      connection.execute.restore();
      model.getProductByIdModel.restore();
    })

    it('Se `res.status` é chamado', async () => {
      const teste = await controller.getProductByIdController(req, res);

      expect(res.status.called).to.be.true;
    });
  });

  describe('newProductController', () => {
    const req = {
      body : {
        name: 'Óculos do Homem de Ferro',
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
      expect(res.status.called).to.be.true;
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
