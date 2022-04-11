module.exports = {
  allSales: [
    { saleId: 1, productId: 2, quantity: 10, date: '2020/12/11' },
    { saleId: 2, productId: 3, quantity: 5, date: '2020/12/15' },
    { saleId: 3, productId: 1, quantity: 2, date: '2020/12/27' },
  ],

  saleSolo: [{ date:'2021/11/12', productId:2, quantity:5 }],

  newSale: {
    id: 5,
    itemsSold: [
      {
        productId: 2,
        quantity: 10,
      }
    ],
  },

  idSales: 1
}
