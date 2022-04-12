const { expect } = require('chai');
const sinon = require('sinon');

const products = require('../dubles/products');
const controller = require('../../../controllers/products');
const services = require('../../../services/products');

describe('Products Controllers', () => {
  describe('1 - getAll', () => {
    const req = {};
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      sinon.stub(services, 'getAll').resolves(products.allProducts);
    });

    after(() => {
      services.getAll.restore();
    })

    it('Retorna `res.status(200)`', async () => {
      await controller.getAll(req, res);
      expect(res.status.calledWith(200)).to.be.true;
    });
  })

  describe('2 - getById', () => {
    const req = {
      params: { id: 1 }
    };
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      sinon.stub(services, 'getById').resolves(products.product);
    });

    after(() => {
      services.getById.restore();
    })

    it('Se `res.status` é chamado', async () => {
      await controller.getById(req, res);
      expect(res.status.called).to.be.true;
    });
  });

  describe('3 - create', () => {
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

      sinon.stub(services, 'getAll').resolves(products.allProducts);
      sinon.stub(services, 'create').resolves(products.oneProduct)
    });

    after(() => {
      services.getAll.restore();
      services.create.restore();
    })

    it('Retorna `res.status(201)`', async () => {
      await controller.create(req, res);
      expect(res.status.called).to.be.true;
    });
  });

  describe('4 - edit', () => {
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

      sinon.stub(services , 'edit').resolves(products.editProduc);
    });

    it('Retorna `res.status(200)', async () => {
      await controller.edit(req, res);
      expect(res.status.calledWith(200)).to.be.true;
    });
  });

  // describe('delete', () => {
  //   const req = {
  //     params: { id: 1 },
  //     body: {
  //       name: 'Machado de Odin',
  //       quantity: 2,
  //     }
  //   };
  //   const res = {};

  //   before(() => {
  //     res.status = sinon.stub().returns(res);
  //     res.json = sinon.stub();

  //     sinon.stub(services , 'deleteItem').resolves([]);
  //   });

  //   it('Retorna `res.status(200)', async () => {
  //     await controller.deleteItem(1);
  //     expect(res.status.calledWith(204)).to.be.true;
  //   });
  // });
});
