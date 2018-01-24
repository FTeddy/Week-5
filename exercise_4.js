function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  // you can only write your code here!
  var productSales = {}; // to contain purchase info
  var output = []; // to be filled with productSales

  // loop through listBarang[0] (item name)
  for (var barang=0; barang<listBarang.length; barang++){
    // reset productSales (with properties with 0 or temporary value) and bought
    productSales = {};
    productSales.product = 'nothing'; // shoppers[index].product , current product
    productSales.shoppers = []; // list containing buying shoppers
    productSales.leftOver = '0'; // item stock
    productSales.totalProfit = '0'; // total sold
    var bought = 0; // how many items are bought

    // set product name and stock
    productSales.product = listBarang[barang][0]; // 0, sepatu stacattu, current product
    productSales.leftOver = listBarang[barang][2]; // base stock of current items

    // loop through shoppers
    for (var shopIndex = 0; shopIndex < shoppers.length; shopIndex++) {

      if (shoppers[shopIndex].product === productSales.product){ // current shoppers is buying product
        // insert shopper name into productSales.shoppers
        productSales.shoppers.push(shoppers[shopIndex].name);

        // current product stock - buy amount... determine 'bought'
        // if buy amount >= stock, set stock to 0 and bought to buy amount - stock
        if (shoppers[shopIndex].amount >= productSales.leftOver){
          bought += (shoppers[shopIndex].amount - productSales.leftOver);
          productSales.leftOver = 0;
        } else { // else set bought to buy amount and reduce stock with buy amount
          bought += shoppers[shopIndex].amount;
          productSales.leftOver = productSales.leftOver - shoppers[shopIndex].amount;
        }
      }
    } // all shoppers bought / didn't buy the current item
    // determine totalProfit with bought and price
    productSales.totalProfit = bought * listBarang[barang][1];

    // productSales is filled, dump into output
    output.push(productSales);
  }
  return output;
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2},
                        {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3},
                        {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8},
                      {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10},
                      {name: 'Rani', product: 'Sweater Uniklooh', amount: 1},
                      {name: 'Devi', product: 'Baju Zoro', amount: 1},
                      {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]

console.log(countProfit([])); //[]
