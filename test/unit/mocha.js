module.exports = {
  produtosDuble: [
    { id: 1, 'name': 'Martelo de Thor', 'quantity': 10 },
    { id: 2, 'name': 'Traje de encolhimento', 'quantity': 20 },
    { id: 3, 'name': 'Escudo do Capitão América', 'quantity': 30 }, 
  ],

  oneProduct: [{ name: 'Óculos do Homem de Ferro', quantity: 2 }],
  id: { id: 1, name: 'Martelo de Thor', quantity: 10 },
  newProduct: { id: 3, name: 'Escudo do Capitão Triste', quantity: 1 },
  productsolo: { id: 1, 'name': 'Martelo de Thor', 'quantity': 10 },

  saleSolo: [{ date:'2021/11/12', productId:2, quantity:5 }],
  newSale: {
    id: 5,
    itemsSold: {
      name: 'Martelo de Thor', quantity: 10
    }
  }
}
