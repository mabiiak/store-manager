const { expect } = require('chai');
const sinon = require('sinon');

const services = require('../../../services/sales');
const model = require('../../../models/sales');
const mochaSales = require('../dubles/sales');

describe('validate Sales', () => {
  describe('1 - getAll', () => {
    before(() => {
      sinon.stub(model, 'getAll').resolves(mochaSales.allSales)
    });
    after(() => {
      model.getAll.restore();
    });

    it('Retorna todos os produtos', async () => {
      const service =  await services.getAll();
      expect(service).to.be.deep.equal(mochaSales.allSales)
    })
  })

  describe('2 - getById', () => {
    before(() => {
      sinon.stub(model, 'getById').resolves(mochaSales.sale)
    });
    after(() => {
      model.getById.restore();
    });

    it('Retorna todos o produto com o id buscado', async () => {
      const service =  await services.getById(1);
      expect(service).to.be.deep.equal(mochaSales.sale)
    })
  })

  describe('3 - create', () => {
    before(() => {
      sinon.stub(model, 'create').resolves([])
    });
    after(() => {
      model.create.restore();
    });

    it('Produto é criado', async () => {
      const service =  await services.create(mochaSales.newSale);
      expect(service).to.be.deep.equal([])
    })
  })

  describe('4 - deleteItem', () => {
    before(() => {
      sinon.stub(model, 'deleteItem').resolves([])
    });
    after(() => {
      model.deleteItem.restore();
    });

    it('Produto é criado', async () => {
      const service =  await services.deleteItem(1);
      expect(service).to.be.deep.equal([])
    })
  })

  describe('5 - find', () => {
    before(() => {
      sinon.stub(model, 'find').resolves(mochaSales.sale)
    });
    after(() => {
      model.find.restore();
    });

    it('Retorna todos o produto com o id buscado', async () => {
      const service =  await services.find(2);
      expect(service).to.be.deep.equal(mochaSales.sale)
    })
  })
})
