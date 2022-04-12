const { expect } = require('chai');
const sinon = require('sinon');

const services = require('../../../services/products');
const model = require('../../../models/products');
const mochaProducts = require('../dubles/products');

describe('Services Products', () => {
  describe('1 - getAll', () => {
    before(() => {
      sinon.stub(model, 'getAll').resolves([mochaProducts.allProducts])
    });
    after(() => {
      model.getAll.restore();
    });

    it('Retorna todos os produtos', async () => {
      const service =  await services.getAll();
      expect(service).to.be.deep.equal(mochaProducts.allProducts)
    })
  })

  describe('2 - getById', () => {
    before(() => {
      sinon.stub(model, 'getById').resolves(mochaProducts.product)
    });
    after(() => {
      model.getById.restore();
    });

    it('Retorna todos o produto com o id buscado', async () => {
      const service =  await services.getById(1);
      expect(service).to.be.deep.equal(mochaProducts.product)
    })
  })

  describe('3 - getByName', () => {
    describe('nome válido', () => {
      before(() => {
        sinon.stub(model, 'getByName').resolves(mochaProducts.product)
      });
      after(() => {
        model.getByName.restore();
      });
  
      it('Retorno de um novo nome - cria novo produto', async () => {
        const service =  await services.getByName(mochaProducts.newName);
        expect(service).to.be.deep.equal(mochaProducts.product)
      })
    })

    describe('nome inválido', () => {
      before(() => {
        sinon.stub(model, 'getByName').resolves([])
      });
      after(() => {
        model.getByName.restore();
      });
  
      it('Retorna de um nome já existente - produto não é criado', async () => {
        const service =  await services.getByName(mochaProducts.existName);
        expect(service).to.be.deep.equal([])
      })
    })
  })

  describe('4 - create', () => {
    describe('Produto é criado', () => {
      before(() => {
        sinon.stub(model, 'create').resolves([])
      });
      after(() => {
        model.create.restore();
      });
  
      it('Produto é criado', async () => {
        const { name, quantity } = mochaProducts.inserProduct;
        const service =  await services.create(name, quantity);
        expect(service).to.be.deep.equal([])
      })
    })

    describe('Produto não é criado', () => {
      before(() => {
        sinon.stub(model, 'create').resolves(mochaProducts.product)
      });
      after(() => {
        model.create.restore();
      });
  
      it('Produto é criado', async () => {
        const service =  await services.create(mochaProducts.newName, 5);
        expect(service).to.be.deep.equal(mochaProducts.product)
      })
    })
  })

  describe('5 - edit', () => {
    before(() => {
      sinon.stub(model, 'edit').resolves(mochaProducts.productSolo)
    });
    after(() => {
      model.edit.restore();
    });

    it('Produto é criado', async () => {
      const { id, name, quantity } = mochaProducts.product;
      const service =  await services.edit(id, name, quantity);
      expect(service).to.be.deep.equal(mochaProducts.productSolo)
    })
  })

  describe('6 - deleteItem', () => {
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
});
