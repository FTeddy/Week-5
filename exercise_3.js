// create a var 'itemList' array to contain the predefined item and price, sorted by price from high to low
// contain the 'costumer data' as an obj
  // with property memberId set to input 'memberId',
  // property money to input 'money',
  // property listPurchased as an empty array,
  // property changeMoney to input 'money'
// check member id if it contains a falsy value
  // return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  // else it has value
  // check money if smaller than 50000
    // return 'Mohon maaf, uang tidak cukup' when smaller than 50000
    // else start buying
    // loop through itemList => price from index 0 (money check)
      // if money >= current price, then buy the current item
        // count remaining money
        // add the current item to purchased list
// return the constumer data

function shoppingTime(memberId, money) {
  var itemList =  [ {item:'Stacattu', price: 1500000},
                    {item:'Baju Zoro', price: 500000},
                    {item:'Baju H&N', price: 250000},
                    {item:'Sweater Uniklooh', price: 175000},
                    {item:'Casing Handphone', price: 50000}
                  ];
  // console.log(itemList);

  var costumerData =  {
                        memberId : memberId,
                        money : money,
                        listPurchased : [],
                        changeMoney : money
                      }
  // console.log(costumerData);

  if (!memberId){
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  } else {
    if (money < 50000){
      return 'Mohon maaf, uang tidak cukup';
    } else {
      for (var i = 0; i < itemList.length; i++) {
        if(money >= itemList[i].price){
          costumerData.changeMoney -= itemList[i].price;
          costumerData.listPurchased.push(itemList[i].item);
        }
      }
    }
  }
  // console.log(costumerData);
  return costumerData;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
