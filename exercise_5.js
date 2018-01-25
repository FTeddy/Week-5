
// 512 => 5 + totalDigitRekursif(12) => 5 + 7 + totalDigitRekursif(2)
// Number('') => 0
//

function totalDigitRekursif(angka) {
  var strNumber = String(angka);
  // base
  if (strNumber.length === 1){
    return Number(strNumber[0]);
  }
  // recursive
  return Number(strNumber[0]) + Number(totalDigitRekursif( Number(strNumber.slice(1)) ));
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
