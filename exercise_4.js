// create var 'productSales' obj to contain purchase info
// create var 'ouput' array to be filled with productSales

// loop through listBarang[0] (item name)
  // reset productSales (with properties with 0 or temporary value) and bought
    // shoppers[index].product , current 'product' as property
    // list containing buying shoppers as property
    // item stock, leftOver as property
    // total sold totalProfit as property
    // var 'bought' how many items are bought

    // set product name and stock
      // set product property as the item name, current product
      // set leftOver property as base stock of current items
    // loop through shoppers
      // if current shoppers is buying product
      // current product stock - buy amount... determine 'bought'
      // if buy amount <= stock,
        // insert shopper name into productSales.shoppers
        // set bought to buy amount and reduce stock with buy amount
    // all shoppers bought / didn't buy the current item

    // determine totalProfit with bought and price
    // productSales is filled, dump into output
// return output



function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];


  var productSales = {};
  var output = [];

  for (var barang=0; barang<listBarang.length; barang++){
    productSales = {};
    productSales.product = 'nothing';
    productSales.shoppers = [];
    productSales.leftOver = '0';
    productSales.totalProfit = '0';
    var bought = 0;

    productSales.product = listBarang[barang][0];
    productSales.leftOver = listBarang[barang][2];

    for (var shopIndex = 0; shopIndex < shoppers.length; shopIndex++) {
      if (shoppers[shopIndex].product === productSales.product){


        if (shoppers[shopIndex].amount <= productSales.leftOver){
          // buying
          productSales.shoppers.push(shoppers[shopIndex].name); // buyer name
          bought += shoppers[shopIndex].amount;
          productSales.leftOver = productSales.leftOver - shoppers[shopIndex].amount;
          // bought += (shoppers[shopIndex].amount - productSales.leftOver);
          // productSales.leftOver = 0;
        } else {

        }
      }
    }

    productSales.totalProfit = bought * listBarang[barang][1];
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
