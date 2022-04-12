const { expect } = require('chai');
const sinon = require('sinon');

const sales = require('../dubles/sales');
const controller = require('../../../controllers/sales');
const services = require('../../../services/sales');

describe('Sales Controllers', () => {
  describe('1 - getAll', () => {
    const req = {};
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      sinon.stub(services, 'getAll').resolves(sales.allSales);
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
    const req = { params: { id: 1 } };
    const res = {};

    before(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      sinon.stub(services, 'getById').resolves(sales.sale);
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

      sinon.stub(services, 'getAll').resolves(sales.allSales);
      sinon.stub(services, 'create').resolves(sales.allSales)
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

  // describe('edit', () => {
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

  //     sinon.stub(services , 'deleteItem').resolves(products.editProduc);
  //   });

  //   it('Retorna `res.status(200)', async () => {
  //     await controller.edit(req, res);
  //     expect(res.status.calledWith(200)).to.be.true;
  //   });
  // });
});
